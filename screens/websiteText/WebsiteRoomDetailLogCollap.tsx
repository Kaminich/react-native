import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../../GlobalStyles";

const WebsiteRoomDetailLogCollap = () => {
  return (
    <View style={styles.websiteRoomDetailLogCollap}>
      <View style={styles.roomheaderParent}>
        <View style={[styles.roomheader, styles.composerFlexBox]}>
          <Image
            style={[styles.leftIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <View style={styles.roommessageavt}>
              <View style={styles.avt}>
                <Text style={[styles.k, styles.kTypo]}>1</Text>
              </View>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Image
                  style={[styles.mobileIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/mobile1.png")}
                />
                <View style={styles.returnVisitorParent}>
                  <Image
                    style={styles.returnVisitorIcon}
                    resizeMode="cover"
                    source={require("../../assets/return-visitor1.png")}
                  />
                  <Text style={[styles.lMinhTr, styles.lMinhTrTypo]}>
                    154.214.144.116
                  </Text>
                  <Image
                    style={[styles.ficheckSquareIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/fichecksquare.png")}
                  />
                  <Image
                    style={styles.statusIcon}
                    resizeMode="cover"
                    source={require("../../assets/status.png")}
                  />
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.roomlistNhnSpaceBlock]}>
                <View style={[styles.purple, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.thmNHng, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../../assets/thm-n-hng.png")}
          />
          <Image
            style={[styles.optionsVerticalIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../../assets/optionsvertical.png")}
          />
        </View>
        <View style={[styles.khungChat, styles.avt1FlexBox]}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeClr]}>11:00</Text>
              <View style={styles.logFlexBox}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                    <Text style={styles.text2}>{` `}</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.truyCp1}>{`đã truy cập `}</Text>
                  </Text>
                  <Text style={styles.xemThmTypo}>
                    <Text style={styles.internetCNhn}>
                      {" "}
                      Internet cá nhân - FPT Telecom
                    </Text>
                    {` `}
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[styles.messagesocialProfile, styles.messagelogSpaceBlock]}
            >
              <View style={styles.parentFlexBox}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Trang tiếp cận:
                </Text>
                <View style={styles.fptcomvnWrapper}>
                  <Text style={[styles.fptcomvn, styles.textTypo]}>
                    fpt.com.vn
                  </Text>
                </View>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Nhà mạng:
                </Text>
                <View style={styles.fptcomvnWrapper}>
                  <Text style={[styles.fptcomvn, styles.textTypo]}>
                    FPT Telecom
                  </Text>
                </View>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  IP khách:
                </Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  172.227.165.4.100
                </Text>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Vị Trí:
                </Text>
                <View style={styles.hoChiMinhCityParent}>
                  <Text style={[styles.hoChiMinh, styles.textTypo]}>
                    Ho Chi Minh city
                  </Text>
                  <Text style={[styles.xemThm, styles.xemThmTypo]}>
                    Xem thêm
                  </Text>
                </View>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Định vị theo
                </Text>
                <Text style={[styles.location, styles.textTypo]}>Location</Text>
                <Image
                  style={[styles.uinfocircle1Icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/uinfocircle1.png")}
                />
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Thiết bị:
                </Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  Mobile - SM998
                </Text>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Trình duyệt:
                </Text>
                <Text style={[styles.text3, styles.textTypo]}>Chrome</Text>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Ngày tiếp cận:
                </Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  02/11/2021 10:07
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagelogSpaceBlock]}>
              <View style={[styles.avt1, styles.avt1FlexBox]}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt11.png")}
                />
              </View>
              <View style={styles.huongnt256Parent}>
                <Text style={[styles.huongnt256, styles.labelLayout]}>
                  https://fptcore.net
                </Text>
                <View
                  style={[styles.messageitem, styles.roomlistNhnSpaceBlock]}
                >
                  <View
                    style={[
                      styles.messageTypetext,
                      styles.helperTextSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.tiCnH, styles.textLayout]}>
                      Lời chào tự động khi khách vào web
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.messagelogAction1, styles.messagelogSpaceBlock]}
            >
              <Text style={[styles.time1, styles.timeClr]}>12</Text>
              <View style={[styles.logMessagenormal1, styles.logFlexBox]}>
                <Text style={[styles.xemHotNg, styles.textLayout]}>
                  Xem hoạt động trước đó
                </Text>
                <Image
                  style={[styles.doubleUp, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/double--up1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.messagelogAction2, styles.messagelogSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>11:04</Text>
              <View style={[styles.logMessagenormal1, styles.logFlexBox]}>
                <Text style={[styles.text5, styles.textTypo]}>
                  154.214.144.116
                </Text>
                <Text style={[styles.thuNhCa, styles.textLayout]}>
                  đã thu nhỏ cửa sổ chat
                </Text>
                <Image
                  style={[styles.activityFeedIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon22.png")}
                />
              </View>
            </View>
            <View
              style={[styles.messagelogAction2, styles.messagelogSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                    <Text style={styles.text2}>{` `}</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.truyCp1}>{`đã truy cập `}</Text>
                  </Text>
                  <Text style={styles.xemThmTypo}>
                    <Text style={styles.internetCNhn}>
                      {" "}
                      Internet cá nhân - FPT Telecom
                    </Text>
                    {` `}
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[styles.messagelogAction2, styles.messagelogSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                    <Text style={styles.text2}>{` `}</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.truyCp1}>{`đã truy cập `}</Text>
                  </Text>
                  <Text style={[styles.giLuxWifi, styles.xemThmTypo]}>
                    Gói Lux (wifi 6) - FPT Telecom
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[styles.messagelogAction2, styles.messagelogSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                    <Text style={styles.text2}>{` `}</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.truyCp1}>{`đã truy cập `}</Text>
                  </Text>
                  <Text style={[styles.giLuxWifi, styles.xemThmTypo]}>
                    {" "}
                    Liên hệ - FPT Telecom
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[styles.messagelogAction2, styles.messagelogSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                    <Text style={styles.text2}>{` `}</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.truyCp1}>{`đã truy cập `}</Text>
                  </Text>
                  <Text style={styles.xemThmTypo}>
                    <Text style={styles.internetCNhn}>
                      {" "}
                      Internet cá nhân - FPT Telecom
                    </Text>
                    {` `}
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[styles.messagelogAction1, styles.messagelogSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                    <Text style={styles.text2}>{` `}</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.truyCp1}>{`đã truy cập `}</Text>
                  </Text>
                  <Text style={styles.xemThmTypo}>
                    <Text style={styles.internetCNhn}>
                      {" "}
                      Internet cá nhân - FPT Telecom
                    </Text>
                    {` `}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={[styles.helperText, styles.helperTextSpaceBlock]}>
            <Text style={[styles.description, styles.textLayout]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.helperTextSpaceBlock]}>
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer, styles.composerFlexBox]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.timeClr]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.emojiIconPosition]}
                resizeMode="cover"
                source={require("../../assets/emoji111.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../../assets/camera.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../../assets/mic3.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.emojiIconPosition]} />
          </View>
        </View>
      </View>
      <View style={[styles.statusbarIphone13, styles.notchIconPosition]}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
          resizeMode="cover"
          source={require("../../assets/notch1.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text21, styles.text21Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text21Position]}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  composerFlexBox: {
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.textWhite,
  },
  iconLayout2: {
    height: 24,
    width: 24,
  },
  kTypo: {
    fontSize: FontSize.headlineSemiBold_size,
    lineHeight: 22,
    letterSpacing: 0,
  },
  iconLayout1: {
    width: 12,
    display: "none",
    height: 12,
    overflow: "hidden",
  },
  lMinhTrTypo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    color: Color.textPrimary,
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  roomlistNhnSpaceBlock: {
    marginTop: 4,
    flexDirection: "row",
  },
  redFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelTypo: {
    color: Color.textWhite,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  avt1FlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  timeClr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  messagelogSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  parentFlexBox: {
    width: 311,
    alignItems: "center",
    flexDirection: "row",
  },
  xemThmTypo: {
    color: Color.blue,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  labelLayout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  helperTextSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  logFlexBox: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
  },
  emojiIconPosition: {
    bottom: 8,
    position: "absolute",
  },
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
  text21Position: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  leftIcon: {
    overflow: "hidden",
  },
  k: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  avt: {
    height: "100%",
    top: "0%",
    left: "0%",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    backgroundColor: Color.tagGray100,
    borderRadius: Border.br_5xl,
    bottom: "0%",
    right: "0%",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  socialIcon: {
    height: "37.5%",
    width: "37.5%",
    top: "62.5%",
    left: "62.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_base,
    bottom: "0%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  roommessageavt: {
    width: 40,
    height: 40,
  },
  mobileIcon: {
    display: "none",
    height: 12,
  },
  returnVisitorIcon: {
    width: 20,
    height: 20,
  },
  lMinhTr: {
    textAlign: "left",
    marginLeft: 8,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  ficheckSquareIcon: {
    display: "none",
    marginLeft: 8,
    overflow: "hidden",
  },
  statusIcon: {
    width: 8,
    height: 8,
    marginLeft: 8,
  },
  returnVisitorParent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  name: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  closeIcon: {
    display: "none",
    height: 12,
    marginLeft: 8,
  },
  purple: {
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
  },
  yellow: {
    marginLeft: 2,
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  blue: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    display: "none",
  },
  green: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    display: "none",
  },
  red: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    display: "none",
  },
  xTag: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
  },
  roomlistNhn: {
    display: "none",
    alignSelf: "stretch",
  },
  nameParent: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 1,
  },
  room: {
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  thmNHng: {
    display: "none",
    marginLeft: 10,
  },
  optionsVerticalIcon: {
    marginLeft: 10,
    overflow: "hidden",
  },
  roomheader: {
    borderColor: Color.divider,
    borderBottomWidth: 1,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  time: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    color: Color.textSecondary,
    textAlign: "center",
  },
  text1: {
    color: Color.brandPrimary,
  },
  text2: {
    color: Color.textPrimary,
  },
  truyCp1: {
    fontFamily: FontFamily.defaultRegularCallout,
  },
  internetCNhn: {
    textDecorationLine: "underline",
  },
  truyCpInternetContainer: {
    textAlign: "center",
    letterSpacing: 0,
    flex: 1,
  },
  messagelogAction: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  trangTipCn: {
    display: "flex",
    width: 100,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    alignItems: "center",
  },
  fptcomvn: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  fptcomvnWrapper: {
    marginLeft: 12,
    flex: 1,
  },
  nhMngParent: {
    marginTop: 8,
  },
  text3: {
    marginLeft: 12,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
    letterSpacing: 0,
    flex: 1,
  },
  hoChiMinh: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
    letterSpacing: 0,
  },
  xemThm: {
    marginLeft: 4,
    textDecorationLine: "underline",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  hoChiMinhCityParent: {
    marginLeft: 12,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  location: {
    marginLeft: 12,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
    letterSpacing: 0,
  },
  uinfocircle1Icon: {
    marginLeft: 12,
    overflow: "hidden",
  },
  messagesocialProfile: {
    padding: Padding.p_base,
    borderRadius: Border.br_xl,
    backgroundColor: Color.tagGray100,
  },
  avtIcon: {
    borderRadius: Border.br_11xl,
    width: 28,
    height: 28,
  },
  avt1: {
    paddingBottom: Padding.p_9xs,
    flexDirection: "row",
  },
  huongnt256: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    color: Color.textPrimary,
    textAlign: "center",
  },
  tiCnH: {
    maxWidth: 238,
    color: Color.textWhite,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  messageTypetext: {
    maxWidth: 270,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  messageitem: {
    backgroundColor: Color.brandPrimary,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  huongnt256Parent: {
    marginLeft: 8,
  },
  messagecell: {
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  time1: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    color: Color.textSecondary,
    textAlign: "center",
    display: "none",
  },
  xemHotNg: {
    color: Color.brandPrimary,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
  },
  doubleUp: {
    marginLeft: 2,
    overflow: "hidden",
  },
  logMessagenormal1: {
    alignItems: "center",
  },
  messagelogAction1: {
    alignItems: "center",
  },
  text5: {
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  thuNhCa: {
    marginLeft: 2,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  activityFeedIcon: {
    marginLeft: 2,
  },
  messagelogAction2: {
    display: "none",
    alignItems: "center",
  },
  giLuxWifi: {
    textDecorationLine: "underline",
  },
  layoutBlocksVertical: {
    flex: 1,
  },
  khungChat: {
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_21xl,
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.textWhite,
    alignItems: "flex-end",
  },
  description: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  helperText: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingHorizontal: Padding.p_base,
    width: 375,
  },
  icon: {
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  nhpTinNhn: {
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    lineHeight: 22,
  },
  nhpTinNhnWrapper: {
    maxHeight: 72,
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  emojiIcon: {
    right: 8,
    zIndex: 1,
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  composer: {
    borderRadius: Border.br_5xs,
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_4xs,
    marginLeft: 12,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  icon1: {
    marginLeft: 12,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  composeBar1: {
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.neutral3F5F5F5,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  homeIndicator: {
    marginLeft: -66.5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  composeBar: {
    justifyContent: "flex-end",
    backgroundColor: Color.neutral3F5F5F5,
    width: 375,
  },
  roomheaderParent: {
    top: 47,
    height: 765,
    width: 375,
    left: 0,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    left: "50%",
    display: "none",
  },
  text21: {
    color: Color.colorGray_200,
    width: 54,
    top: 1,
    fontFamily: FontFamily.defaultRegularCallout,
    fontWeight: "600",
    height: 20,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    left: 0,
  },
  statusbarTime: {
    marginLeft: -27,
    top: 0,
    borderRadius: Border.br_5xl,
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
    left: "50%",
    height: 12,
  },
  rightSide: {
    marginLeft: 86.5,
    top: 19,
    width: 77,
  },
  statusbarIphone13: {
    marginLeft: -187.5,
    height: 47,
    top: 0,
    left: "50%",
    overflow: "hidden",
    width: 375,
  },
  websiteRoomDetailLogCollap: {
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default WebsiteRoomDetailLogCollap;
