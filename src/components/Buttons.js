import React from "react";
import { 
    Dimensions, 
    StyleSheet
  } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from 'shakl'
const windowWidth = Dimensions.get('window').width;
const AButtonText = styled.Text({fontFamily:"SFProDisplay-Regular", color:"#ffffff", fontSize:14, lineHeight:20, textAlign:"center"});
const AButton = styled.Touchable({width: windowWidth - 120, marginHorizontal:"auto", marginBottom:8});
const DButtonText = AButtonText.extend({opacity:.5})
const DButton = AButton.extend().attrs({disabled:true});

export const ActiveButton = ({title, onPress}) => {
    return (
        <AButton onPress={onPress}>
            <LinearGradient
                style={styles.activeButton}
                useAngle={true}
                angle={90}
                colors={
                ["rgba(31, 33, 51, 0.5)", "#1E2033"]
                }
            >
                <AButtonText>{title}</AButtonText>
            </LinearGradient>
        </AButton>
    );
};

export const DeactiveButton = ({title}) => {
    return (
        <DButton>
            <LinearGradient
                style={styles.deactiveButton}
                useAngle={true}
                angle={90}
                colors={
                ["rgba(31, 33, 51, 0.5)", "#1E2033"]
                }
            >
                <DButtonText>{title}</DButtonText>
            </LinearGradient>
        </DButton>
    );
};

export const GradientButton = ({title, onPress}) => {
    return (
        <AButton onPress={onPress}>
            <LinearGradient
                style={styles.activeButton}
                useAngle={true}
                angle={90}
                colors={
                ["#420BE5", "#A16BB2"]
                }
            >
                <AButtonText>{title}</AButtonText>
            </LinearGradient>
        </AButton>
    );
};

const styles = StyleSheet.create({
    activeButton: {
        padding: 15,
        marginBottom: 5,
        borderRadius: 27
    },
     deactiveButton: {
        padding: 15,
        marginBottom: 5,
        borderRadius: 27,
        opacity: .3
    }
});

