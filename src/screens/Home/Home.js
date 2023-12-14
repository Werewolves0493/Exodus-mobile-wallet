import React, { useEffect, useContext } from "react";
import { 
  Image
} from "react-native";
import { DataContext } from "../../context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { SlideInRight, Layout } from 'react-native-reanimated';
import { PageContainer } from "../../components/PageContainer";
import { ActionContainer, OnBoardingTitle, ViewColCenter } from "../../components/CommonComponents";
import { ActiveButton, DeactiveButton } from "../../components/Buttons";
import { WALLET_KEY } from "../../config/config";
import styled from 'shakl';

const ButtonWrap = ViewColCenter.extend({
  marginTop:20
})


const Home = ({ navigation }) => {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    const getWalletAddy = async () => {
      const walletAddy = await AsyncStorage.getItem(WALLET_KEY);
      console.log(walletAddy);
      setData(walletAddy);
    }
    getWalletAddy().catch(console.error);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onPressGetStarted = () => {
    navigation.navigate("Onboarding");
  }

  const goToWallet = () => {
    navigation.navigate("Wallet");
  }

  return (
    <PageContainer
      isHome={true}
    >
      <ActionContainer>
        <ViewColCenter>
          <Image 
            source={require("../../assets/images/Home/logo.png")}
            style={{
              width:250,
              height:250
            }}
            />
        </ViewColCenter>
        <Animated.View entering={SlideInRight} layout={Layout.duration(600)}>
          <OnBoardingTitle>Secure & Easy to Use Crypto Wallet</OnBoardingTitle>
        </Animated.View>
        <ButtonWrap>
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
                onPress={goToWallet}
                title={"I already have a wallet"}
              /> :
              <DeactiveButton
                title={"I already have a wallet"}
              />
            }
          </Animated.View>
        </ButtonWrap>
      </ActionContainer>
    </PageContainer>
  );
};

export default Home;
