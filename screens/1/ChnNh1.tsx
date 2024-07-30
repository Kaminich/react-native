import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../../GlobalStyles";

const ChnNh1 = () => {
  return (
    <View style={styles.chnNh}>
      <View style={[styles.iphoneMockupStatusBar, styles.chnNhChildPosition]}>
        <View style={styles.right}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout3]}
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
          style={[styles.dateIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../../assets/date.png")}
        />
      </View>
      <View style={[styles.trangCNhnmailFpt, styles.chnNhChildPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.titlePagePosition]}
          resizeMode="cover"
          source={require("../../assets/background12.png")}
        />
        <View style={[styles.frameParent, styles.titlePagePosition]}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../../assets/frame-427318814.png")}
              />
              <View style={styles.customerInfoavtParent}>
                <View style={styles.customerInfoavt}>
                  <Image
                    style={styles.avtIcon}
                    resizeMode="cover"
                    source={require("../../assets/avt4.png")}
                  />
                  <View style={styles.row1Parent}>
                    <View style={styles.row1}>
                      <View style={styles.name}>
                        <Image
                          style={[styles.mobileIcon, styles.iconLayout2]}
                          resizeMode="cover"
                          source={require("../../assets/mobile3.png")}
                        />
                        <Text style={[styles.name1, styles.name1Typo]}>
                          Lê Minh Trí (FTEL HN)
                        </Text>
                      </View>
                      <Image
                        style={[styles.icon23Edit, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/icon23-edit1.png")}
                      />
                    </View>
                    <View style={styles.row2}>
                      <Text style={[styles.angOnline, styles.labelTypo1]}>
                        Đang online
                      </Text>
                    </View>
                    <View style={[styles.button, styles.buttonSpaceBlock]}>
                      <Text style={[styles.label, styles.labelTypo1]}>
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
                <Text style={[styles.nhnVin, styles.valueSpaceBlock]}>
                  Nhân viên
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameSpaceBlock]}>
              <View style={styles.groupParent}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../../assets/group.png")}
                />
                <Text style={[styles.ttGimSt, styles.ttGimStTypo]}>
                  TT Giám sát và đảm bảo dịch vụ
                </Text>
              </View>
              <View style={styles.envelopeParent}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../../assets/envelope4.png")}
                />
                <Text style={[styles.trilm22fptcom, styles.ttGimStTypo]}>
                  trilm22@fpt.com
                </Text>
              </View>
              <View style={styles.envelopeParent}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../../assets/officebuilding.png")}
                />
                <Text style={[styles.trilm22fptcom, styles.ttGimStTypo]}>
                  HNI Tầng 8, FPT Tower
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.tabControl, styles.frameSpaceBlock]}>
            <View style={[styles.tab, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social32.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                Thông tin tài khoản
              </Text>
              <View style={[styles.badge, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textTypo]}>16</Text>
              </View>
            </View>
            <View style={[styles.tab1, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social35.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>
                Sơ đồ tổ chức
              </Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textTypo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social36.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textTypo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social36.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textTypo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social36.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textTypo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social36.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Tab 1</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.textTypo]}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.formtextParent}>
            <View style={styles.formtext}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Tên người dùng
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Lê Minh Trí
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Mã nhân viên
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                011992993
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text
                  style={[styles.label8, styles.textTypo]}
                >{`Vai trò `}</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Nhân viên
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>Giới tính</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>Nữ</Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>Ngày sinh</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                12/12/1992
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>Email</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                uyentt2@fpt.com
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Số điện thoại
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                0978 585 484
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Chức danh/Mã chức danh
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Nhân viên KD - 003
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Cán bộ quản lý
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Nguyễn Đức Quang - KD122
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Email cán bộ quản lý
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                quangnd@fpt.com
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Khu vực chăm sóc
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                FTELBUV1
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>Chi nhánh</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Không có thông tin
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>Trung tâm</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>V1HN13</Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Đơn vị chủ quản
                </Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>FTELBU</Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>Phòng ban</Text>
              </View>
              <Text style={[styles.value, styles.valueSpaceBlock]}>
                Phòng KD1
              </Text>
            </View>
            <View style={styles.formtext1}>
              <View style={styles.label7}>
                <Text style={[styles.text, styles.textTypo]}>*</Text>
                <Text style={[styles.label8, styles.textTypo]}>
                  Địa điểm làm việc
                </Text>
              </View>
              <Text
                style={[styles.value15, styles.valueSpaceBlock]}
              >{`HI 122 Tây Sơn, TT Phùng, Đan Phượng, Hà Nội `}</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollbarFrame}>
          <View style={styles.scrollbar} />
        </View>
      </View>
      <View style={[styles.titlePage, styles.button1ShadowBox]}>
        <Image
          style={[styles.leftIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../../assets/27-left1.png")}
        />
        <View style={[styles.title, styles.titleFlexBox]}>
          <Text style={[styles.title1, styles.luTypo]}>Tài khoản</Text>
        </View>
        <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
        <Image
          style={[styles.logoutIcon, styles.luPosition]}
          resizeMode="cover"
          source={require("../../assets/logout1.png")}
        />
      </View>
      <Image
        style={[styles.chnNhChild, styles.chnNhChildPosition]}
        resizeMode="cover"
        source={require("../../assets/rectangle-18852.png")}
      />
      <View style={styles.homeindicatorPosition}>
        <View style={[styles.homeIndicator, styles.chnNhChildPosition]} />
      </View>
      <View style={[styles.actionSheetthVinNh, styles.chnNhChildPosition]}>
        <View style={styles.frameParent1}>
          <View style={[styles.cancelParent, styles.frameSpaceBlock]}>
            <Text style={[styles.cancel, styles.doneTypo]}>{`Cancel `}</Text>
            <View
              style={[styles.segmentedControl, styles.segmentedControlFlexBox]}
            >
              <View style={[styles.button1, styles.buttonFlexBox]}>
                <Text
                  style={[styles.label39, styles.labelLayout]}
                  numberOfLines={1}
                >
                  Ảnh
                </Text>
              </View>
              <View style={styles.buttonFlexBox}>
                <Text
                  style={[styles.label40, styles.labelLayout]}
                  numberOfLines={1}
                >
                  Thư mục
                </Text>
              </View>
            </View>
            <Text style={[styles.done, styles.doneTypo]}>Done</Text>
          </View>
          <View
            style={[styles.searchFieldlight, styles.segmentedControlFlexBox]}
          >
            <Text style={[styles.searchGlyph, styles.dictationClr]}>􀊫</Text>
            <Text
              style={[styles.placeholderLabel, styles.dictationClr]}
              numberOfLines={1}
            >
              Search
            </Text>
            <Text style={[styles.dictation, styles.dictationClr]}>􀊱</Text>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.titleFlexBox]}>
          <View style={styles.frameParent3}>
            <View style={styles.iconLayout}>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                resizeMode="cover"
                source={require("../../assets/rectangle-188110.png")}
              />
              <View style={[styles.frameInner, styles.framePosition]} />
              <Image
                style={[styles.validateIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../../assets/validate4.png")}
              />
            </View>
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18813.png")}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-1880.png")}
            />
          </View>
          <View style={styles.rectangleGroup}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18799.png")}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18819.png")}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18806.png")}
            />
          </View>
          <View style={styles.rectangleGroup}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../../assets/rectangle-18802.png")}
            />
            <Image
              style={[styles.frameChild5, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18795.png")}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18815.png")}
            />
          </View>
          <View style={styles.rectangleGroup}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../../assets/rectangle-18803.png")}
            />
            <Image
              style={[styles.frameChild5, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18796.png")}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18816.png")}
            />
          </View>
          <View style={styles.rectangleGroup}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../../assets/rectangle-18804.png")}
            />
            <Image
              style={[styles.frameChild5, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18797.png")}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18817.png")}
            />
          </View>
          <View style={styles.rectangleGroup}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../../assets/rectangle-18807.png")}
            />
            <Image
              style={[styles.frameChild5, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-187910.png")}
            />
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/rectangle-18818.png")}
            />
          </View>
        </View>
        <View style={[styles.homeindicator1, styles.homeindicatorPosition]}>
          <View style={[styles.homeIndicator, styles.chnNhChildPosition]} />
        </View>
      </View>
      <View style={styles.homeindicatorPosition}>
        <View style={[styles.homeIndicator, styles.chnNhChildPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chnNhChildPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  titlePagePosition: {
    left: 0,
    position: "absolute",
  },
  frameSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  iconLayout2: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  name1Typo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  labelTypo1: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
  },
  buttonSpaceBlock: {
    paddingLeft: Padding.p_base,
    flexDirection: "row",
  },
  valueSpaceBlock: {
    marginTop: 4,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  ttGimStTypo: {
    color: Color.neutral8595959,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
  },
  tabFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xs,
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  socialIconLayout: {
    borderRadius: Border.br_base,
    height: 20,
    width: 20,
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    lineHeight: 20,
    marginLeft: 8,
    textAlign: "center",
    letterSpacing: 0,
  },
  badgeSpaceBlock: {
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  button1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    backgroundColor: Color.textWhite,
  },
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  titleFlexBox: {
    zIndex: 1,
    alignItems: "center",
    flex: 1,
  },
  luTypo: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
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
  doneTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  segmentedControlFlexBox: {
    backgroundColor: Color.fillsTertiary,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  labelLayout: {
    height: 18,
    color: Color.black,
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    textAlign: "center",
    overflow: "hidden",
    flex: 1,
  },
  dictationClr: {
    color: Color.labelsSecondary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
  },
  framePosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    height: 124,
    flex: 1,
  },
  frameChildLayout: {
    height: 130,
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  homeindicatorPosition: {
    height: 34,
    bottom: 0,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  batteryIcon: {
    width: "36.43%",
    right: "0.15%",
    left: "63.42%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
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
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  backgroundIcon: {
    width: 534,
    height: 1101,
    display: "none",
    top: 0,
  },
  frameChild: {
    width: 60,
    height: 60,
  },
  avtIcon: {
    borderRadius: Border.br_11xl,
    width: 80,
    height: 80,
    display: "none",
  },
  mobileIcon: {
    display: "none",
  },
  name1: {
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    marginLeft: 4,
    textAlign: "center",
    color: Color.textPrimary,
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
    justifyContent: "center",
    alignItems: "center",
  },
  angOnline: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  row2: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    display: "none",
  },
  label: {
    color: Color.brandPrimary,
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
  },
  nhnVin: {
    color: Color.gray68C8C8C,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
  },
  customerInfoavtParent: {
    marginLeft: 16,
  },
  frameContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  groupIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  ttGimSt: {
    marginLeft: 8,
  },
  groupParent: {
    flexDirection: "row",
  },
  trilm22fptcom: {
    marginLeft: 12,
  },
  envelopeParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameView: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  frameGroup: {
    borderRadius: Border.br_sm,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    width: 375,
    backgroundColor: Color.textWhite,
  },
  socialIcon: {
    display: "none",
  },
  label1: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    color: Color.brandPrimary,
  },
  number: {
    color: Color.textWhite,
    textAlign: "center",
  },
  badge: {
    display: "none",
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
    backgroundColor: Color.neutral2,
  },
  label2: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  badge1: {
    width: 16,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    display: "none",
  },
  tab1: {
    backgroundColor: Color.textWhite,
  },
  badge2: {
    width: 16,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
  },
  tab2: {
    display: "none",
    backgroundColor: Color.textWhite,
  },
  tabControl: {
    flexDirection: "row",
    width: 375,
  },
  text: {
    color: Color.otherRed,
    textAlign: "left",
    display: "none",
  },
  label8: {
    color: Color.textSecondary,
    marginLeft: 2,
    textAlign: "left",
  },
  label7: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  value: {
    textAlign: "left",
    height: 20,
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    alignSelf: "stretch",
  },
  formtext: {
    alignSelf: "stretch",
  },
  formtext1: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  value15: {
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    alignSelf: "stretch",
  },
  formtextParent: {
    padding: Padding.p_base,
    width: 343,
    backgroundColor: Color.neutral2,
  },
  frameParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    top: 0,
  },
  scrollbar: {
    top: 1,
    left: 1,
    borderRadius: Border.br_9xs_5,
    backgroundColor: Color.neutral6BFBFBF,
    borderColor: Color.colorGray_1200,
    borderWidth: 1,
    width: 9,
    height: 260,
    borderStyle: "solid",
    position: "absolute",
  },
  scrollbarFrame: {
    top: 316,
    left: 348,
    width: 11,
    height: 397,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  trangCNhnmailFpt: {
    top: 82,
    height: 1168,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  leftIcon: {
    zIndex: 0,
  },
  title1: {
    textAlign: "center",
    color: Color.textPrimary,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
  },
  lu: {
    textAlign: "right",
    zIndex: 2,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.brandPrimary,
  },
  logoutIcon: {
    zIndex: 3,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  titlePage: {
    top: 38,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 0.45,
    elevation: 0.45,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_3xs,
    paddingLeft: Padding.p_base,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    width: 375,
  },
  chnNhChild: {
    opacity: 0.7,
    width: 375,
    top: 0,
    marginLeft: -187.5,
    left: "50%",
    height: 812,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
  },
  cancel: {
    color: Color.brandPrimary,
  },
  label39: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  button1: {
    borderRadius: Border.br_6xs,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    borderColor: Color.colorGray_1000,
    borderWidth: 0.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    backgroundColor: Color.textWhite,
    borderStyle: "solid",
  },
  label40: {
    fontFamily: FontFamily.text14Regular,
  },
  segmentedControl: {
    borderRadius: Border.br_4xs,
    width: 162,
    padding: Padding.p_11xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  done: {
    color: Color.textWhite,
  },
  cancelParent: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: 375,
  },
  searchGlyph: {
    width: 25,
    fontFamily: FontFamily.sFPro,
    color: Color.labelsSecondary,
    textAlign: "left",
  },
  placeholderLabel: {
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
    overflow: "hidden",
    flex: 1,
  },
  dictation: {
    fontFamily: FontFamily.sFPro,
    color: Color.labelsSecondary,
    textAlign: "center",
  },
  searchFieldlight: {
    paddingVertical: Padding.p_6xs,
    width: 343,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fillsTertiary,
    paddingHorizontal: Padding.p_5xs,
    marginTop: 8,
  },
  frameParent1: {
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xs,
    zIndex: 0,
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
  frameItem: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameInner: {
    backgroundColor: Color.colorGray_1100,
  },
  validateIcon: {
    top: 104,
    left: 103,
    position: "absolute",
  },
  frameIcon: {
    marginLeft: 1,
    maxWidth: "100%",
    height: 124,
    overflow: "hidden",
  },
  frameParent3: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  rectangleIcon: {
    maxWidth: "100%",
    height: 124,
    overflow: "hidden",
  },
  rectangleGroup: {
    marginTop: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild5: {
    marginLeft: 1,
  },
  frameParent2: {
    width: 375,
    overflow: "hidden",
  },
  homeindicator1: {
    zIndex: 2,
  },
  actionSheetthVinNh: {
    top: 60,
    height: 752,
    marginLeft: -187.5,
    left: "50%",
  },
  chnNh: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default ChnNh1;
