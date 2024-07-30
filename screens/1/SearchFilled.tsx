import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color, Padding } from "../../GlobalStyles";

const SearchFilled = () => {
  return (
    <View style={styles.searchFilled}>
      <View style={styles.statusbarIphone13}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
          resizeMode="cover"
          source={require("../../assets/notch1.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
        <View style={[styles.rightSide, styles.rightSidePosition]}>
          <Image
            style={[styles.batteryIcon, styles.rightSidePosition]}
            resizeMode="cover"
            source={require("../../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../../assets/wifi.png")}
          />
          <Image
            style={styles.iconMobileSignal}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <View style={styles.searchsearch}>
        <View style={[styles.fieldinputParent, styles.fieldinputFlexBox]}>
          <View style={[styles.fieldinput, styles.fieldinputFlexBox]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../../assets/1-search2.png")}
            />
            <View style={[styles.textWapper, styles.fieldinputFlexBox]}>
              <Text style={[styles.text1, styles.text1Typo]}>oke</Text>
              <View style={styles.line} />
            </View>
            <Image
              style={[styles.validateIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/validate.png")}
            />
          </View>
          <Text style={styles.hy}>Hủy</Text>
        </View>
        <Text style={[styles.error, styles.text1Typo]}>Error</Text>
      </View>
      <View style={styles.alphabetickeyboard}>
        <View style={[styles.keys, styles.keysPosition]}>
          <View style={styles.topRow}>
            <View style={styles.key}>
              <View
                style={[styles.keycontainer, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>Q</Text>
            </View>
            <View style={styles.key1}>
              <View
                style={[styles.keycontainer1, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>W</Text>
            </View>
            <View style={[styles.key2, styles.keyPosition5]}>
              <View
                style={[styles.keycontainer2, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>E</Text>
            </View>
            <View style={[styles.key3, styles.keyPosition4]}>
              <View
                style={[styles.keycontainer3, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>R</Text>
            </View>
            <View style={[styles.key4, styles.keyPosition3]}>
              <View
                style={[styles.keycontainer4, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>T</Text>
            </View>
            <View style={[styles.key5, styles.keyPosition2]}>
              <View
                style={[styles.keycontainer5, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>Y</Text>
            </View>
            <View style={styles.key6}>
              <View
                style={[styles.keycontainer6, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>U</Text>
            </View>
            <View style={[styles.key7, styles.keyPosition1]}>
              <View
                style={[styles.keycontainer7, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>I</Text>
            </View>
            <View style={[styles.key8, styles.keyPosition]}>
              <View
                style={[styles.keycontainer8, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>O</Text>
            </View>
            <View style={styles.key9}>
              <View
                style={[styles.keycontainer9, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>P</Text>
            </View>
          </View>
          <View style={styles.middleRow}>
            <View style={styles.key10}>
              <View
                style={[styles.keycontainer10, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>A</Text>
            </View>
            <View style={[styles.key11, styles.keyPosition5]}>
              <View
                style={[styles.keycontainer11, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>S</Text>
            </View>
            <View style={[styles.key12, styles.keyPosition4]}>
              <View
                style={[styles.keycontainer12, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>D</Text>
            </View>
            <View style={[styles.key13, styles.keyPosition3]}>
              <View
                style={[styles.keycontainer13, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>F</Text>
            </View>
            <View style={[styles.key14, styles.keyPosition2]}>
              <View
                style={[styles.keycontainer14, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>G</Text>
            </View>
            <View style={styles.key15}>
              <View
                style={[styles.keycontainer15, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>H</Text>
            </View>
            <View style={[styles.key16, styles.keyPosition1]}>
              <View
                style={[styles.keycontainer16, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>J</Text>
            </View>
            <View style={[styles.key17, styles.keyPosition]}>
              <View
                style={[styles.keycontainer17, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter1, styles.letterPosition1]}>K</Text>
            </View>
            <View style={styles.key18}>
              <View
                style={[styles.keycontainer18, styles.keycontainerShadowBox]}
              />
              <Text style={[styles.letter, styles.letterPosition1]}>L</Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={styles.keys1}>
              <View style={styles.key19}>
                <View
                  style={[styles.keycontainer19, styles.keycontainerShadowBox]}
                />
                <Text style={[styles.letter1, styles.letterPosition1]}>Z</Text>
              </View>
              <View style={styles.key20}>
                <View
                  style={[styles.keycontainer20, styles.keycontainerShadowBox]}
                />
                <Text style={[styles.letter20, styles.letterPosition1]}>X</Text>
              </View>
              <View style={styles.key21}>
                <View
                  style={[styles.keycontainer21, styles.keycontainerShadowBox]}
                />
                <Text style={[styles.letter1, styles.letterPosition1]}>C</Text>
              </View>
              <View style={styles.key22}>
                <View
                  style={[styles.keycontainer22, styles.keycontainerShadowBox]}
                />
                <Text style={[styles.letter22, styles.letterPosition1]}>V</Text>
              </View>
              <View style={styles.key23}>
                <View
                  style={[styles.keycontainer23, styles.keycontainerShadowBox]}
                />
                <Text style={[styles.letter20, styles.letterPosition1]}>B</Text>
              </View>
              <View style={styles.key24}>
                <View
                  style={[styles.keycontainer24, styles.keycontainerShadowBox]}
                />
                <Text style={[styles.letter1, styles.letterPosition1]}>N</Text>
              </View>
              <View style={styles.key25}>
                <View
                  style={[styles.keycontainer25, styles.keycontainerShadowBox]}
                />
                <Text style={[styles.letter1, styles.letterPosition1]}>M</Text>
              </View>
            </View>
            <Image
              style={[styles.keyIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../../assets/-key.png")}
            />
            <Image
              style={[styles.keyIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../../assets/-key1.png")}
            />
          </View>
        </View>
        <View style={[styles.bottomRow1, styles.keysPosition]}>
          <View style={styles.key26}>
            <View
              style={[styles.keycontainer26, styles.keycontainerShadowBox]}
            />
            <Text style={[styles.letter26, styles.letterPosition]}>123</Text>
          </View>
          <View style={[styles.key27, styles.keySpaceBlock]}>
            <View
              style={[styles.keycontainer27, styles.keycontainerShadowBox]}
            />
            <Text style={[styles.letter27, styles.letterPosition]}>
              Dấu cách
            </Text>
          </View>
          <View style={[styles.key28, styles.keySpaceBlock]}>
            <View
              style={[styles.keycontainer28, styles.keycontainerShadowBox]}
            />
            <Text style={[styles.letter28, styles.letterPosition]}>Tìm</Text>
          </View>
        </View>
        <View style={styles.emojiDictation}>
          <Image
            style={styles.iconEmoji}
            resizeMode="cover"
            source={require("../../assets/icon--emoji.png")}
          />
          <Image
            style={styles.iconDictation}
            resizeMode="cover"
            source={require("../../assets/icon--dictation.png")}
          />
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.notchIconPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notchIconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  fieldinputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  keycontainerShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  letterPosition1: {
    display: "flex",
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
    color: Color.black,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  keyPosition5: {
    right: 262,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition4: {
    right: 225,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition3: {
    right: 187,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition2: {
    right: 150,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition1: {
    right: 75,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition: {
    right: 38,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIconLayout: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  letterPosition: {
    lineHeight: 21,
    marginTop: -10,
    display: "flex",
    top: "50%",
    fontSize: FontSize.calloutRegular_size,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularCallout,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    display: "none",
  },
  text: {
    fontSize: FontSize.headlineSemiBold_size,
    lineHeight: 22,
    fontWeight: "600",
    color: Color.colorGray_200,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularCallout,
    letterSpacing: 0,
    top: 1,
    width: 54,
    left: 0,
    position: "absolute",
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
    top: 1,
    left: "50%",
    position: "absolute",
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
    color: Color.textPrimary,
  },
  line: {
    backgroundColor: Color.brandPrimary,
    width: 1,
    height: 18,
  },
  textWapper: {
    marginLeft: 8,
    flex: 1,
  },
  validateIcon: {
    marginLeft: 8,
  },
  fieldinput: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.brandPrimary,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  hy: {
    lineHeight: 24,
    color: Color.brandPrimary,
    marginLeft: 16,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  fieldinputParent: {
    alignSelf: "stretch",
  },
  error: {
    fontSize: FontSize.caption1Regular_size,
    lineHeight: 16,
    color: Color.otherRed,
    marginTop: 4,
    display: "none",
  },
  searchsearch: {
    top: 47,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    width: 375,
    left: 0,
    position: "absolute",
  },
  keycontainer: {
    backgroundColor: Color.textWhite,
  },
  letter: {
    width: 32,
  },
  key: {
    right: 337,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  keycontainer1: {
    backgroundColor: Color.textWhite,
  },
  letter1: {
    width: 31,
  },
  key1: {
    right: 300,
    left: 38,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keycontainer2: {
    backgroundColor: Color.textWhite,
  },
  key2: {
    left: 75,
  },
  keycontainer3: {
    backgroundColor: Color.textWhite,
  },
  key3: {
    left: 113,
  },
  keycontainer4: {
    backgroundColor: Color.textWhite,
  },
  key4: {
    left: 150,
  },
  keycontainer5: {
    backgroundColor: Color.textWhite,
  },
  key5: {
    left: 188,
  },
  keycontainer6: {
    backgroundColor: Color.textWhite,
  },
  key6: {
    right: 113,
    left: 225,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keycontainer7: {
    backgroundColor: Color.textWhite,
  },
  key7: {
    left: 262,
  },
  keycontainer8: {
    backgroundColor: Color.textWhite,
  },
  key8: {
    left: 300,
  },
  keycontainer9: {
    backgroundColor: Color.textWhite,
  },
  key9: {
    left: 337,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  topRow: {
    height: 42,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  keycontainer10: {
    backgroundColor: Color.textWhite,
  },
  key10: {
    right: 299,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  keycontainer11: {
    backgroundColor: Color.textWhite,
  },
  key11: {
    left: 38,
  },
  keycontainer12: {
    backgroundColor: Color.textWhite,
  },
  key12: {
    left: 75,
  },
  keycontainer13: {
    backgroundColor: Color.textWhite,
  },
  key13: {
    left: 112,
  },
  keycontainer14: {
    backgroundColor: Color.textWhite,
  },
  key14: {
    left: 150,
  },
  keycontainer15: {
    backgroundColor: Color.textWhite,
  },
  key15: {
    right: 112,
    left: 187,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keycontainer16: {
    backgroundColor: Color.textWhite,
  },
  key16: {
    left: 225,
  },
  keycontainer17: {
    backgroundColor: Color.textWhite,
  },
  key17: {
    left: 262,
  },
  keycontainer18: {
    backgroundColor: Color.textWhite,
  },
  key18: {
    left: 299,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  middleRow: {
    top: 54,
    right: 19,
    left: 19,
    height: 42,
    position: "absolute",
  },
  keycontainer19: {
    backgroundColor: Color.textWhite,
  },
  key19: {
    right: 222,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  keycontainer20: {
    backgroundColor: Color.textWhite,
  },
  letter20: {
    width: 30,
  },
  key20: {
    right: 186,
    left: 37,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keycontainer21: {
    backgroundColor: Color.textWhite,
  },
  key21: {
    right: 149,
    left: 73,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keycontainer22: {
    backgroundColor: Color.textWhite,
  },
  letter22: {
    width: 33,
  },
  key22: {
    right: 110,
    left: 110,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keycontainer23: {
    backgroundColor: Color.textWhite,
  },
  key23: {
    right: 74,
    left: 149,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keycontainer24: {
    backgroundColor: Color.textWhite,
  },
  key24: {
    right: 37,
    left: 185,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keycontainer25: {
    backgroundColor: Color.textWhite,
  },
  key25: {
    left: 222,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  keys1: {
    right: 58,
    left: 58,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIcon: {
    left: 0,
  },
  keyIcon1: {
    right: 0,
  },
  bottomRow: {
    top: 108,
    height: 42,
    right: 0,
    left: 0,
    position: "absolute",
  },
  keys: {
    top: 8,
    height: 150,
  },
  keycontainer26: {
    backgroundColor: Color.colorDarkgray_100,
  },
  letter26: {
    width: 91,
    color: Color.black,
    lineHeight: 21,
    marginTop: -10,
  },
  key26: {
    width: 91,
    height: 42,
  },
  keycontainer27: {
    backgroundColor: Color.textWhite,
  },
  letter27: {
    width: 175,
    color: Color.black,
    lineHeight: 21,
    marginTop: -10,
  },
  key27: {
    flex: 1,
  },
  keycontainer28: {
    backgroundColor: Color.blue,
  },
  letter28: {
    color: Color.textWhite,
    width: 91,
  },
  key28: {
    width: 91,
  },
  bottomRow1: {
    top: 170,
    flexDirection: "row",
  },
  iconEmoji: {
    height: 27,
    width: 27,
  },
  iconDictation: {
    width: 19,
    height: 28,
  },
  emojiDictation: {
    top: 235,
    right: 31,
    left: 31,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
  },
  homeindicator: {
    bottom: 0,
    left: 1,
    height: 34,
    right: 0,
    position: "absolute",
  },
  alphabetickeyboard: {
    top: 534,
    backgroundColor: Color.colorLightgray_100,
    height: 278,
    width: 375,
    left: 0,
    position: "absolute",
  },
  searchFilled: {
    width: "100%",
    height: 681,
    backgroundColor: Color.textWhite,
  },
});

export default SearchFilled;
