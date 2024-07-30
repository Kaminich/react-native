import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

const SearchNoResult = () => {
  return (
    <View style={styles.searchNoResult}>
      <View style={[styles.headerParent, styles.headerParentPosition]}>
        <View style={styles.header}>
          <View style={styles.statusbarIphone13}>
            <Image
              style={[styles.notchIcon, styles.notchIconPosition]}
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
            <Text style={[styles.description, styles.text1Typo]}>
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
              style={[styles.leftIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/27-left1.png")}
            />
            <View style={styles.title}>
              <Text style={[styles.title1, styles.luTypo]}>
                Kết quả: “trangnt135”
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
                source={require("../../assets/social31.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Tất cả (44)</Text>
              <View style={styles.badge}>
                <Text style={[styles.number, styles.nameTypo]}>16</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social31.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                Messenger (11)
              </Text>
              <View style={styles.badge1}>
                <Text style={[styles.number, styles.nameTypo]}>1</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={[styles.socialIcon2, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social7.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Zalo (7)</Text>
              <View style={styles.badge1}>
                <Text style={[styles.number, styles.nameTypo]}>1</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social8.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Fchat (4)</Text>
              <View style={styles.badge1}>
                <Text style={[styles.number, styles.nameTypo]}>1</Text>
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
              <View style={styles.badge1}>
                <Text style={[styles.number, styles.nameTypo]}>1</Text>
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
              <View style={styles.badge1}>
                <Text style={[styles.number, styles.nameTypo]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actionSheetempty}>
          <View style={[styles.search, styles.alertSpaceBlock]}>
            <View style={[styles.fieldinput, styles.buttonSpaceBlock]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../../assets/1-search2.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>Tìm kiếm</Text>
              <Image
                style={[styles.informationIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/3-information.png")}
              />
            </View>
            <View style={styles.selectedWrapper}>
              <View style={styles.selected}>
                <Image
                  style={styles.selectedChild}
                  resizeMode="cover"
                  source={require("../../assets/frame-4273187711.png")}
                />
                <Text style={[styles.name, styles.nameTypo]}>Hương Đỗ</Text>
              </View>
            </View>
          </View>
          <View style={styles.emptyCard}>
            <View style={styles.illustrator}>
              <Image
                style={styles.emptyStateIcon}
                resizeMode="cover"
                source={require("../../assets/empty-state7.png")}
              />
            </View>
            <View style={[styles.text2, styles.text2SpaceBlock]}>
              <Text style={[styles.noImages, styles.noImagesFlexBox]}>
                Title
              </Text>
              <Text style={[styles.startUploadingImag, styles.text3Typo]}>
                Không tìm thấy kết quả phù hợp
              </Text>
            </View>
            <View style={[styles.button, styles.text2SpaceBlock]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder21.png")}
              />
              <Text style={[styles.text3, styles.text3Typo]}>Button field</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder21.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.homeindicator, styles.headerParentPosition]}>
        <View style={[styles.homeIndicator, styles.notchIconPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerParentPosition: {
    left: 0,
    position: "absolute",
    width: 375,
  },
  notchIconPosition: {
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
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    display: "none",
  },
  text1Typo: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  iconLayout2: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  luTypo: {
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
  tabSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.textWhite,
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 8,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
  },
  nameTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  socialIconLayout: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    height: 40,
    flexDirection: "row",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  text2SpaceBlock: {
    marginTop: 32,
    alignItems: "center",
  },
  noImagesFlexBox: {
    lineHeight: 24,
    textAlign: "center",
    alignSelf: "stretch",
  },
  text3Typo: {
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.text14Regular,
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
    letterSpacing: 0,
    textAlign: "center",
    lineHeight: 22,
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
  description: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  closeIcon: {
    marginLeft: 8,
  },
  alert: {
    backgroundColor: Color.neutral3F5F5F5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  leftIcon: {
    zIndex: 0,
    overflow: "hidden",
  },
  title1: {
    color: Color.textPrimary,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
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
    letterSpacing: 0,
    lineHeight: 22,
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
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    color: Color.brandPrimary,
  },
  number: {
    color: Color.textWhite,
    textAlign: "center",
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
  },
  label1: {
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
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
  text1: {
    color: Color.textPlaceHolder,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  informationIcon: {
    marginLeft: 8,
    display: "none",
  },
  fieldinput: {
    borderRadius: Border.br_9xs,
    borderColor: Color.gray4D9D9D9,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    borderStyle: "solid",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  selectedChild: {
    width: 40,
    height: 40,
  },
  name: {
    marginTop: 4,
    textAlign: "left",
    color: Color.textPrimary,
  },
  selected: {
    alignItems: "center",
  },
  selectedWrapper: {
    marginTop: 8,
    display: "none",
    alignSelf: "stretch",
  },
  search: {
    width: 375,
    backgroundColor: Color.textWhite,
  },
  emptyStateIcon: {
    maxWidth: "100%",
    height: 120,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  illustrator: {
    maxWidth: 134,
    maxHeight: 127,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  noImages: {
    fontSize: FontSize.title3SemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.textPrimary,
    display: "none",
  },
  startUploadingImag: {
    color: Color.textSecondary,
    marginTop: 6,
    lineHeight: 24,
    textAlign: "center",
    alignSelf: "stretch",
  },
  text2: {
    alignSelf: "stretch",
  },
  iconsetplaceholder: {
    display: "none",
  },
  text3: {
    lineHeight: 21,
    color: Color.textWhite,
    marginLeft: 8,
    textAlign: "left",
  },
  iconsetplaceholder1: {
    marginLeft: 8,
    display: "none",
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.brandPrimary,
    maxWidth: 311,
    paddingVertical: Padding.p_5xs,
    height: 40,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    display: "none",
    width: "100%",
  },
  emptyCard: {
    width: 343,
    height: 256,
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
  actionSheetempty: {
    zIndex: 0,
    alignItems: "center",
    width: 375,
    backgroundColor: Color.textWhite,
  },
  headerParent: {
    height: 812,
    width: 375,
    top: 0,
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
    top: 778,
    height: 34,
    width: 375,
  },
  searchNoResult: {
    height: 681,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default SearchNoResult;
