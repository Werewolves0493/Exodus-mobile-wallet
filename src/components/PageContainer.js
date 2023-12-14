import React, { useEffect } from "react";
import { 
  ImageBackground, 
  SafeAreaView, 
  View
} from "react-native";
import Animated, { withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import LinearGradient from "react-native-linear-gradient";
import styled from 'shakl';
import OnboardingFooterSvg from "../assets/images/Home/onboarding-footer.svg";
import {windowWidth, windowHeight} from "../config/config";
const MaskContainer = styled.View({width: windowWidth});
const MDContainer = styled.View({position: "absolute", right: 0, top:windowHeight - 443, width: windowWidth});

export const PageContainer = ({children, isHome}) => {
  const maskImage = require('../assets/images/Onboarding/mask.png');

  const offset = useSharedValue(1.1);
  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{scaleX: withSpring(offset.value, {
        damping: 80,
        stiffness: 5,
      })}, {scaleY: withSpring(offset.value, {
        damping: 80,
        stiffness: 5,
      })}],
    };
  });

  const DefaultBack = () => {
    return (
      <>
        <MDContainer>
          <OnboardingFooterSvg width={windowWidth + 3}/>
        </MDContainer>
        {children}
      </>
    )
  }

  useEffect(() => {
    offset.value = 1
  }, []);

  return (
    <SafeAreaView>
      <MaskContainer>
        {
          isHome ?
          <View>
            <Animated.View style={[customSpringStyles]}>
              <ImageBackground source={maskImage} style={{width:windowWidth, height:windowHeight}}>
              </ImageBackground>
            </Animated.View>
            <DefaultBack/>
          </View>
          : 
          <LinearGradient
            useAngle={true}
            angle={135}
            colors={
              ["#3D3F59", "#1F2033"]
            }
          >
            <DefaultBack/>
        </LinearGradient>
        }
      </MaskContainer>
    </SafeAreaView>
  );
};



