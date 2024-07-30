import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../../GlobalStyles";

const ChiTitRoomFocusAddKhi1 = () => {
  return (
    <View style={styles.chiTitRoomFocusAddKhi}>
      <View style={[styles.roomheaderParent, styles.parentPosition]}>
        <View style={[styles.roomheader, styles.buttonSpaceBlock]}>
          <Image
            style={[styles.leftIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt23.png")}
            />
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Image
                  style={[styles.mobileIcon, styles.iconLayout2]}
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
                  <Text style={[styles.lMinhTr, styles.lMinhTrClr]}>
                    Lê Minh Trí
                  </Text>
                  <Image
                    style={[styles.ficheckSquareIcon, styles.iconLayout1]}
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
        <View style={styles.khungChat}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeTypo]}>12:05</Text>
              <View style={[styles.logMessagenormal, styles.logLayout]}>
                <Text style={styles.bnTypo}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.numberTypo]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={[styles.avtIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={styles.messageitem}>
                <View
                  style={[styles.messageTypetext, styles.helperTextSpaceBlock]}
                >
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={styles.messageitem1}>
                <View
                  style={[styles.messageTypetext, styles.helperTextSpaceBlock]}
                >
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Chào bạn, tôi có thể giúp gì cho bạn
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={[styles.messagestatus, styles.iconLayout1]} />
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={[styles.avtIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={styles.messageitem}>
                <View
                  style={[styles.messageTypetext, styles.helperTextSpaceBlock]}
                >
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi muốn tìm hiểu về sản phẩm dịch vụ bên bạn, vui lòng tư
                    vấn giúp tôi
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={styles.messageitem1}>
                <View
                  style={[styles.messageTypetext, styles.helperTextSpaceBlock]}
                >
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Cảm ơn bạn đã quan tâm
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={[styles.messagestatus, styles.iconLayout1]} />
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={[styles.avtIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={styles.messageitem}>
                <View
                  style={[styles.messageTypetext, styles.helperTextSpaceBlock]}
                >
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Gửi cho tôi xin thông tin
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell5, styles.messagecellFlexBox]}>
              <View style={styles.messageitem1}>
                <View style={[styles.messageTypeaudio, styles.buttonFlexBox]}>
                  <View style={styles.record}>
                    <Image
                      style={[styles.btnIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/btn2.png")}
                    />
                    <View style={styles.rectangleParent}>
                      <View style={styles.frameChild} />
                      <Image
                        style={styles.frameItem}
                        resizeMode="cover"
                        source={require("../../assets/ellipse-667.png")}
                      />
                      <View style={styles.frameInner} />
                    </View>
                    <Text style={[styles.text, styles.textTypo]}>00:05</Text>
                  </View>
                  <Image
                    style={[styles.closeIcon7, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close8.png")}
                  />
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox1]}>
                <Image
                  style={[styles.messagestatus, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/messagestatus1.png")}
                />
              </View>
            </View>
            <View style={[styles.messagelogAction1, styles.messagecellFlexBox]}>
              <Text style={[styles.time, styles.timeTypo]}>12:05</Text>
              <View style={[styles.logMessagenormal1, styles.logLayout]}>
                <Text style={styles.bnTypo}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.numberTypo]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={[styles.helperText, styles.helperTextSpaceBlock]}>
            <Text style={[styles.description, styles.numberTypo]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.helperTextSpaceBlock]}>
            <Image
              style={[styles.imageIcon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../../assets/image.png")}
            />
            <Image
              style={[styles.cameraIcon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../../assets/camera3.png")}
            />
            <Image
              style={[styles.cameraIcon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../../assets/file.png")}
            />
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/close.png")}
              />
            </View>
            <Image
              style={[styles.cameraIcon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../../assets/mic4.png")}
            />
            <View style={styles.send}>
              <Image
                style={[
                  styles.iconsendPlaneFill,
                  styles.returnVisitorIconLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/iconsendplanefill.png")}
              />
            </View>
            <View style={[styles.composer, styles.buttonFlexBox]}>
              <View style={styles.niDungTinNhn1DngWrapper}>
                <Text style={[styles.niDungTin, styles.textTypo]}>
                  chào bạn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/emoji111.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/camera1.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/mic3.png")}
              />
            </View>
            <View style={styles.icon3}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/send.png")}
              />
            </View>
          </View>
          <View style={styles.chooseImage}>
            <View style={[styles.frameParent, styles.parentPosition]}>
              <View style={styles.frameGroup}>
                <ImageBackground
                  style={styles.cameraParent}
                  resizeMode="cover"
                  source={require("../../assets/frame35622.png")}
                >
                  <Image
                    style={[styles.imageIcon, styles.iconLayout3]}
                    resizeMode="cover"
                    source={require("../../assets/camera7.png")}
                  />
                  <Text style={[styles.chpNh, styles.timeTypo]}>Chụp ảnh</Text>
                </ImageBackground>
                <View style={[styles.rectangleGroup, styles.frameChildLayout2]}>
                  <Image
                    style={[styles.rectangleIcon, styles.frameChildLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18813.png")}
                  />
                  <View
                    style={[styles.rectangleView, styles.rectanglePosition]}
                  />
                  <View style={styles.badge}>
                    <Text style={[styles.number, styles.numberTypo]}>1</Text>
                  </View>
                </View>
                <View style={[styles.rectangleGroup, styles.frameChildLayout2]}>
                  <Image
                    style={[styles.rectangleIcon, styles.frameChildLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-1880.png")}
                  />
                  <View
                    style={[styles.rectangleView, styles.rectanglePosition]}
                  />
                  <View style={styles.badge}>
                    <Text style={[styles.number, styles.numberTypo]}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameView}>
                <Image
                  style={[styles.frameChild3, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18799.png")}
                />
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18819.png")}
                />
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18806.png")}
                />
              </View>
              <View style={styles.frameView}>
                <Image
                  style={styles.frameChildLayout}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18802.png")}
                />
                <Image
                  style={[styles.frameChild7, styles.frameChildLayout]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18795.png")}
                />
                <Image
                  style={[styles.frameChild4, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18815.png")}
                />
              </View>
            </View>
            <View style={[styles.homeindicator, styles.parentPosition]}>
              <View style={[styles.homeIndicator, styles.homeLayout]} />
            </View>
            <View style={[styles.homeindicator1, styles.parentPosition]}>
              <View style={[styles.homeIndicator1, styles.homeLayout]} />
            </View>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>Gửi 2</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
            </View>
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
            <Text style={[styles.text2, styles.text2Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text2Position]}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  iconLayout3: {
    height: 24,
    width: 24,
  },
  iconLayout2: {
    width: 12,
    display: "none",
    height: 12,
    overflow: "hidden",
  },
  returnVisitorIconLayout: {
    height: 20,
    width: 20,
  },
  lMinhTrClr: {
    color: Color.textPrimary,
    lineHeight: 22,
  },
  iconLayout1: {
    width: 16,
    height: 16,
  },
  redFlexBox: {
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xs,
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
  timeTypo: {
    textAlign: "center",
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  logLayout: {
    width: 343,
    justifyContent: "center",
  },
  numberTypo: {
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
  },
  messagecellFlexBox: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 28,
    width: 28,
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
  helperTextSpaceBlock: {
    paddingVertical: Padding.p_5xs,
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
  buttonFlexBox: {
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameChildLayout2: {
    height: 124,
    flex: 1,
  },
  frameChildLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectanglePosition: {
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
    backgroundColor: Color.black,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  text2Position: {
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
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    marginLeft: 8,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    color: Color.textPrimary,
    lineHeight: 22,
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
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  closeIcon: {
    display: "none",
    height: 12,
    marginLeft: 8,
  },
  purple: {
    backgroundColor: Color.tagYellow500,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_7xs,
  },
  yellow: {
    marginLeft: 2,
    backgroundColor: Color.tagYellow500,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    display: "none",
  },
  blue: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  green: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  red: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  xTag: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
    borderRadius: Border.br_base,
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
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  time: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
    letterSpacing: 0,
  },
  honTtCuc: {
    width: 173,
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
    color: Color.textPrimary,
    marginLeft: 2,
  },
  logMessagenormal: {
    display: "none",
    flexDirection: "row",
  },
  messagelogAction: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  avtIcon: {
    borderRadius: Border.br_11xl,
  },
  huongnt256: {
    display: "none",
    marginLeft: 8,
  },
  tiCnH: {
    color: Color.textColorPrimary,
  },
  messageTypetext: {
    maxWidth: 270,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
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
    justifyContent: "flex-end",
    borderRadius: Border.br_xl,
    overflow: "hidden",
    flexDirection: "row",
  },
  messagestatus: {
    height: 16,
  },
  status: {
    marginLeft: 4,
  },
  messagecell1: {
    justifyContent: "flex-end",
    overflow: "hidden",
    flexDirection: "row",
  },
  btnIcon: {
    borderRadius: Border.br_xl,
  },
  frameChild: {
    width: 49,
    height: 2,
    backgroundColor: Color.brandPrimary,
    display: "none",
  },
  frameItem: {
    width: 10,
    height: 10,
  },
  frameInner: {
    backgroundColor: Color.tagGray400,
    height: 1,
    flex: 1,
  },
  rectangleParent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  text: {
    lineHeight: 24,
    color: Color.textColorPrimary,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    marginLeft: 8,
  },
  record: {
    width: 254,
    alignItems: "center",
    flexDirection: "row",
  },
  closeIcon7: {
    marginLeft: 16,
    height: 16,
    display: "none",
    overflow: "hidden",
  },
  messageTypeaudio: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  messagecell5: {
    justifyContent: "flex-end",
    display: "none",
    overflow: "hidden",
    flexDirection: "row",
  },
  logMessagenormal1: {
    flexDirection: "row",
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
  description: {
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
    color: Color.textPrimary,
    flex: 1,
  },
  helperText: {
    backgroundColor: Color.neutral3F5F5F5,
    display: "none",
    paddingHorizontal: Padding.p_base,
    width: 375,
  },
  imageIcon: {
    display: "none",
    overflow: "hidden",
  },
  cameraIcon: {
    marginLeft: 12,
    display: "none",
    overflow: "hidden",
  },
  icon: {
    marginLeft: 12,
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
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
    marginLeft: 12,
    backgroundColor: Color.brandPrimary,
    display: "none",
    justifyContent: "center",
    height: 40,
    width: 40,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  niDungTin: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    lineHeight: 22,
  },
  niDungTinNhn1DngWrapper: {
    maxHeight: 72,
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  emojiIcon: {
    right: 8,
    zIndex: 1,
    bottom: 8,
    overflow: "hidden",
    position: "absolute",
  },
  composer: {
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_4xs,
    marginLeft: 12,
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  icon1: {
    marginLeft: 12,
    display: "none",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  icon3: {
    marginLeft: 12,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  composeBar1: {
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.neutral3F5F5F5,
    alignItems: "flex-end",
    width: 375,
  },
  chpNh: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    display: "none",
  },
  cameraParent: {
    paddingVertical: Padding.p_21xl,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  rectangleIcon: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rectangleView: {
    backgroundColor: Color.colorGray_1100,
  },
  number: {
    fontSize: FontSize.subheadlineSemiBold_size,
    color: Color.textWhite,
    letterSpacing: 0,
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
  rectangleGroup: {
    marginLeft: 1,
  },
  frameGroup: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild3: {
    height: 124,
    flex: 1,
  },
  frameChild4: {
    marginLeft: 1,
    height: 124,
    flex: 1,
  },
  frameView: {
    marginTop: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild7: {
    marginLeft: 1,
  },
  frameParent: {
    top: 16,
    height: 290,
    overflow: "hidden",
    alignItems: "center",
    width: 375,
  },
  homeIndicator: {
    marginLeft: -21,
    bottom: 5,
    width: 40,
  },
  homeindicator: {
    right: 1,
    bottom: 262,
    height: 16,
    backgroundColor: Color.textWhite,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    width: 134,
    bottom: 8,
  },
  homeindicator1: {
    bottom: 0,
    height: 34,
    width: 375,
  },
  iconsetplaceholder: {
    display: "none",
  },
  text1: {
    lineHeight: 21,
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
    marginLeft: 8,
  },
  iconsetplaceholder1: {
    display: "none",
    marginLeft: 8,
  },
  button: {
    top: 200,
    left: 16,
    height: 44,
    backgroundColor: Color.brandPrimary,
    width: 343,
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    position: "absolute",
  },
  chooseImage: {
    height: 278,
    overflow: "hidden",
    width: 375,
  },
  composeBar: {
    backgroundColor: Color.neutral3F5F5F5,
    justifyContent: "flex-end",
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
    height: 32,
    left: "50%",
    display: "none",
    position: "absolute",
  },
  text2: {
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
  chiTitRoomFocusAddKhi: {
    width: "100%",
    height: 681,
    backgroundColor: Color.textWhite,
  },
});

export default ChiTitRoomFocusAddKhi1;
