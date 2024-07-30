import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontSize, Border, FontFamily, Color } from "../../GlobalStyles";

const NotiDanhSch = () => {
  return (
    <View style={styles.notidanhSch}>
      <View style={[styles.noti, styles.notiPosition]}>
        <View style={[styles.titleWrapper, styles.titleSpaceBlock]}>
          <View style={styles.title}>
            <Text style={styles.label}>Hôm nay</Text>
          </View>
        </View>
        <View style={[styles.notiInApp, styles.title2Position]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.fptCameraTypo}>
                <Text style={styles.nguynKhnhHuyn1}>Nguyễn Khánh Huyền</Text>
                {` `}
              </Text>
              <Text style={styles.nhcNBn}>
                đã nhắc đến bạn trong một bình luận
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                vài giây trước
              </Text>
            </View>
          </View>
          <Image
            style={styles.notiLayout}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp1, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon10.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.fptCameraTypo}>
                <Text style={styles.nguynKhnhHuyn1}>Nguyễn Khánh Huyền</Text>
                {` `}
              </Text>
              <Text style={styles.nhcNBn}>đã gửi tin nhắn mới đến bạn</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                vài giây trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp2, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.fptCameraTypo}>
                <Text style={styles.nguynKhnhHuyn1}>Thu Trang Nguyen</Text>
                {` `}
              </Text>
              <Text style={styles.nhcNBn}>
                đã bình luận về ảnh trên trang{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                FPT Camera
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                1 phút trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp3, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.fptCameraTypo}>
                <Text style={styles.nguynKhnhHuyn1}>Nguyễn Khánh Huyền</Text>
                {` `}
              </Text>
              <Text style={styles.nhcNBn}>
                đã bình luận về bài viết trên trang{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                FPT Camera
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                15 phút trước
              </Text>
            </View>
          </View>
          <Image
            style={styles.notiLayout}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp4, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon2.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.nhcNBn}>Nhắc nhở:{` `}</Text>
              <Text
                style={[styles.fptCamera, styles.fptCameraTypo]}
              >{`Gửi thông tin sản phẩm `}</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                20 phút trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp5, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon11.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.fptCameraTypo}>
                <Text style={styles.nguynKhnhHuyn1}>Binhld2</Text>
                {` `}
              </Text>
              <Text style={styles.nhcNBn}>đã chỉ định chat với khách hàng</Text>
              <Text style={styles.fptCameraTypo}>
                {` `}
                <Text style={styles.nguynKhnhHuyn1}>{`Lê Trí `}</Text>
              </Text>
              <Text style={styles.nhcNBn}>cho bạn</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                20 phút trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp6, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon12.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.nhcNBn}>
                Bạn vẫn chưa phản hồi khách hàng{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Tuấn Trinh
              </Text>
              <Text style={styles.nhcNBn}>{` `}</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                20 phút trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp7, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon5.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.nhcNBn}>{`Bạn có feedback mới từ `}</Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Quect3
              </Text>
              <Text style={styles.nhcNBn}>
                {` `}và{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Minhpd11
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                20 phút trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp8, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.fptCameraTypo}>
                <Text style={styles.nguynKhnhHuyn1}>Nguyễn Khánh Huyền</Text>
                {` `}
              </Text>
              <Text style={styles.nhcNBn}>
                và 2 người khác đã nhắc đến bạn trong một bình luận
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp9, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon6.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text style={[styles.nguynKhnhHuyn8, styles.nguynContainerTypo]}>
              Bạn vừa bị mất kết nối với 2 trang Facebook. Vui lòng kết nối lại!
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp10, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon7.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.fptCameraTypo}>
                <Text style={styles.nguynKhnhHuyn1}>Binhld2</Text>
                {` `}
              </Text>
              <Text style={styles.nhcNBn}>đã chỉ định chat với khách hàng</Text>
              <Text style={styles.fptCameraTypo}>
                {` `}
                <Text style={styles.nguynKhnhHuyn1}>Duy Mạnh</Text>
                {` `}
              </Text>
              <Text style={styles.nhcNBn}>cho bạn</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp11, styles.notiSpaceBlock]}>
          <View style={styles.notiIcon}>
            <View style={[styles.notiIconChild, styles.frameInnerPosition]} />
            <Image
              style={[styles.settingIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../../assets/setting1.png")}
            />
          </View>
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Binhld2
              </Text>
              <Text style={styles.nhcNBn}>
                {` `}đã cập nhật vai trò{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Admin
              </Text>
              <Text style={styles.nhcNBn}>
                {` `}
                {`cho bạn `}
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.numberLayout]}>
                Thứ Tư, ngày 12/04 09:35
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.titleContainer, styles.titleSpaceBlock]}>
          <View style={styles.title}>
            <Text style={styles.label}>Cũ hơn</Text>
          </View>
        </View>
        <View style={[styles.notiInApp12, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon11.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text style={[styles.nguynKhnhHuyn8, styles.nguynContainerTypo]}>
              Bạn vừa bị mất kết nối với 3 trang Zalo OA. Vui lòng kết nối lại!
            </Text>
            <View style={styles.time}>
              <Text style={[styles.thTNgy1, styles.numberLayout]}>
                Thứ Tư, ngày 12/04 09:35
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp13, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon7.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text
              style={[styles.nguynKhnhHuynContainer, styles.nguynContainerTypo]}
            >
              <Text style={styles.nhcNBn}>
                Bạn vẫn chưa phản hồi khách hàng{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Tuấn Trinh
              </Text>
              <Text style={styles.nhcNBn}>
                {` `}
                {`và 3 khách hàng khác `}
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.thTNgy1, styles.numberLayout]}>
                Thứ Tư, ngày 12/09/2023 09:35
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppItem, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={[styles.notiInApp14, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon8.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <View style={[styles.frameChild, styles.frameBg]} />
            <View style={[styles.frameItem, styles.frameBg]} />
          </View>
        </View>
        <View style={[styles.scrollbarFrame, styles.scrollbarFramePosition]}>
          <View style={[styles.scrollbarFrame1, styles.scrollbarFramePosition]}>
            <View style={styles.scrollbar} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.backgroundIcon, styles.notiPosition]}
        resizeMode="cover"
        source={require("../../assets/background.png")}
      />
      <View style={[styles.notiLine, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/loifacebook-statenew.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <Text
            style={[styles.nguynKhnhHuynContainer12, styles.nguynContainerTypo]}
          >
            <Text
              style={styles.nhcNBn}
            >{`Bạn vừa bị mất kết nối với trang `}</Text>
            <Text style={styles.fptCameraTypo}>FPT Camera Hà Nội.</Text>
            <Text style={styles.nhcNBn}> Vui lòng kết nối lại!</Text>
          </Text>
          <Text style={styles.phtTrc6}>5 phút trước</Text>
        </View>
      </View>
      <View style={[styles.notificationPaymentUnrea, styles.notiLinePosition]}>
        <View style={styles.rectangleGroup}>
          <LinearGradient
            style={[styles.frameInner, styles.frameInnerPosition]}
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
          <Text style={styles.text1}>08.07.2021 15:35</Text>
        </View>
      </View>
      <View style={[styles.headerNotiTtC, styles.notiPosition]}>
        <View style={styles.statusbarIphone13}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../../assets/notch1.png")}
          />
          <View style={[styles.leftSide, styles.leftSideLayout]}>
            <View style={[styles.statusbarTime, styles.leftSideLayout]}>
              <Text style={[styles.text2, styles.text2Typo]}>9:41</Text>
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
              style={[styles.iconMobileSignal, styles.iconPosition]}
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
          <View style={[styles.title2, styles.title2Position]}>
            <Text style={[styles.title3, styles.text2Typo]}>Thông báo</Text>
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
              <Text style={[styles.label2, styles.labelTypo1]}>Tất cả</Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={[styles.number, styles.numberTypo]}>12</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social22.png")}
              />
              <Text style={[styles.label3, styles.labelTypo1]}>Chưa đọc</Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={[styles.number, styles.numberTypo]}>12</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social22.png")}
              />
              <Text
                style={[styles.label3, styles.labelTypo1]}
              >{`Đã đọc `}</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.numberTypo]}>4</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../../assets/26-delivered.png")}
          />
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
            <Text style={[styles.label5, styles.labelTypo]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon27.png")}
            />
            <Text style={[styles.label5, styles.labelTypo]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <View style={styles.iconLayout}>
              <Image
                style={[styles.menuIcon3, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../../assets/menu-icon28.png")}
              />
              <View style={[styles.badge3, styles.badgeBorder]}>
                <Text style={[styles.number3, styles.numberTypo]}>3</Text>
              </View>
            </View>
            <Text style={[styles.label5, styles.labelTypo]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <View style={styles.iconLayout}>
              <Image
                style={[styles.menuIcon3, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../../assets/menu-icon29.png")}
              />
              <View style={[styles.badge4, styles.badgeBorder]}>
                <Text style={[styles.number3, styles.numberTypo]}>12</Text>
              </View>
            </View>
            <Text style={[styles.label8, styles.labelTypo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={[styles.label5, styles.labelTypo]}>Khách hàng</Text>
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
  notiPosition: {
    left: 0,
    position: "absolute",
  },
  titleSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
  title2Position: {
    zIndex: 1,
    flexDirection: "row",
  },
  nguynContainerTypo: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    alignSelf: "stretch",
    textAlign: "left",
  },
  numberLayout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  notiSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  notiLayout: {
    height: 64,
    width: 64,
    borderRadius: Border.br_11xs,
    marginLeft: 8,
  },
  fptCameraTypo: {
    fontFamily: FontFamily.text14Bold,
    fontWeight: "700",
  },
  frameInnerPosition: {
    borderRadius: Border.br_61xl,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameBg: {
    backgroundColor: Color.neutral3F5F5F5,
    borderRadius: Border.br_base,
  },
  scrollbarFramePosition: {
    width: 11,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  notiLinePosition: {
    position: "absolute",
    flexDirection: "row",
  },
  loremIpsumIsTypo: {
    width: 299,
    fontFamily: FontFamily.defaultRegularCallout,
    textAlign: "left",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  text2Typo: {
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  luPosition: {
    right: 16,
    top: 10,
    position: "absolute",
  },
  tabFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.textWhite,
  },
  labelTypo1: {
    fontSize: FontSize.subheadlineSemiBold_size,
    textAlign: "center",
    lineHeight: 20,
    marginLeft: 8,
    letterSpacing: 0,
  },
  numberTypo: {
    color: Color.textWhite,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
  },
  badgeSpaceBlock: {
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    marginLeft: 8,
    alignItems: "center",
    overflow: "hidden",
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
  labelTypo: {
    lineHeight: 13,
    textAlign: "center",
    fontSize: FontSize.caption2Regular_size,
    marginTop: 4,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  badgeBorder: {
    borderColor: Color.textWhite,
    bottom: "50.45%",
    top: "-19.55%",
    height: "69.09%",
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
  },
  title: {
    width: 343,
    alignItems: "center",
    flexDirection: "row",
  },
  titleWrapper: {
    zIndex: 0,
    paddingVertical: Padding.p_xs,
  },
  notiIcon: {
    width: 32,
    height: 32,
  },
  nguynKhnhHuyn1: {
    letterSpacing: 0,
  },
  nhcNBn: {
    fontFamily: FontFamily.text14Regular,
  },
  nguynKhnhHuynContainer: {
    color: Color.textPrimary,
  },
  viGiyTrc: {
    color: Color.brandPrimary,
    left: "0%",
    top: "0%",
    lineHeight: 16,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    height: 18,
    marginTop: 4,
    width: 77,
  },
  nguynKhnhHuynBnhLuParent: {
    marginLeft: 8,
    flex: 1,
  },
  notiInApp: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 375,
    backgroundColor: Color.backgroundBlue,
  },
  notiInAppItem: {
    display: "none",
  },
  notiInApp1: {
    zIndex: 2,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  fptCamera: {
    letterSpacing: 0,
  },
  notiInApp2: {
    zIndex: 3,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  notiInApp3: {
    zIndex: 4,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  notiInApp4: {
    zIndex: 5,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  notiInApp5: {
    zIndex: 6,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  notiInApp6: {
    zIndex: 7,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  notiInApp7: {
    zIndex: 8,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  notiInApp8: {
    zIndex: 9,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  nguynKhnhHuyn8: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  notiInApp9: {
    zIndex: 10,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  notiInApp10: {
    zIndex: 11,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  notiIconChild: {
    backgroundColor: Color.brandPrimary,
  },
  settingIcon: {
    height: "56.25%",
    width: "56.25%",
    top: "21.88%",
    right: "21.88%",
    bottom: "21.88%",
    left: "21.88%",
  },
  notiInApp11: {
    zIndex: 12,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  titleContainer: {
    zIndex: 13,
    paddingVertical: Padding.p_xs,
  },
  thTNgy1: {
    color: Color.darkGray450616161,
    left: "0%",
    top: "0%",
    lineHeight: 16,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    position: "absolute",
  },
  notiInApp12: {
    zIndex: 14,
    width: 375,
    flexDirection: "row",
    backgroundColor: Color.textWhite,
  },
  notiInApp13: {
    zIndex: 15,
    width: 375,
    flexDirection: "row",
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
  notiInApp14: {
    zIndex: 16,
    width: 375,
    flexDirection: "row",
    backgroundColor: Color.textWhite,
  },
  scrollbar: {
    left: 1,
    borderRadius: Border.br_9xs_5,
    backgroundColor: Color.neutral6BFBFBF,
    borderColor: Color.colorGray_1200,
    width: 9,
    height: 260,
    borderWidth: 1,
    borderStyle: "solid",
    top: 1,
    position: "absolute",
  },
  scrollbarFrame1: {
    bottom: 328,
    width: 11,
    right: 0,
  },
  scrollbarFrame: {
    zIndex: 17,
    bottom: 0,
    width: 11,
    right: 0,
  },
  noti: {
    top: 135,
    backgroundColor: Color.textWhite,
  },
  backgroundIcon: {
    width: 534,
    height: 1101,
    top: 0,
    display: "none",
  },
  nguynKhnhHuynContainer12: {
    color: Color.characterBlack85,
  },
  phtTrc6: {
    lineHeight: 18,
    color: Color.characterBlack45,
    fontSize: FontSize.caption1Regular_size,
    marginTop: 4,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  notiLine: {
    top: 316,
    left: 406,
    width: 366,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  frameInner: {

  },
  vectorIcon: {
    height: "54.29%",
    width: "42.86%",
    top: "24.57%",
    right: "28.57%",
    bottom: "21.14%",
    left: "28.57%",
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
    fontFamily: FontFamily.defaultRegularCallout,
    fontSize: FontSize.text14Regular_size,
  },
  loremIpsumIs: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 19,
    color: Color.b35,
    marginTop: 4,
  },
  text1: {
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
    width: 375,
    flexDirection: "row",
    paddingVertical: Padding.p_xs,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    display: "none",
    height: 32,
  },
  text2: {
    color: Color.colorGray_200,
    height: 20,
    width: 54,
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularCallout,
    top: 1,
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
    height: 24,
    zIndex: 0,
  },
  title3: {
    color: Color.textPrimary,
    fontFamily: FontFamily.headlineSemiBold,
  },
  title2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  lu: {
    textAlign: "right",
    display: "none",
    zIndex: 2,
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    right: 16,
    top: 10,
    letterSpacing: 0,
  },
  settingsIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
    zIndex: 3,
  },
  titlePage: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_3xs,
    width: 375,
    flexDirection: "row",
  },
  socialIcon: {
    width: 20,
    height: 20,
    borderRadius: Border.br_base,
    display: "none",
  },
  label2: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    color: Color.brandPrimary,
  },
  number: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xs,
    height: 44,
  },
  label3: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  badge2: {
    width: 16,
    display: "none",
  },
  tabParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    paddingVertical: 0,
    justifyContent: "space-between",
    width: 375,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  headerNotiTtC: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    shadowRadius: 0.45,
    elevation: 0.45,
    shadowOpacity: 1,
    top: 0,
    backgroundColor: Color.textWhite,
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
  label5: {
    color: Color.textSecondary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  menuIcon3: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  number3: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    letterSpacing: 0,
  },
  badge3: {
    width: "69.09%",
    right: "-19.55%",
    left: "50.45%",
  },
  badge4: {
    width: "95.45%",
    right: "-32.73%",
    left: "37.27%",
  },
  label8: {
    color: Color.brandPrimary,
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
    marginLeft: -187.5,
    borderColor: Color.gray4D9D9D9,
    borderTopWidth: 0.5,
    height: 84,
    justifyContent: "space-between",
    left: "50%",
    borderStyle: "solid",
    bottom: 0,
    width: 375,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notidanhSch: {
    height: 1405,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default NotiDanhSch;
