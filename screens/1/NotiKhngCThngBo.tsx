import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Padding, Border } from "../../GlobalStyles";

const NotiKhngCThngBo = () => {
  return (
    <View style={[styles.notikhngCThngBo, styles.notiLayout]}>
      <View style={[styles.noti, styles.notiPosition]}>
        <View style={styles.emptyCard}>
          <View style={styles.illustrator}>
            <Image
              style={[styles.emptyStateIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../../assets/empty-state.png")}
            />
          </View>
          <View style={[styles.text, styles.textSpaceBlock]}>
            <Text style={styles.noImages}>Title</Text>
            <Text style={[styles.startUploadingImag, styles.text1Typo]}>
              Bạn chưa có thông báo nào
            </Text>
          </View>
          <View style={[styles.button, styles.notiSpaceBlock]}>
            <Image
              style={[styles.iconsetplaceholder, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder21.png")}
            />
            <Text style={[styles.text1, styles.text1Typo]}>Button field</Text>
            <Image
              style={[styles.iconsetplaceholder1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder21.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.backgroundIcon, styles.notiPosition]}
        resizeMode="cover"
        source={require("../../assets/background9.png")}
      />
      <View style={[styles.notiLine, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon21.png")}
        />
        <View style={styles.nguynKhnhHuynGiTinParent}>
          <Text style={styles.nguynKhnhHuynContainer}>
            <Text style={styles.bnCFeedback}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.quect3}>QueCT3</Text>
          </Text>
          <Text style={[styles.phtTrc, styles.phtTrcTypo]}>
            Thứ Tư, ngày 12/04 15:11
          </Text>
        </View>
      </View>
      <View style={[styles.notiLine1, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon21.png")}
        />
        <View style={styles.nguynKhnhHuynGiTinParent}>
          <Text style={styles.nguynKhnhHuynContainer}>
            <Text style={styles.bnCFeedback}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.quect3}>QueCT3</Text>
            <Text style={styles.bnCFeedback}>{` và `}</Text>
            <Text style={styles.quect3}>HaDT53</Text>
          </Text>
          <Text style={[styles.phtTrc, styles.phtTrcTypo]}>
            Thứ Tư, ngày 12/04 15:23
          </Text>
        </View>
      </View>
      <View style={[styles.notiLine2, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon21.png")}
        />
        <View style={styles.nguynKhnhHuynGiTinParent}>
          <Text style={styles.nguynKhnhHuynContainer}>
            <Text style={styles.bnCFeedback}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.quect3}>QueCT3</Text>
            <Text style={styles.bnCFeedback}> và 3 người khác</Text>
          </Text>
          <Text style={[styles.phtTrc, styles.phtTrcTypo]}>
            Thứ Tư, ngày 12/04 17:00
          </Text>
        </View>
      </View>
      <View style={[styles.notiLine3, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon24.png")}
        />
        <View style={styles.nguynKhnhHuynGiTinParent}>
          <Text style={styles.nguynKhnhHuynContainer}>
            <Text style={styles.quect3}>{`Thu Hương `}</Text>
            <Text style={styles.bnCFeedback}>đã gửi tin nhắn mới đến bạn</Text>
          </Text>
          <Text style={[styles.phtTrc, styles.phtTrcTypo]}>
            Thứ Năm, ngày 13/04 11:12
          </Text>
        </View>
      </View>
      <View style={[styles.notiLine4, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon23.png")}
        />
        <View style={styles.nguynKhnhHuynGiTinParent}>
          <Text style={styles.nguynKhnhHuynContainer}>
            <Text style={styles.quect3}>{`Lê Trí `}</Text>
            <Text style={styles.bnCFeedback}>đã gửi tin nhắn mới đến bạn</Text>
          </Text>
          <Text style={[styles.phtTrc, styles.phtTrcTypo]}>
            Thứ Bảy, ngày 25/03 12:31
          </Text>
        </View>
      </View>
      <View style={[styles.notiLine5, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/loifchat-stateskeleton.png")}
        />
        <View style={styles.nguynKhnhHuynGiTinParent}>
          <View style={[styles.frameChild, styles.frameBg]} />
          <View style={[styles.frameItem, styles.frameBg]} />
        </View>
      </View>
      <View style={[styles.notiLine6, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/loifacebook-statenew.png")}
        />
        <View style={styles.nguynKhnhHuynGiTinParent}>
          <Text style={styles.nguynKhnhHuynContainer}>
            <Text
              style={styles.bnCFeedback}
            >{`Bạn vừa bị mất kết nối với trang `}</Text>
            <Text style={styles.quect3}>FPT Camera Hà Nội.</Text>
            <Text style={styles.bnCFeedback}> Vui lòng kết nối lại!</Text>
          </Text>
          <Text style={[styles.phtTrc, styles.phtTrcTypo]}>5 phút trước</Text>
        </View>
      </View>
      <View style={styles.notificationPaymentUnrea}>
        <View style={styles.rectangleGroup}>
          <LinearGradient
            style={styles.frameInner}
            locations={[0, 1]}
            colors={["#33eb97", "#00ba65"]}
            useAngle={true}
            angle={180}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../../assets/vector37.png")}
          />
        </View>
        <View style={styles.khchHngHnh838475ThanhParent}>
          <Text
            style={[styles.khchHngHnh838475Container, styles.loremIpsumIsTypo]}
          >
            <Text style={styles.khchHngHnh838475Container1}>
              <Text style={styles.khchHng}>{`Khách hàng `}</Text>
              <Text style={styles.hnh838475}>HNH838475</Text>
              <Text style={styles.khchHng}> đã thanh toàn</Text>
            </Text>
          </Text>
          <Text style={[styles.loremIpsumIs, styles.loremIpsumIsTypo]}>
            Lorem Ipsum is simply dummy text of the...
          </Text>
          <Text style={styles.text2}>08.07.2021 15:35</Text>
        </View>
      </View>
      <View style={styles.tabBar}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon24.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon27.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon28.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon29.png")}
            />
            <Text style={[styles.label3, styles.labelTypo1]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={[styles.label, styles.labelTypo1]}>Khách hàng</Text>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.lineLayout]} />
        </View>
      </View>
      <View style={styles.headerNotiTtC}>
        <View style={styles.statusbarIphone13}>
          <Image
            style={styles.notchIcon}
            resizeMode="cover"
            source={require("../../assets/notch1.png")}
          />
          <View style={[styles.leftSide, styles.leftSideLayout]}>
            <View style={[styles.statusbarTime, styles.leftSideLayout]}>
              <Text style={[styles.text3, styles.luTypo]}>9:41</Text>
            </View>
          </View>
          <View style={[styles.rightSide, styles.rightSidePosition]}>
            <Image
              style={[styles.batteryIcon, styles.rightSidePosition]}
              resizeMode="cover"
              source={require("../../assets/battery2.png")}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../../assets/wifi.png")}
            />
            <Image
              style={[styles.iconMobileSignal, styles.text3Position]}
              resizeMode="cover"
              source={require("../../assets/icon--mobile-signal.png")}
            />
          </View>
        </View>
        <View style={styles.titlePage}>
          <Image
            style={[styles.leftIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.title}>
            <Text style={[styles.title1, styles.luTypo]}>Thông báo</Text>
          </View>
          <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
          <Image
            style={[styles.settingsIcon, styles.luPosition]}
            resizeMode="cover"
            source={require("../../assets/settings.png")}
          />
        </View>
        <View style={styles.frameParent}>
          <View style={styles.tabParent}>
            <View style={[styles.tab, styles.tabFlexBox]}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social22.png")}
              />
              <Text style={[styles.label5, styles.labelTypo]}>Tất cả</Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={[styles.number, styles.phtTrcTypo]}>16</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social22.png")}
              />
              <Text style={[styles.label6, styles.labelTypo]}>Chưa đọc</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.phtTrcTypo]}>1</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social22.png")}
              />
              <Text style={[styles.label6, styles.labelTypo]}>{`Đã đọc `}</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.phtTrcTypo]}>1</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../../assets/26-delivered1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notiLayout: {
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  notiPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout2: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  textSpaceBlock: {
    marginTop: 32,
    alignItems: "center",
  },
  text1Typo: {
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  notiSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  phtTrcTypo: {
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  frameBg: {
    backgroundColor: Color.lineAudioLength,
    borderRadius: Border.br_base,
  },
  loremIpsumIsTypo: {
    width: 299,
    fontFamily: FontFamily.defaultRegularCallout,
    textAlign: "left",
  },
  lineLayout: {
    height: 5,
    backgroundColor: Color.black,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  labelTypo1: {
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    marginTop: 4,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    letterSpacing: 0,
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  luTypo: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "600",
    letterSpacing: 0,
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  text3Position: {
    top: 1,
    position: "absolute",
  },
  luPosition: {
    right: 16,
    top: 10,
    position: "absolute",
  },
  tabFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    height: 44,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.textWhite,
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
    paddingVertical: 0,
    marginLeft: 8,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  emptyStateIcon: {
    height: 120,
    alignSelf: "stretch",
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
    display: "none",
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 24,
    alignSelf: "stretch",
  },
  startUploadingImag: {
    marginTop: 6,
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.calloutRegular_size,
    alignSelf: "stretch",
  },
  text: {
    alignSelf: "stretch",
  },
  iconsetplaceholder: {
    height: 24,
    display: "none",
  },
  text1: {
    lineHeight: 21,
    marginLeft: 8,
    textAlign: "left",
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
  },
  iconsetplaceholder1: {
    marginLeft: 8,
    height: 24,
    display: "none",
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.brandPrimary,
    height: 40,
    maxWidth: 311,
    display: "none",
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  emptyCard: {
    left: 16,
    width: 343,
    height: 366,
    paddingVertical: Padding.p_21xl,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    borderRadius: Border.br_base,
    top: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  noti: {
    top: 135,
    width: 375,
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.textWhite,
  },
  backgroundIcon: {
    width: 534,
    height: 1101,
    display: "none",
    top: 0,
  },
  notiIcon: {
    width: 32,
    height: 32,
  },
  bnCFeedback: {
    fontFamily: FontFamily.text14Regular,
  },
  quect3: {
    fontFamily: FontFamily.text14Bold,
    fontWeight: "700",
  },
  nguynKhnhHuynContainer: {
    color: Color.characterBlack85,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  phtTrc: {
    lineHeight: 18,
    color: Color.characterBlack45,
    marginTop: 4,
    textAlign: "left",
  },
  nguynKhnhHuynGiTinParent: {
    marginLeft: 8,
    flex: 1,
  },
  notiLine: {
    top: 946,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine1: {
    top: 1004,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine2: {
    top: 1062,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine3: {
    top: 1140,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine4: {
    top: 1198,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  frameChild: {
    height: 42,
    alignSelf: "stretch",
  },
  frameItem: {
    width: 89,
    height: 16,
    marginTop: 4,
  },
  notiLine5: {
    top: 1256,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine6: {
    top: 316,
    left: 406,
    width: 366,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  frameInner: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_61xl,

    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    height: "54.29%",
    width: "42.86%",
    top: "24.57%",
    right: "28.57%",
    bottom: "21.14%",
    left: "28.57%",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    width: 35,
    height: 35,
  },
  khchHng: {
    color: Color.black,
  },
  hnh838475: {
    color: Color.colorMediumspringgreen,
  },
  khchHngHnh838475Container1: {
    width: "100%",
  },
  khchHngHnh838475Container: {
    lineHeight: 21,
    display: "flex",
    alignItems: "flex-end",
    fontWeight: "700",
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.defaultRegularCallout,
  },
  loremIpsumIs: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 19,
    color: Color.b35,
    marginTop: 4,
  },
  text2: {
    lineHeight: 16,
    color: Color.textPlaceHolder,
    fontSize: FontSize.caption2Regular_size,
    width: 299,
    fontFamily: FontFamily.defaultRegularCallout,
    marginTop: 4,
    textAlign: "left",
  },
  khchHngHnh838475ThanhParent: {
    marginLeft: 10,
    justifyContent: "center",
  },
  notificationPaymentUnrea: {
    top: 687,
    left: -439,
    backgroundColor: Color.colorAliceblue_100,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    width: 375,
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
    overflow: "hidden",
  },
  label: {
    color: Color.textSecondary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  label3: {
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
    right: 40,
    bottom: 0,
    borderColor: Color.gray4D9D9D9,
    borderTopWidth: 0.5,
    height: 84,
    justifyContent: "space-between",
    borderStyle: "solid",
    width: 375,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    left: "50%",
    height: 32,
    display: "none",
    position: "absolute",
  },
  text3: {
    color: Color.colorGray_200,
    height: 20,
    top: 1,
    position: "absolute",
    width: 54,
    fontSize: FontSize.headlineSemiBold_size,
    fontFamily: FontFamily.defaultRegularCallout,
    textAlign: "center",
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
  leftIcon: {
    zIndex: 0,
    height: 24,
    overflow: "hidden",
  },
  title1: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.headlineSemiBold,
  },
  title: {
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  lu: {
    textAlign: "right",
    zIndex: 2,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.brandPrimary,
    display: "none",
    fontFamily: FontFamily.headlineSemiBold,
  },
  settingsIcon: {
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
    width: 20,
    height: 20,
    display: "none",
    borderRadius: Border.br_base,
  },
  label5: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    color: Color.brandPrimary,
  },
  number: {
    lineHeight: 16,
    color: Color.textWhite,
    textAlign: "center",
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xs,
    height: 44,
  },
  label6: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  badge1: {
    width: 16,
  },
  tabParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    width: 375,
  },
  headerNotiTtC: {
    marginLeft: -187.5,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    shadowRadius: 0.45,
    elevation: 0.45,
    shadowOpacity: 1,
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  notikhngCThngBo: {
    overflow: "hidden",
    width: "100%",
  },
});

export default NotiKhngCThngBo;
