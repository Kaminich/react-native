import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

const ChnNh = () => {
  return (
    <View style={styles.chnNh}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1}>
          <View style={[styles.homeIndicator2, styles.chnNhChildPosition]} />
        </View>
      </View>
      <Image
        style={[styles.chnNhChild, styles.chnNhChildPosition]}
        resizeMode="cover"
        source={require("../../assets/rectangle-2.png")}
      />
      <Text style={[styles.retake, styles.retakeTypo]}>Retake</Text>
      <Text style={[styles.usePhoto, styles.retakeTypo]}>Use Photo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chnNhChildPosition: {
    left: "50%",
    position: "absolute",
  },
  retakeTypo: {
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 24,
    fontSize: FontSize.calloutRegular_size,
    top: 732,
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
  chnNhChild: {
    marginLeft: -187.5,
    top: 142,
    height: 509,
    width: 375,
  },
  retake: {
    left: 25,
    textAlign: "left",
  },
  usePhoto: {
    left: 271,
    textAlign: "right",
  },
  chnNh: {
    backgroundColor: Color.colorGray_700,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChnNh;
