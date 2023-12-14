import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import ProfileSvg from "../assets/images/Bottom/Profile.svg";
import WalletSvg from "../assets/images/Bottom/Wallet.svg";
import ExchangeSvg from "../assets/images/Bottom/Exchange.svg";
import styled from 'shakl';

const BottomButtonsContainer = styled.View({
  height: 80,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  width: "100%",
  paddingBottom: 15,
  backgroundColor: "#192031",
  shadowColor: '#ffffff',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 2,  
  elevation: 5
})
const BottomBannerSection = styled.View({
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-start",
})
const BottomBannerButton = styled.Touchable({
  height: 35,
  width: 60,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const BottomButtons = ({}) => {

  return (
    <BottomButtonsContainer>
      <BottomBannerSection>
        <BottomBannerButton>
          <WalletSvg/>
        </BottomBannerButton>
      </BottomBannerSection>
      <BottomBannerSection>
        <BottomBannerButton>
          <ExchangeSvg/>
        </BottomBannerButton>
      </BottomBannerSection>
      <BottomBannerSection>
        <BottomBannerButton>
          <ProfileSvg/>
        </BottomBannerButton>
      </BottomBannerSection>
    </BottomButtonsContainer>
  );
};

const styles = StyleSheet.create({
  bottomBanner: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: 15,
  },
  bottomBannerSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  notActive: {
    opacity: 0.5,
  },
  bottomBannerText: {
    color: "#fff",
    bottom: 10,
    fontSize: 10,
    fontWeight: "600",
  },
  addButton: {
    borderRadius: 8,
    height: 35,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // bottom: 12,
  },
  bottomBannerButton: {
    height: 35,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // bottom: 12,
  },
});

export default BottomButtons;

