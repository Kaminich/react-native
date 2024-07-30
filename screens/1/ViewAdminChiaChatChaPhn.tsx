import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../../GlobalStyles";

const ViewAdminChiaChatChaPhn = () => {
  return (
    <View style={[styles.viewAdminChiaChatChaPhn, styles.chatBg]}>
      <View style={styles.roomheaderParent}>
        <View style={styles.roomheader}>
          <Image
            style={[styles.leftIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt49.png")}
            />
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Image
                  style={[styles.mobileIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/mobile1.png")}
                />
                <View style={styles.returnVisitorParent}>
                  <Image
                    style={[
                      styles.returnVisitorIcon,
                      styles.returnVisitorIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../../assets/return-visitor1.png")}
                  />
                  <Text style={[styles.lMinhTr, styles.lMinhTrLayout]}>
                    Lê Minh Trí
                  </Text>
                  <Image
                    style={[
                      styles.ficheckSquareIcon,
                      styles.messagestatusLayout,
                    ]}
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
                  <Text style={[styles.label, styles.kbTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.kbTypo]}>Tư vấn sp</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.kbTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.kbTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.kbTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.kbTypo]}>liên hệ lại</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.kbTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.thmNHng, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/thm-n-hng.png")}
          />
          <Image
            style={[styles.optionsVerticalIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/optionsvertical.png")}
          />
        </View>
        <View style={[styles.khungChat, styles.khungChatFlexBox]}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={[styles.logMessagenormal, styles.logFlexBox]}>
                <Text style={styles.huongntTypo}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.honTtCucTypo]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.huongntTypo]}>
                HuongNT256
              </Text>
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.messagecellFlexBox}>
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text style={styles.huongntTypo}>Bạn</Text>
                <Text
                  style={[styles.chiaChatCho, styles.honTtCucTypo]}
                >{`đã chia chat cho `}</Text>
                <Text style={[styles.huongnt2561, styles.huongntTypo]}>
                  HuongNT256
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.huongntTypo]}>
                HuongNT256
              </Text>
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi muốn tìm hiểu về sản phẩm dịch vụ bên bạn, vui lòng tư
                    vấn giúp tôi
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell2, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem2, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH2, styles.tiCnHTypo]}>
                    Cảm ơn bạn đã quan tâm
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={styles.messagestatusLayout} />
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.huongntTypo]}>
                HuongNT256
              </Text>
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Gửi cho tôi xin thông tin
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell2, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem2, styles.messageitemLayout]}>
                <View style={[styles.messageTypefile, styles.messageFlexBox]}>
                  <Image
                    style={styles.returnVisitorIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/attachment--filetypes.png")}
                  />
                  <View style={styles.fileName}>
                    <Text
                      style={[styles.fileDinhKemdoc, styles.honTtCucTypo]}
                      numberOfLines={1}
                    >
                      file_dinh_kem.doc
                    </Text>
                    <Text style={[styles.kb, styles.kbTypo]}>4.2 KB</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox1]}>
                <Image
                  style={styles.messagestatusLayout}
                  resizeMode="cover"
                  source={require("../../assets/messagestatus.png")}
                />
              </View>
            </View>
            <View style={[styles.messagelogAction2, styles.messagecellFlexBox]}>
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text style={styles.huongntTypo}>Bạn</Text>
                <Text
                  style={[styles.chiaChatCho, styles.honTtCucTypo]}
                >{`đã chỉ định chat cho `}</Text>
                <Text style={[styles.huongnt2561, styles.huongntTypo]}>
                  HuongNT256
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={styles.helperText}>
            <Text style={[styles.description, styles.honTtCucTypo]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.khungChatFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer, styles.icon1FlexBox]}>
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
            <View style={[styles.icon1, styles.icon1FlexBox]}>
              <Image
                style={[styles.leftIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/camera1.png")}
              />
            </View>
            <View style={[styles.icon1, styles.icon1FlexBox]}>
              <Image
                style={[styles.leftIcon, styles.iconLayout1]}
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
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.textPosition]}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBg: {
    backgroundColor: Color.textWhite,
    flex: 1,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    width: 12,
    display: "none",
    height: 12,
    overflow: "hidden",
  },
  returnVisitorIconLayout: {
    height: 20,
    width: 20,
  },
  lMinhTrLayout: {
    lineHeight: 22,
    textAlign: "left",
  },
  messagestatusLayout: {
    height: 16,
    width: 16,
  },
  redFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  kbTypo: {
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  khungChatFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  timeClr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  logFlexBox: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
  },
  honTtCucTypo: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  messagecellFlexBox: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  huongntTypo: {
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  messageitemLayout: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
    flexDirection: "row",
  },
  messageFlexBox: {
    maxWidth: 270,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  tiCnHTypo: {
    maxWidth: 238,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  avtFlexBox: {
    paddingBottom: Padding.p_9xs,
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  avtFlexBox1: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon1FlexBox: {
    marginLeft: 12,
    alignItems: "center",
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
  textPosition: {
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
  roommessageavtIcon: {
    width: 40,
    height: 40,
  },
  mobileIcon: {
    display: "none",
    height: 12,
  },
  returnVisitorIcon: {
    display: "none",
  },
  lMinhTr: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    textAlign: "left",
    color: Color.textPrimary,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    lineHeight: 22,
    marginLeft: 8,
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
    fontSize: FontSize.caption1Regular_size,
    lineHeight: 16,
    color: Color.textWhite,
  },
  closeIcon: {
    display: "none",
    height: 12,
    marginLeft: 8,
  },
  purple: {
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_base,
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xs,
  },
  yellow: {
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_base,
    display: "none",
  },
  blue: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  green: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  red: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  xTag: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xs,
  },
  roomlistNhn: {
    marginTop: 4,
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
  },
  time: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
    textAlign: "center",
  },
  honTtCuc: {
    width: 173,
    textAlign: "center",
    marginLeft: 2,
    color: Color.textPrimary,
  },
  logMessagenormal: {
    display: "none",
  },
  messagelogAction: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  avtIcon: {
    borderRadius: Border.br_11xl,
    width: 28,
    height: 28,
  },
  huongnt256: {
    display: "none",
    marginLeft: 8,
  },
  tiCnH: {
    color: Color.textColorPrimary,
  },
  messageTypetext: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
  },
  messageitem: {
    backgroundColor: Color.tagGray100,
    marginLeft: 8,
  },
  messagecell: {
    overflow: "hidden",
    flexDirection: "row",
  },
  chiaChatCho: {
    textAlign: "center",
    marginLeft: 2,
    color: Color.textPrimary,
  },
  huongnt2561: {
    marginLeft: 2,
  },
  messagecell1: {
    display: "none",
    overflow: "hidden",
    flexDirection: "row",
  },
  tiCnH2: {
    color: Color.textWhite,
  },
  messageitem2: {
    backgroundColor: Color.brandPrimary,
    justifyContent: "flex-end",
  },
  status: {
    marginLeft: 4,
  },
  messagecell2: {
    justifyContent: "flex-end",
    display: "none",
    overflow: "hidden",
    flexDirection: "row",
  },
  fileDinhKemdoc: {
    maxWidth: 210,
    color: Color.textWhite,
    textAlign: "left",
    overflow: "hidden",
  },
  kb: {
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    color: Color.textGrayF3F4F6,
    maxWidth: 210,
    letterSpacing: 0,
  },
  fileName: {
    maxWidth: 210,
    marginLeft: 8,
    justifyContent: "center",
  },
  messageTypefile: {
    paddingVertical: Padding.p_7xs,
  },
  messagelogAction2: {
    display: "none",
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
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  description: {
    textAlign: "center",
    color: Color.textPrimary,
    flex: 1,
  },
  helperText: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_5xs,
    display: "none",
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
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  icon1: {
    height: 40,
  },
  composeBar1: {
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_5xs,
  },
  homeIndicator: {
    marginLeft: -66.5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    left: "50%",
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  composeBar: {
    backgroundColor: Color.neutral3F5F5F5,
    justifyContent: "flex-end",
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
  text: {
    fontFamily: FontFamily.defaultRegularCallout,
    color: Color.colorGray_200,
    width: 54,
    top: 1,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    height: 20,
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
  viewAdminChiaChatChaPhn: {
    width: "100%",
    height: 681,
  },
});

export default ViewAdminChiaChatChaPhn;
