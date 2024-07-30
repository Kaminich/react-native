import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Padding, FontSize, Border } from "../../GlobalStyles";

const AcceptCallShowKeyboard = () => {
  return (
    <View style={styles.acceptCallShowKeyboard}>
      <View style={styles.call}>
        <View style={[styles.body, styles.avtFlexBox]}>
          <View style={[styles.avt, styles.avtFlexBox]}>
            <Text style={[styles.k, styles.letterTypo]}>TL</Text>
          </View>
          <View style={styles.name}>
            <View style={styles.name1}>
              <Text style={[styles.name2, styles.stLayout]}>Trí Lê</Text>
              <Text style={[styles.st, styles.stTypo]}>0338471120</Text>
            </View>
            <View style={styles.duration}>
              <Text style={[styles.name3, styles.nameTypo]}>00:14</Text>
            </View>
            <Text style={[styles.name4, styles.nameTypo]}>Đang gọi ra...</Text>
          </View>
          <View style={styles.option}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../../assets/note.png")}
            />
            <Image
              style={[styles.watchIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/4-watch.png")}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={[styles.swipeUpWide, styles.avtFlexBox]}>
            <Image
              style={styles.knobIcon}
              resizeMode="cover"
              source={require("../../assets/knob.png")}
            />
          </View>
          <View style={styles.keyboard}>
            <View style={[styles.keyboardRow]}>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>1</Text>
              </View>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>2</Text>
                <Text style={[styles.label, styles.stTypo]}>ABC</Text>
              </View>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>3</Text>
                <Text style={[styles.label, styles.stTypo]}>DEF</Text>
              </View>
            </View>
            <View style={[styles.keyboardRow]}>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>4</Text>
                <Text style={[styles.label, styles.stTypo]}>GHI</Text>
              </View>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>5</Text>
                <Text style={[styles.label, styles.stTypo]}>JKL</Text>
              </View>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>6</Text>
                <Text style={[styles.label, styles.stTypo]}>MNO</Text>
              </View>
            </View>
            <View style={[styles.keyboardRow]}>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>7</Text>
                <Text style={[styles.label, styles.stTypo]}>PQRS</Text>
              </View>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>8</Text>
                <Text style={[styles.label, styles.stTypo]}>TUV</Text>
              </View>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>9</Text>
                <Text style={[styles.label, styles.stTypo]}>TUV</Text>
              </View>
            </View>
            <View style={[styles.keyboardRow]}>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>*</Text>
              </View>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>0</Text>
                <Text style={[styles.label, styles.stTypo]}>+</Text>
              </View>
              <View style={styles.keyShadowBox}>
                <Text style={[styles.letter, styles.letterTypo]}>#</Text>
              </View>
            </View>
          </View>
          <View style={[styles.iconContainerParent, styles.keyboardSpaceBlock]}>
            <Image
              style={styles.iconContainer}
              resizeMode="cover"
              source={require("../../assets/icon-container1.png")}
            />
            <Image
              style={styles.iconContainer}
              resizeMode="cover"
              source={require("../../assets/icon-container2.png")}
            />
            <Image
              style={styles.iconContainer}
              resizeMode="cover"
              source={require("../../assets/icon-container3.png")}
            />
            <Image
              style={styles.iconContainer}
              resizeMode="cover"
              source={require("../../assets/icon-container4.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notchIconPosition: {
    position: "absolute",
    left: "50%",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "600",
    color: Color.labelColorDarkPrimary,
    backgroundColor: Color.colorGray_200,
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 1,
    position: "absolute",
  },
  avtFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  letterTypo: {
    fontFamily: FontFamily.text16Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  stLayout: {
    width: 292,
    letterSpacing: 0,
  },
  stTypo: {
    marginTop: 2,
    color: Color.textGrayF3F4F6,
    fontFamily: FontFamily.calloutRegular,
    textAlign: "center",
  },
  nameTypo: {
    fontFamily: FontFamily.calloutRegular,
    textAlign: "center",
    letterSpacing: 0,
  },
  iconLayout: {
    height: 28,
    width: 28,
  },
  keyboardSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    left: "50%",
    display: "none",
  },
  text: {
    fontFamily: FontFamily.defaultRegularCallout,
    height: 20,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
    top: 1,
    position: "absolute",
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    left: 0,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -162.5,
    top: 14,
  },
  batteryIcon: {
    marginLeft: 11.3,
    width: 27,
    top: 0,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  iconMobileSignal: {
    marginLeft: -38.7,
    width: 18,
    height: 12,
    left: "50%",
  },
  rightSide: {
    marginLeft: 86.5,
    top: 19,
    width: 77,
  },
  statusbarIphone13: {
    height: 47,
    display: "none",
    overflow: "hidden",
    width: "100%",
  },
  k: {
    fontSize: FontSize.size_29xl,
    color: Color.textPrimary,
    letterSpacing: 0,
  },
  avt: {
    borderRadius: Border.br_61xl,
    backgroundColor: Color.tagBlue100,
    width: 132,
    height: 132,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    zIndex: 0,
  },
  name2: {
    fontSize: FontSize.size_15xl,
    lineHeight: 41,
    fontFamily: FontFamily.subheadlineSemiBold,
    textAlign: "center",
    fontWeight: "600",
    color: Color.labelColorDarkPrimary,
  },
  st: {
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    width: 292,
    letterSpacing: 0,
  },
  name1: {
    alignItems: "center",
  },
  name3: {
    color: Color.labelColorDarkPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
  },
  duration: {
    borderRadius: Border.br_base,
    backgroundColor: Color.tagSky400,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_11xs,
    marginTop: 12,
    flexDirection: "row",
  },
  name4: {
    fontSize: FontSize.defaultRegularCallout_size,
    color: Color.textPlaceHolder,
    marginTop: 12,
    lineHeight: 24,
    display: "none",
  },
  name: {
    zIndex: 1,
    marginTop: 16,
    alignItems: "center",
  },
  watchIcon: {
    overflow: "hidden",
  },
  option: {
    marginLeft: -187.5,
    top: 24,
    paddingVertical: 0,
    zIndex: 2,
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    display: "none",
    position: "absolute",
    width: "100%",
  },
  body: {
    flex: 1,
    width: "100%",
  },
  knobIcon: {
    borderRadius: Border.br_11xs_9,
    width: 34,
    height: 8,
  },
  swipeUpWide: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
  letter: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    alignSelf: "stretch",
    color: Color.labelColorDarkPrimary,
  },
  keyboardRow: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  key: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    height: 48,
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
    backgroundColor: Color.colorLightgray_100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  label: {
    fontFamily: FontFamily.text16Medium,
    fontWeight: "500",
    fontSize: FontSize.subheadlineRegular_size,
    color: Color.brandPrimary,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
  },
  keyShadowBox: {
    marginHorizontal: 8,
    marginVertical: 2,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    height: 48,
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
    backgroundColor: Color.colorLightgray_100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  letter4: {
    fontSize: FontSize.size_6xl,
    alignSelf: "stretch",
    color: Color.labelColorDarkPrimary,
  },
  keyboard: {
    width: "100%",
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
  },
  iconContainer: {
    borderRadius: Border.br_17xl,
    width: 64,
    height: 64,
  },
  iconContainerParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 134,
    height: 5,
    left: "50%",
  },
  homeindicator: {
    height: 34,
    width: "100%",
  },
  bottom: {
    backgroundColor: Color.colorLightgray_100,
    alignItems: "center",
    width: "100%",
  },
  call: {
    top: 5,
    backgroundColor: Color.colorGray_200,
    height: "100%",
    overflow: "hidden",
    left: 0,
    position: "absolute",
    width: "100%",
  },
  acceptCallShowKeyboard: {
    height: "100%",
    width: "100%",
  },
});

export default AcceptCallShowKeyboard;
