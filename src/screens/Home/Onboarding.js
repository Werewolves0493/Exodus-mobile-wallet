import React from "react";
import { PageContainer } from "../../components/PageContainer";
import OnboardingCarousel from "../../components/OnboardingCarousel";


const Onboarding = ({navigation}) => {

  const walletCreateNativgate = () => {
    navigation.navigate("WalletCreate");
  }

  const WalletNavigate = () => {
    navigation.navigate("Wallet");
  }

  return (
    <PageContainer isHome={false}>
      <OnboardingCarousel
        goToCreateWallet = {walletCreateNativgate}
        goToWallet={WalletNavigate}
      />
    </PageContainer>
  );
};

export default Onboarding;