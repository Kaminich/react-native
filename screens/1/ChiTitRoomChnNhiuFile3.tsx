import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Border, FontFamily, Color, FontSize } from "../../GlobalStyles";

const ChiTitRoomChnNhiuFile3 = () => {
  return (
    <View style={styles.chiTitRoomChnNhiuFile}>
      <View style={[styles.roomheaderParent, styles.parentLayout]}>
        <View style={[styles.roomheader, styles.buttonSpaceBlock]}>
          <Image
            style={[styles.leftIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt5.png")}
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
        <View style={styles.khungChat}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeTypo]}>12:05</Text>
              <View style={[styles.logMessagenormal, styles.logFlexBox]}>
                <Text style={styles.bnTypo}>Bạn</Text>
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
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={styles.messageitem}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecell1FlexBox]}>
              <View style={[styles.messageitem1, styles.messagecell1FlexBox]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Chào bạn, tôi có thể giúp gì cho bạn
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View
                  style={[styles.messagestatus, styles.messagestatusLayout]}
                />
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
            <View style={[styles.messagecell1, styles.messagecell1FlexBox]}>
              <View style={[styles.messageitem1, styles.messagecell1FlexBox]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Cảm ơn bạn đã quan tâm
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View
                  style={[styles.messagestatus, styles.messagestatusLayout]}
                />
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
            <View style={[styles.messagecell1, styles.messagecell1FlexBox]}>
              <View style={[styles.messageitem1, styles.messagecell1FlexBox]}>
                <View style={[styles.messageTypefile, styles.messageFlexBox]}>
                  <Image
                    style={styles.returnVisitorIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/attachment--filetypes3.png")}
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
                  style={[styles.messagestatus, styles.messagestatusLayout]}
                  resizeMode="cover"
                  source={require("../../assets/messagestatus.png")}
                />
              </View>
            </View>
            <View style={[styles.messagelogAction1, styles.messagecellFlexBox]}>
              <Text style={[styles.time, styles.timeTypo]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text style={styles.bnTypo}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.honTtCucTypo]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composerdefaultFlexBox}>
          <View style={[styles.composerdefault, styles.composerdefaultFlexBox]}>
            <Image
              style={[styles.leftIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/sticker3.png")}
            />
            <Image
              style={[styles.imageIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/image5.png")}
            />
            <Image
              style={[styles.imageIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/file1.png")}
            />
            <View
              style={[styles.composerdefaultInner, styles.roomheaderBorder]}
            >
              <View style={styles.cursorParent}>
                <View style={styles.cursor} />
                <Text style={[styles.ae, styles.aeTypo]}>Ae</Text>
              </View>
            </View>
            <Image
              style={[styles.imageIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/mic6.png")}
            />
          </View>
          <View style={styles.chooseImage}>
            <View style={[styles.frameParent, styles.parentLayout]}>
              <View style={styles.frameGroup}>
                <View style={styles.cameraParent}>
                  <Image
                    style={[styles.leftIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/camera7.png")}
                  />
                  <Text style={[styles.chpNh, styles.timeTypo]}>Chụp ảnh</Text>
                </View>
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                  <Image
                    style={[styles.frameChild, styles.frameChildLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18813.png")}
                  />
                  <View style={[styles.frameItem, styles.framePosition]} />
                  <View style={styles.badge}>
                    <Text style={[styles.number, styles.aeTypo]}>1</Text>
                  </View>
                </View>
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                  <Image
                    style={[styles.frameChild, styles.frameChildLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-1880.png")}
                  />
                  <View style={[styles.frameItem, styles.framePosition]} />
                  <View style={styles.badge}>
                    <Text style={[styles.number, styles.aeTypo]}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rectangleContainer}>
                <Image
                  style={[styles.rectangleIcon, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18799.png")}
                />
                <Image
                  style={[styles.frameChild1, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18819.png")}
                />
                <Image
                  style={[styles.frameChild1, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18806.png")}
                />
              </View>
              <View style={styles.rectangleContainer}>
                <Image
                  style={styles.frameChildLayout}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18802.png")}
                />
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18795.png")}
                />
                <Image
                  style={[styles.frameChild1, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18815.png")}
                />
              </View>
            </View>
            <View style={styles.homeindicator}>
              <View style={[styles.homeIndicator, styles.homeLayout]} />
            </View>
            <View style={[styles.homeindicator1, styles.parentLayout]}>
              <View style={[styles.homeIndicator1, styles.homeIndicator1Bg]} />
            </View>
            <View style={[styles.button, styles.logFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text, styles.kbTypo]}>Gửi 2</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.statusbarIphone13, styles.parentLayout]}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../../assets/notch1.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text1, styles.text1Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text1Position]}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <View
        style={[styles.chiTitRoomChnNhiuFileChild, styles.homeIndicator1Bg]}
      />
      <Image
        style={[styles.image17Icon, styles.parentLayout]}
        resizeMode="cover"
        source={require("../../assets/image-172.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 375,
    position: "absolute",
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
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
  messagestatusLayout: {
    width: 16,
    height: 16,
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
  timeTypo: {
    color: Color.textSecondary,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
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
  messagecell1FlexBox: {
    justifyContent: "flex-end",
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
  roomheaderBorder: {
    borderStyle: "solid",
    flexDirection: "row",
  },
  aeTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    lineHeight: 20,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  rectangleLayout: {
    height: 124,
    flex: 1,
  },
  frameChildLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  framePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  frameChildLayout: {
    height: 130,
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  homeLayout: {
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
  },
  homeIndicator1Bg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  text1Position: {
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
    height: 40,
    width: 40,
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
    height: 16,
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
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
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
    flexDirection: "row",
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  time: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: 0,
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
    backgroundColor: Color.brandPrimary,
    borderRadius: Border.br_xl,
  },
  messagestatus: {
    height: 16,
  },
  status: {
    marginLeft: 4,
  },
  messagecell1: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
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
  imageIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  cursor: {
    backgroundColor: Color.textBlack,
    width: 1,
    height: 18,
    display: "none",
  },
  ae: {
    color: Color.characterSecondary45,
    textAlign: "left",
  },
  cursorParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  composerdefaultInner: {
    borderColor: Color.brandPrimary,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    borderRadius: Border.br_xl,
    marginLeft: 8,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  composerdefault: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  chpNh: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  cameraParent: {
    backgroundColor: Color.backgroundGrayF8F8F8,
    paddingHorizontal: Padding.p_15xl,
    paddingVertical: Padding.p_21xl,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  frameChild: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  frameItem: {
    backgroundColor: Color.colorGray_1100,
  },
  number: {
    textAlign: "center",
    color: Color.textWhite,
  },
  badge: {
    top: 53,
    left: 53,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    backgroundColor: Color.brandPrimary,
    justifyContent: "center",
    overflow: "hidden",
    width: 24,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: 1,
  },
  frameGroup: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  rectangleIcon: {
    height: 124,
    flex: 1,
  },
  frameChild1: {
    marginLeft: 1,
    height: 124,
    flex: 1,
  },
  rectangleContainer: {
    marginTop: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild4: {
    marginLeft: 1,
  },
  frameParent: {
    top: 16,
    height: 290,
    overflow: "hidden",
    alignItems: "center",
    left: 0,
  },
  homeIndicator: {
    marginLeft: -21,
    bottom: 5,
    backgroundColor: Color.gray4D9D9D9,
    width: 40,
    position: "absolute",
  },
  homeindicator: {
    right: 1,
    bottom: 262,
    height: 16,
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
  },
  homeindicator1: {
    bottom: 0,
    height: 34,
    left: 0,
  },
  iconsetplaceholder: {
    display: "none",
  },
  text: {
    fontSize: FontSize.calloutRegular_size,
    lineHeight: 21,
    color: Color.textWhite,
    letterSpacing: 0,
    marginLeft: 8,
  },
  iconsetplaceholder1: {
    display: "none",
    marginLeft: 8,
  },
  button: {
    top: 200,
    left: 16,
    borderRadius: Border.br_5xs,
    height: 44,
    backgroundColor: Color.brandPrimary,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    position: "absolute",
  },
  chooseImage: {
    height: 278,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  roomheaderParent: {
    top: 47,
    height: 765,
    left: 0,
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
  text1: {
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
  },
  chiTitRoomChnNhiuFileChild: {
    width: 374,
    height: 801,
    opacity: 0.4,
    top: 0,
    left: 0,
  },
  image17Icon: {
    bottom: -2,
    left: 0,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 756,
    marginBottom: -130,
  },
  chiTitRoomChnNhiuFile: {
    width: "100%",
    height: 681,
    backgroundColor: Color.textWhite,
  },
});

export default ChiTitRoomChnNhiuFile3;
