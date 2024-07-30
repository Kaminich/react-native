import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../../GlobalStyles";

const ChpNh = () => {
  return (
    <View style={styles.chpNh}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1}>
          <View style={[styles.homeIndicator2, styles.chpPosition]} />
        </View>
      </View>
      <Image
        style={[styles.chpNhChild, styles.chpPosition]}
        resizeMode="cover"
        source={require("../../assets/rectangle-1.png")}
      />
      <Image
        style={styles.thunder1Icon}
        resizeMode="cover"
        source={require("../../assets/thunder-1.png")}
      />
      <Image
        style={[styles.chpNhItem, styles.chpPosition]}
        resizeMode="cover"
        source={require("../../assets/group-22.png")}
      />
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../../assets/ellipse-3.png")}
        />
        <Text style={[styles.x, styles.xTypo]}>1x</Text>
      </View>
      <Text style={styles.photo}>PHOTO</Text>
      <Image
        style={styles.switchCamera1Icon}
        resizeMode="cover"
        source={require("../../assets/switchcamera-1.png")}
      />
      <Text style={[styles.cancel, styles.xTypo]}>Cancel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chpPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 38,
    width: 38,
    left: "50%",
    position: "absolute",
  },
  xTypo: {
    textAlign: "left",
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
    position: "absolute",
  },
  homeIndicator2: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.textWhite,
    width: 134,
    height: 5,
  },
  homeIndicator1: {
    height: "47.06%",
    top: "0%",
    right: "0%",
    bottom: "52.94%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  homeIndicator: {
    bottom: 0,
    left: 0,
    height: 34,
    width: 375,
    position: "absolute",
  },
  chpNhChild: {
    marginLeft: -187.5,
    top: 120,
    height: 507,
    width: 375,
  },
  thunder1Icon: {
    top: 40,
    left: 16,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  chpNhItem: {
    marginLeft: -35.5,
    top: 668,
    width: 70,
    height: 70,
  },
  groupChild: {
    marginLeft: -19,
    top: 0,
  },
  x: {
    top: 13,
    left: 13,
    fontSize: FontSize.caption2Regular_size,
  },
  ellipseParent: {
    marginLeft: -19.5,
    top: 569,
  },
  photo: {
    top: 637,
    left: 182,
    fontSize: FontSize.footnoteRegular_size,
    letterSpacing: 0,
    color: "#ffd60a",
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    position: "absolute",
  },
  switchCamera1Icon: {
    top: 686,
    left: 315,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  cancel: {
    top: 693,
    left: 25,
    fontSize: FontSize.calloutRegular_size,
    lineHeight: 24,
  },
  chpNh: {
    backgroundColor: Color.colorGray_700,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChpNh;
