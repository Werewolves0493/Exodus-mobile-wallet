import React from "react";
import styled from 'shakl';
import { PageTitle, ViewColCenter, CommonText } from "./CommonComponents";
import { GradientButton } from "./Buttons";
import { windowHeight } from "../config/config";

const ScreenContainer = styled.View({
  backgroundColor:'#252841',
  height: windowHeight,
  paddingTop: 50
})
const ButtonWrap = styled.View({
  marginTop: 30
})
const DescriptionText = CommonText.extend({
  fontSize: 17,
  lineHeight: 20,
  marginHorizontal: 30,
  opacity: .7,
  marginBottom: 20
});
const PhraseWordText = styled.Text({
  fontSize: 15,
  color: '#FFFFFF',
  marginHorizontal: 5,
  marginVertical: 10,
  paddingVertical:10,
  width:"20%",
  textAlign: "center",
  backgroundColor:'#23243c',
  borderRadius:5
});
const WordLine = styled.View({
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"row",
  marginVertical: 10,
  justifyContent:"space-evenly"
})

const MnemonicScreen = ({ words, goTo }) => {

    const onPressCreateButton = () => {
        goTo();
    }

    return (
      <ScreenContainer>
        <ViewColCenter>
          <PageTitle>
            Write Down Your 12-Word Phrase
          </PageTitle>
          <DescriptionText>
            Your 12-word recovery phrase allows you to recover your wallet in case you ever lose access to it. Write down the words in the correct order from 1 to 12 and store them somewhere safe.
            Anymore with your recovery phrase can spend your funds. Do not Show it to anyone!
          </DescriptionText>
          <WordLine>
            {
              words.map((w, idx) => {
                return (
                  <PhraseWordText key={idx}>{w}</PhraseWordText>
                )
              })
            }
          </WordLine>
          <ButtonWrap>
            <GradientButton
                onPress={onPressCreateButton}
                title={"Next"}
            />
          </ButtonWrap>
        </ViewColCenter>
          
      </ScreenContainer>
    );
}

export default MnemonicScreen