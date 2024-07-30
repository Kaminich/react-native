import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Padding, Color, FontFamily, Border } from "../../GlobalStyles";

const SearchResult = () => {
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
              <Text style={[styles.text, styles.textTypo1]}>9:41</Text>
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
        <View style={[styles.searchsearch, styles.titleParentSpaceBlock]}>
          <View style={[styles.fieldinputParent, styles.titleParentFlexBox]}>
            <View style={[styles.fieldinput, styles.fieldinputFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../../assets/1-search2.png")}
              />
              <Text style={[styles.text1, styles.nameClr]}>hương</Text>
              <Image
                style={[styles.validateIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/validate.png")}
              />
            </View>
            <Text style={[styles.hy, styles.hyTypo]}>Hủy</Text>
          </View>
          <Text style={styles.error}>Error</Text>
        </View>
        <View style={styles.section1Parent}>
          <View>
            <View style={[styles.titleParent, styles.titleParentFlexBox]}>
              <View style={[styles.title, styles.titleParentFlexBox]}>
                <Text style={[styles.label, styles.nameClr]}>Liên hệ</Text>
              </View>
              <Text style={[styles.xemThm, styles.hyTypo]}>Xem thêm</Text>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt9.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>Hương Đỗ</Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>Lắp đặt Camera FPT</Text>
                </View>
                <Text style={[styles.text2, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt10.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>Hương Bùi</Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>FPT Camera tại Hà Nội</Text>
                </View>
                <Text style={[styles.text2, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt11.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>Thanh Hương</Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>Lắp đặt Camera FPT</Text>
                </View>
                <Text style={[styles.text2, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt12.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>
                  Nguyễn Mai Hương
                </Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>FPT Camera</Text>
                </View>
                <Text style={[styles.text2, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt13.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>
                  Phạm Thị Hương
                </Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>Lắp đặt Camera FPT</Text>
                </View>
                <Text style={[styles.text2, styles.textTypo]}>
                  8 tin nhắn trùng khớp
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section2}>
            <View style={[styles.titleParent, styles.titleParentFlexBox]}>
              <View style={[styles.title, styles.titleParentFlexBox]}>
                <Text style={[styles.label, styles.nameClr]}>Bình luận</Text>
              </View>
              <Text style={[styles.xemThm, styles.hyTypo]}>Xem thêm</Text>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt16.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>Phạm Đức Khôi</Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>Lắp đặt Camera FPT</Text>
                </View>
                <Text style={styles.textTypo}>8 tin nhắn trùng khớp</Text>
              </View>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt17.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>
                  Nguyễn Thị Vân
                </Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>FPT Camera tại Hà Nội</Text>
                </View>
                <Text style={styles.textTypo}>7 tin nhắn trùng khớp</Text>
              </View>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt18.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>Mai Thu An</Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>Lắp đặt Camera FPT</Text>
                </View>
                <Text style={styles.textTypo}>6 tin nhắn trùng khớp</Text>
              </View>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt19.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>
                  Nguyễn Văn Nam
                </Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>Lắp đặt Camera FPT</Text>
                </View>
                <Text style={styles.textTypo}>4tin nhắn trùng khớp</Text>
              </View>
            </View>
            <View style={styles.dropdownsearchRoomResult}>
              <View style={styles.fieldinputFlexBox}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/roommessageavt11.png")}
                />
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name, styles.nameClr]}>Nguyễn Thu Hà</Text>
                <View style={[styles.page, styles.titleParentFlexBox]}>
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
                  <Text style={styles.sccService}>FPT Camera</Text>
                </View>
                <Text style={styles.textTypo}>1 tin nhắn trùng khớp</Text>
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
  textTypo1: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 1,
    position: "absolute",
  },
  titleParentSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  titleParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  fieldinputFlexBox: {
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  nameClr: {
    color: Color.textPrimary,
    textAlign: "left",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  hyTypo: {
    color: Color.brandPrimary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  textTypo: {
    color: Color.textSecondary,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
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
    textAlign: "center",
    height: 20,
    top: 1,
    position: "absolute",
    width: 54,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
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
    height: 12,
    left: "50%",
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
  text1: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    flex: 1,
  },
  validateIcon: {
    marginLeft: 8,
  },
  fieldinput: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flex: 1,
    backgroundColor: Color.textWhite,
    height: 40,
  },
  hy: {
    fontSize: FontSize.calloutRegular_size,
    lineHeight: 24,
    marginLeft: 16,
    letterSpacing: 0,
  },
  fieldinputParent: {
    alignSelf: "stretch",
  },
  error: {
    fontSize: FontSize.caption1Regular_size,
    lineHeight: 16,
    color: Color.otherRed,
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    display: "none",
  },
  searchsearch: {
    justifyContent: "center",
    width: 375,
  },
  label: {
    fontFamily: FontFamily.headlineSemiBold,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
  },
  title: {
    flex: 1,
  },
  xemThm: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  titleParent: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  roommessageavtIcon: {
    width: 32,
    height: 32,
  },
  name: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    textAlign: "left",
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
    height: 16,
    width: 16,
  },
  sccService: {
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    marginLeft: 4,
    color: Color.brandPrimary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
    flex: 1,
  },
  page: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  text2: {
    display: "none",
  },
  nameSecondLine: {
    marginLeft: 12,
    flex: 1,
  },
  dropdownsearchRoomResult: {
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
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
    top: 0,
    position: "absolute",
    height: 812,
  },
  searchResult: {
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.textWhite,
  },
});

export default SearchResult;
