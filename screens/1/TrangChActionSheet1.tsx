import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";

const TrangChActionSheet1 = () => {
  return (
    <View style={styles.trangChActionSheet}>
      <Image
        style={[styles.backgroundIcon, styles.contentPosition]}
        resizeMode="cover"
        source={require("../../assets/background11.png")}
      />
      <View style={[styles.iphoneMockupStatusBar, styles.contentPosition]}>
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
      <View style={[styles.content, styles.contentPosition]}>
        <View style={styles.header}>
          <View style={styles.liCho}>
            <Image
              style={[styles.avatarIcon, styles.feedbackLayout]}
              resizeMode="cover"
              source={require("../../assets/avatar.png")}
            />
            <View style={styles.xinChoLMinhTrWrapper}>
              <Text style={styles.xinChoLContainer}>
                <Text style={[styles.xinCho, styles.text3Typo1]}>
                  <Text style={styles.xinCho1}>Xin chào,</Text>
                  <Text style={styles.text}>{` 
`}</Text>
                </Text>
                <Text style={[styles.lMinhTr, styles.text1Typo]}>
                  Lê Minh Trí
                </Text>
              </Text>
            </View>
          </View>
          <View style={[styles.feedback, styles.button1FlexBox]}>
            <Image
              style={styles.feedbackIcon}
              resizeMode="cover"
              source={require("../../assets/feedback1.png")}
            />
          </View>
        </View>
        <View style={styles.cardParent}>
          <View style={styles.cardLayout}>
            <Image
              style={[styles.cardChild, styles.cardLayout]}
              resizeMode="cover"
              source={require("../../assets/group-5764.png")}
            />
            <View style={styles.cardnHngop1}>
              <View style={styles.frameParent}>
                <View style={styles.calendarParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../../assets/9-calendar.png")}
                  />
                  <Text style={[styles.text1, styles.text1Typo]}>
                    01/01/2024 - 31/01/2024
                  </Text>
                </View>
                <Image
                  style={[styles.rightIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/28-right.png")}
                />
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../../assets/28-right.png")}
                />
              </View>
              <View style={[styles.headerCard, styles.button1Bg]}>
                <View style={styles.nHngWrapper}>
                  <Text style={[styles.nHng, styles.nHngTypo]}>Đơn hàng</Text>
                </View>
                <View style={[styles.doanhThuWrapper, styles.button1FlexBox]}>
                  <Text style={[styles.doanhThu, styles.nHngTypo]}>
                    Doanh thu
                  </Text>
                </View>
              </View>
              <View style={styles.tngNHngParent}>
                <Text style={[styles.tngNHng, styles.tngTypo]}>
                  Tổng đơn hàng
                </Text>
                <Text style={[styles.text2, styles.text2SpaceBlock]}>
                  732.135
                </Text>
                <View style={[styles.tLTngTrngParent, styles.text2SpaceBlock]}>
                  <Text style={[styles.tLTng, styles.tngTypo]}>
                    Tỉ lệ tăng trưởng
                  </Text>
                  <View style={styles.tagDoanhThu}>
                    <Image
                      style={styles.upIcon}
                      resizeMode="cover"
                      source={require("../../assets/up.png")}
                    />
                    <Text style={[styles.value, styles.valueLayout]}>
                      4.99 %
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tnhNngNiBt}>
            <View style={styles.title}>
              <Text style={[styles.label, styles.text1Typo]}>
                Tính năng nổi bật
              </Text>
            </View>
            <View style={[styles.tnhNngParent, styles.tnhFlexBox]}>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>{`Kết nối
kênh chat`}</Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={[styles.settingIcon1, styles.settingIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon1.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Cài đặt bình luận
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={[styles.settingIcon1, styles.settingIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon12.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Câu trả lời mẫu
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon3.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Quy tắc chia hội thoại
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={[styles.settingIcon1, styles.settingIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon4.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Chiến dịch gửi tin nhắn
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon5.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Nhóm nhân viên
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon6.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Tiện ích nhãn
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={[styles.settingIcon1, styles.settingIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon7.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Giờ làm việc
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.qunLKhchHng, styles.buttonSpaceBlock]}>
            <View style={styles.title}>
              <Text style={[styles.label, styles.text1Typo]}>
                Quản lý khách hàng
              </Text>
            </View>
            <View style={[styles.tnhNngGroup, styles.tnhFlexBox]}>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon8.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Tạo mới khách hàng
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon13.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Danh sách khách hàng
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon14.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Nhóm quan tâm
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View
                  style={[styles.settingIconWrapper, styles.iconSpaceBlock]}
                >
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon11.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.text3SpaceBlock]}>
                  Báo cáo khách hàng
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.titleParent}>
            <View style={styles.title2}>
              <Text style={[styles.label, styles.text1Typo]}>
                Kinh nghiệm bán hàng
              </Text>
            </View>
            <View style={styles.headerCardcardctaParent}>
              <View style={[styles.headerCardcardcta, styles.headerShadowBox]}>
                <View style={styles.frameGroup}>
                  <View>
                    <Text
                      style={[styles.thitLpWebsiteContainer, styles.text1Typo]}
                    >
                      <Text style={styles.qunL}>{`Quản lý
`}</Text>
                      <Text style={styles.nhnKhchHng}>{`Nhãn khách hàng
`}</Text>
                      <Text style={styles.qunL}>nhanh chóng!</Text>
                    </Text>
                    <Image
                      style={styles.frameChild}
                      resizeMode="cover"
                      source={require("../../assets/arrow-4.png")}
                    />
                  </View>
                  <View style={styles.groupParent}>
                    <View style={styles.menuIcon3Position}>
                      <Image
                        style={[styles.vectorIcon, styles.vectorIconPosition1]}
                        resizeMode="cover"
                        source={require("../../assets/vector38.png")}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconPosition]}
                        resizeMode="cover"
                        source={require("../../assets/vector39.png")}
                      />
                      <Image
                        style={[styles.groupChild, styles.groupPosition1]}
                        resizeMode="cover"
                        source={require("../../assets/group-5739.png")}
                      />
                      <Image
                        style={[styles.groupItem, styles.groupPosition]}
                        resizeMode="cover"
                        source={require("../../assets/group-57402.png")}
                      />
                    </View>
                    <Image
                      style={[styles.xIcon, styles.iconPosition]}
                      resizeMode="cover"
                      source={require("../../assets/x.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.headerCardcardcta1, styles.headerShadowBox]}>
                <View style={styles.frameGroup}>
                  <View>
                    <Text
                      style={[styles.thitLpWebsiteContainer, styles.text1Typo]}
                    >
                      <Text style={styles.qunL}>{`Thiết lập
`}</Text>
                      <Text style={styles.nhnKhchHng}>{`Website bán hàng
`}</Text>
                      <Text style={styles.qunL}>trong tích tắc!</Text>
                    </Text>
                    <Image
                      style={styles.frameChild}
                      resizeMode="cover"
                      source={require("../../assets/arrow-4.png")}
                    />
                  </View>
                  <View style={styles.groupParent}>
                    <View style={styles.menuIcon3Position}>
                      <Image
                        style={[styles.vectorIcon2, styles.vectorIconPosition1]}
                        resizeMode="cover"
                        source={require("../../assets/vector40.png")}
                      />
                      <Image
                        style={[styles.vectorIcon3, styles.vectorIconPosition]}
                        resizeMode="cover"
                        source={require("../../assets/vector41.png")}
                      />
                      <Image
                        style={[styles.groupInner, styles.groupPosition1]}
                        resizeMode="cover"
                        source={require("../../assets/group-57391.png")}
                      />
                      <Image
                        style={[styles.groupIcon, styles.groupPosition]}
                        resizeMode="cover"
                        source={require("../../assets/group-57401.png")}
                      />
                    </View>
                    <Image
                      style={[styles.xIcon1, styles.iconPosition]}
                      resizeMode="cover"
                      source={require("../../assets/x1.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarClr]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon32.png")}
            />
            <Text style={[styles.label3, styles.labelSpaceBlock]}>
              Trang chủ
            </Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon27.png")}
            />
            <Text style={[styles.label4, styles.text3Typo]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <View style={styles.menuIconLayout}>
              <Image
                style={[styles.menuIcon3, styles.menuIcon3Position]}
                resizeMode="cover"
                source={require("../../assets/menu-icon28.png")}
              />
              <View style={[styles.badge, styles.badgeBorder]}>
                <Text style={styles.number}>3</Text>
              </View>
            </View>
            <Text style={[styles.label4, styles.text3Typo]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <View style={styles.menuIconLayout}>
              <Image
                style={[styles.menuIcon3, styles.menuIcon3Position]}
                resizeMode="cover"
                source={require("../../assets/menu-icon15.png")}
              />
              <View style={[styles.badge, styles.badgeBorder]}>
                <Text style={styles.number}>3</Text>
              </View>
            </View>
            <Text style={[styles.label4, styles.text3Typo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={[styles.label4, styles.text3Typo]}>Khách hàng</Text>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.lineLayout]} />
        </View>
      </View>
      <Image
        style={[styles.trangChActionSheetChild, styles.confirmationPosition]}
        resizeMode="cover"
        source={require("../../assets/rectangle-1885.png")}
      />
      <View style={[styles.confirmation, styles.confirmationPosition]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../../assets/23-close.png")}
        />
        <View style={styles.contentParent}>
          <View style={styles.content1}>
            <View style={[styles.confirmationIcon, styles.iconSpaceBlock]}>
              <Image
                style={styles.validateIcon}
                resizeMode="cover"
                source={require("../../assets/validate5.png")}
              />
            </View>
            <View style={styles.titleGroup}>
              <Text style={[styles.title3, styles.text1Typo]}>Đăng xuất</Text>
              <Text style={[styles.text3, styles.text3Typo]}>
                Bạn có chắc chắn đăng xuất tài khoản này
              </Text>
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <View style={[styles.button, styles.badgeBorder]}>
              <Image
                style={styles.iconsetplaceholder}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder7.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>Hủy</Text>
              <Image
                style={styles.iconsetplaceholder1}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder7.png")}
              />
            </View>
            <View style={[styles.button1, styles.buttonSpaceBlock]}>
              <Image
                style={styles.iconsetplaceholder}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder5.png")}
              />
              <Text style={[styles.text5, styles.textTypo]}>Đăng xuất</Text>
              <Image
                style={styles.iconsetplaceholder1}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder5.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  feedbackLayout: {
    width: 40,
    height: 40,
  },
  text3Typo1: {
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
  },
  text1Typo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  button1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardLayout: {
    height: 214,
    width: 400,
  },
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  button1Bg: {
    backgroundColor: Color.brandPrimary,
    flexDirection: "row",
  },
  nHngTypo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
  },
  tngTypo: {
    color: Color.neutral2,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  text2SpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  valueLayout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  tnhFlexBox: {
    flexWrap: "wrap",
    marginTop: 12,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  text3SpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  settingIconLayout: {
    height: 28,
    width: 28,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  headerShadowBox: {
    alignItems: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.textWhite,
    padding: Padding.p_base,
  },
  vectorIconPosition1: {
    bottom: "1.33%",
    top: "87.5%",
    height: "11.17%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    top: "98.67%",
    height: "1.33%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    bottom: "1%",
    height: "99%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    height: 17,
    top: 10,
    position: "absolute",
  },
  iconPosition: {
    height: 13,
    top: -19,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  tabBarClr: {
    borderColor: Color.gray4D9D9D9,
    backgroundColor: Color.textWhite,
  },
  lineLayout: {
    height: 5,
    backgroundColor: Color.black,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  menuIconLayout: {
    height: 22,
    width: 22,
  },
  labelSpaceBlock: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    letterSpacing: 0,
  },
  text3Typo: {
    color: Color.textSecondary,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
  },
  menuIcon3Position: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  badgeBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmationPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    letterSpacing: 0,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    marginLeft: 8,
  },
  backgroundIcon: {
    width: 534,
    height: 1101,
    top: 0,
    left: 0,
  },
  batteryIcon: {
    width: "36.43%",
    right: "0.15%",
    left: "63.42%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 15,
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
    position: "absolute",
  },
  iphoneMockupStatusBar: {
    height: 38,
    width: 375,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  avatarIcon: {
    height: 40,
  },
  xinCho1: {
    color: Color.textPrimary,
  },
  text: {
    color: Color.textColorPrimary,
  },
  xinCho: {
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
  },
  lMinhTr: {
    color: Color.brandPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "600",
  },
  xinChoLContainer: {
    textAlign: "left",
  },
  xinChoLMinhTrWrapper: {
    marginLeft: 8,
  },
  liCho: {
    alignItems: "center",
    flexDirection: "row",
  },
  feedbackIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  feedback: {
    backgroundColor: Color.brandLight2,
    padding: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    height: 40,
    width: 40,
    flexDirection: "row",
  },
  header: {
    padding: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
  },
  cardChild: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  text1: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
    color: Color.textWhite,
    textAlign: "left",
    marginLeft: 8,
  },
  calendarParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  rightIcon: {
    display: "none",
  },
  frameParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  nHng: {
    color: Color.brandPrimary,
    letterSpacing: 0,
    lineHeight: 20,
  },
  nHngWrapper: {
    backgroundColor: Color.textWhite,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  doanhThu: {
    color: Color.textWhite,
  },
  doanhThuWrapper: {
    marginLeft: 12,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
    flexDirection: "row",
    flex: 1,
  },
  headerCard: {
    width: 311,
    marginTop: 12,
    borderRadius: Border.br_5xs,
    padding: Padding.p_5xs,
  },
  tngNHng: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.title1Bold_size,
    lineHeight: 34,
    fontFamily: FontFamily.text14Bold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.textWhite,
  },
  tLTng: {
    textAlign: "left",
  },
  upIcon: {
    width: 12,
    height: 12,
    opacity: 0.8,
    overflow: "hidden",
  },
  value: {
    color: Color.tagGreen700,
    marginLeft: 4,
    fontFamily: FontFamily.text14Bold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  tagDoanhThu: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.alertSuccess,
    paddingVertical: Padding.p_11xs,
    marginLeft: 24,
    paddingHorizontal: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  tLTngTrngParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tngNHngParent: {
    marginTop: 12,
    alignSelf: "stretch",
    alignItems: "center",
  },
  cardnHngop1: {
    left: "50%",
    marginLeft: -171.5,
    width: 343,
    padding: Padding.p_base,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  label: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "600",
    color: Color.textPrimary,
    textAlign: "left",
  },
  title: {
    width: 343,
    alignItems: "center",
    flexDirection: "row",
  },
  settingIconWrapper: {
    backgroundColor: Color.backgroundIcon,
    borderRadius: Border.br_5xs,
  },
  ktNiKnh: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  tnhNng: {
    width: 80,
    padding: Padding.p_9xs,
    alignItems: "center",
  },
  settingIcon1: {
    overflow: "hidden",
  },
  tnhNngParent: {
    width: 343,
  },
  tnhNngNiBt: {
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 375,
  },
  tnhNngGroup: {
    alignSelf: "stretch",
  },
  qunLKhchHng: {
    alignItems: "center",
  },
  title2: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  qunL: {
    color: Color.neutral8595959,
  },
  nhnKhchHng: {
    color: Color.brandPrimary,
  },
  thitLpWebsiteContainer: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
  },
  frameChild: {
    height: 0,
    marginTop: 15,
    display: "none",
    width: 24,
  },
  vectorIcon: {
    width: "18.07%",
    left: "81.93%",
  },
  vectorIcon1: {
    width: "99.88%",
    right: "0.12%",
  },
  groupChild: {
    width: "86.63%",
    right: "6.63%",
    left: "6.75%",
  },
  groupItem: {
    left: 18,
    width: 47,
  },
  xIcon: {
    left: 68,
    width: 15,
  },
  groupParent: {
    marginLeft: 4,
    alignSelf: "stretch",
    flex: 1,
  },
  frameGroup: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  headerCardcardcta: {
    height: 96,
    width: 230,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(198, 198, 198, 0.25)",
    alignItems: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  vectorIcon2: {
    width: "18.1%",
    left: "81.9%",
  },
  vectorIcon3: {
    width: "99.87%",
    right: "0.13%",
  },
  groupInner: {
    width: "86.58%",
    right: "6.58%",
    left: "6.84%",
  },
  groupIcon: {
    left: 17,
    width: 45,
  },
  xIcon1: {
    left: 65,
    width: 14,
  },
  headerCardcardcta1: {
    height: 96,
    width: 230,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(198, 198, 198, 0.25)",
    alignItems: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    marginLeft: 12,
  },
  headerCardcardctaParent: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_base,
    flexDirection: "row",
    width: 375,
    overflow: "hidden",
  },
  titleParent: {
    paddingTop: Padding.p_5xs,
    width: 375,
    overflow: "hidden",
  },
  cardParent: {
    alignItems: "center",
  },
  content: {
    top: 38,
  },
  line: {
    marginLeft: -67.5,
    bottom: 11,
    width: 135,
  },
  iphoneXsHomeIndicator: {
    display: "none",
    height: 24,
    width: 375,
  },
  menuIcon: {
    overflow: "hidden",
  },
  label3: {
    textAlign: "center",
    color: Color.brandPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  label4: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    letterSpacing: 0,
  },
  menuIcon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  number: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    textAlign: "center",
    color: Color.textWhite,
    letterSpacing: 0,
    fontFamily: FontFamily.text14Regular,
  },
  badge: {
    height: "69.09%",
    width: "69.09%",
    top: "-19.55%",
    right: "-19.55%",
    bottom: "50.45%",
    left: "50.45%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.otherRed,
    borderColor: Color.textWhite,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  tabBarParent: {
    alignSelf: "stretch",
    flexDirection: "row",
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
    top: 888,
    borderTopWidth: 0.5,
    height: 84,
    borderStyle: "solid",
    borderColor: Color.gray4D9D9D9,
    justifyContent: "space-between",
    width: 375,
    left: 0,
    position: "absolute",
  },
  trangChActionSheetChild: {
    marginTop: -486,
    marginLeft: -205,
    height: 972,
    opacity: 0.4,
    width: 375,
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
    justifyContent: "center",
    alignItems: "center",
  },
  title3: {
    textAlign: "center",
    alignSelf: "stretch",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "600",
    color: Color.textPrimary,
  },
  text3: {
    marginTop: 8,
    alignSelf: "stretch",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  titleGroup: {
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  content1: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconsetplaceholder: {
    display: "none",
    height: 24,
    width: 24,
  },
  text4: {
    color: Color.textPrimary,
  },
  iconsetplaceholder1: {
    display: "none",
    height: 24,
    width: 24,
    marginLeft: 8,
  },
  button: {
    height: 41,
    borderColor: Color.gray4D9D9D9,
    backgroundColor: Color.textWhite,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    flex: 1,
  },
  text5: {
    color: Color.textWhite,
  },
  button1: {
    marginLeft: 12,
    backgroundColor: Color.brandPrimary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_7xs,
    height: 40,
    flex: 1,
  },
  buttonGroup: {
    marginTop: 24,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  contentParent: {
    alignSelf: "stretch",
  },
  confirmation: {
    marginTop: -141,
    shadowColor: "rgba(5, 16, 55, 0.15)",
    shadowRadius: 30,
    elevation: 30,
    alignItems: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.textWhite,
    padding: Padding.p_base,
    top: "50%",
    marginLeft: -190,
    width: 343,
    borderRadius: Border.br_7xs,
    overflow: "hidden",
  },
  trangChActionSheet: {
    backgroundColor: Color.neutral2,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default TrangChActionSheet1;
