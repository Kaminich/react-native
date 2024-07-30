import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, Color, FontFamily, Border } from "../../GlobalStyles";

const SearchResultMoreContact = () => {
  return (
    <View style={styles.searchResultXemThmLinH}>
      <View style={styles.headerParent}>
        <View style={styles.header}>
          <View style={styles.statusbarIphone13}>
            <Image
              style={styles.notchIcon}
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
              style={styles.iconLayout2}
              resizeMode="cover"
              source={require("../../assets/validate1.png")}
            />
            <Text style={[styles.description, styles.nameTypo1]}>
              Không có kết nối internet
            </Text>
            <Image
              style={[styles.closeIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../../assets/23-close.png")}
            />
          </View>
          <View style={styles.titlePage}>
            <Image
              style={[styles.leftIcon, styles.leftIconPosition]}
              resizeMode="cover"
              source={require("../../assets/27-left1.png")}
            />
            <View style={[styles.title, styles.alertFlexBox]}>
              <Text style={[styles.title1, styles.luTypo]}>
                Kết quả: “hương”
              </Text>
            </View>
            <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
            <Image
              style={[styles.filterIcon, styles.luPosition]}
              resizeMode="cover"
              source={require("../../assets/filter1.png")}
            />
          </View>
          <View style={styles.tabControl}>
            <View style={[styles.tab, styles.tabSpaceBlock]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social10.png")}
              />
              <Text style={[styles.label, styles.nameTypo]}>Tất cả (44)</Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={styles.number}>16</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social10.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                Messenger (11)
              </Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={styles.number}>1</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={[styles.socialIcon2, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social14.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Zalo (7)</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={styles.number}>1</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social12.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Fchat (4)</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={styles.number}>1</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social3.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                Faceboook (8)
              </Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={styles.number}>1</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social4.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                Website (13)
              </Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={styles.number}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.searchRoom, styles.leftIconPosition]}>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt9.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Hương Đỗ</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18781.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt10.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Hương Bùi</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18785.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  FPT Camera tại Hà Nội
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt11.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Thanh Hương</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18782.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt12.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>
                Nguyễn Mai Hương
              </Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18783.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  FPT Camera
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt13.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Phạm Thị Hương</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18782.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt9.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Hương Lan</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18781.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt13.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Phạm Thị Hương</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18782.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt12.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>
                Nguyễn Mai Hương
              </Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18783.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  FPT Camera
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt13.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Phạm Thị Hương</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18782.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt10.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Hương Bùi</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18785.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  FPT Camera tại Hà Nội
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt13.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Phạm Thị Hương</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18782.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt14.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Hương Đỗ</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18781.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchRoomResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.roommessageavtWrapper, styles.pageFlexBox]}>
              <Image
                style={styles.roommessageavtIcon}
                resizeMode="cover"
                source={require("../../assets/roommessageavt15.png")}
              />
            </View>
            <View style={styles.nameSecondLine}>
              <Text style={[styles.name, styles.nameTypo]}>Phạm Thị Hương</Text>
              <View style={[styles.page, styles.pageSpaceBlock]}>
                <Image
                  style={styles.iconright}
                  resizeMode="cover"
                  source={require("../../assets/iconright.png")}
                />
                <Image
                  style={styles.pageChild}
                  resizeMode="cover"
                  source={require("../../assets/rectangle-18782.png")}
                />
                <Text style={[styles.sccService, styles.text1Typo]}>
                  Lắp đặt Camera FPT
                </Text>
              </View>
              <Text style={[styles.text1, styles.text1Typo]}>
                8 tin nhắn trùng khớp
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  nameTypo1: {
    textAlign: "left",
    fontSize: FontSize.text14Regular_size,
    color: Color.textPrimary,
  },
  iconLayout2: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  leftIconPosition: {
    zIndex: 0,
    overflow: "hidden",
  },
  alertFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  tabSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.textWhite,
  },
  nameTypo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 8,
    textAlign: "center",
  },
  badgeSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  socialIconLayout: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
  },
  pageFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  pageSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  text1Typo: {
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    display: "none",
    height: 32,
    left: "50%",
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.defaultRegularCallout,
    color: Color.colorGray_200,
    height: 20,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    textAlign: "center",
    letterSpacing: 0,
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
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
  },
  closeIcon: {
    marginLeft: 8,
  },
  alert: {
    backgroundColor: Color.neutral3F5F5F5,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    alignSelf: "stretch",
  },
  leftIcon: {
    height: 24,
    width: 24,
  },
  title1: {
    color: Color.textPrimary,
    textAlign: "center",
  },
  title: {
    flexDirection: "row",
    zIndex: 1,
    flex: 1,
  },
  lu: {
    textAlign: "right",
    zIndex: 2,
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
  label: {
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 8,
    textAlign: "center",
    color: Color.brandPrimary,
  },
  number: {
    fontSize: FontSize.caption1Regular_size,
    lineHeight: 16,
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
  },
  tab: {
    borderStyle: "solid",
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
  },
  label1: {
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.subheadlineSemiBold_size,
  },
  badge1: {
    width: 16,
  },
  socialIcon2: {
    overflow: "hidden",
  },
  tabControl: {
    flexDirection: "row",
    display: "none",
    alignSelf: "stretch",
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
    zIndex: 1,
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  roommessageavtIcon: {
    width: 32,
    height: 32,
  },
  roommessageavtWrapper: {
    height: 40,
  },
  name: {
    textAlign: "left",
    fontSize: FontSize.text14Regular_size,
    color: Color.textPrimary,
    alignSelf: "stretch",
  },
  iconright: {
    width: 10,
    height: 10,
    display: "none",
    overflow: "hidden",
  },
  pageChild: {
    borderRadius: Border.br_11xs,
    height: 16,
    marginLeft: 4,
    width: 16,
  },
  sccService: {
    marginLeft: 4,
    color: Color.brandPrimary,
    flex: 1,
  },
  page: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    color: Color.textSecondary,
    marginTop: 4,
    alignSelf: "stretch",
    display: "none",
  },
  nameSecondLine: {
    marginLeft: 12,
    flex: 1,
  },
  dropdownsearchRoomResult: {
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  searchRoom: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  headerParent: {
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
    height: 812,
  },
  searchResultXemThmLinH: {
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.textWhite,
  },
});

export default SearchResultMoreContact;
