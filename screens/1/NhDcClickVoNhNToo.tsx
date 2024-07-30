import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const NhDcClickVoNhNToo = () => {
  return (
    <View style={styles.nhDcClickVoNhNToo}>
      <View style={[styles.roomheaderParent, styles.roomheaderParentPosition]}>
        <View style={styles.roomheader}>
          <Image
            style={[styles.leftIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <Image
              style={[styles.roommessageavtIcon, styles.sendLayout]}
              resizeMode="cover"
              source={require("../../assets/roommessageavt49.png")}
            />
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Image
                  style={[styles.mobileIcon, styles.iconLayout1]}
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
                  <Text style={styles.lMinhTr}>Lê Minh Trí</Text>
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
                  <Text style={styles.label}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={styles.label}>Tư vấn sp</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={styles.label}>chưa đóng phí</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={styles.label}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={styles.label}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={styles.label}>liên hệ lại</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={styles.label}>+4</Text>
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
        <View style={styles.khungChat}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={[styles.logMessagenormal, styles.logFlexBox]}>
                <Text style={styles.bnTypo}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.honTtCucLayout]}>
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
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={styles.messageitem}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.sendBg]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Chào bạn, tôi có thể giúp gì cho bạn
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={styles.messagestatusLayout} />
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
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={styles.messageitem}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi muốn tìm hiểu về sản phẩm dịch vụ bên bạn, vui lòng tư
                    vấn giúp tôi
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.sendBg]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Cảm ơn bạn đã quan tâm
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={styles.messagestatusLayout} />
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
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={styles.messageitem}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Gửi cho tôi xin thông tin
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.sendBg]}>
                <View style={[styles.messageTypefile, styles.messageFlexBox]}>
                  <Image
                    style={styles.returnVisitorIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/attachment--filetypes3.png")}
                  />
                  <View style={styles.fileName}>
                    <Text
                      style={[styles.fileDinhKemdoc, styles.honTtCucLayout]}
                      numberOfLines={1}
                    >
                      file_dinh_kem.doc
                    </Text>
                    <Text style={styles.kb}>4.2 KB</Text>
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
            <View style={[styles.messagelogAction1, styles.messagecellFlexBox]}>
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text style={styles.bnTypo}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.honTtCucLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composerdefaultFlexBox}>
          <View style={[styles.composerdefault, styles.composerdefaultFlexBox]}>
            <View style={styles.option}>
              <Image
                style={styles.optionChild}
                resizeMode="cover"
                source={require("../../assets/frame-6607.png")}
              />
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../../assets/sticker2.png")}
              />
              <Image
                style={[styles.imageIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/image5.png")}
              />
              <Image
                style={[styles.imageIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/camera3.png")}
              />
              <Image
                style={[styles.imageIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/file.png")}
              />
            </View>
            <View style={styles.composerdefaultInner}>
              <View style={styles.cursorParent}>
                <View style={styles.cursor} />
                <Text style={[styles.nhpTinNhn, styles.honTtCucLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
            </View>
            <Image
              style={[styles.micIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../../assets/mic5.png")}
            />
            <View style={[styles.send, styles.sendBg]}>
              <Image
                style={[
                  styles.iconsendPlaneFill,
                  styles.returnVisitorIconLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/iconsendplanefill2.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
      <View style={styles.statusbarIphone13}>
        <Image
          style={styles.notchIcon}
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
      <View style={[styles.nhDcClickVoNhNTooChild, styles.image1IconLayout]} />
      <Image
        style={[styles.image1Icon, styles.image1IconLayout]}
        resizeMode="cover"
        source={require("../../assets/image15.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  roomheaderParentPosition: {
    left: 0,
    width: 375,
  },
  iconLayout2: {
    height: 24,
    width: 24,
  },
  sendLayout: {
    width: 40,
    height: 40,
  },
  iconLayout1: {
    width: 12,
    display: "none",
    height: 12,
    overflow: "hidden",
  },
  returnVisitorIconLayout: {
    height: 20,
    width: 20,
  },
  messagestatusLayout: {
    height: 16,
    width: 16,
  },
  redFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  timeClr: {
    color: Color.textSecondary,
    letterSpacing: 0,
  },
  logFlexBox: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
  },
  honTtCucLayout: {
    lineHeight: 20,
    fontFamily: FontFamily.text14Regular,
  },
  messagecellFlexBox: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  bnTypo: {
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
    letterSpacing: 0,
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
  sendBg: {
    backgroundColor: Color.brandPrimary,
    overflow: "hidden",
    flexDirection: "row",
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
  composerdefaultFlexBox: {
    backgroundColor: Color.neutral3F5F5F5,
    alignItems: "center",
    alignSelf: "stretch",
  },
  iconLayout: {
    marginLeft: 12,
    overflow: "hidden",
    height: 24,
    width: 24,
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
  image1IconLayout: {
    height: 812,
    position: "absolute",
  },
  leftIcon: {
    overflow: "hidden",
  },
  roommessageavtIcon: {
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
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
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
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
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
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
  },
  yellow: {
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  blue: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  green: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  red: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  xTag: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
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
    fontFamily: FontFamily.text14Regular,
  },
  honTtCuc: {
    width: 173,
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
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
    borderRadius: Border.br_xl,
    marginLeft: 8,
    overflow: "hidden",
    flexDirection: "row",
  },
  messagecell: {
    overflow: "hidden",
    flexDirection: "row",
  },
  tiCnH1: {
    color: Color.textWhite,
  },
  messageitem1: {
    justifyContent: "flex-end",
    borderRadius: Border.br_xl,
  },
  status: {
    marginLeft: 4,
  },
  messagecell1: {
    justifyContent: "flex-end",
    overflow: "hidden",
    flexDirection: "row",
  },
  fileDinhKemdoc: {
    maxWidth: 210,
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
    color: Color.textWhite,
    textAlign: "left",
    overflow: "hidden",
  },
  kb: {
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    color: Color.textGrayF3F4F6,
    maxWidth: 210,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
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
  messagelogAction1: {
    display: "none",
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
    backgroundColor: Color.textWhite,
  },
  optionChild: {
    borderRadius: Border.br_base,
    height: 24,
    width: 24,
  },
  imageIcon: {
    display: "none",
  },
  option: {
    flexDirection: "row",
  },
  cursor: {
    width: 1,
    height: 18,
    backgroundColor: Color.black,
    display: "none",
  },
  nhpTinNhn: {
    fontSize: FontSize.subheadlineSemiBold_size,
    color: Color.textSecondary,
    letterSpacing: 0,
    textAlign: "left",
  },
  cursorParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  composerdefaultInner: {
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    borderRadius: Border.br_xl,
    marginLeft: 8,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  micIcon: {
    display: "none",
    marginLeft: 8,
    overflow: "hidden",
  },
  iconsendPlaneFill: {
    overflow: "hidden",
  },
  send: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    padding: Padding.p_2xs,
    borderRadius: Border.br_5xl,
    display: "none",
    marginLeft: 8,
    justifyContent: "center",
    height: 40,
    width: 40,
    alignItems: "center",
  },
  composerdefault: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
    backgroundColor: Color.black,
    position: "absolute",
  },
  homeindicator: {
    height: 34,
    marginTop: -8,
    width: 375,
  },
  roomheaderParent: {
    top: 47,
    height: 765,
    width: 375,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    left: "50%",
    display: "none",
    position: "absolute",
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
    position: "absolute",
  },
  nhDcClickVoNhNTooChild: {
    top: 0,
    backgroundColor: Color.black,
    width: 375,
    left: 0,
  },
  image1Icon: {
    marginTop: -405.5,
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: Border.br_9xs,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  nhDcClickVoNhNToo: {
    width: "100%",
    height: 681,
    backgroundColor: Color.textWhite,
  },
});

export default NhDcClickVoNhNToo;
