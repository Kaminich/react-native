import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";

const WebsiteRoomDetailMapInfo = () => {
  return (
    <View style={styles.websiteRoomDetailThngTin}>
      <View style={[styles.roomheaderParent, styles.roomheaderParentPosition]}>
        <View style={styles.roomheader}>
          <Image
            style={[styles.leftIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <View style={styles.roommessageavt}>
              <View style={styles.avt}>
                <Text style={[styles.k, styles.kLayout]}>1</Text>
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
                  style={[styles.mobileIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../../assets/mobile1.png")}
                />
                <View style={styles.returnVisitorParent}>
                  <Image
                    style={styles.iconLayout1}
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
              <View style={styles.roomlistNhn}>
                <View style={[styles.purple, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    chưa gọi
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>+4</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.thmNHng, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/thm-n-hng.png")}
          />
          <Image
            style={[styles.optionsVerticalIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/optionsvertical.png")}
          />
        </View>
        <View style={[styles.khungChat, styles.khungChatBg]}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeClr]}>11:00</Text>
              <View style={styles.logMessagenormal}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo1}>
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
              style={[
                styles.messagesocialProfile,
                styles.messagecellSpaceBlock,
              ]}
            >
              <View style={styles.parentFlexBox}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Trang tiếp cận:
                </Text>
                <View style={styles.fptcomvnWrapper}>
                  <Text style={[styles.fptcomvn, styles.textTypo1]}>
                    fpt.com.vn
                  </Text>
                </View>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Nhà mạng:
                </Text>
                <View style={styles.fptcomvnWrapper}>
                  <Text style={[styles.fptcomvn, styles.textTypo1]}>
                    FPT Telecom
                  </Text>
                </View>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  IP khách:
                </Text>
                <Text style={[styles.text3, styles.textTypo1]}>
                  172.227.165.4.100
                </Text>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Vị Trí:
                </Text>
                <View style={styles.hoChiMinhCityParent}>
                  <Text style={[styles.hoChiMinh, styles.textTypo1]}>
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
                <Text style={[styles.location, styles.textTypo1]}>
                  Location
                </Text>
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
                <Text style={[styles.text3, styles.textTypo1]}>
                  Mobile - SM998
                </Text>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Trình duyệt:
                </Text>
                <Text style={[styles.text3, styles.textTypo1]}>Chrome</Text>
              </View>
              <View style={[styles.nhMngParent, styles.parentFlexBox]}>
                <Text style={[styles.trangTipCn, styles.textLayout]}>
                  Ngày tiếp cận:
                </Text>
                <Text style={[styles.text3, styles.textTypo1]}>
                  02/11/2021 10:07
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellSpaceBlock]}>
              <View style={styles.avt1}>
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
                <View style={[styles.messageitem, styles.button1Bg]}>
                  <View style={styles.messageTypetext}>
                    <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                      Lời chào tự động khi khách vào web
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.messagelogAction1, styles.messagecellSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>11:03</Text>
              <View style={styles.logMessagenormal1}>
                <Text style={[styles.text5, styles.textTypo1]}>
                  154.214.144.116
                </Text>
                <Text style={[styles.mRngCa, styles.textLayout]}>
                  đã mở rộng cửa sổ chat
                </Text>
                <Image
                  style={[styles.activityFeedIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon21.png")}
                />
              </View>
            </View>
            <View
              style={[styles.messagelogAction1, styles.messagecellSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>11:04</Text>
              <View style={styles.logMessagenormal1}>
                <Text style={[styles.text5, styles.textTypo1]}>
                  154.214.144.116
                </Text>
                <Text style={[styles.mRngCa, styles.textLayout]}>
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
              style={[styles.messagelogAction3, styles.messagecellSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logMessagenormal}>
                <Text style={[styles.text5, styles.textTypo1]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.textLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellSpaceBlock]}>
              <View style={styles.avt1}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo1]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem1}>
                <View style={styles.messageTypetext}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.messagelogAction1, styles.messagecellSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logMessagenormal}>
                <Text style={[styles.text5, styles.textTypo1]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.textLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellSpaceBlock]}>
              <View style={styles.avt1}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo1]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem1}>
                <View style={styles.messageTypetext}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellSpaceBlock]}>
              <View style={styles.avt1}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo1]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem1}>
                <View style={styles.messageTypetext}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={styles.helperText}>
            <Text style={[styles.description, styles.textLayout]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={styles.composeBar1}>
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer, styles.buttonFlexBox]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={styles.nhpTinNhn}>Nhập tin nhắn</Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.emojiIconPosition]}
                resizeMode="cover"
                source={require("../../assets/emoji111.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/camera.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/mic2.png")}
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
            <Text style={[styles.text7, styles.text7Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text7Position]}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.websiteRoomDetailThngTinChild,
          styles.roomheaderParentPosition,
        ]}
      />
      <View style={[styles.confirmation, styles.notchIconPosition]}>
        <Image
          style={[styles.closeIcon7, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../../assets/23-close.png")}
        />
        <View style={styles.contentParent}>
          <View style={styles.messagelogAction}>
            <View style={styles.confirmationIcon}>
              <Image
                style={styles.validateIcon}
                resizeMode="cover"
                source={require("../../assets/validate4.png")}
              />
            </View>
            <View style={styles.titleParent}>
              <Text style={[styles.title, styles.textTypo1]}>
                Phương thức định vị
              </Text>
              <Text
                style={[styles.text8, styles.textLayout]}
              >{`- Theo location: thông tin định vị được khách hàng chia sẻ, có tính chính xác cao
- Theo IP: thông tin theo địa chỉ IP của khách hàng, có tính chính xác thấp hơn`}</Text>
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
              <Text style={[styles.text9, styles.textTypo]}>Cancel</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
            </View>
            <View style={[styles.button1, styles.button1Bg]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text10, styles.textTypo]}>Đã hiểu</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  roomheaderParentPosition: {
    left: 0,
    width: 375,
    position: "absolute",
  },
  iconLayout3: {
    height: 24,
    width: 24,
  },
  kLayout: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
  },
  iconLayout2: {
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
  labelLayout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  khungChatBg: {
    backgroundColor: Color.textWhite,
    alignItems: "flex-end",
    overflow: "hidden",
  },
  timeClr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  messagecellSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  textTypo1: {
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
  button1Bg: {
    backgroundColor: Color.brandPrimary,
    flexDirection: "row",
  },
  tiCnHTypo: {
    maxWidth: 238,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  buttonFlexBox: {
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.textWhite,
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
  text7Position: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    marginLeft: 8,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  leftIcon: {
    overflow: "hidden",
  },
  k: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
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
  lMinhTr: {
    textAlign: "left",
    marginLeft: 8,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
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
    color: Color.textWhite,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
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
    marginTop: 4,
    display: "none",
    flexDirection: "row",
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
    borderStyle: "solid",
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  time: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: 0,
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
  logMessagenormal: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
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
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  huongnt256: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    color: Color.textPrimary,
    textAlign: "center",
  },
  tiCnH: {
    color: Color.textWhite,
  },
  messageTypetext: {
    maxWidth: 270,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  messageitem: {
    borderRadius: Border.br_xl,
    marginTop: 4,
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
  text5: {
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  mRngCa: {
    marginLeft: 2,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  activityFeedIcon: {
    marginLeft: 2,
  },
  logMessagenormal1: {
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  messagelogAction1: {
    display: "none",
    alignItems: "center",
  },
  honTtCuc: {
    width: 173,
    marginLeft: 2,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  messagelogAction3: {
    height: 32,
    display: "none",
    alignItems: "center",
  },
  huongnt2561: {
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    display: "none",
    marginLeft: 8,
    textAlign: "center",
    letterSpacing: 0,
  },
  tiCnH1: {
    color: Color.textColorPrimary,
  },
  messageitem1: {
    borderRadius: Border.br_xl,
    marginLeft: 8,
    backgroundColor: Color.tagGray100,
    overflow: "hidden",
    flexDirection: "row",
  },
  messagecell1: {
    display: "none",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  layoutBlocksVertical: {
    flex: 1,
  },
  khungChat: {
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_21xl,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  description: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  helperText: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
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
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 22,
    letterSpacing: 0,
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
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_4xs,
    marginLeft: 12,
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
    paddingVertical: Padding.p_5xs,
    alignItems: "flex-end",
    flexDirection: "row",
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
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    left: "50%",
    height: 32,
    display: "none",
  },
  text7: {
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
  websiteRoomDetailThngTinChild: {
    backgroundColor: Color.colorGray_400,
    opacity: 0.7,
    top: 0,
    width: 375,
    height: 812,
  },
  closeIcon7: {
    overflow: "hidden",
  },
  validateIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  confirmationIcon: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.tagSky100,
    width: 60,
    height: 60,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    textAlign: "center",
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  text8: {
    marginTop: 8,
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  titleParent: {
    marginTop: 16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  iconsetplaceholder: {
    display: "none",
  },
  text9: {
    color: Color.textPrimary,
  },
  iconsetplaceholder1: {
    display: "none",
    marginLeft: 8,
  },
  button: {
    borderColor: Color.colorGainsboro_100,
    height: 41,
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    display: "none",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
  },
  text10: {
    color: Color.textWhite,
  },
  button1: {
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    marginLeft: 12,
    justifyContent: "center",
    height: 40,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flex: 1,
  },
  buttonGroup: {
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  contentParent: {
    alignSelf: "stretch",
  },
  confirmation: {
    marginTop: -155,
    marginLeft: -190,
    top: "50%",
    shadowColor: "rgba(5, 16, 55, 0.15)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_7xs,
    left: "50%",
    padding: Padding.p_base,
    width: 343,
    alignItems: "flex-end",
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  websiteRoomDetailThngTin: {
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default WebsiteRoomDetailMapInfo;
