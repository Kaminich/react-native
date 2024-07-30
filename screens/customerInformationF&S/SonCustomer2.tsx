import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";

const SonCustomer2 = () => {
  return (
    <View style={styles.sonCustomer}>
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.rowFlexBox]}>
          <View style={styles.frameGroup}>
            <View style={styles.tinParentSpaceBlock}>
              <Text style={[styles.tinTVn, styles.text6Typo]}>
                Tin tư vấn 48 giờ
              </Text>
              <Text style={[styles.text, styles.textTypo]}>3/8</Text>
            </View>
            <View style={styles.frameChild} />
            <View
              style={[styles.tinTVnTrongThngParent, styles.tinParentSpaceBlock]}
            >
              <Text style={[styles.tinTVn, styles.text6Typo]}>
                Tin tư vấn trong tháng
              </Text>
              <View style={styles.parent}>
                <Text style={styles.textTypo}>45/2000</Text>
                <Image
                  style={styles.uexclamationCircleIcon}
                  resizeMode="cover"
                  source={require("../../assets/uexclamationcircle.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>
              Thông tin khách hàng
            </Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room1.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Nhóm</Text>
            <Text style={[styles.value, styles.valueTypo]}>5</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room2.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>
              Nhãn khách hàng
            </Text>
            <Text style={[styles.value, styles.valueTypo]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room3.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>
              Hồ sơ liên quan
            </Text>
            <Text style={[styles.value, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room4.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>
              Social Profile
            </Text>
            <Text style={[styles.value, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room5.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Đơn hàng</Text>
            <Text style={[styles.value, styles.valueTypo]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/icon-room6.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Hoạt động</Text>
            <Text style={[styles.value, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room7.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Tệp đính kèm</Text>
            <Text style={[styles.value, styles.valueTypo]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room8.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Ảnh và video</Text>
            <Text style={[styles.value, styles.valueTypo]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
        </View>
      </View>
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
                style={styles.notchIcon}
                resizeMode="cover"
                source={require("../../assets/notch1.png")}
              />
              <View style={[styles.leftSide, styles.leftSideLayout]}>
                <View style={[styles.statusbarTime, styles.leftSideLayout]}>
                  <Text style={[styles.text2, styles.text2Clr]}>9:41</Text>
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
                  style={[styles.iconMobileSignal, styles.text2Position]}
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
                  source={require("../../assets/social20.png")}
                />
                <Text style={[styles.label9, styles.labelTypo]}>Tab 1</Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.text2Clr]}>16</Text>
                </View>
              </View>
              <View style={styles.tabFlexBox}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social20.png")}
                />
                <Text style={[styles.label10, styles.labelTypo]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text2Clr]}>1</Text>
                </View>
              </View>
              <View style={styles.tabFlexBox}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social20.png")}
                />
                <Text style={[styles.label10, styles.labelTypo]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text2Clr]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social19.png")}
                />
                <Text style={[styles.label10, styles.labelTypo]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text2Clr]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social19.png")}
                />
                <Text style={[styles.label10, styles.labelTypo]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text2Clr]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social19.png")}
                />
                <Text style={[styles.label10, styles.labelTypo]}>Tab 1</Text>
                <View style={styles.badge1}>
                  <Text style={[styles.number, styles.text2Clr]}>1</Text>
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
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt7.png")}
                />
                <View style={styles.row1Parent}>
                  <View style={[styles.row1, styles.rowFlexBox]}>
                    <View style={styles.name}>
                      <Image
                        style={[styles.mobileIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/mobile2.png")}
                      />
                      <Text style={[styles.name1, styles.text2Clr]}>
                        Thu Hương
                      </Text>
                    </View>
                    <Image
                      style={[styles.icon23Edit, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon23-edit.png")}
                    />
                  </View>
                  <View style={[styles.row2, styles.rowFlexBox]}>
                    <Text style={[styles.angOnline, styles.labelLayout]}>
                      Đang online
                    </Text>
                  </View>
                  <View style={[styles.button, styles.buttonSpaceBlock]}>
                    <Text style={[styles.label15, styles.labelLayout]}>
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
            <View style={styles.tinParentSpaceBlock}>
              <Text style={[styles.tinTVn, styles.text6Typo]}>
                Tin tư vấn 48 giờ
              </Text>
              <Text style={[styles.text, styles.textTypo]}>3/8</Text>
            </View>
            <View
              style={[styles.tinTVnTrongThngParent, styles.tinParentSpaceBlock]}
            >
              <Text style={[styles.tinTVn, styles.text6Typo]}>
                Tin tư vấn trong tháng
              </Text>
              <Text style={[styles.text, styles.textTypo]}>45/2000</Text>
            </View>
          </View>
        </View>
        <View style={styles.qunLTinZalo1}>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room.png")}
            />
            <Text style={[styles.label16, styles.labelTypo1]}>
              Thông tin khách hàng
            </Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room1.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Nhóm</Text>
            <Text style={[styles.value8, styles.valueTypo]}>5</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room2.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>
              Nhãn khách hàng
            </Text>
            <Text style={[styles.value8, styles.valueTypo]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room3.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>
              Hồ sơ liên quan
            </Text>
            <Text style={[styles.value8, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room4.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>
              Social Profile
            </Text>
            <Text style={[styles.value8, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room5.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Đơn hàng</Text>
            <Text style={[styles.value8, styles.valueTypo]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/icon-room6.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Hoạt động</Text>
            <Text style={[styles.value8, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={[styles.listCell16, styles.listSpaceBlock]}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room7.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Tệp đính kèm</Text>
            <Text style={[styles.value8, styles.valueTypo]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
          <View style={styles.listSpaceBlock}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room8.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Ảnh và video</Text>
            <Text style={[styles.value8, styles.valueTypo]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right.png")}
            />
          </View>
        </View>
        <View style={[styles.ghiCh, styles.ghiChSpaceBlock]}>
          <View style={[styles.fieldtextArea, styles.titleFlexBox]}>
            <Text style={[styles.text5, styles.labelLayout]}>{`Nhập ghi chú

`}</Text>
          </View>
          <View style={styles.lchSGhiCh}>
            <View style={styles.titleFlexBox}>
              <Text style={[styles.label25, styles.name1Typo]}>
                Lịch sử ghi chú
              </Text>
            </View>
            <View style={styles.lchSGhiCh1}>
              <View style={[styles.avt, styles.rowFlexBox]}>
                <Text style={[styles.label15, styles.labelLayout]}>H</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.frameView}>
                  <View style={styles.name}>
                    <Text style={styles.huongnt256}>HuongNT256</Text>
                    <Image
                      style={styles.frameItem}
                      resizeMode="cover"
                      source={require("../../assets/ellipse-672.png")}
                    />
                    <Text style={[styles.text6, styles.text6Typo]}>
                      16/11/2022 12:11
                    </Text>
                  </View>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../../assets/optionshorizontal.png")}
                  />
                </View>
                <Text style={[styles.niDungGhi, styles.text6Typo]}>
                  Nội dung ghi chú cho khách hàng, có thể sửa xóa, dài thì xuống
                  dòng
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text6Typo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  textTypo: {
    color: Color.colorRoyalblue_200,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
  },
  tinParentSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.textGrayF3F4F6,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flex: 1,
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  labelTypo1: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    marginLeft: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  valueTypo: {
    textAlign: "right",
    marginLeft: 16,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
    fontFamily: FontFamily.text14Regular,
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  text2Clr: {
    color: Color.textWhite,
    textAlign: "center",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  text2Position: {
    top: 1,
    position: "absolute",
  },
  tabFlexBox: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    textAlign: "center",
    marginLeft: 8,
    lineHeight: 20,
    letterSpacing: 0,
  },
  buttonSpaceBlock: {
    paddingLeft: Padding.p_base,
    flexDirection: "row",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  labelLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  ghiChSpaceBlock: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
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
  titleFlexBox: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  name1Typo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  tinTVn: {
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  text: {
    marginTop: 4,
  },
  frameChild: {
    backgroundColor: Color.colorGainsboro_100,
    width: 1,
    marginLeft: 8,
    display: "none",
    alignSelf: "stretch",
  },
  uexclamationCircleIcon: {
    width: 14,
    height: 14,
    marginLeft: 2,
    display: "none",
    overflow: "hidden",
  },
  parent: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  tinTVnTrongThngParent: {
    marginLeft: 8,
  },
  frameGroup: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 375,
  },
  frameWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  divider: {
    height: 4,
    backgroundColor: Color.backgroundGrayF8F8F8,
    width: 375,
  },
  iconRoom: {
    overflow: "hidden",
  },
  label: {
    marginLeft: 16,
    flex: 1,
  },
  arrowRightIcon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  value: {
    color: Color.textSecondary,
  },
  frameParent: {
    top: 185,
    left: 1,
    backgroundColor: Color.neutral2,
    alignItems: "center",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    left: "50%",
    display: "none",
    position: "absolute",
  },
  text2: {
    fontFamily: FontFamily.defaultRegularCallout,
    textAlign: "center",
    top: 1,
    position: "absolute",
    width: 54,
    color: Color.textWhite,
    left: 0,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    height: 20,
    fontWeight: "600",
    letterSpacing: 0,
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
  socialIcon: {
    borderRadius: Border.br_base,
  },
  label9: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    color: Color.brandPrimary,
  },
  number: {
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  badge: {
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  label10: {
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  badge1: {
    width: 16,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tab3: {
    display: "none",
  },
  tabControl: {
    marginTop: 10,
    display: "none",
    flexDirection: "row",
    width: 375,
  },
  leftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  avtIcon: {
    width: 80,
    height: 80,
    borderRadius: Border.br_11xl,
  },
  mobileIcon: {
    display: "none",
  },
  name1: {
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    marginLeft: 4,
    textAlign: "center",
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
    display: "none",
  },
  row1: {
    flexDirection: "row",
  },
  angOnline: {
    color: Color.colorMediumseagreen_100,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  row2: {
    marginTop: 8,
    display: "none",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label15: {
    color: Color.brandPrimary,
    textAlign: "center",
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
    marginTop: 8,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
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
  qunLTinZalo: {
    display: "none",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  roomInfoHeaderParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  label16: {
    display: "flex",
    width: 271,
    marginLeft: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  value8: {
    color: Color.brandPrimary,
  },
  listCell16: {
    display: "none",
  },
  qunLTinZalo1: {
    marginTop: 4,
  },
  text5: {
    color: Color.textPlaceHolder,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  fieldtextArea: {
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.textWhite,
  },
  label25: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
  },
  avt: {
    backgroundColor: Color.brandLight5,
    width: 32,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    borderRadius: Border.br_11xl,
    height: 32,
  },
  huongnt256: {
    fontWeight: "700",
    fontFamily: FontFamily.caption1SemiBold,
    color: Color.textBlack,
    letterSpacing: 0,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  frameItem: {
    width: 4,
    height: 4,
    marginLeft: 8,
  },
  text6: {
    color: Color.textSecondary,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  frameView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  niDungGhi: {
    marginTop: 8,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
  },
  frameContainer: {
    marginLeft: 8,
    flex: 1,
  },
  lchSGhiCh1: {
    backgroundColor: Color.neutral3F5F5F5,
    padding: Padding.p_5xs,
    marginTop: 8,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  lchSGhiCh: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  ghiCh: {
    marginTop: 8,
  },
  chiTitRoom: {
    left: 0,
    top: 0,
    backgroundColor: Color.backgroundGrayF8F8F8,
    alignItems: "center",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    marginLeft: -187.5,
    bottom: 0,
    height: 34,
    left: "50%",
    width: 375,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  sonCustomer: {
    width: "100%",
    height: 879,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
});

export default SonCustomer2;
