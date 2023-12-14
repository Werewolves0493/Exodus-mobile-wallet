import React from "react";
import { Image } from "react-native";
import { PageTitle, ViewColCenter } from "./CommonComponents";
import { GradientButton } from "./Buttons";
import styled from 'shakl';

import { windowHeight } from "../config/config";

const ScreenContainer = styled.View({
  backgroundColor:'#1F2033',
  height: windowHeight,
  paddingTop: 150
})
const ButtonWrap = styled.View({
  marginTop: 100
})

const CreateWalletFirstScreen = ({ createFunc }) => {

    const onPressCreateButton = () => {
        createFunc();
    }

    return (
      <ScreenContainer>
        <ViewColCenter>
          <Image 
            source={require("../assets/images/Home/Final_logo.png")}
            style={{
              width:100,
              height:95
            }}
          />
          <PageTitle>
            Secure & Easy to Use Crypto Wallet
          </PageTitle>
          <ButtonWrap>
            <GradientButton
                onPress={onPressCreateButton}
                title={"CREATE WALLET"}
            />
          </ButtonWrap>
        </ViewColCenter>
          
      </ScreenContainer>
    );
}

export default CreateWalletFirstScreen