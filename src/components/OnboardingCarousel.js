import React, { useRef, useState, useContext } from 'react';
import { Image } from "react-native";
import {
    CommonText,
    ActionContainer,
    OnBoardingTitle,
    ViewColCenter
} from "./CommonComponents";
import { DataContext } from '../context';
import Animated, { SlideInRight, SlideInUp, Layout } from 'react-native-reanimated';
import { ActiveButton, DeactiveButton } from "./Buttons";
import styled from 'shakl';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { windowWidth, windowHeight } from '../config/config';

const CarouselControls = styled.View({ flex: 1 });
const CarouselItem = styled.View({
    width: '100%',
    height: '100%'
});
const CarouselPagination = styled.View({
    position: 'absolute',
    bottom: 0,
    left: (windowWidth - 210) / 2
});
const NextButton = styled.Touchable({
    flex: 1,
    opacity: .8
}).withChild(CommonText.extend({
    fontSize: 24,
    lineHeight: 29
}));
const SkipButton = styled.Touchable({
    flex: 1
}).withChild(CommonText.extend({
    fontSize: 13,
    lineHeight: 16,
    opacity: .5
}));
const NextButtonContainer = ViewColCenter.extend({
    position: 'absolute',
    bottom: 60,
    left: (windowWidth - 50) / 2
});
const SkipButtonContainer = ViewColCenter.extend({
    position: 'absolute',
    bottom: 25,
    right: 50
});
const CarouselText = CommonText.extend({
    fontSize: 17,
    lineHeight: 20,
    marginHorizontal: 30,
    opacity: .5
})
const ButtonGroupContainer = ViewColCenter.extend({
    position: 'absolute',
    bottom: 0,
    left: 60
})

const carouselItems = [
    {
        title: "Receive",
        text: "Receive crypto by scanning or sharing your unique QR code or address",
        image: require("../assets/images/Onboarding/receive.png"),
    },
    {
        title: "Send",
        text: "Send crypto in a few taps by scanning a QR code or pasting an address",
        image: require("../assets/images/Onboarding/send.png")
    },
    {
        title: "Exchange",
        text: "Instantly swap your crypto 75+ other assets securely from your wallet",
        image: require("../assets/images/Onboarding/exchange.png")
    },
    {
        title: "Control Your Wealth",
        text: "Funds are under your control and your privacy is protected, no account required",
        image: require("../assets/images/Onboarding/control.png")
    },
];

const OnboardingCarousel = ({ goToCreateWallet, goToWallet }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const { data } = useContext(DataContext);
    const carouselRef = useRef('')

    const onPressGetStarted = () => {
        goToCreateWallet();
    }

    const onPressAlreadyWallet = () => {
        goToWallet();
    }

    const _renderItem = ({ item, index }) => {
        return (
            <CarouselItem>
                <Animated.View entering={SlideInRight} layout={Layout.duration(600)}>
                    <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{
                            width: windowWidth,
                            height: windowHeight - 230
                        }}
                    />
                </Animated.View>
                <ActionContainer>
                    <Animated.View entering={SlideInRight} layout={Layout.duration(600).delay(100)}>
                        <OnBoardingTitle>{item.title}</OnBoardingTitle>
                    </Animated.View>
                    <Animated.View entering={SlideInRight} layout={Layout.duration(600).delay(200)}>
                        <CarouselText>{item.text}</CarouselText>
                    </Animated.View>
                </ActionContainer>
            </CarouselItem>
        )
    }

    return (
        <>
            <Carousel
                ref={carouselRef}
                data={carouselItems}
                layoutCardOffset={50}
                inactiveSlideOpacity={1}
                renderItem={_renderItem}
                sliderHeight={windowHeight}
                itemHeight={windowHeight}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                onSnapToItem={index => setActiveIndex(index)}
            />
            {activeIndex !== 3 ?
                <CarouselControls>
                    <NextButtonContainer>
                        <Animated.View entering={SlideInRight} layout={Layout.duration(600).delay(300)}>
                            <NextButton
                                onPress={() =>
                                    carouselRef.current.snapToNext()
                                }
                            >
                                Next
                            </NextButton>
                        </Animated.View>
                    </NextButtonContainer>
                    <Animated.View entering={SlideInUp} layout={Layout.duration(600).delay(300)}>
                        <CarouselPagination>
                            <Pagination
                                dotsLength={4}
                                activeDotIndex={activeIndex}
                                carouselRef={carouselRef}
                                dotStyle={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    marginHorizontal: 8,
                                    backgroundColor: '#ffffff',
                                }}
                                tappableDots={true}
                                inactiveDotStyle={{
                                    backgroundColor: '#ffffff',
                                    opacity: .2
                                }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
                        </CarouselPagination>
                        <SkipButtonContainer>
                            <SkipButton
                                onPress={() => carouselRef.current.snapToItem(3)}
                            >
                                SKIP
                            </SkipButton>
                        </SkipButtonContainer>

                    </Animated.View>
                </CarouselControls>
                :
                <ButtonGroupContainer>
                    <Animated.View entering={SlideInRight} layout={Layout.duration(600).delay(100)}>
                        <ActiveButton
                            onPress={onPressGetStarted}
                            title={"GET STARTED"}
                        />
                    </Animated.View>
                    <Animated.View entering={SlideInRight} layout={Layout.duration(600).delay(200)}>
                        {
                            data ?
                                <ActiveButton
                                    onPress={onPressAlreadyWallet}
                                    title={"I already have a wallet"}
                                /> :
                                <DeactiveButton
                                    title={"I already have a wallet"}
                                />
                        }
                    </Animated.View>
                </ButtonGroupContainer>
            }

        </>
    );
}

export default OnboardingCarousel