import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../../GlobalStyles";

const NumberOptionCustomerInformation2 = () => {
  return (
    <View style={styles.numberOptionCustomerInformation}>
      <View style={styles.numberOptionCustomerInformationChild} />
      <View style={styles.headerParent}>
        <View style={styles.header}>
          <View style={styles.statusbarIphone13}>
            <Image
              style={styles.notchIcon}
              resizeMode="cover"
              source={require("../../assets/notch.png")}
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
          <View style={styles.alert}>
            <Image
              style={[styles.validateIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/validate.png")}
            />
            <Text style={styles.description}>Không có kết nối internet</Text>
            <Image
              style={[styles.closeIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/23-close.png")}
            />
          </View>
          <View style={styles.titlePage}>
            <Image
              style={[styles.leftIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/27-left.png")}
            />
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.luTypo]}>
                Thông tin khách hàng
              </Text>
            </View>
            <Text style={[styles.lu, styles.luPosition]}>Sửa</Text>
            <Image
              style={[styles.filterIcon, styles.luPosition]}
              resizeMode="cover"
              source={require("../../assets/filter1.png")}
            />
          </View>
          <View style={styles.tabControl}>
            <View style={[styles.tab, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Tab 1</Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={[styles.number, styles.text1Typo]}>16</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={[styles.socialIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text1Typo]}>1</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={[styles.socialIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text1Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab3, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/social13.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text1Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab3, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/social13.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text1Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab3, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/social13.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text1Typo]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.thngTinKhchHng}>
          <View style={styles.formtext}>
            <View style={styles.label6}>
              <Text style={[styles.text1, styles.text1Typo]}>*</Text>
              <Text style={[styles.label7, styles.text1Typo]}>Họ và tên</Text>
            </View>
            <Text style={[styles.value, styles.valueTypo]}>Lê Minh Trí</Text>
          </View>
          <View style={[styles.formtextParent, styles.formtextSpaceBlock]}>
            <View style={styles.formtext1}>
              <View style={styles.label6}>
                <Text style={[styles.text1, styles.text1Typo]}>*</Text>
                <Text style={[styles.label7, styles.text1Typo]}>
                  Số điện thoại
                </Text>
              </View>
              <Text style={[styles.value1, styles.valueTypo]}>0984433593</Text>
            </View>
            <Text style={[styles.value1, styles.valueTypo]}>0984433555</Text>
          </View>
          <View style={[styles.formtext2, styles.formtextSpaceBlock]}>
            <View style={styles.label6}>
              <Text style={[styles.text1, styles.text1Typo]}>*</Text>
              <Text style={[styles.label7, styles.text1Typo]}>Email</Text>
            </View>
            <Text style={[styles.value1, styles.valueTypo]}>
              trilm123@gmail.com
            </Text>
          </View>
          <View style={[styles.formtext3, styles.formtextSpaceBlock]}>
            <View style={styles.label6}>
              <Text style={[styles.text1, styles.text1Typo]}>*</Text>
              <Text style={[styles.label7, styles.text1Typo]}>Ngày sinh</Text>
            </View>
            <Text style={[styles.value, styles.valueTypo]}>12/12/1992</Text>
          </View>
          <View style={[styles.formtext4, styles.formtextSpaceBlock]}>
            <View style={styles.label6}>
              <Text style={[styles.text1, styles.text1Typo]}>*</Text>
              <Text style={[styles.label7, styles.text1Typo]}>Giới tính</Text>
            </View>
            <Text style={[styles.value, styles.valueTypo]}>Nam</Text>
          </View>
          <View style={[styles.formtextGroup, styles.formtextSpaceBlock]}>
            <View style={styles.formtext1}>
              <View style={styles.label6}>
                <Text style={[styles.text1, styles.text1Typo]}>*</Text>
                <Text style={[styles.label7, styles.text1Typo]}>Địa chỉ</Text>
              </View>
              <Text
                style={[styles.value5, styles.valueTypo]}
              >{`HI 122 Tây Sơn, TT Phùng, Đan Phượng, Hà Nội `}</Text>
            </View>
            <Text
              style={[styles.value5, styles.valueTypo]}
            >{`Toà FPT, Số 10 Phạm Văn Bạch, Yên Hoà, Cầu Giấy, Hà Nội `}</Text>
          </View>
        </View>
        <View style={styles.actionSheetfooter}>
          <View style={[styles.buttonParent, styles.titleFlexBox]}>
            <View style={[styles.button, styles.buttonSpaceBlock]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
              <Text style={[styles.text8, styles.textTypo]}>Secondary</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
            </View>
            <View style={[styles.button1, styles.button1FlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder6.png")}
              />
              <Text style={[styles.text9, styles.textTypo]}>Lưu</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder6.png")}
              />
            </View>
          </View>
          <View style={styles.alphabetickeyboard}>
            <View style={[styles.keys, styles.keysPosition]}>
              <View style={styles.topRow}>
                <View style={styles.key}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>Q</Text>
                </View>
                <View style={styles.key1}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    W
                  </Text>
                </View>
                <View style={[styles.key2, styles.keyPosition5]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>E</Text>
                </View>
                <View style={[styles.key3, styles.keyPosition4]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    R
                  </Text>
                </View>
                <View style={[styles.key4, styles.keyPosition3]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>T</Text>
                </View>
                <View style={[styles.key5, styles.keyPosition2]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    Y
                  </Text>
                </View>
                <View style={styles.key6}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    U
                  </Text>
                </View>
                <View style={[styles.key7, styles.keyPosition1]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>I</Text>
                </View>
                <View style={[styles.key8, styles.keyPosition]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    O
                  </Text>
                </View>
                <View style={styles.key9}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>P</Text>
                </View>
              </View>
              <View style={styles.middleRow}>
                <View style={styles.key10}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>A</Text>
                </View>
                <View style={[styles.key11, styles.keyPosition5]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    S
                  </Text>
                </View>
                <View style={[styles.key12, styles.keyPosition4]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    D
                  </Text>
                </View>
                <View style={[styles.key13, styles.keyPosition3]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>F</Text>
                </View>
                <View style={[styles.key14, styles.keyPosition2]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    G
                  </Text>
                </View>
                <View style={styles.key15}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>H</Text>
                </View>
                <View style={[styles.key16, styles.keyPosition1]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    J
                  </Text>
                </View>
                <View style={[styles.key17, styles.keyPosition]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    K
                  </Text>
                </View>
                <View style={styles.key18}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>L</Text>
                </View>
              </View>
              <View style={styles.bottomRow}>
                <View style={styles.keys1}>
                  <View style={styles.key19}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      Z
                    </Text>
                  </View>
                  <View style={styles.key20}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter20, styles.letterPosition1]}>
                      X
                    </Text>
                  </View>
                  <View style={styles.key21}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      C
                    </Text>
                  </View>
                  <View style={styles.key22}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter22, styles.letterPosition1]}>
                      V
                    </Text>
                  </View>
                  <View style={styles.key23}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter20, styles.letterPosition1]}>
                      B
                    </Text>
                  </View>
                  <View style={styles.key24}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      N
                    </Text>
                  </View>
                  <View style={styles.key25}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      M
                    </Text>
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
                <View style={styles.keycontainerShadowBox} />
                <Text style={[styles.letter26, styles.letterPosition]}>
                  123
                </Text>
              </View>
              <View style={[styles.key27, styles.keySpaceBlock]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter27, styles.letterPosition]}>
                  Dấu cách
                </Text>
              </View>
              <View style={[styles.key28, styles.keySpaceBlock]}>
                <View style={styles.keycontainerShadowBox} />
                <Text style={[styles.letter26, styles.letterPosition]}>
                  Nhập
                </Text>
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
            <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
              <View style={[styles.homeIndicator, styles.homeLayout]} />
            </View>
          </View>
          <View style={styles.homeindicator1}>
            <View style={[styles.homeIndicator1, styles.homeLayout]} />
          </View>
        </View>
      </View>
      <View style={styles.numberOptionCustomerInformationItem} />
      <View style={[styles.actionSheetst, styles.homeindicatorPosition]}>
        <View style={[styles.actionSheetlistCell, styles.actionSpaceBlock]}>
          <Image
            style={[styles.callConnectingIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/call-connecting.png")}
          />
          <View style={styles.button1FlexBox}>
            <Text style={styles.label18}>Gọi điện</Text>
            <View style={[styles.icon20x20, styles.iconLayout1]}>
              <View style={styles.illustration} />
            </View>
          </View>
        </View>
        <View style={[styles.actionSheetlistCell1, styles.actionSpaceBlock]}>
          <Image
            style={[styles.callConnectingIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/envelope1.png")}
          />
          <View style={styles.button1FlexBox}>
            <Text style={styles.label18}>Mở hộp thư</Text>
            <View style={[styles.icon20x20, styles.iconLayout1]}>
              <View style={styles.illustration} />
            </View>
          </View>
        </View>
        <View style={[styles.actionSheetlistCell2, styles.actionSpaceBlock]}>
          <Image
            style={[styles.callConnectingIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/6-copy.png")}
          />
          <View style={styles.button1FlexBox}>
            <Text style={styles.label18}>Sao chép số</Text>
            <View style={[styles.icon20x20, styles.iconLayout1]}>
              <View style={styles.illustration} />
            </View>
          </View>
        </View>
        <View style={[styles.actionSheetlistCell3, styles.actionSpaceBlock]}>
          <Image
            style={[styles.callConnectingIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/10-notebook.png")}
          />
          <View style={styles.button1FlexBox}>
            <Text style={styles.label18}>Lưu vào thông tin khách hàng</Text>
            <View style={[styles.icon20x20, styles.iconLayout1]}>
              <View style={styles.illustration} />
            </View>
          </View>
        </View>
        <View style={[styles.homeindicator2, styles.homeindicatorPosition]}>
          <View style={[styles.homeIndicator1, styles.homeLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  iconLayout1: {
    width: 20,
    height: 20,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  titleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  luTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  luPosition: {
    right: 16,
    top: 10,
    position: "absolute",
  },
  tabFlexBox: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 8,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
  },
  text1Typo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  badgeSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  valueTypo: {
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    alignSelf: "stretch",
  },
  formtextSpaceBlock: {
    marginTop: 16,
    width: 343,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flex: 1,
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  button1FlexBox: {
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  letterPosition1: {
    display: "flex",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0,
    alignItems: "center",
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
    marginTop: -10,
    display: "flex",
    color: Color.labelColorLightPrimary,
    top: "50%",
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularCallout,
    letterSpacing: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  homeindicatorPosition: {
    bottom: 0,
    position: "absolute",
  },
  homeLayout: {
    height: 5,
    width: 134,
    borderRadius: Border.br_81xl,
    bottom: 8,
    backgroundColor: Color.labelColorLightPrimary,
    left: "50%",
    position: "absolute",
  },
  actionSpaceBlock: {
    paddingTop: Padding.p_base,
    height: 52,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  numberOptionCustomerInformationChild: {
    backgroundColor: Color.colorGray_300,
    height: 819,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  text: {
    color: Color.colorGray_200,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularCallout,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
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
    width: 375,
    overflow: "hidden",
  },
  validateIcon: {
    display: "none",
    overflow: "hidden",
  },
  description: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  closeIcon: {
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  alert: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
  },
  leftIcon: {
    zIndex: 0,
    overflow: "hidden",
  },
  title1: {
    color: Color.textPrimary,
    textAlign: "center",
  },
  title: {
    zIndex: 1,
    flex: 1,
  },
  lu: {
    textAlign: "right",
    zIndex: 2,
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  filterIcon: {
    zIndex: 3,
    height: 24,
    width: 24,
    display: "none",
    overflow: "hidden",
  },
  titlePage: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    width: 375,
  },
  socialIcon: {
    borderRadius: Border.br_base,
  },
  label: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    color: Color.brandPrimary,
  },
  number: {
    color: Color.textWhite,
    textAlign: "center",
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  label1: {
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  badge1: {
    width: 16,
  },
  tab3: {
    display: "none",
  },
  tabControl: {
    flexDirection: "row",
    display: "none",
    width: 375,
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 0.45,
    elevation: 0.45,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    backgroundColor: Color.textWhite,
  },
  text1: {
    color: Color.otherRed,
    textAlign: "left",
    display: "none",
  },
  label7: {
    color: Color.textSecondary,
    marginLeft: 2,
    textAlign: "left",
  },
  label6: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  value: {
    color: Color.textPrimary,
    height: 20,
  },
  formtext: {
    zIndex: 5,
    width: 343,
  },
  value1: {
    color: Color.brandPrimary,
    height: 20,
  },
  formtext1: {
    alignSelf: "stretch",
  },
  formtextParent: {
    zIndex: 4,
  },
  formtext2: {
    zIndex: 3,
  },
  formtext3: {
    zIndex: 2,
  },
  formtext4: {
    zIndex: 1,
  },
  value5: {
    color: Color.textPrimary,
  },
  formtextGroup: {
    zIndex: 0,
  },
  thngTinKhchHng: {
    padding: Padding.p_base,
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  iconsetplaceholder: {
    display: "none",
  },
  text8: {
    color: Color.textPrimary,
  },
  iconsetplaceholder1: {
    marginLeft: 8,
    display: "none",
  },
  button: {
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 41,
    borderStyle: "solid",
    flexDirection: "row",
    display: "none",
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
  text9: {
    color: Color.textDisable,
  },
  button1: {
    backgroundColor: Color.tagGray100,
    height: 40,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flex: 1,
  },
  buttonParent: {
    padding: Padding.p_base,
    display: "none",
    width: 375,
  },
  keycontainerShadowBox1: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    position: "absolute",
    width: "100%",
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
  key2: {
    left: 75,
  },
  key3: {
    left: 113,
  },
  key4: {
    left: 150,
  },
  key5: {
    left: 188,
  },
  key6: {
    right: 113,
    left: 225,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key7: {
    left: 262,
  },
  key8: {
    left: 300,
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
  key10: {
    right: 299,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  key11: {
    left: 38,
  },
  key12: {
    left: 75,
  },
  key13: {
    left: 112,
  },
  key14: {
    left: 150,
  },
  key15: {
    right: 112,
    left: 187,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key16: {
    left: 225,
  },
  key17: {
    left: 262,
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
  key19: {
    right: 222,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
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
  key21: {
    right: 149,
    left: 73,
    height: 42,
    top: 0,
    position: "absolute",
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
  key23: {
    right: 74,
    left: 149,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key24: {
    right: 37,
    left: 185,
    height: 42,
    top: 0,
    position: "absolute",
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
  keycontainerShadowBox: {
    backgroundColor: Color.colorDarkgray_100,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    position: "absolute",
    width: "100%",
  },
  letter26: {
    width: 91,
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    width: 175,
  },
  key27: {
    flex: 1,
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
  },
  homeindicator: {
    left: 1,
    height: 34,
    right: 0,
  },
  alphabetickeyboard: {
    backgroundColor: Color.colorLightgray_100,
    height: 278,
    display: "none",
    width: 375,
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
  },
  homeindicator1: {
    height: 34,
    width: 375,
  },
  actionSheetfooter: {
    minHeight: 34,
    backgroundColor: Color.textWhite,
  },
  headerParent: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  numberOptionCustomerInformationItem: {
    opacity: 0.4,
    backgroundColor: Color.labelColorLightPrimary,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  callConnectingIcon: {
    overflow: "hidden",
  },
  label18: {
    color: Color.textBlack,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  illustration: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.neutral4,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon20x20: {
    marginLeft: 8,
    display: "none",
  },
  actionSheetlistCell: {
    zIndex: 0,
  },
  actionSheetlistCell1: {
    zIndex: 1,
    display: "none",
  },
  actionSheetlistCell2: {
    zIndex: 2,
  },
  actionSheetlistCell3: {
    zIndex: 3,
    display: "none",
  },
  homeindicator2: {
    marginLeft: -187.5,
    height: 34,
    zIndex: 4,
    left: "50%",
    width: 375,
  },
  actionSheetst: {
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_13xl,
    minHeight: 240,
    width: 374,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  numberOptionCustomerInformation: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default NumberOptionCustomerInformation2;
