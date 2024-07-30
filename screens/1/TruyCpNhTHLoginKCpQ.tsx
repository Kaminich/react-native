import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, FontSize, Color, FontFamily, Border } from "../../GlobalStyles";

const TruyCpNhTHLoginKCpQ = () => {
  return (
    <View style={styles.truyCpNhThLoginKCpQ}>
      <View
        style={[styles.iphoneMockupStatusBar, styles.homeindicatorPosition]}
      >
        <View style={styles.right}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/battery3.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../../assets/wifi3.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../../assets/mobile-signal.png")}
          />
        </View>
        <Image
          style={[styles.dateIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../../assets/date.png")}
        />
      </View>
      <View style={[styles.trangCNhnmailFpt, styles.homeindicatorPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.frameParentPosition]}
          resizeMode="cover"
          source={require("../../assets/background12.png")}
        />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={[styles.frameGroup, styles.rowFlexBox]}>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <Image
                style={styles.frameChildLayout}
                resizeMode="cover"
                source={require("../../assets/frame-427318814.png")}
              />
              <View style={styles.customerInfoavtParent}>
                <View style={styles.customerInfoavt}>
                  <Image
                    style={styles.avtIcon}
                    resizeMode="cover"
                    source={require("../../assets/avt4.png")}
                  />
                  <View style={styles.row1Parent}>
                    <View style={[styles.row1, styles.rowFlexBox]}>
                      <View style={styles.name}>
                        <Image
                          style={styles.mobileIconLayout}
                          resizeMode="cover"
                          source={require("../../assets/mobile3.png")}
                        />
                        <Text style={styles.name1}>Lê Minh Trí (FTEL HN)</Text>
                      </View>
                      <Image
                        style={[styles.icon23Edit, styles.mobileIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/icon23-edit1.png")}
                      />
                    </View>
                    <View style={[styles.row2, styles.rowFlexBox]}>
                      <Text style={[styles.angOnline, styles.labelTypo1]}>
                        Đang online
                      </Text>
                    </View>
                    <View style={styles.button}>
                      <Text style={[styles.label, styles.labelTypo1]}>
                        Yêu cầu chia sẻ thông tin
                      </Text>
                      <Image
                        style={styles.buttonChild}
                        resizeMode="cover"
                        source={require("../../assets/frame-356591.png")}
                      />
                    </View>
                  </View>
                </View>
                <Text style={[styles.nhnVin, styles.valueSpaceBlock]}>
                  Nhân viên
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameViewSpaceBlock]}>
              <View style={styles.groupParent}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../../assets/group.png")}
                />
                <Text style={[styles.ttGimSt, styles.ttGimStTypo]}>
                  TT Giám sát và đảm bảo dịch vụ
                </Text>
              </View>
              <View style={styles.envelopeParent}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../../assets/envelope4.png")}
                />
                <Text style={[styles.trilm22fptcom, styles.ttGimStTypo]}>
                  trilm22@fpt.com
                </Text>
              </View>
              <View style={styles.envelopeParent}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../../assets/officebuilding.png")}
                />
                <Text style={[styles.trilm22fptcom, styles.ttGimStTypo]}>
                  HNI Tầng 8, FPT Tower
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.tabControl, styles.frameSpaceBlock]}>
            <View style={[styles.tab, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social32.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                Thông tin tài khoản
              </Text>
              <View style={[styles.badge, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textLayout]}>16</Text>
              </View>
            </View>
            <View style={[styles.tab1, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social35.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>
                Sơ đồ tổ chức
              </Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textLayout]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social36.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textLayout]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social36.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textLayout]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social36.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textLayout]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social36.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textLayout]}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.formtextParent}>
            <View style={styles.formtext}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Tên người dùng
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Lê Minh Trí
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Mã nhân viên
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                011992993
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text
                  style={[styles.label8, styles.label8Clr]}
                >{`Vai trò `}</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Nhân viên
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>Giới tính</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>Nữ</Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>Ngày sinh</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                12/12/1992
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>Email</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                uyentt2@fpt.com
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Số điện thoại
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                0978 585 484
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Chức danh/Mã chức danh
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Nhân viên KD - 003
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Cán bộ quản lý
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Nguyễn Đức Quang - KD122
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Email cán bộ quản lý
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                quangnd@fpt.com
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Khu vực chăm sóc
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                FTELBUV1
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>Chi nhánh</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Không có thông tin
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>Trung tâm</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>V1HN13</Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Đơn vị chủ quản
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>FTELBU</Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>Phòng ban</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Phòng KD1
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textLayout]}>*</Text>
                <Text style={[styles.label8, styles.label8Clr]}>
                  Địa điểm làm việc
                </Text>
              </View>
              <Text
                style={[styles.value15, styles.valueSpaceBlock]}
              >{`HI 122 Tây Sơn, TT Phùng, Đan Phượng, Hà Nội `}</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollbarFrame}>
          <View style={[styles.scrollbar, styles.button2Border]} />
        </View>
      </View>
      <View style={styles.titlePage}>
        <Image
          style={[styles.leftIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../assets/27-left1.png")}
        />
        <View style={[styles.title, styles.rowFlexBox]}>
          <Text style={[styles.title1, styles.titleTypo]}>Tài khoản</Text>
        </View>
        <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
        <Image
          style={[styles.logoutIcon, styles.luPosition]}
          resizeMode="cover"
          source={require("../../assets/logout1.png")}
        />
      </View>
      <Image
        style={[styles.truyCpNhThLoginKCpQChild, styles.homeindicatorPosition]}
        resizeMode="cover"
        source={require("../../assets/rectangle-18851.png")}
      />
      <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
        <View style={[styles.homeIndicator, styles.homeindicatorPosition]} />
      </View>
      <View style={styles.confirmation}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../../assets/23-close.png")}
        />
        <View style={styles.formtext}>
          <View style={styles.content}>
            <View style={[styles.confirmationIcon, styles.frameChildLayout]}>
              <Image
                style={styles.validateIcon}
                resizeMode="cover"
                source={require("../../assets/validate5.png")}
              />
            </View>
            <View style={styles.titleParent}>
              <Text style={[styles.title2, styles.titleTypo]}>
                Cho phép truy cập thư viện ảnh
              </Text>
              <Text style={[styles.text16, styles.label8Clr]}>
                Sale Online Platform cần có quyền sử dụng thư viện ảnh trên
                thiết bị để sử dụng tính năng này
              </Text>
            </View>
          </View>
          <View style={styles.frameViewSpaceBlock}>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text17, styles.textTypo]}>
                Đi đến phần cài đặt
              </Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
            </View>
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder.png")}
              />
              <Text style={[styles.text18, styles.textTypo]}>Confirm</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeindicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameParentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  mobileIconLayout: {
    height: 16,
    width: 16,
    display: "none",
    overflow: "hidden",
  },
  labelTypo1: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
  },
  valueSpaceBlock: {
    marginTop: 4,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  frameViewSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  ttGimStTypo: {
    color: Color.neutral8595959,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
  },
  tabFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xs,
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  socialIconLayout: {
    borderRadius: Border.br_base,
    height: 20,
    width: 20,
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    lineHeight: 20,
    marginLeft: 8,
    textAlign: "center",
    letterSpacing: 0,
  },
  badgeSpaceBlock: {
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  textLayout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  label8Clr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  button2Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  titleTypo: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  luPosition: {
    right: 16,
    top: 10,
    display: "none",
    position: "absolute",
  },
  frameChildLayout: {
    height: 60,
    width: 60,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    marginLeft: 8,
    letterSpacing: 0,
  },
  batteryIcon: {
    height: "100%",
    width: "36.43%",
    top: "0%",
    right: "0.15%",
    bottom: "0%",
    left: "63.42%",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  right: {
    height: "29.74%",
    width: "17.79%",
    top: "45.53%",
    right: "3.89%",
    bottom: "24.74%",
    left: "78.32%",
    position: "absolute",
  },
  dateIcon: {
    height: "29.21%",
    width: "7.57%",
    top: "45.26%",
    right: "83.49%",
    bottom: "25.53%",
    left: "8.93%",
  },
  iphoneMockupStatusBar: {
    height: 38,
    width: 375,
    top: 0,
    left: "50%",
    marginLeft: -205,
    overflow: "hidden",
  },
  backgroundIcon: {
    width: 534,
    height: 1101,
    display: "none",
  },
  avtIcon: {
    borderRadius: Border.br_11xl,
    width: 80,
    height: 80,
    display: "none",
  },
  name1: {
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    marginLeft: 4,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  name: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon23Edit: {
    marginLeft: 8,
  },
  row1: {
    flexDirection: "row",
  },
  angOnline: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  row2: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    display: "none",
  },
  label: {
    color: Color.brandPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  buttonChild: {
    width: 36,
    height: 36,
  },
  button: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.backgroundOrange,
    paddingRight: Padding.p_3xs,
    paddingLeft: Padding.p_base,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    display: "none",
  },
  row1Parent: {
    marginTop: 8,
    alignItems: "center",
  },
  customerInfoavt: {
    alignItems: "center",
  },
  nhnVin: {
    color: Color.gray68C8C8C,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
    marginTop: 4,
  },
  customerInfoavtParent: {
    marginLeft: 16,
  },
  frameContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  groupIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  ttGimSt: {
    marginLeft: 8,
  },
  groupParent: {
    flexDirection: "row",
  },
  trilm22fptcom: {
    marginLeft: 12,
  },
  envelopeParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameView: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  frameGroup: {
    borderRadius: Border.br_sm,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xl,
    width: 375,
    backgroundColor: Color.textWhite,
  },
  socialIcon: {
    display: "none",
  },
  label1: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    color: Color.brandPrimary,
  },
  number: {
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
  },
  badge: {
    display: "none",
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
    backgroundColor: Color.neutral2,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xs,
    height: 44,
  },
  label2: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  badge1: {
    width: 16,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    display: "none",
  },
  tab1: {
    backgroundColor: Color.textWhite,
  },
  badge2: {
    width: 16,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
  },
  tab2: {
    display: "none",
    backgroundColor: Color.textWhite,
  },
  tabControl: {
    flexDirection: "row",
    width: 375,
  },
  text: {
    color: Color.otherRed,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    display: "none",
  },
  label8: {
    marginLeft: 2,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  label7: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  value: {
    textAlign: "left",
    height: 20,
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    alignSelf: "stretch",
  },
  formtext: {
    alignSelf: "stretch",
  },
  formtext1: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  value15: {
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    alignSelf: "stretch",
  },
  formtextParent: {
    padding: Padding.p_base,
    width: 343,
    backgroundColor: Color.neutral2,
  },
  frameParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  scrollbar: {
    top: 1,
    left: 1,
    borderRadius: Border.br_9xs_5,
    backgroundColor: Color.neutral6BFBFBF,
    borderColor: Color.colorGray_1200,
    width: 9,
    height: 260,
    position: "absolute",
  },
  scrollbarFrame: {
    top: 316,
    left: 348,
    width: 11,
    height: 397,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  trangCNhnmailFpt: {
    top: 82,
    height: 1168,
    width: 375,
    marginLeft: -205,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  leftIcon: {
    zIndex: 0,
    overflow: "hidden",
  },
  title1: {
    textAlign: "center",
    color: Color.textPrimary,
  },
  title: {
    zIndex: 1,
    flexDirection: "row",
    flex: 1,
  },
  lu: {
    textAlign: "right",
    zIndex: 2,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.brandPrimary,
  },
  logoutIcon: {
    zIndex: 3,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  titlePage: {
    top: 38,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 0.45,
    elevation: 0.45,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    paddingLeft: Padding.p_base,
    flexDirection: "row",
    left: 0,
    width: 375,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  truyCpNhThLoginKCpQChild: {
    opacity: 0.4,
    width: 375,
    top: 0,
    left: "50%",
    marginLeft: -205,
    height: 812,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
  },
  homeindicator: {
    bottom: 0,
    height: 34,
    width: 375,
    marginLeft: -205,
    left: "50%",
  },
  validateIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  confirmationIcon: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.tagSky100,
    padding: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title2: {
    textAlign: "center",
    color: Color.textPrimary,
    alignSelf: "stretch",
  },
  text16: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
    marginTop: 8,
    alignSelf: "stretch",
  },
  titleParent: {
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  content: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconsetplaceholder: {
    display: "none",
  },
  text17: {
    color: Color.textWhite,
  },
  iconsetplaceholder1: {
    marginLeft: 8,
    display: "none",
  },
  button1: {
    backgroundColor: Color.brandPrimary,
    height: 40,
  },
  text18: {
    color: Color.textPrimary,
  },
  button2: {
    borderColor: Color.gray4D9D9D9,
    height: 41,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 12,
    display: "none",
    backgroundColor: Color.textWhite,
  },
  confirmation: {
    marginLeft: -190,
    top: 265,
    shadowColor: "rgba(5, 16, 55, 0.15)",
    shadowRadius: 30,
    elevation: 30,
    alignItems: "flex-end",
    borderRadius: Border.br_7xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    padding: Padding.p_base,
    width: 343,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  truyCpNhThLoginKCpQ: {
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.textWhite,
  },
});

export default TruyCpNhTHLoginKCpQ;
