import { Platform, Dimensions } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const API_URL = Platform.OS === 'ios' ? '' : '';
export const WALLET_KEY = "Exodus2022";