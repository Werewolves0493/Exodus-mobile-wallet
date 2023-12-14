import React from "react";
import {
  Dimensions
} from "react-native";
import styled from 'shakl'
import * as Progress from "react-native-progress";

const windowWidth = Dimensions.get('window').width;
const windwoHeight = Dimensions.get('window').height;

const LoadingPageContainer = styled.View({
  width: windowWidth,
  height: windwoHeight,
  backgroundColor:"#000000",
  opacity:.4,
  position: "absolute"
})

export const Loading = ({ size = 50 }) => {
  return (
    <LoadingPageContainer>
      <Progress.Circle
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width:50,
          transform: [{ translateX: -25 }, { translateY: -25 }],
        }}
        color={"#FFFFFF"}
        borderWidth={3}
        indeterminate
        size={size}
      />
    </LoadingPageContainer>
  );
};
