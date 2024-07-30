import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../../GlobalStyles";

export const IncomingBottom = () => {
  return (
    <View style={styles.property1incomingCall}>
      <View style={styles.iconContainerParent}>
        <Image
          style={[styles.iconContainer, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../../assets/icon-container6.png")}
        />
        <Image
          style={{ height: 85, width: 85 }}
          resizeMode="cover"
          source={require("../../assets/icon-container7.png")}
        />
      </View>
      <View style={[styles.homeindicator, styles.homeindicatorLayout]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

export const IncallBottom = () => {
  return (
    <View style={[styles.property1inCall, styles.property1inPosition]}>
      <View style={[styles.swipeUpWide, styles.swipeFlexBox]}>
        <Image
          style={styles.knobIcon}
          resizeMode="cover"
          source={require("../../assets/knob.png")}
        />
      </View>
      <View style={[styles.iconContainerGroup, styles.keyboardSpaceBlock]}>
        <Image
          style={styles.iconContainer2}
          resizeMode="cover"
          source={require("../../assets/icon-container8.png")}
        />
        <Image
          style={styles.iconContainer2}
          resizeMode="cover"
          source={require("../../assets/icon-container9.png")}
        />
        <Image
          style={styles.iconContainer2}
          resizeMode="cover"
          source={require("../../assets/icon-container10.png")}
        />
        <Image
          style={styles.iconContainer2}
          resizeMode="cover"
          source={require("../../assets/icon-container11.png")}
        />
      </View>
      <View style={styles.homeindicatorLayout}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

export const IncallKeyboardBottom = () => {
  return (
    <View
      style={[styles.property1inCallKeyboard, styles.property1inPosition]}
    >
      <View style={[styles.swipeUpWide1, styles.swipeFlexBox]}>
        <Image
          style={styles.knobIcon}
          resizeMode="cover"
          source={require("../../assets/knob.png")}
        />
      </View>
      <View style={[styles.keyboard, styles.keyboardSpaceBlock]}>
        <View style={styles.key}>
          <Text style={[styles.letter, styles.letterFlexBox]}>1</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>2</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>ABC</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>3</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>DEF</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>4</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>GHI</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter4, styles.letterFlexBox]}>5</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>JKL</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>6</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>MNO</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>7</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>PQRS</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>8</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>TUV</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>9</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>TUV</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>*</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>0</Text>
          <Text style={[styles.label, styles.letterFlexBox]}>+</Text>
        </View>
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.letterFlexBox]}>#</Text>
        </View>
      </View>
      <View style={[styles.iconContainerGroup, styles.keyboardSpaceBlock]}>
        <Image
          style={styles.iconContainer2}
          resizeMode="cover"
          source={require("../../assets/icon-container2.png")}
        />
        <Image
          style={styles.iconContainer2}
          resizeMode="cover"
          source={require("../../assets/icon-container12.png")}
        />
        <Image
          style={styles.iconContainer2}
          resizeMode="cover"
          source={require("../../assets/icon-container4.png")}
        />
        <Image
          style={styles.iconContainer2}
          resizeMode="cover"
          source={require("../../assets/icon-container5.png")}
        />
      </View>
      <View style={styles.homeindicatorLayout}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainerLayout: {
    height: 72,
    width: 72,
  },
  homeindicatorLayout: {
    height: 34,
    width: 375,
  },
  property1inPosition: {
    left: "50%",
    width: 375,
    alignItems: "center",
  },
  swipeFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
  },
  letterFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  iconContainer: {
    borderRadius: Border.br_17xl,
  },
  iconContainerParent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center"
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.textWhite,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    marginTop: 38,
  },
  property1incomingCall: {
    alignItems: "center",
  },
  knobIcon: {
    borderRadius: Border.br_11xs_9,
    width: 34,
    height: 8,
  },
  swipeUpWide: {
    width: 360,
    display: "none",
  },
  iconContainer2: {
    width: 64,
    height: 64,
    borderRadius: Border.br_17xl,
  },
  iconContainerGroup: {
    paddingVertical: Padding.p_base,
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  property1inCall: {
    backgroundColor: Color.colorLightgray_200,
    marginLeft: -187.5,
  },
  swipeUpWide1: {
    alignSelf: "stretch",
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  letter: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    color: Color.textWhite,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  key: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    height: 52,
    width: 93,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    backgroundColor: Color.colorLightgray_200,
    alignItems: "center",
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 2,
    fontFamily: FontFamily.text14Regular,
    color: Color.textGrayF3F4F6,
    marginTop: 2,
  },
  keyShadowBox: {
    marginLeft: 0,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    height: 52,
    width: 93,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    backgroundColor: Color.colorLightgray_200,
    alignItems: "center",
    overflow: "hidden",
  },
  letter4: {
    fontSize: FontSize.size_6xl,
    color: Color.textWhite,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  keyboard: {
    flexWrap: "wrap",
    width: 375,
    paddingVertical: Padding.p_base,
    gap: 13,
  },
  property1inCallKeyboard: {
    marginLeft: -185.5,
  },
  bottom: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_100,
    width: 417,
    height: 812,
    overflow: "hidden",
  },
});