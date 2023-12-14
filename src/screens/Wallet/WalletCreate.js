import React, { useEffect, useState } from "react";
import { 
  SafeAreaView
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from "../../components/Loading";
import CreateWalletFirstScreen from './../../components/CreateWalletFirstScreen';
import MnemonicScreen from "../../components/MnemonicScreen";
import 'react-native-get-random-values'
import '@ethersproject/shims'
import { ethers } from 'ethers'
import { WALLET_KEY } from "../../config/config";

const WalletCreate = ({ navigation }) => {

  const [phraseArray, setPhraseArray] = useState([]);
  const [walletAddy, setWalletAddy] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!walletAddy) return;
    const saveWalletAddy = async () =>{
      try {
        await AsyncStorage.setItem(
          WALLET_KEY,
          walletAddy
        );
      } catch (error) {
        console.log(error);
      }
    }
    saveWalletAddy()
      .catch(console.error);
  }, [walletAddy]);  

  const goTowalletScreen = () => {
    navigation.navigate("Wallet");
  }

  const walletCreate = () => {
    setIsLoading(true);
    setTimeout(() => {
      const wallet = ethers.Wallet.createRandom();
      const phrase = wallet.mnemonic.phrase;
      setPhraseArray(phrase.split(" "));
      setWalletAddy(wallet.address);
      setIsLoading(false);
    }, 2000);
  }

  return (
    <SafeAreaView>
      {
      walletAddy ? 
        <MnemonicScreen
          words={phraseArray}
          goTo={goTowalletScreen}
        /> :
        <CreateWalletFirstScreen
          createFunc={walletCreate}
        />
      }
      {isLoading && <Loading/>}
    </SafeAreaView>
  );
};

export default WalletCreate;
