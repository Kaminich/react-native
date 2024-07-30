import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

const SearchResult1 = () => {
  return (
    <View style={styles.searchResult}>
      <View style={styles.statusbarIphone13Parent}>
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
        <View style={[styles.searchsearch, styles.buttonSpaceBlock]}>
          <View style={styles.fieldinputParent}>
            <View style={[styles.fieldinput, styles.fieldinputBorder]}>
              <Image
                style={[styles.searchIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/1-search2.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>hươndsfsg</Text>
              <Image
                style={[styles.validateIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/validate.png")}
              />
            </View>
            <Text style={[styles.hy, styles.hyTypo]}>Hủy</Text>
          </View>
          <Text style={[styles.error, styles.nameTypo]}>Error</Text>
        </View>
        <View style={styles.section1Parent}>
          <View>
            <View style={[styles.titleParent, styles.buttonSpaceBlock]}>
              <View style={styles.title}>
                <Text style={[styles.label, styles.labelTypo]}>Liên hệ</Text>
              </View>
              <Text style={[styles.xemThm, styles.textTypo1]}>Xem thêm</Text>
            </View>
            <View style={[styles.actionSheetempty, styles.actionSheetemptyBg]}>
              <View style={[styles.search, styles.searchSpaceBlock]}>
                <View style={[styles.fieldinput1, styles.fieldinputBorder]}>
                  <Image
                    style={[styles.searchIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/1-search2.png")}
                  />
                  <Text style={[styles.text2, styles.textTypo1]}>Tìm kiếm</Text>
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
              <View style={[styles.emptyCard, styles.searchSpaceBlock]}>
                <View style={styles.illustrator}>
                  <Image
                    style={styles.emptyStateIcon}
                    resizeMode="cover"
                    source={require("../../assets/empty-state3.png")}
                  />
                </View>
                <View style={[styles.text3, styles.text3SpaceBlock]}>
                  <Text style={[styles.noImages, styles.labelTypo]}>Title</Text>
                  <Text style={[styles.startUploadingImag, styles.textClr]}>
                    Không tìm thấy kết quả phù hợp
                  </Text>
                </View>
                <View style={[styles.button, styles.text3SpaceBlock]}>
                  <Image
                    style={styles.iconsetplaceholderLayout}
                    resizeMode="cover"
                    source={require("../../assets/iconsetplaceholder21.png")}
                  />
                  <Text style={[styles.text4, styles.hyTypo]}>
                    Button field
                  </Text>
                  <Image
                    style={[
                      styles.iconsetplaceholder1,
                      styles.iconsetplaceholderLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../../assets/iconsetplaceholder21.png")}
                  />
                </View>
              </View>
            </View>
            <View
              style={[styles.dropdownsearchRoomResult, styles.buttonSpaceBlock]}
            >
              <View style={styles.roommessageavtWrapper}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt20.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={styles.name1}>Hương Bùi</Text>
                <View style={styles.page}>
                  <Image
                    style={styles.iconright}
                    resizeMode="cover"
                    source={require("../../assets/iconright.png")}
                  />
                  <Image
                    style={[styles.pageChild, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18785.png")}
                  />
                  <Text style={[styles.sccService, styles.textTypo]}>
                    FPT Camera tại Hà Nội
                  </Text>
                </View>
                <Text style={[styles.text5, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View
              style={[styles.dropdownsearchRoomResult, styles.buttonSpaceBlock]}
            >
              <View style={styles.roommessageavtWrapper}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt44.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={styles.name1}>Thanh Hương</Text>
                <View style={styles.page}>
                  <Image
                    style={styles.iconright}
                    resizeMode="cover"
                    source={require("../../assets/iconright.png")}
                  />
                  <Image
                    style={[styles.pageChild, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18782.png")}
                  />
                  <Text style={[styles.sccService, styles.textTypo]}>
                    Lắp đặt Camera FPT
                  </Text>
                </View>
                <Text style={[styles.text5, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View
              style={[styles.dropdownsearchRoomResult, styles.buttonSpaceBlock]}
            >
              <View style={styles.roommessageavtWrapper}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt39.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={styles.name1}>Nguyễn Mai Hương</Text>
                <View style={styles.page}>
                  <Image
                    style={styles.iconright}
                    resizeMode="cover"
                    source={require("../../assets/iconright.png")}
                  />
                  <Image
                    style={[styles.pageChild, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18783.png")}
                  />
                  <Text style={[styles.sccService, styles.textTypo]}>
                    FPT Camera
                  </Text>
                </View>
                <Text style={[styles.text5, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View
              style={[styles.dropdownsearchRoomResult, styles.buttonSpaceBlock]}
            >
              <View style={styles.roommessageavtWrapper}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt15.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={styles.name1}>Phạm Thị Hương</Text>
                <View style={styles.page}>
                  <Image
                    style={styles.iconright}
                    resizeMode="cover"
                    source={require("../../assets/iconright.png")}
                  />
                  <Image
                    style={[styles.pageChild, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18782.png")}
                  />
                  <Text style={[styles.sccService, styles.textTypo]}>
                    Lắp đặt Camera FPT
                  </Text>
                </View>
                <Text style={[styles.text5, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section2}>
            <View style={[styles.titleParent, styles.buttonSpaceBlock]}>
              <View style={styles.title}>
                <Text style={[styles.label, styles.labelTypo]}>Bình luận</Text>
              </View>
              <Text style={[styles.xemThm, styles.textTypo1]}>Xem thêm</Text>
            </View>
            <View style={[styles.actionSheetempty, styles.actionSheetemptyBg]}>
              <View style={[styles.search, styles.searchSpaceBlock]}>
                <View style={[styles.fieldinput1, styles.fieldinputBorder]}>
                  <Image
                    style={[styles.searchIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/1-search2.png")}
                  />
                  <Text style={[styles.text2, styles.textTypo1]}>Tìm kiếm</Text>
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
                      source={require("../../assets/frame-4273187712.png")}
                    />
                    <Text style={[styles.name, styles.nameTypo]}>
                      Phạm Đức Khôi
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.emptyCard, styles.searchSpaceBlock]}>
                <View style={styles.illustrator}>
                  <Image
                    style={styles.emptyStateIcon}
                    resizeMode="cover"
                    source={require("../../assets/empty-state3.png")}
                  />
                </View>
                <View style={[styles.text3, styles.text3SpaceBlock]}>
                  <Text style={[styles.noImages, styles.labelTypo]}>Title</Text>
                  <Text style={[styles.startUploadingImag, styles.textClr]}>
                    Không tìm thấy kết quả phù hợp
                  </Text>
                </View>
                <View style={[styles.button, styles.text3SpaceBlock]}>
                  <Image
                    style={styles.iconsetplaceholderLayout}
                    resizeMode="cover"
                    source={require("../../assets/iconsetplaceholder21.png")}
                  />
                  <Text style={[styles.text4, styles.hyTypo]}>
                    Button field
                  </Text>
                  <Image
                    style={[
                      styles.iconsetplaceholder1,
                      styles.iconsetplaceholderLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../../assets/iconsetplaceholder21.png")}
                  />
                </View>
              </View>
            </View>
            <View
              style={[styles.dropdownsearchRoomResult, styles.buttonSpaceBlock]}
            >
              <View style={styles.roommessageavtWrapper}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt35.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={styles.name1}>Nguyễn Thị Vân</Text>
                <View style={styles.page}>
                  <Image
                    style={styles.iconright}
                    resizeMode="cover"
                    source={require("../../assets/iconright.png")}
                  />
                  <Image
                    style={[styles.pageChild, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18785.png")}
                  />
                  <Text style={[styles.sccService, styles.textTypo]}>
                    FPT Camera tại Hà Nội
                  </Text>
                </View>
                <Text style={[styles.text12, styles.textTypo]}>
                  7 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View
              style={[styles.dropdownsearchRoomResult, styles.buttonSpaceBlock]}
            >
              <View style={styles.roommessageavtWrapper}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt40.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={styles.name1}>Mai Thu An</Text>
                <View style={styles.page}>
                  <Image
                    style={styles.iconright}
                    resizeMode="cover"
                    source={require("../../assets/iconright.png")}
                  />
                  <Image
                    style={[styles.pageChild, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18781.png")}
                  />
                  <Text style={[styles.sccService, styles.textTypo]}>
                    Lắp đặt Camera FPT
                  </Text>
                </View>
                <Text style={[styles.text12, styles.textTypo]}>
                  6 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View
              style={[styles.dropdownsearchRoomResult, styles.buttonSpaceBlock]}
            >
              <View style={styles.roommessageavtWrapper}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt42.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={styles.name1}>Nguyễn Văn Nam</Text>
                <View style={styles.page}>
                  <Image
                    style={styles.iconright}
                    resizeMode="cover"
                    source={require("../../assets/iconright.png")}
                  />
                  <Image
                    style={[styles.pageChild, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18782.png")}
                  />
                  <Text style={[styles.sccService, styles.textTypo]}>
                    Lắp đặt Camera FPT
                  </Text>
                </View>
                <Text style={[styles.text12, styles.textTypo]}>
                  4tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View
              style={[styles.dropdownsearchRoomResult, styles.buttonSpaceBlock]}
            >
              <View style={styles.roommessageavtWrapper}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt43.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={styles.name1}>Nguyễn Thu Hà</Text>
                <View style={styles.page}>
                  <Image
                    style={styles.iconright}
                    resizeMode="cover"
                    source={require("../../assets/iconright.png")}
                  />
                  <Image
                    style={[styles.pageChild, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18783.png")}
                  />
                  <Text style={[styles.sccService, styles.textTypo]}>
                    FPT Camera
                  </Text>
                </View>
                <Text style={[styles.text12, styles.textTypo]}>
                  1 tin nhắn trùng khớp
                </Text>
              </View>
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
  buttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  fieldinputBorder: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.textWhite,
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  textTypo1: {
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  hyTypo: {
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  nameTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  labelTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    color: Color.textPrimary,
    fontWeight: "600",
    letterSpacing: 0,
  },
  actionSheetemptyBg: {
    backgroundColor: Color.textWhite,
    width: 375,
  },
  searchSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.textWhite,
  },
  text3SpaceBlock: {
    marginTop: 32,
    alignItems: "center",
  },
  textClr: {
    color: Color.textSecondary,
    alignSelf: "stretch",
  },
  iconsetplaceholderLayout: {
    height: 24,
    width: 24,
    display: "none",
  },
  textTypo: {
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
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
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
  searchIcon: {
    overflow: "hidden",
  },
  text1: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.textPrimary,
    flex: 1,
  },
  validateIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  fieldinput: {
    flex: 1,
  },
  hy: {
    marginLeft: 16,
    color: Color.brandPrimary,
    lineHeight: 24,
    textAlign: "left",
  },
  fieldinputParent: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  error: {
    color: Color.otherRed,
    marginTop: 4,
    display: "none",
  },
  searchsearch: {
    justifyContent: "center",
    width: 375,
  },
  label: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  xemThm: {
    color: Color.brandPrimary,
    textAlign: "left",
    display: "none",
  },
  titleParent: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text2: {
    color: Color.textPlaceHolder,
    marginLeft: 8,
    textAlign: "left",
    flex: 1,
  },
  informationIcon: {
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  fieldinput1: {
    alignSelf: "stretch",
  },
  selectedChild: {
    width: 40,
    height: 40,
  },
  name: {
    marginTop: 4,
    color: Color.textPrimary,
  },
  selected: {
    alignItems: "center",
  },
  selectedWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
    display: "none",
  },
  search: {
    paddingVertical: Padding.p_xs,
    display: "none",
    width: 375,
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
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  noImages: {
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    alignSelf: "stretch",
    textAlign: "center",
    display: "none",
  },
  startUploadingImag: {
    marginTop: 6,
    lineHeight: 24,
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
    textAlign: "center",
  },
  text3: {
    alignSelf: "stretch",
  },
  text4: {
    lineHeight: 21,
    color: Color.textWhite,
    marginLeft: 8,
    textAlign: "left",
  },
  iconsetplaceholder1: {
    marginLeft: 8,
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.brandPrimary,
    maxWidth: 311,
    height: 40,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    display: "none",
    width: "100%",
  },
  emptyCard: {
    width: 343,
    height: 256,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
  },
  actionSheetempty: {
    alignItems: "center",
    width: 375,
  },
  roommessageavtIcon: {
    width: 32,
    height: 32,
  },
  roommessageavtWrapper: {
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  name1: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    textAlign: "left",
    color: Color.textPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    alignSelf: "stretch",
    letterSpacing: 0,
  },
  iconright: {
    width: 10,
    height: 10,
    display: "none",
    overflow: "hidden",
  },
  pageChild: {
    borderRadius: Border.br_11xs,
    marginLeft: 4,
  },
  sccService: {
    marginLeft: 4,
    color: Color.brandPrimary,
    flex: 1,
  },
  page: {
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text5: {
    color: Color.textSecondary,
    alignSelf: "stretch",
    marginTop: 4,
    display: "none",
  },
  nameSecondLine: {
    marginLeft: 12,
    flex: 1,
  },
  dropdownsearchRoomResult: {
    flexDirection: "row",
    display: "none",
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  text12: {
    color: Color.textSecondary,
    alignSelf: "stretch",
    marginTop: 4,
  },
  section2: {
    marginTop: 8,
  },
  section1Parent: {
    flex: 1,
  },
  statusbarIphone13Parent: {
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
    height: 812,
  },
  searchResult: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default SearchResult1;
