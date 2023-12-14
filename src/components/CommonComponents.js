import {
    Dimensions
} from "react-native";
import styled from 'shakl'

const windowWidth = Dimensions.get('window').width;

export const CommonText = styled.Text({
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "SFProDisplay-Regular"
})

export const ActionContainer = styled.View({
    position: "absolute",
    bottom: 150,
    width: windowWidth
});

export const ViewColCenter = styled.View({
    flexDirection: "column",
    alignItems: "center"
});

export const OnBoardingTitle = CommonText.extend({
    marginBottom: 10,
    fontSize: 30,
    paddingHorizontal: 50,
});

export const PageTitle = CommonText.extend({
    marginVertical: 10,
    fontSize: 27,
    paddingHorizontal: 50,
});