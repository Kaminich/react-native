import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";

const NumberPad2 = () => {
  return (
    <View style={styles.numberPad}>
      <View style={styles.keyParent}>
        <View style={styles.keyShadowBox}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={[styles.label, styles.labelTypo]}>ABC</Text>
          <Text style={[styles.letter, styles.letterTypo]}>1</Text>
        </View>
        <View style={[styles.key, styles.keyShadowBox]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={styles.labelTypo}>ABC</Text>
          <Text style={[styles.letter1, styles.letterTypo]}>2</Text>
        </View>
        <View style={[styles.key, styles.keyShadowBox]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={styles.labelTypo}>DEF</Text>
          <Text style={[styles.letter1, styles.letterTypo]}>3</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={styles.labelTypo}>GHI</Text>
          <Text style={[styles.letter1, styles.letterTypo]}>4</Text>
        </View>
        <View style={[styles.key, styles.keyShadowBox]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={styles.labelTypo}>JKL</Text>
          <Text style={[styles.letter1, styles.letterTypo]}>5</Text>
        </View>
        <View style={[styles.key, styles.keyShadowBox]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={styles.labelTypo}>MNO</Text>
          <Text style={[styles.letter1, styles.letterTypo]}>6</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={styles.labelTypo}>PQRS</Text>
          <Text style={[styles.letter1, styles.letterTypo]}>7</Text>
        </View>
        <View style={[styles.key, styles.keyShadowBox]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={styles.labelTypo}>TUV</Text>
          <Text style={[styles.letter1, styles.letterTypo]}>8</Text>
        </View>
        <View style={[styles.key, styles.keyShadowBox]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={styles.labelTypo}>WXYZ</Text>
          <Text style={[styles.letter1, styles.letterTypo]}>9</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={[styles.letter9, styles.letterPosition]}>*</Text>
        </View>
        <View style={[styles.key, styles.keyShadowBox]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={[styles.letter10, styles.letterPosition]}>0</Text>
        </View>
        <View style={[styles.key, styles.keyShadowBox]}>
          <View style={styles.keycontainerShadowBox} />
          <Text style={[styles.letter10, styles.letterPosition]}>#</Text>
        </View>
        <Image
          style={styles.iconButton}
          resizeMode="cover"
          source={require("../../assets/icon-button2.png")}
        />
      </View>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.defaultRegularCallout,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    left: 0,
    top: "61.83%",
    height: "28.5%",
    position: "absolute",
    width: 90,
  },
  letterTypo: {
    height: 26,
    display: "flex",
    fontFamily: FontFamily.defaultRegularTitle2,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    top: "50%",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    left: 0,
    position: "absolute",
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  keyShadowBox: {
    overflow: "hidden",
    height: 60,
    width: 90,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: Color.textWhite,
    borderRadius: Border.br_21xl,
  },
  letterPosition: {
    display: "flex",
    fontFamily: FontFamily.defaultRegularTitle2,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    left: 0,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  keycontainerShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  label: {
    display: "none",
  },
  letter: {
    marginTop: -13,
  },
  letter1: {
    marginTop: -21,
  },
  key: {
    marginLeft: 24,
  },
  letter9: {
    marginTop: -4,
    fontSize: FontSize.size_13xl,
    lineHeight: 30,
    display: "flex",
    fontFamily: FontFamily.defaultRegularTitle2,
    letterSpacing: 0,
    top: "50%",
  },
  letter10: {
    marginTop: -15,
    fontSize: FontSize.size_6xl,
    display: "flex",
    fontFamily: FontFamily.defaultRegularTitle2,
    letterSpacing: 0,
    top: "50%",
  },
  iconButton: {
    borderRadius: Border.br_17xl,
    width: 72,
    height: 72,
  },
  keyParent: {
    gap: 6,
    alignSelf: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeindicator: {
    height: 34,
    width: 375,
  },
  numberPad: {
    backgroundColor: Color.tagGray100,
    paddingTop: Padding.p_base,
    width: 375,
  },
});

export default NumberPad2;
