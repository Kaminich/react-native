import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Padding, Border, FontSize, Color } from "../../GlobalStyles";

const KhngCQuynTruyCpNh = () => {
  return (
    <View style={styles.khngCQuynTruyCpNh}>
      <View style={[styles.roomheaderParent, styles.homeindicatorPosition]}>
        <View style={styles.roomheader}>
          <Image
            style={[styles.leftIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <Image
              style={[styles.roommessageavtIcon, styles.sendLayout]}
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
                  <Text style={[styles.lMinhTr, styles.textTypo1]}>
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
                  <Text style={styles.label}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={styles.label}>Tư vấn sp</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={styles.label}>chưa đóng phí</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={styles.label}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={styles.label}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={styles.label}>liên hệ lại</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={styles.label}>+4</Text>
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
              <Text style={styles.time}>12:05</Text>
              <View style={[styles.logMessagenormal, styles.logFlexBox]}>
                <Text style={[styles.bn, styles.bnTypo]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.bnTypo1]}>
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
                <View style={[styles.messageTypetext, styles.buttonSpaceBlock]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={styles.messageitem1}>
                <View style={[styles.messageTypetext, styles.buttonSpaceBlock]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Chào bạn, tôi có thể giúp gì cho bạn
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={styles.iconLayout1} />
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
                <View style={[styles.messageTypetext, styles.buttonSpaceBlock]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi muốn tìm hiểu về sản phẩm dịch vụ bên bạn, vui lòng tư
                    vấn giúp tôi
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={styles.messageitem1}>
                <View style={[styles.messageTypetext, styles.buttonSpaceBlock]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Cảm ơn bạn đã quan tâm
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={styles.iconLayout1} />
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
                <View style={[styles.messageTypetext, styles.buttonSpaceBlock]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Gửi cho tôi xin thông tin
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell5, styles.messagecellFlexBox]}>
              <View style={styles.messageitem1}>
                <View style={[styles.messageTypeaudio, styles.composerFlexBox]}>
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
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../../assets/messagestatus1.png")}
                />
              </View>
            </View>
            <View style={[styles.messagelogAction1, styles.messagecellFlexBox]}>
              <Text style={styles.time}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text style={[styles.bn, styles.bnTypo]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.bnTypo1]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={[styles.helperText, styles.buttonSpaceBlock]}>
            <Text style={[styles.description, styles.bnTypo1]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.buttonSpaceBlock]}>
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
                source={require("../../assets/plus.png")}
              />
            </View>
            <Image
              style={[styles.cameraIcon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../../assets/mic4.png")}
            />
            <View style={[styles.send, styles.sendLayout]}>
              <Image
                style={[
                  styles.iconsendPlaneFill,
                  styles.returnVisitorIconLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/iconsendplanefill.png")}
              />
            </View>
            <View style={[styles.composer, styles.composerFlexBox]}>
              <View
                style={[
                  styles.nhpTinNhnWrapper,
                  styles.nhpTinNhnWrapperPosition,
                ]}
              >
                <Text style={[styles.nhpTinNhnContainer, styles.textTypo]}>
                  <Text style={styles.text1}>|</Text>
                  <Text style={styles.nhpTinNhn}>Nhập tin nhắn</Text>
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
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/camera3.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/mic3.png")}
              />
            </View>
          </View>
          <View style={styles.chaCQuynTruyCpNh}>
            <View style={styles.nhpTinNhnWrapperPosition}>
              <Text style={[styles.quynTruyCp, styles.bnTypo]}>
                Quyền truy cập vào ảnh và video
              </Text>
              <Text style={[styles.ngDngS, styles.bnTypo1]}>
                Ứng dụng sử dụng thư viện ảnh từ cuộn camera trên thiết bị để
                bạn có thể thực hiện các tính năng gửi ảnh và video
              </Text>
            </View>
            <View style={[styles.button, styles.buttonSpaceBlock]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>
                Đi đến phần cài đặt
              </Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
            </View>
            <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
              <View style={[styles.homeIndicator, styles.emojiIconPosition]} />
            </View>
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
            <Text style={[styles.text3, styles.text3Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text3Position]}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeindicatorPosition: {
    left: 0,
    width: 375,
    position: "absolute",
  },
  iconLayout3: {
    height: 24,
    width: 24,
  },
  sendLayout: {
    width: 40,
    height: 40,
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
  textTypo1: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    marginLeft: 8,
  },
  iconLayout1: {
    height: 16,
    width: 16,
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
  logFlexBox: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
  },
  bnTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  bnTypo1: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
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
  buttonSpaceBlock: {
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
  composerFlexBox: {
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  nhpTinNhnWrapperPosition: {
    zIndex: 0,
    alignItems: "center",
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
  text3Position: {
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
    color: Color.textPrimary,
    lineHeight: 22,
    letterSpacing: 0,
    fontWeight: "500",
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
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  bn: {
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
  },
  honTtCuc: {
    width: 173,
    marginLeft: 2,
    fontFamily: FontFamily.text14Regular,
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
  },
  huongnt256: {
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
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
    fontFamily: FontFamily.text14Regular,
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
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    color: Color.brandPrimary,
  },
  nhpTinNhn: {
    color: Color.textSecondary,
  },
  nhpTinNhnContainer: {
    fontFamily: FontFamily.text14Regular,
    lineHeight: 22,
  },
  nhpTinNhnWrapper: {
    maxHeight: 72,
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
  quynTruyCp: {
    color: Color.textBlack,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  ngDngS: {
    width: 327,
    marginTop: 8,
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  iconsetplaceholder: {
    display: "none",
  },
  text2: {
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
    borderRadius: Border.br_7xs,
    marginTop: 16,
    zIndex: 1,
    backgroundColor: Color.brandPrimary,
    justifyContent: "center",
    height: 40,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
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
    bottom: 0,
    height: 34,
    zIndex: 2,
    width: 375,
  },
  chaCQuynTruyCpNh: {
    height: 278,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: 375,
    backgroundColor: Color.textWhite,
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
  },
  text3: {
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
  },
  khngCQuynTruyCpNh: {
    width: "100%",
    height: 681,
    backgroundColor: Color.textWhite,
  },
});

export default KhngCQuynTruyCpNh;
