import React from "react";
import { 
  View,
  SafeAreaView
} from "react-native";
import BottomButtons from "../../components/BottomButtons";
import { ViewColCenter } from "../../components/CommonComponents";
import EtherSvg from "../../assets/images/Wallet/eth_logo.svg";
import SendSvg from "../../assets/images/Wallet/Send.svg";
import ReceiveSvg from "../../assets/images/Wallet/Receive.svg";
import styled from 'shakl';

const LeftIconWrap = styled.View({
  position: "absolute",
  left:0,
  top: 30,
  width:45,
  height: 45,
  backgroundColor:'white',
  borderTopRightRadius:30,
  borderBottomRightRadius:30,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  paddingRight:8
})
const RightIconWrap = styled.View({
  position: "absolute",
  right:0,
  top: 30,
  width:45,
  height: 45,
  backgroundColor:'#364160',
  borderTopLeftRadius:30,
  borderBottomLeftRadius:30,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  paddingLeft:8
})
const WalletInfoWrap = styled.View({
  marginTop: 100
})
const WalletInfoTextWrap = styled.View({
  flexDirection: "row",
  width: 80,
  justifyContent: "space-between",
  alignItems: "baseline"
})
const TokenText = styled.Text({
  color: '#6c78d2'
})
const PriceText = styled.Text({
  color: '#dfe0e3',
  fontSize: 20,
  textAlign: "center"
})
const TokenValueText = TokenText.extend({
  fontSize: 55
})
const TokenUnitText = TokenText.extend({
  fontSize: 20
})
const TokenIconWrap = styled.View({
  width: 100,
  height: 100,
  borderWidth:1,
  borderRadius:50,
  borderColor: '#dfe0e3'
})


const Wallet = () => {

  return (
    <SafeAreaView
      style={{
        marginBottom: "5%",
        height: "100%",
        width: "100%",
        backgroundColor:'#1d2236',
      }}
    >
      <LeftIconWrap>
        <SendSvg/>
      </LeftIconWrap>
      <RightIconWrap>
        <ReceiveSvg/>
      </RightIconWrap>
      <ViewColCenter>
        <WalletInfoWrap>
          <TokenIconWrap>
            <EtherSvg
              width={100}
              height={100}
            />
          </TokenIconWrap>
          <WalletInfoTextWrap>
            <TokenValueText>0</TokenValueText>
            <TokenUnitText>ETH</TokenUnitText>
          </WalletInfoTextWrap>
          <View>
            <PriceText>$0.00</PriceText>
          </View>
        </WalletInfoWrap>
      </ViewColCenter>
      <BottomButtons/>
    </SafeAreaView>
  );
};

export default Wallet;
