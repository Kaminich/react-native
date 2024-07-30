import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

export const IncomingMinimize = () => {
  return (
    <View
      style={[styles.property1incoming, styles.property1iincallShadowBox]}
    >
      <View style={styles.avtParent}>
        <View style={styles.avt}>
          <Text style={styles.k}>TL</Text>
        </View>
        <View style={styles.trLParent}>
          <Text style={styles.trL}>Trí Lê</Text>
          <Text style={[styles.text, styles.textTypo]}>0338471120</Text>
        </View>
      </View>
      <View style={styles.iconContainerParent}>
        <Image
          style={styles.iconContainer}
          resizeMode="cover"
          source={require("../../assets/icon-container5.png")}
        />
        <Image
          style={[styles.iconContainer3, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../../assets/icon-container7.png")}
        />
      </View>
    </View>
  );
};

export const IncallMinimize = () => {
  return (
    <View style={[styles.property1iincall, styles.property1iincallShadowBox]}>
      <View style={styles.frameParent}>
        <View style={styles.avtGroup}>
          <View style={styles.avt}>
            <Text style={styles.k}>TL</Text>
          </View>
          <View style={styles.trLGroup}>
            <Text style={styles.trL}>Trí Lê</Text>
            <Text style={[styles.text, styles.textTypo]}>0338471120</Text>
          </View>
        </View>
        <View style={styles.nameWrapper}>
          <Text style={[styles.name, styles.textTypo]}>00:14</Text>
        </View>
      </View>
      <View style={styles.iconContainerGroup}>
        <Image
          style={styles.iconContainer}
          resizeMode="cover"
          source={require("../../assets/icon-container8.png")}
        />
        <Image
          style={styles.iconContainer}
          resizeMode="cover"
          source={require("../../assets/icon-container9.png")}
        />
        <Image
          style={styles.iconContainer}
          resizeMode="cover"
          source={require("../../assets/icon-container10.png")}
        />
        <Image
          style={styles.iconContainer}
          resizeMode="cover"
          source={require("../../assets/icon-container11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1iincallShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
    width: 343,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(32, 36, 44, 0.15)",
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
    marginLeft: -168,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  iconContainerLayout: {
    marginLeft: 12,
    height: 50,
    width: 50,
  },
  k: {
    color: Color.textPrimary,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  avt: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.tagBlue100,
    width: 44,
    height: 44,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
  },
  trL: {
    fontWeight: "600",
    fontFamily: FontFamily.headlineSemiBold,
    display: "flex",
    alignItems: "flex-end",
    width: 77,
    textAlign: "left",
    color: Color.textWhite,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  text: {
    color: Color.textGrayF3F4F6,
    width: 128,
    marginTop: 2,
    textAlign: "left",
  },
  trLParent: {
    marginLeft: 8,
    flex: 1,
  },
  avtParent: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: Border.br_17xl,
  },
  iconContainerParent: {
    marginLeft: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  property1incoming: {
    marginTop: -134,
    alignItems: "center",
    flexDirection: "row",
  },
  trLGroup: {
    marginLeft: 8,
  },
  avtGroup: {
    width: 242,
    alignItems: "center",
    flexDirection: "row",
  },
  name: {
    color: Color.textWhite,
    textAlign: "center",
  },
  nameWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.tagSky400,
    height: 27,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  iconContainer3: {
    borderRadius: Border.br_17xl,
    marginLeft: 16,
  },
  iconContainerGroup: {
    alignSelf: "stretch",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 17,
  },
  property1iincall: {
    marginTop: -31.5,
    justifyContent: "center",
  },
  callMinimize: {
    borderRadius: Border.br_3xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 383,
    height: 308,
    overflow: "hidden",
  },
});