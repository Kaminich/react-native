import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, FontSize, Padding, Border, Color } from "../../GlobalStyles";

const NotiSettingLuThayI1 = () => {
  return (
    <View style={styles.notisettingluThayI}>
      <View style={[styles.noti, styles.notiPosition]}>
        <View style={styles.titleWrapper}>
          <View style={[styles.title, styles.titleLayout]}>
            <Text style={[styles.label, styles.luTypo]}>Hôm nay</Text>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
            source={require("../../assets/notiicon14.png")}
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
            <View
              style={[styles.notiIconChild, styles.notiIconChildPosition]}
            />
            <Image
              style={[styles.settingIcon, styles.iconLayout1]}
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
              <Text style={[styles.viGiyTrc, styles.thTNgy1Typo]}>
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
        <View style={styles.titleContainer}>
          <View style={[styles.title, styles.titleLayout]}>
            <Text style={[styles.label, styles.luTypo]}>Cũ hơn</Text>
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
              <Text style={[styles.thTNgy1, styles.thTNgy1Typo]}>
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
              <Text style={[styles.thTNgy1, styles.thTNgy1Typo]}>
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
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameItemLayout]} />
          </View>
        </View>
        <View style={[styles.scrollbarFrame, styles.scrollbarFramePosition]}>
          <View style={[styles.scrollbarFrame1, styles.scrollbarFramePosition]}>
            <View style={[styles.scrollbar, styles.badgeBorder]} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.backgroundIcon, styles.notiPosition]}
        resizeMode="cover"
        source={require("../../assets/background7.png")}
      />
      <View style={[styles.notiLine, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon21.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <Text
            style={[styles.nguynKhnhHuynContainer12, styles.nguynContainerTypo]}
          >
            <Text style={styles.nhcNBn}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.fptCameraTypo}>QueCT3</Text>
          </Text>
          <Text style={styles.phtTrc6}>Thứ Tư, ngày 12/04 15:11</Text>
        </View>
      </View>
      <View style={[styles.notiLine1, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon21.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <Text
            style={[styles.nguynKhnhHuynContainer12, styles.nguynContainerTypo]}
          >
            <Text style={styles.nhcNBn}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.fptCameraTypo}>QueCT3</Text>
            <Text style={styles.nhcNBn}>{` và `}</Text>
            <Text style={styles.fptCameraTypo}>HaDT53</Text>
          </Text>
          <Text style={styles.phtTrc6}>Thứ Tư, ngày 12/04 15:23</Text>
        </View>
      </View>
      <View style={[styles.notiLine2, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon21.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <Text
            style={[styles.nguynKhnhHuynContainer12, styles.nguynContainerTypo]}
          >
            <Text style={styles.nhcNBn}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.fptCameraTypo}>QueCT3</Text>
            <Text style={styles.nhcNBn}> và 3 người khác</Text>
          </Text>
          <Text style={styles.phtTrc6}>Thứ Tư, ngày 12/04 17:00</Text>
        </View>
      </View>
      <View style={[styles.notiLine3, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon22.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <Text
            style={[styles.nguynKhnhHuynContainer12, styles.nguynContainerTypo]}
          >
            <Text style={styles.fptCameraTypo}>{`Thu Hương `}</Text>
            <Text style={styles.nhcNBn}>đã gửi tin nhắn mới đến bạn</Text>
          </Text>
          <Text style={styles.phtTrc6}>Thứ Năm, ngày 13/04 11:12</Text>
        </View>
      </View>
      <View style={[styles.notiLine4, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon23.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <Text
            style={[styles.nguynKhnhHuynContainer12, styles.nguynContainerTypo]}
          >
            <Text style={styles.fptCameraTypo}>{`Lê Trí `}</Text>
            <Text style={styles.nhcNBn}>đã gửi tin nhắn mới đến bạn</Text>
          </Text>
          <Text style={styles.phtTrc6}>Thứ Bảy, ngày 25/03 12:31</Text>
        </View>
      </View>
      <View style={[styles.notiLine5, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/loifchat-stateskeleton.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <View style={[styles.frameInner, styles.frameInnerBg]} />
          <View style={[styles.rectangleView, styles.frameInnerBg]} />
        </View>
      </View>
      <View style={[styles.notiLine6, styles.notiSpaceBlock]}>
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
      <View style={[styles.notificationPaymentUnrea, styles.notiLine6Position]}>
        <View style={styles.rectangleContainer}>
          <LinearGradient
            style={[
              styles.rectangleLineargradient,
              styles.notiIconChildPosition,
            ]}
            locations={[0, 1]}
            colors={["#33eb97", "#00ba65"]}
            useAngle={true}
            angle={180}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout1]}
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
      <View style={[styles.tabBar, styles.tabBarFlexBox]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon24.png")}
            />
            <Text style={[styles.label2, styles.labelTypo1]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon27.png")}
            />
            <Text style={[styles.label2, styles.labelTypo1]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon28.png")}
            />
            <Text style={[styles.label2, styles.labelTypo1]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <View style={styles.menuIconLayout}>
              <Image
                style={[styles.menuIcon4, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/menu-icon29.png")}
              />
              <View style={[styles.badge, styles.badgeSpaceBlock]}>
                <Text style={styles.number}>3</Text>
              </View>
            </View>
            <Text style={[styles.label5, styles.labelTypo1]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={[styles.label2, styles.labelTypo1]}>Khách hàng</Text>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.lineLayout]} />
        </View>
      </View>
      <View style={[styles.headerNotiTtC, styles.toastShadowBox]}>
        <View style={styles.statusbarIphone13}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../../assets/notch1.png")}
          />
          <View style={[styles.leftSide, styles.leftSideLayout]}>
            <View style={[styles.statusbarTime, styles.leftSideLayout]}>
              <Text style={styles.text2}>9:41</Text>
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
            style={[styles.leftIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={[styles.title2, styles.title2Position]}>
            <Text style={[styles.title3, styles.luTypo]}>Thông báo</Text>
          </View>
          <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
          <Image
            style={[styles.settingsIcon, styles.luPosition]}
            resizeMode="cover"
            source={require("../../assets/settings.png")}
          />
        </View>
        <View style={[styles.frameParent, styles.badgeSpaceBlock]}>
          <View style={styles.tabParent}>
            <View style={styles.tabFlexBox}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social31.png")}
              />
              <Text style={[styles.label7, styles.labelTypo]}>Tất cả</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number1, styles.thTNgy1Typo]}>1</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social31.png")}
              />
              <Text style={[styles.label7, styles.labelTypo]}>Chưa đọc</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number1, styles.thTNgy1Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social31.png")}
              />
              <Text
                style={[styles.label9, styles.label9Typo]}
              >{`Đã đọc `}</Text>
              <View style={[styles.badge3, styles.badgeSpaceBlock]}>
                <Text style={[styles.number1, styles.thTNgy1Typo]}>16</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.menuIconLayout}
            resizeMode="cover"
            source={require("../../assets/26-delivered.png")}
          />
        </View>
      </View>
      <View
        style={[styles.notisettingluThayIChild, styles.headerNotiTtCPosition]}
      />
      <View style={[styles.toast, styles.toastShadowBox]}>
        <Image
          style={styles.iconContainer}
          resizeMode="cover"
          source={require("../../assets/icon-container20.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <Text style={[styles.title4, styles.label9Typo]}>
            Lưu cài đặt thông báo thành công
          </Text>
          <Text style={[styles.description, styles.nguynContainerTypo]}>
            The list has been saved.
          </Text>
        </View>
        <Image
          style={styles.closeIcon}
          resizeMode="cover"
          source={require("../../assets/23-close5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notiPosition: {
    left: 0,
    position: "absolute",
  },
  titleLayout: {
    width: 343,
    flexDirection: "row",
  },
  luTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
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
  thTNgy1Typo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
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
  notiIconChildPosition: {
    borderRadius: Border.br_61xl,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 42,
    alignSelf: "stretch",
  },
  frameItemLayout: {
    height: 16,
    width: 89,
    marginTop: 4,
  },
  scrollbarFramePosition: {
    width: 11,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  badgeBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  frameInnerBg: {
    backgroundColor: Color.lineAudioLength,
    borderRadius: Border.br_base,
  },
  notiLine6Position: {
    position: "absolute",
    flexDirection: "row",
  },
  loremIpsumIsTypo: {
    width: 299,
    fontFamily: FontFamily.defaultRegularCallout,
    textAlign: "left",
  },
  tabBarFlexBox: {
    justifyContent: "space-between",
    width: 375,
  },
  lineLayout: {
    height: 5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    left: "50%",
    position: "absolute",
  },
  menuIconLayout: {
    height: 22,
    width: 22,
  },
  labelTypo1: {
    lineHeight: 13,
    textAlign: "center",
    fontSize: FontSize.caption2Regular_size,
    marginTop: 4,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  badgeSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  toastShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    left: "50%",
    position: "absolute",
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
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  luPosition: {
    right: 16,
    top: 10,
    position: "absolute",
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    textAlign: "center",
    lineHeight: 20,
    marginLeft: 8,
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
  label9Typo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  headerNotiTtCPosition: {
    marginLeft: -205,
    top: 0,
  },
  label: {
    textAlign: "left",
    color: Color.textPrimary,
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
  },
  titleWrapper: {
    zIndex: 0,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
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
    paddingHorizontal: Padding.p_base,
  },
  thTNgy1: {
    color: Color.darkGray450616161,
    left: "0%",
    top: "0%",
    lineHeight: 16,
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
    backgroundColor: Color.neutral3F5F5F5,
    borderRadius: Border.br_base,
  },
  frameItem: {
    backgroundColor: Color.neutral3F5F5F5,
    borderRadius: Border.br_base,
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
    top: 1,
  },
  scrollbarFrame1: {
    bottom: 328,
  },
  scrollbarFrame: {
    zIndex: 17,
    bottom: 0,
  },
  noti: {
    top: 137,
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
    top: 946,
    width: 375,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine1: {
    top: 1004,
    width: 375,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine2: {
    top: 1062,
    width: 375,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine3: {
    top: 1140,
    width: 375,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine4: {
    top: 1198,
    width: 375,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  frameInner: {
    height: 42,
    alignSelf: "stretch",
  },
  rectangleView: {
    height: 16,
    width: 89,
    marginTop: 4,
  },
  notiLine5: {
    top: 1256,
    width: 375,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notiLine6: {
    top: 316,
    left: 406,
    width: 366,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  rectangleLineargradient: {

  },
  vectorIcon: {
    height: "54.29%",
    width: "42.86%",
    top: "24.57%",
    right: "28.57%",
    bottom: "21.14%",
    left: "28.57%",
  },
  rectangleContainer: {
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
  label2: {
    color: Color.textSecondary,
    textAlign: "center",
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  menuIcon4: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  number: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    color: Color.textWhite,
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  badge: {
    height: "69.09%",
    width: "69.09%",
    top: "-19.55%",
    right: "-19.55%",
    bottom: "50.45%",
    left: "50.45%",
    borderColor: Color.textWhite,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  label5: {
    textAlign: "center",
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
    borderColor: Color.gray4D9D9D9,
    borderTopWidth: 0.5,
    height: 84,
    borderStyle: "solid",
    bottom: 0,
    right: 40,
    justifyContent: "space-between",
    position: "absolute",
    backgroundColor: Color.textWhite,
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
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
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
  },
  title3: {
    textAlign: "center",
    color: Color.textPrimary,
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
    letterSpacing: 0,
  },
  settingsIcon: {
    width: 24,
    height: 24,
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
  label7: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    letterSpacing: 0,
  },
  number1: {
    color: Color.textWhite,
    textAlign: "center",
  },
  badge1: {
    width: 16,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    overflow: "hidden",
    marginLeft: 8,
  },
  label9: {
    fontSize: FontSize.subheadlineSemiBold_size,
    textAlign: "center",
    lineHeight: 20,
    marginLeft: 8,
    color: Color.brandPrimary,
  },
  badge3: {
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    overflow: "hidden",
    marginLeft: 8,
  },
  tab2: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  tabParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    justifyContent: "space-between",
    width: 375,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  headerNotiTtC: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 0.45,
    elevation: 0.45,
    marginLeft: -187.5,
    top: 0,
    backgroundColor: Color.textWhite,
  },
  notisettingluThayIChild: {
    opacity: 0.4,
    backgroundColor: Color.black,
    marginLeft: -205,
    left: "50%",
    display: "none",
    width: 375,
    position: "absolute",
    height: 812,
  },
  iconContainer: {
    width: 20,
    height: 24,
  },
  title4: {
    fontSize: FontSize.calloutRegular_size,
    lineHeight: 24,
    color: Color.textWhite,
    textAlign: "left",
  },
  description: {
    color: Color.colorGray_600,
    display: "none",
    fontFamily: FontFamily.text14Regular,
  },
  closeIcon: {
    width: 20,
    height: 20,
    display: "none",
    marginLeft: 8,
    overflow: "hidden",
  },
  toast: {
    marginLeft: -190,
    top: 60,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.tagGray600,
    shadowColor: "rgba(5, 16, 55, 0.15)",
    shadowRadius: 30,
    elevation: 30,
    flexDirection: "row",
    width: 343,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  notisettingluThayI: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default NotiSettingLuThayI1;
