import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, Border, Color, FontFamily } from "../../GlobalStyles";

const ChiTitRoomCoutdownHnGi3 = () => {
  return (
    <View style={styles.chiTitRoomCoutdownHnGi}>
      <View style={[styles.roomheaderParent, styles.roomheaderParentPosition]}>
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
              source={require("../../assets/roommessageavt49.png")}
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
                    style={[styles.returnVisitorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/return-visitor1.png")}
                  />
                  <Text style={[styles.lMinhTr, styles.titleTypo]}>
                    Lê Minh Trí
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
        <View style={[styles.khungChat, styles.khungChatFlexBox]}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={styles.time}>12:05</Text>
              <View style={styles.logMessagenormal}>
                <Text style={[styles.bn, styles.bnTypo]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.bnLayout]}>
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
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Chào bạn, tôi có thể giúp gì cho bạn
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={styles.iconLayout} />
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
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi muốn tìm hiểu về sản phẩm dịch vụ bên bạn, vui lòng tư
                    vấn giúp tôi
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Cảm ơn bạn đã quan tâm
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={styles.iconLayout} />
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
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Gửi cho tôi xin thông tin
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.messageitemLayout]}>
                <View style={[styles.messageTypefile, styles.messageFlexBox]}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/attachment--filetypes.png")}
                  />
                  <View style={styles.fileName}>
                    <Text
                      style={[styles.fileDinhKemdoc, styles.bnLayout]}
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
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../../assets/messagestatus.png")}
                />
              </View>
            </View>
            <View style={[styles.messagelogAction1, styles.messagecellFlexBox]}>
              <Text style={styles.time}>12:05</Text>
              <View style={styles.logMessagenormal1}>
                <Text style={[styles.bn, styles.bnTypo]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.bnLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={[styles.helperText, styles.khungChatFlexBox]}>
            <Image
              style={[styles.hourglassIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/2-hourglass1.png")}
            />
            <Text style={[styles.cnLi4, styles.bnLayout]}>
              Còn lại 4 ngày để nhắn tin
            </Text>
            <Image
              style={[styles.questionCircleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/question-circle.png")}
            />
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
                <Text style={[styles.nhpTinNhn, styles.text2Typo]}>
                  Nhập tin nhắn
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
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeIndicatorBg]} />
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
      <View
        style={[styles.chiTitRoomCoutdownHnGiChild, styles.homeIndicatorBg]}
      />
      <View style={styles.confirmation}>
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
                source={require("../../assets/validate5.png")}
              />
            </View>
            <View style={styles.titleParent}>
              <Text style={[styles.title, styles.zaloTypo]}>
                Hội thoại Zalo
              </Text>
              <Text style={[styles.text1, styles.bnLayout]}>
                <Text
                  style={styles.hn24hKhch}
                >{`Đã hơn 24h khách hàng không tương tác với trang. Theo chính sách mới của `}</Text>
                <Text style={styles.zaloTypo}>Zalo</Text>
                <Text style={styles.hn24hKhch}>{` bạn còn  `}</Text>
                <Text style={styles.bnTypo}>4 ngày</Text>
                <Text style={styles.hn24hKhch}>
                  {" "}
                  để gửi tin nhắn phản hồi trước đó của khách hàng. Tin nhắn
                  không được chứa quảng cáo hay khuyến mãi
                </Text>
              </Text>
            </View>
          </View>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Image
              style={[styles.iconsetplaceholder, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder1.png")}
            />
            <Text style={[styles.text2, styles.text2Typo]}>Đã hiểu</Text>
            <Image
              style={[styles.iconsetplaceholder1, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder1.png")}
            />
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
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
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
  iconLayout1: {
    height: 20,
    width: 20,
  },
  titleTypo: {
    fontSize: FontSize.headlineSemiBold_size,
    lineHeight: 22,
  },
  iconLayout: {
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
  khungChatFlexBox: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
  },
  bnTypo: {
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  bnLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  messagecellFlexBox: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
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
  buttonFlexBox: {
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  text2Typo: {
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    letterSpacing: 0,
  },
  homeIndicatorBg: {
    backgroundColor: Color.black,
    position: "absolute",
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
  zaloTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    color: Color.textPrimary,
    letterSpacing: 0,
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
    lineHeight: 22,
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
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
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
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
  },
  honTtCuc: {
    width: 173,
    textAlign: "center",
    marginLeft: 2,
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  logMessagenormal: {
    width: 343,
    display: "none",
    justifyContent: "center",
    flexDirection: "row",
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
  tiCnH1: {
    color: Color.textWhite,
  },
  messageitem1: {
    backgroundColor: Color.brandPrimary,
    justifyContent: "flex-end",
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
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
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
  logMessagenormal1: {
    width: 343,
    justifyContent: "center",
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
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  hourglassIcon: {
    overflow: "hidden",
  },
  cnLi4: {
    color: Color.textBlack,
    marginLeft: 12,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  questionCircleIcon: {
    marginLeft: 12,
    overflow: "hidden",
  },
  helperText: {
    backgroundColor: Color.tagYellow100,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    width: 375,
  },
  icon: {
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  nhpTinNhn: {
    color: Color.textSecondary,
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
    width: 134,
    height: 5,
    left: "50%",
    bottom: 8,
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
    position: "absolute",
  },
  chiTitRoomCoutdownHnGiChild: {
    height: 812,
    opacity: 0.4,
    top: 0,
    width: 375,
    left: 0,
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
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    alignSelf: "stretch",
  },
  hn24hKhch: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  text1: {
    marginTop: 8,
    textAlign: "center",
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
  text2: {
    lineHeight: 21,
    color: Color.textWhite,
    marginLeft: 8,
    marginTop: -2,
  },
  iconsetplaceholder1: {
    display: "none",
    marginLeft: 8,
  },
  button: {
    marginTop: 24,
    backgroundColor: Color.brandPrimary,
    justifyContent: "center",
    height: 40,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  contentParent: {
    alignSelf: "stretch",
  },
  confirmation: {
    marginTop: 260,
    marginLeft: -190,
    top: "50%",
    borderRadius: Border.br_7xs,
    shadowColor: "rgba(5, 16, 55, 0.15)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    padding: Padding.p_base,
    left: "50%",
    width: 343,
    alignItems: "flex-end",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  chiTitRoomCoutdownHnGi: {
    width: "100%",
    height: 682,
    flex: 1,
    backgroundColor: Color.textWhite,
  },
});

export default ChiTitRoomCoutdownHnGi3;
