import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Border, Color, Padding } from "../../GlobalStyles";

const TrangCh = () => {
  return (
    <View style={styles.trangCh}>
      <Image
        style={[styles.backgroundIcon, styles.cardChildPosition]}
        resizeMode="cover"
        source={require("../../assets/background10.png")}
      />
      <View style={[styles.iphoneMockupStatusBar, styles.cardChildPosition]}>
        <View style={styles.right}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/battery3.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../../assets/wifi2.png")}
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
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.liCho}>
            <Image
              style={styles.feedbackLayout}
              resizeMode="cover"
              source={require("../../assets/avatar.png")}
            />
            <View style={styles.xinChoLMinhTrWrapper}>
              <Text style={styles.xinChoLContainer}>
                <Text style={[styles.xinCho, styles.xinChoTypo]}>
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
          <View style={[styles.feedback, styles.feedbackLayout]}>
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
              <View style={[styles.headerCard, styles.wrapperLayout]}>
                <View style={[styles.nHngWrapper, styles.wrapperLayout]}>
                  <Text style={[styles.nHng, styles.nHngTypo]}>Đơn hàng</Text>
                </View>
                <View style={[styles.doanhThuWrapper, styles.wrapperLayout]}>
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
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>{`Kết nối
kênh chat`}</Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={[styles.settingIcon1, styles.settingIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon1.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Cài đặt bình luận
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={[styles.settingIcon1, styles.settingIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon2.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Câu trả lời mẫu
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon3.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Quy tắc chia hội thoại
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={[styles.settingIcon1, styles.settingIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon4.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Chiến dịch gửi tin nhắn
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon5.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Nhóm nhân viên
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon6.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Tiện ích nhãn
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={[styles.settingIcon1, styles.settingIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon7.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Giờ làm việc
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.qunLKhchHng}>
            <View style={styles.title}>
              <Text style={[styles.label, styles.text1Typo]}>
                Quản lý khách hàng
              </Text>
            </View>
            <View style={[styles.tnhNngGroup, styles.tnhFlexBox]}>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon8.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Tạo mới khách hàng
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon9.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Danh sách khách hàng
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon10.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Nhóm quan tâm
                </Text>
              </View>
              <View style={styles.tnhNng}>
                <View style={[styles.settingIconWrapper, styles.wrapperLayout]}>
                  <Image
                    style={styles.settingIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/setting-icon11.png")}
                  />
                </View>
                <Text style={[styles.ktNiKnh, styles.valueLayout]}>
                  Báo cáo khách hàng
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.titleParent}>
            <View style={[styles.title2, styles.badgeSpaceBlock]}>
              <Text style={[styles.label, styles.text1Typo]}>
                Kinh nghiệm bán hàng
              </Text>
            </View>
            <View style={styles.headerCardcardctaParent}>
              <View style={styles.headerShadowBox}>
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
                        source={require("../../assets/group-5740.png")}
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
      <View style={[styles.tabBar, styles.badgeBorder]}>
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
            <Text style={[styles.label3, styles.labelTypo]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon27.png")}
            />
            <Text style={[styles.label4, styles.labelTypo]}>Cuộc gọi</Text>
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
            <Text style={[styles.label4, styles.labelTypo]}>Tin nhắn</Text>
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
            <Text style={[styles.label4, styles.labelTypo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={[styles.label4, styles.labelTypo]}>Khách hàng</Text>
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
  cardChildPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  xinChoTypo: {
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
  },
  text1Typo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  feedbackLayout: {
    height: 40,
    width: 40,
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
  wrapperLayout: {
    borderRadius: Border.br_5xs,
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
  settingIconLayout: {
    height: 28,
    width: 28,
  },
  badgeSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
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
  headerShadowBox: {
    alignItems: "flex-end",
    height: 96,
    width: 230,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(198, 198, 198, 0.25)",
    backgroundColor: Color.textWhite,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    padding: Padding.p_base,
  },
  badgeBorder: {
    borderStyle: "solid",
    position: "absolute",
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
  labelTypo: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    textAlign: "center",
    letterSpacing: 0,
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
  backgroundIcon: {
    width: 534,
    height: 1101,
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
    left: 0,
    overflow: "hidden",
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
    borderRadius: Border.br_7xs,
    backgroundColor: Color.brandLight2,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
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
    top: 0,
    position: "absolute",
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
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  doanhThu: {
    color: Color.textWhite,
  },
  doanhThuWrapper: {
    marginLeft: 12,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headerCard: {
    backgroundColor: Color.brandPrimary,
    width: 311,
    marginTop: 12,
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
    marginLeft: -171.5,
    left: "50%",
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
    padding: Padding.p_3xs,
  },
  ktNiKnh: {
    marginTop: 8,
    textAlign: "center",
    alignSelf: "stretch",
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
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  title2: {
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
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
    left: 0,
    position: "absolute",
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
    color: Color.brandPrimary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  label4: {
    color: Color.textSecondary,
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
    borderWidth: 1,
    paddingVertical: 0,
    alignItems: "center",
    paddingHorizontal: Padding.p_9xs,
    justifyContent: "center",
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
    borderColor: Color.gray4D9D9D9,
    borderTopWidth: 0.5,
    height: 84,
    backgroundColor: Color.textWhite,
    justifyContent: "space-between",
    width: 375,
    left: 0,
  },
  trangCh: {
    backgroundColor: Color.neutral2,
    height: 972,
    overflow: "hidden",
    width: "100%",
  },
});

export default TrangCh;
