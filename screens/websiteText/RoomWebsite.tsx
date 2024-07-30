import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, Color, FontSize, FontFamily, Border } from "../../GlobalStyles";

const RoomWebsite = () => {
  return (
    <View style={styles.roomWebsite}>
      <View style={styles.chiTitRoom}>
        <View style={styles.roomInfoHeaderParent}>
          <LinearGradient
            style={styles.roomInfoHeader}
            locations={[0, 1]}
            colors={["#4e76f8", "#0e3dd9"]}
            useAngle={true}
            angle={180}
          >
            <View style={styles.statusbarIphone13}>
              <Image
                style={[styles.notchIcon, styles.tabBarPosition]}
                resizeMode="cover"
                source={require("../../assets/notch1.png")}
              />
              <View style={[styles.leftSide, styles.leftSideLayout]}>
                <View style={[styles.statusbarTime, styles.leftSideLayout]}>
                  <Text style={styles.text}>9:41</Text>
                </View>
              </View>
              <View style={[styles.rightSide, styles.rightSidePosition]}>
                <Image
                  style={[styles.batteryIcon, styles.rightSidePosition]}
                  resizeMode="cover"
                  source={require("../../assets/battery1.png")}
                />
                <Image
                  style={styles.wifiIcon}
                  resizeMode="cover"
                  source={require("../../assets/wifi1.png")}
                />
                <Image
                  style={styles.iconMobileSignal}
                  resizeMode="cover"
                  source={require("../../assets/icon--mobile-signal1.png")}
                />
              </View>
            </View>
            <View style={styles.tabControl}>
              <View style={[styles.tab, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social12.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Tab 1</Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.text4Layout]}>16</Text>
                </View>
              </View>
              <View style={styles.tabFlexBox}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social12.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text4Layout]}>1</Text>
                </View>
              </View>
              <View style={styles.tabFlexBox}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social12.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text4Layout]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social12.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text4Layout]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social12.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text4Layout]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social12.png")}
                />
                <Text style={[styles.label1, styles.labelTypo1]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text4Layout]}>1</Text>
                </View>
              </View>
            </View>
            <View style={[styles.leftParent, styles.buttonSpaceBlock]}>
              <Image
                style={styles.leftIcon}
                resizeMode="cover"
                source={require("../../assets/27-left.png")}
              />
              <View style={styles.customerInfoavt}>
                <View style={[styles.avt, styles.avtSpaceBlock]}>
                  <Text style={styles.k}>1</Text>
                </View>
                <View style={styles.row1Parent}>
                  <View style={[styles.row1, styles.rowFlexBox]}>
                    <View style={styles.name}>
                      <Image
                        style={[styles.mobileIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/mobile2.png")}
                      />
                      <Text style={[styles.name1, styles.name1Typo]}>
                        154.214.144.116
                      </Text>
                    </View>
                    <Image
                      style={[styles.icon23Edit, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon23-edit.png")}
                    />
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <Text style={[styles.angOnline, styles.textTypo]}>
                      Đang online
                    </Text>
                  </View>
                  <View style={[styles.button, styles.buttonSpaceBlock]}>
                    <Text style={[styles.label6, styles.textTypo]}>
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
            </View>
          </LinearGradient>
          <View style={[styles.qunLTinZalo, styles.ghiChSpaceBlock]}>
            <View style={styles.tinSpaceBlock}>
              <Text style={[styles.tinTVn, styles.text4Layout]}>
                Tin tư vấn 48 giờ
              </Text>
              <Text style={[styles.text1, styles.textTypo]}>3/8</Text>
            </View>
            <View style={[styles.tinTVnTrongThng, styles.tinSpaceBlock]}>
              <Text style={[styles.tinTVn, styles.text4Layout]}>
                Tin tư vấn trong tháng
              </Text>
              <Text style={[styles.text1, styles.textTypo]}>45/2000</Text>
            </View>
          </View>
        </View>
        <View style={styles.qunLTinZalo1}>
          <View style={[styles.listCell, styles.listSpaceBlock]}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room.png")}
            />
            <Text style={[styles.label7, styles.labelTypo2]}>
              Thông tin khách hàng
            </Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
          <View style={[styles.listCell, styles.listSpaceBlock]}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room19.png")}
            />
            <Text style={[styles.label8, styles.labelTypo2]}>Nhóm</Text>
            <Text style={[styles.value, styles.labelTypo2]}>5</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
          <View style={[styles.listCell, styles.listSpaceBlock]}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room2.png")}
            />
            <Text style={[styles.label8, styles.labelTypo2]}>
              Nhãn khách hàng
            </Text>
            <Text style={[styles.value, styles.labelTypo2]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
          <View style={[styles.listCell, styles.listSpaceBlock]}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room3.png")}
            />
            <Text style={[styles.label8, styles.labelTypo2]}>
              Hồ sơ liên quan
            </Text>
            <Text style={[styles.value, styles.labelTypo2]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room4.png")}
            />
            <Text style={[styles.label8, styles.labelTypo2]}>
              Social Profile
            </Text>
            <Text style={[styles.value, styles.labelTypo2]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
          <View style={[styles.listCell, styles.listSpaceBlock]}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room20.png")}
            />
            <Text style={[styles.label8, styles.labelTypo2]}>Đơn hàng</Text>
            <Text style={[styles.value, styles.labelTypo2]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/icon-room6.png")}
            />
            <Text style={[styles.label8, styles.labelTypo2]}>Hoạt động</Text>
            <Text style={[styles.value, styles.labelTypo2]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room21.png")}
            />
            <Text style={[styles.label8, styles.labelTypo2]}>Tệp đính kèm</Text>
            <Text style={[styles.value, styles.labelTypo2]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room8.png")}
            />
            <Text style={[styles.label8, styles.labelTypo2]}>Ảnh và video</Text>
            <Text style={[styles.value, styles.labelTypo2]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right2.png")}
            />
          </View>
        </View>
        <View style={[styles.ghiCh, styles.ghiChSpaceBlock]}>
          <View style={[styles.fieldtextArea, styles.titleFlexBox]}>
            <Text style={[styles.text3, styles.textTypo]}>{`Nhập ghi chú

`}</Text>
          </View>
          <View style={styles.lchSGhiCh}>
            <View style={styles.titleFlexBox}>
              <Text style={[styles.label16, styles.textTypo]}>
                Lịch sử ghi chú
              </Text>
            </View>
            <View style={styles.lchSGhiCh1}>
              <View style={[styles.avt1, styles.avtSpaceBlock]}>
                <Text style={[styles.label6, styles.textTypo]}>H</Text>
              </View>
              <View style={styles.frameParent}>
                <View style={styles.frameGroup}>
                  <View style={styles.name}>
                    <Text style={[styles.huongnt256, styles.text4Layout]}>
                      HuongNT256
                    </Text>
                    <Image
                      style={styles.frameChild}
                      resizeMode="cover"
                      source={require("../../assets/ellipse-672.png")}
                    />
                    <Text style={[styles.text4, styles.text4Layout]}>
                      16/11/2022 12:11
                    </Text>
                  </View>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../../assets/optionshorizontal2.png")}
                  />
                </View>
                <Text style={[styles.niDungGhi, styles.text4Layout]}>
                  Nội dung ghi chú cho khách hàng, có thể sửa xóa, dài thì xuống
                  dòng
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarBorder]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon24.png")}
            />
            <Text style={[styles.label17, styles.labelTypo]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon20.png")}
            />
            <Text style={[styles.label17, styles.labelTypo]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon25.png")}
            />
            <Text style={[styles.label19, styles.labelTypo]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon15.png")}
            />
            <Text style={[styles.label17, styles.labelTypo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={[styles.label17, styles.labelTypo]}>Khách hàng</Text>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.lineLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  tabFlexBox: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  iconLayout1: {
    width: 20,
    height: 20,
  },
  labelTypo1: {
    lineHeight: 20,
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 8,
    textAlign: "center",
    letterSpacing: 0,
  },
  text4Layout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  buttonSpaceBlock: {
    paddingLeft: Padding.p_base,
    flexDirection: "row",
  },
  avtSpaceBlock: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_4xs,
    justifyContent: "center",
    alignItems: "center",
  },
  rowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  name1Typo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  textTypo: {
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
  },
  ghiChSpaceBlock: {
    padding: Padding.p_base,
    display: "none",
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  tinSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.textGrayF3F4F6,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flex: 1,
  },
  listSpaceBlock: {
    paddingVertical: Padding.p_xs,
    height: 48,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 375,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  labelTypo2: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    marginLeft: 16,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  titleFlexBox: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  tabBarBorder: {
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  lineLayout: {
    height: 5,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  labelTypo: {
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    marginTop: 4,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    letterSpacing: 0,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    display: "none",
    height: 32,
  },
  text: {
    fontFamily: FontFamily.defaultRegularCallout,
    height: 20,
    fontWeight: "600",
    textAlign: "center",
    color: Color.textWhite,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    top: 1,
    width: 54,
    left: 0,
    position: "absolute",
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
    height: 12,
    top: 1,
    left: "50%",
    position: "absolute",
  },
  rightSide: {
    marginLeft: 86.5,
    top: 19,
    width: 77,
  },
  statusbarIphone13: {
    height: 47,
    width: 375,
    overflow: "hidden",
  },
  socialIcon: {
    borderRadius: Border.br_base,
  },
  label: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    marginLeft: 8,
    color: Color.brandPrimary,
  },
  number: {
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    color: Color.textWhite,
  },
  badge: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
  },
  label1: {
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    marginLeft: 8,
  },
  badge1: {
    width: 16,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tab3: {
    display: "none",
  },
  tabControl: {
    marginTop: 10,
    flexDirection: "row",
    display: "none",
    width: 375,
  },
  leftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  k: {
    fontSize: FontSize.largeTitleRegular_size,
    lineHeight: 41,
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    letterSpacing: 0,
  },
  avt: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.tagGray100,
    width: 80,
    height: 80,
  },
  mobileIcon: {
    display: "none",
  },
  name1: {
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    marginLeft: 4,
    textAlign: "center",
    color: Color.textWhite,
  },
  name: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon23Edit: {
    marginLeft: 8,
    display: "none",
  },
  row1: {
    flexDirection: "row",
  },
  angOnline: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    flex: 1,
  },
  row2: {
    marginTop: 8,
    flexDirection: "row",
    display: "none",
    alignSelf: "stretch",
  },
  label6: {
    fontFamily: FontFamily.text14Regular,
    color: Color.brandPrimary,
    textAlign: "center",
  },
  buttonChild: {
    width: 36,
    height: 36,
  },
  button: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.backgroundOrange,
    paddingRight: Padding.p_3xs,
    marginTop: 8,
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
    flex: 1,
  },
  leftParent: {
    paddingRight: Padding.p_21xl,
    marginTop: 10,
    alignSelf: "stretch",
  },
  roomInfoHeader: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    shadowRadius: 0.45,
    elevation: 0.45,
    shadowOpacity: 1,
    height: 185,
    alignItems: "center",
  },
  tinTVn: {
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  text1: {
    color: Color.colorRoyalblue_200,
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  tinTVnTrongThng: {
    marginLeft: 8,
  },
  qunLTinZalo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  roomInfoHeaderParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconRoom: {
    overflow: "hidden",
  },
  label7: {
    display: "flex",
    width: 271,
    marginLeft: 16,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
    alignItems: "center",
  },
  arrowRightIcon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  listCell: {
    display: "none",
  },
  label8: {
    marginLeft: 16,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  value: {
    textAlign: "right",
    marginLeft: 16,
    fontFamily: FontFamily.text14Regular,
    color: Color.brandPrimary,
  },
  qunLTinZalo1: {
    marginTop: 4,
  },
  text3: {
    color: Color.textPlaceHolder,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  fieldtextArea: {
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
    borderRadius: Border.br_9xs,
  },
  label16: {
    textAlign: "left",
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.textPrimary,
  },
  avt1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.brandLight5,
    width: 32,
    height: 32,
  },
  huongnt256: {
    fontWeight: "700",
    fontFamily: FontFamily.title1Bold,
    color: Color.textBlack,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameChild: {
    width: 4,
    height: 4,
    marginLeft: 8,
  },
  text4: {
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    marginLeft: 8,
  },
  frameGroup: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  niDungGhi: {
    textAlign: "left",
    marginTop: 8,
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
  },
  frameParent: {
    marginLeft: 8,
    flex: 1,
  },
  lchSGhiCh1: {
    backgroundColor: Color.neutral3F5F5F5,
    padding: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  lchSGhiCh: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  ghiCh: {
    marginTop: 4,
  },
  chiTitRoom: {
    backgroundColor: Color.backgroundGrayF8F8F8,
    alignItems: "center",
    left: 0,
    position: "absolute",
    top: 0,
  },
  line: {
    marginLeft: -67.5,
    bottom: 11,
    width: 135,
  },
  iphoneXsHomeIndicator: {
    height: 24,
    display: "none",
    width: 375,
  },
  menuIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  label17: {
    color: Color.textSecondary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  label19: {
    color: Color.brandPrimary,
  },
  tabBarParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    width: 134,
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  tabBar: {
    marginLeft: -205,
    bottom: 0,
    borderTopWidth: 0.5,
    height: 84,
    justifyContent: "space-between",
    left: "50%",
    position: "absolute",
    width: 375,
  },
  roomWebsite: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
});

export default RoomWebsite;
