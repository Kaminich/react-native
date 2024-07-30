import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, FontSize, Border, Color } from "../../GlobalStyles";

const MissedCalls2 = () => {
  return (
    <View style={styles.missedCalls}>
      <View style={styles.headerParent}>
        <View style={styles.header}>
          <View style={styles.statusbarIphone13}>
            <Image
              style={[styles.notchIcon, styles.tabBarPosition]}
              resizeMode="cover"
              source={require("../../assets/notch.png")}
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
                source={require("../../assets/battery.png")}
              />
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../../assets/wifi.png")}
              />
              <Image
                style={styles.iconMobileSignal}
                resizeMode="cover"
                source={require("../../assets/icon--mobile-signal.png")}
              />
            </View>
          </View>
          <View style={[styles.alert, styles.alertSpaceBlock]}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/validate.png")}
            />
            <Text style={styles.description}>Không có kết nối internet</Text>
            <Image
              style={[styles.closeIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/23-close.png")}
            />
          </View>
          <View style={styles.titlePage}>
            <Image
              style={[styles.leftIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/27-left.png")}
            />
            <View style={styles.title}>
              <Text style={[styles.title1, styles.luTypo]}>Cuộc gọi</Text>
            </View>
            <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
            <Image
              style={[styles.filterIcon, styles.luPosition]}
              resizeMode="cover"
              source={require("../../assets/filter1.png")}
            />
          </View>
          <View style={styles.tabControl}>
            <View style={[styles.tab, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social61.png")}
              />
              <Text style={styles.label}>Tất cả</Text>
              <View style={[styles.badge, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text2Typo]}>16</Text>
              </View>
            </View>
            <View style={[styles.tab1, styles.tabBorder]}>
              <Image
                style={[styles.socialIcon, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social61.png")}
              />
              <Text style={styles.label1}>Cuộc gọi nhỡ</Text>
              <View style={[styles.badge, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text2Typo]}>3</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={styles.label}>Tab 1</Text>
              <View style={[styles.badge2, styles.badge2Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={styles.label}>Tab 1</Text>
              <View style={[styles.badge2, styles.badge2Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={styles.label}>Tab 1</Text>
              <View style={[styles.badge2, styles.badge2Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={styles.label}>Tab 1</Text>
              <View style={[styles.badge2, styles.badge2Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.callHistoryList}>
          <View>
            <View style={[styles.title2, styles.badgeSpaceBlock]}>
              <Text style={styles.label6}>Hôm nay</Text>
            </View>
            <View style={styles.callMinimizecallHistoryParent}>
              <View
                style={[styles.callMinimizecallHistory, styles.callSpaceBlock]}
              >
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kTypo]}>TL</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>Trí Lê</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.cucTypo]}>00:01:16</Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status.png")}
                    />
                    <Text style={[styles.cucGiN, styles.cucTypo]}>
                      Cuộc gọi đến
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>13:01</Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.callMinimizecallHistory, styles.callSpaceBlock]}
              >
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kTypo]}>0</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>0901887055</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.cucTypo]}>00:02:48</Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.cucTypo]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>11:08</Text>
                  </View>
                </View>
              </View>
              <View style={styles.callSpaceBlock}>
                <View style={[styles.avt2, styles.avtLayout]}>
                  <Text style={[styles.k2, styles.kTypo]}>TH</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL2, styles.trLTypo]}>Thu Hương</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.cucTypo]}>00:00:00</Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status2.png")}
                    />
                    <Text style={[styles.missedCalls1, styles.cucTypo]}>
                      Cuộc gọi nhỡ
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>10:22</Text>
                  </View>
                </View>
              </View>
              <View style={styles.callSpaceBlock}>
                <View style={[styles.avt2, styles.avtLayout]}>
                  <Text style={[styles.k2, styles.kTypo]}>0</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL2, styles.trLTypo]}>0331783910</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.cucTypo]}>00:00:00</Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status2.png")}
                    />
                    <Text style={[styles.missedCalls1, styles.cucTypo]}>
                      Cuộc gọi nhỡ
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>09:04</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.callHistoryList}>
            <View style={[styles.title2, styles.badgeSpaceBlock]}>
              <Text style={styles.label6}>Cũ hơn</Text>
            </View>
            <View style={styles.callMinimizecallHistoryParent}>
              <View
                style={[styles.callMinimizecallHistory, styles.callSpaceBlock]}
              >
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kTypo]}>HT</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>Hiền Thảo</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.cucTypo]}>00:02:11</Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.cucTypo]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>
                      06/06/2023
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.callMinimizecallHistory, styles.callSpaceBlock]}
              >
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kTypo]}>NT</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>
                    Nguyễn Thu Trang
                  </Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.cucTypo]}>00:00:33</Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.cucTypo]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>
                      06/06/2023
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.callSpaceBlock}>
                <View style={[styles.avt2, styles.avtLayout]}>
                  <Text style={[styles.k2, styles.kTypo]}>LH</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>Lê Thu Hà</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.cucTypo]}>00:00:00</Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.cucTypo]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>
                      05/06/2023
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.callMinimizecallHistory, styles.callSpaceBlock]}
              >
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kTypo]}>0</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>0945188271</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.cucTypo]}>00:00:46</Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge2Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.cucTypo]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>
                      04/06/2023
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.iconButton}
        resizeMode="cover"
        source={require("../../assets/icon-button.png")}
      />
      <View style={[styles.tabBar, styles.tabBorder]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon7.png")}
            />
            <Text style={[styles.label8, styles.labelTypo]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon51.png")}
            />
            <Text style={[styles.label9, styles.labelTypo]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon61.png")}
            />
            <Text style={[styles.label8, styles.labelTypo]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon3.png")}
            />
            <Text style={[styles.label8, styles.labelTypo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon41.png")}
            />
            <Text style={[styles.label8, styles.labelTypo]}>Khách hàng</Text>
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
  alertSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  iconLayout1: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  luTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  luPosition: {
    right: 16,
    top: 10,
    display: "none",
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
  },
  socialIconLayout: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
  },
  badgeSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  text2Typo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  tabBorder: {
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  badge2Layout: {
    width: 16,
    overflow: "hidden",
  },
  callSpaceBlock: {
    padding: Padding.p_base,
    flexDirection: "row",
    width: 375,
  },
  avtLayout: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_4xs,
    height: 44,
    width: 44,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
  },
  kTypo: {
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  trLTypo: {
    fontSize: FontSize.calloutRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
  },
  cucTypo: {
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  lineLayout: {
    height: 5,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  labelTypo: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    letterSpacing: 0,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    display: "none",
  },
  text: {
    fontFamily: FontFamily.defaultRegularCallout,
    color: Color.colorGray_200,
    height: 20,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    textAlign: "center",
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
  description: {
    marginLeft: 8,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  closeIcon: {
    marginLeft: 8,
  },
  alert: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
  },
  leftIcon: {
    zIndex: 0,
    height: 24,
  },
  title1: {
    color: Color.textPrimary,
    textAlign: "center",
  },
  title: {
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  lu: {
    zIndex: 2,
    textAlign: "right",
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  filterIcon: {
    zIndex: 3,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  titlePage: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    width: 375,
  },
  socialIcon: {
    display: "none",
  },
  label: {
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 8,
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
  },
  number: {
    color: Color.textWhite,
    textAlign: "center",
  },
  badge: {
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    marginLeft: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  tab: {
    backgroundColor: Color.textWhite,
  },
  label1: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    fontSize: FontSize.subheadlineSemiBold_size,
    color: Color.brandPrimary,
    marginLeft: 8,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
  },
  tab1: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  badge2: {
    paddingVertical: 0,
    alignItems: "center",
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    justifyContent: "center",
  },
  tab2: {
    display: "none",
    backgroundColor: Color.textWhite,
  },
  tabControl: {
    flexDirection: "row",
    width: 375,
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    shadowRadius: 0.45,
    elevation: 0.45,
    shadowOpacity: 1,
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
  label6: {
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    fontFamily: FontFamily.headlineSemiBold,
    textAlign: "left",
    color: Color.textPrimary,
    fontWeight: "600",
    letterSpacing: 0,
  },
  title2: {
    width: 343,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  k: {
    color: Color.textPrimary,
  },
  avt: {
    backgroundColor: Color.tagGray100,
  },
  trL: {
    color: Color.textPrimary,
  },
  hourglassIcon: {
    height: 16,
  },
  text1: {
    color: Color.textSecondary,
  },
  hourglassParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  trLParent: {
    marginLeft: 8,
    flex: 1,
  },
  cucGiN: {
    color: Color.textSecondary,
    display: "none",
  },
  text2: {
    color: Color.textSecondary,
    textAlign: "right",
  },
  timer: {
    marginTop: 8,
    flexDirection: "row",
  },
  callStatusParent: {
    alignItems: "flex-end",
    marginLeft: 8,
    justifyContent: "center",
  },
  callMinimizecallHistory: {
    display: "none",
  },
  k2: {
    color: Color.otherRed,
  },
  avt2: {
    backgroundColor: Color.backgroundRed,
  },
  trL2: {
    color: Color.otherRed,
  },
  missedCalls1: {
    color: Color.otherRed,
    display: "none",
  },
  callMinimizecallHistoryParent: {
    marginTop: 8,
  },
  callHistoryList: {
    marginTop: 24,
  },
  headerParent: {
    height: 757,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconButton: {
    right: 24,
    bottom: 108,
    borderRadius: Border.br_17xl,
    width: 64,
    height: 64,
    position: "absolute",
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
  label8: {
    color: Color.textSecondary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  label9: {
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
    marginLeft: -187.5,
    bottom: 0,
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 0.5,
    height: 84,
    justifyContent: "space-between",
    left: "50%",
    position: "absolute",
    width: 375,
  },
  missedCalls: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
});

export default MissedCalls2;
