import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Padding, FontFamily, Border, FontSize } from "../../GlobalStyles";

const WebsiteRoomDetailKhchGi = () => {
  return (
    <View style={styles.websiteRoomDetailKhchGi}>
      <View style={styles.roomheaderParent}>
        <View style={[styles.roomheader, styles.composerFlexBox]}>
          <Image
            style={[styles.leftIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <View style={styles.roommessageavt}>
              <View style={[styles.avt, styles.avtSpaceBlock]}>
                <Text style={[styles.k, styles.kLayout]}>LT</Text>
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
                  <Text style={[styles.lMinhTr, styles.khuVcTypo]}>
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
              <View style={[styles.roomlistNhn, styles.roomlistNhnSpaceBlock]}>
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
        <View style={[styles.khungChat, styles.khungChatFlexBox]}>
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
            <View style={[styles.messagecell, styles.messagecellSpaceBlock]}>
              <View style={styles.avt1FlexBox}>
                <Image
                  style={styles.avtLayout}
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
              <View style={[styles.logMessagenormal1, styles.logFlexBox]}>
                <Text style={[styles.text5, styles.textTypo]}>
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
              <Text style={[styles.time, styles.timeClr]}>11:05</Text>
              <View style={styles.logFlexBox}>
                <Text style={[styles.text5, styles.textTypo]}>Bạn</Text>
                <Text style={[styles.mRngCa, styles.textLayout]}>
                  đã gửi tin nhắn chủ động
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellSpaceBlock]}>
              <View style={styles.messageitem1}>
                <View
                  style={[styles.messageTypetext, styles.helperTextSpaceBlock]}
                >
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tin sale nhắn chủ động
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avt1FlexBox]}>
                <View style={styles.iconLayout} />
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellSpaceBlock]}>
              <View style={styles.avt1FlexBox}>
                <View style={[styles.avt3, styles.avtLayout]}>
                  <Text style={[styles.k1, styles.textLayout]}>1</Text>
                </View>
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem2}>
                <View style={styles.messageTypethngTinKi}>
                  <View style={[styles.paperParent, styles.formLayout]}>
                    <Image
                      style={[styles.paperIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/4-paper.png")}
                    />
                    <Text style={[styles.thngTinNg, styles.textLayout]}>
                      Thông tin đăng kí
                    </Text>
                  </View>
                  <View style={[styles.form, styles.formLayout]}>
                    <View style={styles.attribute}>
                      <View style={styles.name}>
                        <Text style={[styles.text6, styles.labelLayout]}>
                          *
                        </Text>
                        <Text style={[styles.label8, styles.timeClr]}>
                          Đường dẫn
                        </Text>
                      </View>
                      <Text
                        style={[
                          styles.httpsnhathuoclongchaucom,
                          styles.thuHngTypo,
                        ]}
                        numberOfLines={1}
                      >
                        https://nhathuoclongchau.com
                      </Text>
                    </View>
                    <View style={styles.attribute1}>
                      <View style={styles.name}>
                        <Text style={[styles.text6, styles.labelLayout]}>
                          *
                        </Text>
                        <Text style={[styles.label8, styles.timeClr]}>
                          Họ và tên
                        </Text>
                      </View>
                      <Text style={[styles.thuHng, styles.thuHngTypo]}>
                        Thu Hương
                      </Text>
                    </View>
                    <View style={styles.attribute1}>
                      <View style={styles.name}>
                        <Text style={[styles.text6, styles.labelLayout]}>
                          *
                        </Text>
                        <Text style={[styles.label8, styles.timeClr]}>
                          Số điện thoại
                        </Text>
                      </View>
                      <Text style={[styles.thuHng, styles.thuHngTypo]}>
                        0912345678
                      </Text>
                    </View>
                    <View style={styles.attribute1}>
                      <View style={styles.name}>
                        <Text style={[styles.text6, styles.labelLayout]}>
                          *
                        </Text>
                        <Text style={[styles.label8, styles.timeClr]}>
                          Dịch vụ quan tâm
                        </Text>
                      </View>
                      <Text style={[styles.thuHng, styles.thuHngTypo]}>
                        Internet, FPT Camera Combo, Truyền hình, FPT Play
                      </Text>
                    </View>
                    <View style={styles.attribute4}>
                      <Text style={[styles.khuVc, styles.labelLayout]}>
                        Khu vực
                      </Text>
                      <Text style={[styles.thuHng, styles.thuHngTypo]}>
                        Miền Bắc
                      </Text>
                    </View>
                    <View style={styles.attribute4}>
                      <Text style={[styles.khuVc, styles.labelLayout]}>
                        Địac chỉ
                      </Text>
                      <Text style={[styles.thuHng, styles.thuHngTypo]}>
                        Duy Tân, Cầu Giấy, Hà Nội
                      </Text>
                    </View>
                    <View style={styles.xemThmParent}>
                      <Text style={[styles.xemThm1, styles.textLayout]}>
                        Xem thêm
                      </Text>
                      <Image
                        style={[styles.monocaretDownIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/monocaretdown.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.messagelogAction1, styles.messagecellSpaceBlock]}
            >
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.textTypo}>{` `}</Text>
                    <Text style={styles.truyCp1}>
                      vừa gửi tin nhắn, hội thoại đã được chuyển sang Tab Fchat
                    </Text>
                  </Text>
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell3, styles.messagecellSpaceBlock]}>
              <View style={styles.avt1FlexBox}>
                <Image
                  style={styles.avtLayout}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem2}>
                <View
                  style={[styles.messageTypetext, styles.helperTextSpaceBlock]}
                >
                  <Text style={[styles.tiCnH2, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell3, styles.messagecellSpaceBlock]}>
              <View style={styles.avt1FlexBox}>
                <Image
                  style={styles.avtLayout}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem2}>
                <View
                  style={[styles.messageTypetext, styles.helperTextSpaceBlock]}
                >
                  <Text style={[styles.tiCnH2, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
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
                style={[styles.leftIcon, styles.iconLayout3]}
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
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/camera.png")}
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
            <Text style={[styles.text14, styles.text14Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text14Position]}
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
  iconLayout3: {
    height: 24,
    width: 24,
  },
  avtSpaceBlock: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_4xs,
    justifyContent: "center",
    backgroundColor: Color.tagGray100,
    alignItems: "center",
  },
  kLayout: {
    lineHeight: 22,
    letterSpacing: 0,
  },
  iconLayout2: {
    width: 12,
    display: "none",
    height: 12,
    overflow: "hidden",
  },
  khuVcTypo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
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
  labelLayout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  khungChatFlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
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
  helperTextSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  tiCnHTypo: {
    maxWidth: 238,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  logFlexBox: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
  },
  avt1FlexBox: {
    paddingBottom: Padding.p_9xs,
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  avtLayout: {
    height: 28,
    width: 28,
    borderRadius: Border.br_11xl,
  },
  formLayout: {
    width: 270,
    alignItems: "center",
  },
  thuHngTypo: {
    marginTop: 2,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
  },
  iconLayout1: {
    height: 20,
    width: 20,
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
  text14Position: {
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
    fontSize: FontSize.headlineSemiBold_size,
    lineHeight: 22,
  },
  avt: {
    height: "100%",
    top: "0%",
    left: "0%",
    borderRadius: Border.br_5xl,
    bottom: "0%",
    right: "0%",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_4xs,
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
    color: Color.textPrimary,
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
  huongnt256: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.textPrimary,
  },
  tiCnH: {
    color: Color.textWhite,
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
    alignItems: "center",
  },
  messagelogAction1: {
    alignItems: "center",
  },
  messageitem1: {
    justifyContent: "flex-end",
    backgroundColor: Color.brandPrimary,
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
    alignItems: "center",
    flexDirection: "row",
  },
  k1: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  avt3: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_4xs,
    justifyContent: "center",
    backgroundColor: Color.tagGray100,
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
  paperIcon: {
    overflow: "hidden",
  },
  thngTinNg: {
    marginLeft: 4,
    color: Color.textWhite,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
  },
  paperParent: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.brandPrimary,
    paddingHorizontal: Padding.p_base,
  },
  text6: {
    color: Color.otherRed,
    textAlign: "left",
    display: "none",
    fontFamily: FontFamily.text14Regular,
  },
  label8: {
    marginLeft: 2,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    textAlign: "left",
  },
  httpsnhathuoclongchaucom: {
    textDecorationLine: "underline",
    color: Color.brandPrimary,
    overflow: "hidden",
    flex: 1,
  },
  attribute: {
    alignSelf: "stretch",
  },
  thuHng: {
    color: Color.textPrimary,
  },
  attribute1: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  khuVc: {
    color: Color.gray68C8C8C,
    width: 144,
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
  },
  attribute4: {
    marginTop: 12,
    display: "none",
    alignSelf: "stretch",
  },
  xemThm1: {
    color: Color.brandPrimary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  monocaretDownIcon: {
    overflow: "hidden",
  },
  xemThmParent: {
    marginTop: 12,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  form: {
    padding: Padding.p_base,
  },
  messageTypethngTinKi: {
    backgroundColor: Color.tagGray100,
    overflow: "hidden",
  },
  messageitem2: {
    borderRadius: Border.br_xl,
    marginLeft: 8,
    backgroundColor: Color.tagGray100,
    overflow: "hidden",
    flexDirection: "row",
  },
  tiCnH2: {
    color: Color.textColorPrimary,
  },
  messagecell3: {
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
    display: "none",
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
  text14: {
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
  websiteRoomDetailKhchGi: {
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default WebsiteRoomDetailKhchGi;
