import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Color, FontSize, FontFamily, Border } from "../../GlobalStyles";

const SearchResult2 = () => {
  return (
    <View style={styles.searchResult}>
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
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/validate1.png")}
            />
            <Text style={[styles.description, styles.nameTypo]}>
              Không có kết nối internet
            </Text>
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
              source={require("../../assets/27-left1.png")}
            />
            <View style={[styles.title, styles.titlePosition]}>
              <Text style={[styles.title1, styles.luTypo]}>Kết quả: “oke”</Text>
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
              <Text style={[styles.label, styles.okeTypo]}>Tất cả (44)</Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={[styles.number, styles.text1Layout]}>16</Text>
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
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text1Layout]}>1</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={[styles.socialIcon2, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social38.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Zalo (7)</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text1Layout]}>1</Text>
              </View>
            </View>
            <View style={styles.tabSpaceBlock}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social8.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Fchat (4)</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text1Layout]}>1</Text>
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
                <Text style={[styles.number, styles.text1Layout]}>1</Text>
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
                <Text style={[styles.number, styles.text1Layout]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.searchRoom, styles.titlePosition]}>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.avt, styles.avtLayout]}>
              <Text style={styles.k}>H</Text>
            </View>
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                <View style={styles.timer}>
                  <Text style={[styles.text1, styles.text1Clr]}>08:08</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                <Text style={[styles.choBn, styles.text1Clr]}>, chào bạn</Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <Image
              style={styles.avtLayout}
              resizeMode="cover"
              source={require("../../assets/avt13.png")}
            />
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>Lê Minh Trí</Text>
                <View style={styles.timer}>
                  <Text style={[styles.text1, styles.text1Clr]}>13:02</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                <Text style={[styles.choBn, styles.text1Clr]}>
                  , gửi tôi xem nhé.
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.avt, styles.avtLayout]}>
              <Text style={styles.k}>H</Text>
            </View>
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                <View style={styles.timer}>
                  <Text style={styles.text5}>06/06/2023</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                <Text style={[styles.choBn, styles.text1Clr]}>
                  , Tôi sẽ gửi cho bạn thông tin về sản phẩm, mời bạn tham khảo.
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <Image
              style={styles.avtLayout}
              resizeMode="cover"
              source={require("../../assets/avt13.png")}
            />
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>Lê Minh Trí</Text>
                <View style={styles.timer}>
                  <Text style={styles.text5}>04/06/2023</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                <Text style={[styles.choBn, styles.text1Clr]}>
                  , để tôi tham khảo thêm
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <Image
              style={styles.avtLayout}
              resizeMode="cover"
              source={require("../../assets/avt13.png")}
            />
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>Lê Minh Trí</Text>
                <View style={styles.timer}>
                  <Text style={styles.text5}>31/05/2023</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                <Text style={[styles.choBn, styles.text1Clr]}>
                  , gửi tôi xem nhé.
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.avt, styles.avtLayout]}>
              <Text style={styles.k}>H</Text>
            </View>
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                <View style={styles.timer}>
                  <Text style={styles.text5}>31/05/2023</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                <Text style={[styles.choBn, styles.text1Clr]}>
                  , bạn có cần hỗ trợ gì thêm không ạ?
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.avt, styles.avtLayout]}>
              <Text style={styles.k}>H</Text>
            </View>
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                <View style={styles.timer}>
                  <Text style={styles.text5}>28/05/2023</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text
                  style={[styles.choBn, styles.text1Clr]}
                >{`vâng tôi thấy `}</Text>
                <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                <Text style={[styles.choBn, styles.text1Clr]}>
                  {" "}
                  rồi, bạn có thể gửi thêm cho tôi các thông tin khác về chính
                  sách đổi trả hàng và bảo hành...
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <Image
              style={styles.avtLayout}
              resizeMode="cover"
              source={require("../../assets/avt13.png")}
            />
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>Lê Minh Trí</Text>
                <View style={styles.timer}>
                  <Text style={styles.text5}>27/05/2023</Text>
                </View>
              </View>
              <Text style={[styles.text16, styles.textTypo]}>oke</Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <View style={[styles.avt, styles.avtLayout]}>
              <Text style={styles.k}>H</Text>
            </View>
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                <View style={styles.timer}>
                  <Text style={styles.text5}>27/05/2023</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                <Text style={[styles.choBn, styles.text1Clr]}> rồi bạn</Text>
              </Text>
            </View>
          </View>
          <View
            style={[styles.dropdownsearchMessageResult, styles.alertSpaceBlock]}
          >
            <Image
              style={styles.avtLayout}
              resizeMode="cover"
              source={require("../../assets/avt13.png")}
            />
            <View style={styles.nameSecondLine}>
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.okeTypo]}>Lê Minh Trí</Text>
                <View style={styles.timer}>
                  <Text style={styles.text5}>26/05/2023</Text>
                </View>
              </View>
              <Text style={styles.textTypo}>
                <Text style={[styles.oke, styles.okeTypo]}>{`oke `}</Text>
                <Text style={[styles.choBn, styles.text1Clr]}>
                  tôi hiểu rồi, cảm ơn bạn
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <View
              style={[
                styles.dropdownsearchMessageResult,
                styles.alertSpaceBlock,
              ]}
            >
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={styles.k}>H</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <View style={styles.nameParent}>
                  <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                  <View style={styles.timer}>
                    <Text style={[styles.text1, styles.text1Clr]}>08:08</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>
                  <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                  <Text style={[styles.choBn, styles.text1Clr]}>
                    , chào bạn
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.dropdownsearchMessageResult,
                styles.alertSpaceBlock,
              ]}
            >
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../../assets/avt13.png")}
              />
              <View style={styles.nameSecondLine}>
                <View style={styles.nameParent}>
                  <Text style={[styles.name, styles.okeTypo]}>Lê Minh Trí</Text>
                  <View style={styles.timer}>
                    <Text style={[styles.text1, styles.text1Clr]}>13:02</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>
                  <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                  <Text style={[styles.choBn, styles.text1Clr]}>
                    , gửi tôi xem nhé.
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.dropdownsearchMessageResult,
                styles.alertSpaceBlock,
              ]}
            >
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={styles.k}>H</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <View style={styles.nameParent}>
                  <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                  <View style={styles.timer}>
                    <Text style={styles.text5}>06/06/2023</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>
                  <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                  <Text style={[styles.choBn, styles.text1Clr]}>
                    , Tôi sẽ gửi cho bạn thông tin về sản phẩm, mời bạn tham
                    khảo.
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.dropdownsearchMessageResult,
                styles.alertSpaceBlock,
              ]}
            >
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../../assets/avt13.png")}
              />
              <View style={styles.nameSecondLine}>
                <View style={styles.nameParent}>
                  <Text style={[styles.name, styles.okeTypo]}>Lê Minh Trí</Text>
                  <View style={styles.timer}>
                    <Text style={styles.text5}>04/06/2023</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>
                  <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                  <Text style={[styles.choBn, styles.text1Clr]}>
                    , để tôi tham khảo thêm
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.dropdownsearchMessageResult,
                styles.alertSpaceBlock,
              ]}
            >
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../../assets/avt13.png")}
              />
              <View style={styles.nameSecondLine}>
                <View style={styles.nameParent}>
                  <Text style={[styles.name, styles.okeTypo]}>Lê Minh Trí</Text>
                  <View style={styles.timer}>
                    <Text style={styles.text5}>31/05/2023</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>
                  <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                  <Text style={[styles.choBn, styles.text1Clr]}>
                    , gửi tôi xem nhé.
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.dropdownsearchMessageResult,
                styles.alertSpaceBlock,
              ]}
            >
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={styles.k}>H</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <View style={styles.nameParent}>
                  <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                  <View style={styles.timer}>
                    <Text style={styles.text5}>31/05/2023</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>
                  <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                  <Text style={[styles.choBn, styles.text1Clr]}>
                    , bạn có cần hỗ trợ gì thêm không ạ?
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.dropdownsearchMessageResult,
                styles.alertSpaceBlock,
              ]}
            >
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={styles.k}>H</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <View style={styles.nameParent}>
                  <Text style={[styles.name, styles.okeTypo]}>HuongNT256</Text>
                  <View style={styles.timer}>
                    <Text style={styles.text5}>17/05/2023</Text>
                  </View>
                </View>
                <Text style={styles.textTypo}>
                  <Text style={[styles.oke, styles.okeTypo]}>oke</Text>
                  <Text style={[styles.choBn, styles.text1Clr]}>
                    , bạn nhé?
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={styles.homeIndicator} />
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
    alignItems: "center",
    flexDirection: "row",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.textPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  iconLayout1: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  titlePosition: {
    zIndex: 1,
    flex: 1,
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
  okeTypo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  text1Layout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 8,
    lineHeight: 20,
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
  avtLayout: {
    width: 32,
    borderRadius: Border.br_11xl,
    height: 32,
  },
  text1Clr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  textTypo: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    textAlign: "left",
    alignSelf: "stretch",
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
  },
  closeIcon: {
    marginLeft: 8,
  },
  alert: {
    backgroundColor: Color.neutral3F5F5F5,
    justifyContent: "center",
    display: "none",
    alignSelf: "stretch",
  },
  leftIcon: {
    zIndex: 0,
  },
  title1: {
    color: Color.textPrimary,
    textAlign: "center",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  lu: {
    textAlign: "right",
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    zIndex: 2,
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
    lineHeight: 20,
    textAlign: "center",
    color: Color.brandPrimary,
  },
  number: {
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
    letterSpacing: 0,
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
    zIndex: 2,
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  k: {
    color: Color.brandPrimary,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
  },
  avt: {
    backgroundColor: Color.brandLight5,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "left",
    color: Color.textPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    flex: 1,
  },
  text1: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    textAlign: "right",
  },
  timer: {
    marginLeft: 4,
    flexDirection: "row",
  },
  nameParent: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  oke: {
    color: Color.textPrimary,
  },
  choBn: {
    letterSpacing: 0,
  },
  nameSecondLine: {
    marginLeft: 12,
    flex: 1,
  },
  dropdownsearchMessageResult: {
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  text5: {
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    color: Color.textSecondary,
    textAlign: "right",
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  text16: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
    color: Color.textPrimary,
  },
  searchRoom: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    height: 34,
    zIndex: 0,
    width: 375,
  },
  headerParent: {
    height: 812,
    width: 375,
    left: 0,
    position: "absolute",
    top: 0,
  },
  searchResult: {
    width: "100%",
    height: 681,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
});

export default SearchResult2;
