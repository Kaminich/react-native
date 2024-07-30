import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Padding, Color, FontSize, Border } from "../../GlobalStyles";
import { IncomingBottom } from "../components/Bottom2";

const IncomingCallFullScreen2 = () => {
  return (
    <View style={styles.incomingCallFullScreen}>
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
            <Text style={[styles.k, styles.kFlexBox]}>TL</Text>
          </View>
          <View style={styles.name}>
            <View style={styles.name1}>
              <Text style={[styles.name2, styles.kFlexBox]}>Trí Lê</Text>
              <Text style={[styles.st, styles.nameTypo]}>0338471120</Text>
            </View>
            <View style={[styles.duration, styles.name4SpaceBlock]}>
              <Text style={[styles.name3, styles.nameTypo]}>00:14</Text>
            </View>
            <Text style={[styles.name4, styles.name4SpaceBlock]}>
              Đang gọi ra...
            </Text>
          </View>
          <View style={[styles.option, styles.optionSpaceBlock]}>
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
        <View style={styles.name1}>
          <IncomingBottom />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionPosition: {
    display: "none",
    left: "50%",
    position: "absolute",
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
  name4SpaceBlock: {
    marginTop: 12,
    display: "none",
  },
  optionSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconLayout: {
    height: 28,
    width: 28,
  },
  iconContainerLayout: {
    height: 72,
    width: 72,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
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
    flexDirection: "row",
    marginTop: 12,
  },
  name4: {
    fontSize: FontSize.calloutRegular_size,
    color: Color.textPlaceHolder,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 24,
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
    zIndex: 2,
    alignItems: "center",
    display: "none",
    left: "50%",
    position: "absolute",
    width: 375,
  },
  body: {
    width: 375,
    flex: 1,
    justifyContent: "center",
  },
  iconContainer: {
    borderRadius: Border.br_17xl,
  },
  iconContainerParent: {
    alignSelf: "stretch",
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
    height: 34,
    marginTop: 38,
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
  incomingCallFullScreen: {
    width: "100%",
    height: 812,
    flex: 1,
  },
});

export default IncomingCallFullScreen2;
