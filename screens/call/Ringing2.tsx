import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Padding, Color, FontSize, Border } from "../../GlobalStyles";
import { IncallBottom } from "../components/Bottom2";

const Ringing2 = () => {
  return (
    <View style={styles.ringing}>
      <View style={styles.call}>
        <View style={styles.statusbarIphone13}>
          <Image
            style={[styles.notchIcon, styles.optionPosition]}
            resizeMode="cover"
            source={require("../../assets/notch.png")}
          />
          <View style={[styles.leftSide, styles.leftSideLayout]}>
            <View style={[styles.statusbarTime, styles.leftSideLayout]}>
              <Text style={[styles.text, styles.kFlexBox]}>9:41</Text>
            </View>
          </View>
          <View style={[styles.rightSide, styles.rightSidePosition]}>
            <Image
              style={[styles.batteryIcon, styles.rightSidePosition]}
              resizeMode="cover"
              source={require("../../assets/battery1.png")}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../../assets/wifi1.png")}
            />
            <Image
              style={[styles.iconMobileSignal, styles.textPosition]}
              resizeMode="cover"
              source={require("../../assets/icon--mobile-signal1.png")}
            />
          </View>
        </View>
        <View style={[styles.body, styles.avtFlexBox]}>
          <View style={[styles.avt, styles.avtFlexBox]}>
            <Text style={[styles.k, styles.kFlexBox]}>0</Text>
          </View>
          <View style={styles.name}>
            <View style={styles.name1}>
              <Text style={[styles.name2, styles.kFlexBox]}>0331974521</Text>
              <Text style={[styles.st, styles.nameTypo]}>0336174912</Text>
            </View>
            <View style={styles.duration}>
              <Text style={[styles.name3, styles.nameTypo]}>00:14</Text>
            </View>
            <Text style={[styles.name4, styles.nameTypo]}>
              Đang đổ chuông...
            </Text>
          </View>
          <View style={[styles.option, styles.optionFlexBox]}>
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
        <IncallBottom />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionPosition: {
    position: "absolute",
    left: "50%",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  kFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
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
  nameTypo: {
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    letterSpacing: 0,
  },
  optionFlexBox: {
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 28,
    width: 28,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    display: "none",
    left: "50%",
  },
  text: {
    fontFamily: FontFamily.defaultRegularCallout,
    height: 20,
    color: Color.textWhite,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    top: 1,
    position: "absolute",
    width: 54,
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
    overflow: "hidden",
    width: 375,
  },
  k: {
    fontSize: FontSize.size_29xl,
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    color: Color.textPrimary,
    textAlign: "center",
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
    fontFamily: FontFamily.headlineSemiBold,
    width: 292,
    color: Color.textWhite,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  st: {
    fontSize: FontSize.title3SemiBold_size,
    color: Color.textGrayF3F4F6,
    marginTop: 2,
    lineHeight: 24,
    fontFamily: FontFamily.text14Regular,
    width: 292,
    display: "none",
  },
  name1: {
    alignItems: "center",
  },
  name3: {
    color: Color.textWhite,
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
    display: "none",
  },
  name4: {
    fontSize: FontSize.calloutRegular_size,
    color: Color.textPlaceHolder,
    marginTop: 12,
    lineHeight: 24,
    fontFamily: FontFamily.text14Regular,
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
    display: "none",
    left: "50%",
    width: 375,
    position: "absolute",
  },
  body: {
    width: 375,
    flex: 1,
    justifyContent: "center",
  },
  knobIcon: {
    borderRadius: Border.br_11xs_9,
    width: 34,
    height: 8,
  },
  swipeUpWide: {
    width: 360,
    padding: Padding.p_3xs,
    display: "none",
  },
  iconContainer: {
    borderRadius: Border.br_17xl,
    width: 64,
    height: 64,
  },
  iconContainerParent: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_base,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.textWhite,
    width: 134,
    height: 5,
    left: "50%",
  },
  homeindicator: {
    height: 34,
    width: 375,
  },
  bottom: {
    backgroundColor: Color.colorLightgray_200,
    alignItems: "center",
    width: 375,
  },
  call: {
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  ringing: {
    width: "100%",
    height: 812,
    flex: 1,
  },
});

export default Ringing2;
