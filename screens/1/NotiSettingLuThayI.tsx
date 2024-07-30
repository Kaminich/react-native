import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, Padding, FontSize, Border, Color } from "../../GlobalStyles";

const NotiSettingLuThayI = () => {
  return (
    <View style={styles.notisettingluThayI}>
      <View style={styles.noti}>
        <View style={styles.titleWrapper}>
          <View style={[styles.title, styles.componentLayout]}>
            <Text style={[styles.label, styles.titleTypo]}>Hôm nay</Text>
          </View>
        </View>
        <View style={[styles.notiInApp, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuyn8, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
          <View style={[styles.title, styles.componentLayout]}>
            <Text style={[styles.label, styles.titleTypo]}>Cũ hơn</Text>
          </View>
        </View>
        <View style={[styles.notiInApp12, styles.notiSpaceBlock]}>
          <Image
            style={styles.notiIcon}
            resizeMode="cover"
            source={require("../../assets/notiicon11.png")}
          />
          <View style={styles.nguynKhnhHuynBnhLuParent}>
            <Text style={[styles.nguynKhnhHuyn8, styles.nguynLayout]}>
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
            <Text style={[styles.nguynKhnhHuynContainer, styles.nguynLayout]}>
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
            <View style={[styles.frameChild, styles.frameBg]} />
            <View style={[styles.frameItem, styles.frameItemLayout]} />
          </View>
        </View>
        <View style={[styles.scrollbarFrame, styles.scrollbarFramePosition]}>
          <View style={[styles.scrollbarFrame1, styles.scrollbarFramePosition]}>
            <View style={[styles.scrollbar, styles.scrollbarPosition]} />
          </View>
        </View>
      </View>
      <Image
        style={styles.backgroundIcon}
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
          <Text style={styles.nguynKhnhHuynContainer12}>
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
          <Text style={styles.nguynKhnhHuynContainer12}>
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
          <Text style={styles.nguynKhnhHuynContainer12}>
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
          <Text style={styles.nguynKhnhHuynContainer12}>
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
          <Text style={styles.nguynKhnhHuynContainer12}>
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
          <Text style={styles.nguynKhnhHuynContainer12}>
            <Text
              style={styles.nhcNBn}
            >{`Bạn vừa bị mất kết nối với trang `}</Text>
            <Text style={styles.fptCameraTypo}>FPT Camera Hà Nội.</Text>
            <Text style={styles.nhcNBn}> Vui lòng kết nối lại!</Text>
          </Text>
          <Text style={styles.phtTrc6}>5 phút trước</Text>
        </View>
      </View>
      <View style={styles.notificationPaymentUnrea}>
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
      <View style={[styles.tabBar, styles.tabBarBorder]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={styles.line} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon24.png")}
            />
            <Text style={styles.label2}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon27.png")}
            />
            <Text style={styles.label2}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon28.png")}
            />
            <Text style={styles.label2}>Tin nhắn</Text>
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
            <Text style={styles.label5}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={styles.label2}>Khách hàng</Text>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
      </View>
      <View style={styles.headerNotiTtC}>
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
        <View style={[styles.titlePage, styles.titlePageSpaceBlock]}>
          <Image
            style={[styles.leftIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.title2}>
            <Text style={[styles.title3, styles.titleTypo]}>Thông báo</Text>
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
              <Text style={[styles.label9, styles.labelTypo]}>{`Đã đọc `}</Text>
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
        style={[styles.notisettingluThayIChild, styles.notisettingPosition]}
      />
      <View style={[styles.notisetting, styles.notisettingPosition]}>
        <View style={styles.actionSheet}>
          <View style={[styles.actionSheetheader, styles.titlePageSpaceBlock]}>
            <Image
              style={[styles.leftIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/27-left11.png")}
            />
            <View style={styles.titleFrame}>
              <Text style={[styles.title4, styles.labelTypo]} numberOfLines={1}>
                Cài đặt thông báo
              </Text>
            </View>
            <View style={styles.button}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder3.png")}
              />
              <Text style={[styles.text3, styles.labelTypo]}>Lưu</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder3.png")}
              />
            </View>
            <Image
              style={styles.closeIcon}
              resizeMode="cover"
              source={require("../../assets/23-close2.png")}
            />
          </View>
          <View style={styles.notisettingdefault}>
            <View style={[styles.separator362, styles.separatorLayout]} />
            <View style={styles.frameGroup}>
              <View style={styles.mThanhThngBoParent}>
                <Text style={styles.mThanhThng}>Âm thanh thông báo</Text>
                <View style={styles.switch}>
                  <View
                    style={[styles.switchNobdefault, styles.switchShadowBox]}
                  >
                    <View
                      style={[
                        styles.switchNobdefaultChild,
                        styles.menuIcon4Position,
                      ]}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.nhnThngBoParent}>
                <Text style={styles.mThanhThng}>Nhận thông báo</Text>
                <View style={styles.switch}>
                  <View
                    style={[styles.switchNobdefault1, styles.switchShadowBox]}
                  >
                    <View
                      style={[
                        styles.switchNobdefaultChild,
                        styles.menuIcon4Position,
                      ]}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.componentSettingNotiParent}>
                  <View
                    style={[
                      styles.componentSettingNoti,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.titleParent}>
                      <Text style={[styles.title5, styles.nguynLayout]}>
                        Nhận thông báo
                      </Text>
                      <Text style={styles.helperTypo}>
                        Nhận toàn bộ thông báo từ ứng dụng
                      </Text>
                    </View>
                    <View style={[styles.switch2, styles.switchLayout1]}>
                      <View
                        style={[
                          styles.switchNobdefault2,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.componentSettingNoti1,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.titleParent}>
                      <Text style={[styles.title5, styles.nguynLayout]}>
                        Âm thanh thông báo
                      </Text>
                      <Text style={[styles.helperText1, styles.helperTypo]}>
                        Nhận toàn bộ thông báo từ ứng dụng
                      </Text>
                    </View>
                    <View style={[styles.switch3, styles.switchLayout]}>
                      <View
                        style={[
                          styles.switchNobdefault3,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.separator360, styles.separatorLayout]} />
                  <View
                    style={[
                      styles.componentSettingNoti2,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.tabParent}>
                      <Image
                        style={styles.notiSettingIcon}
                        resizeMode="cover"
                        source={require("../../assets/noti-setting-icon.png")}
                      />
                      <Text
                        style={[styles.bnhLunFacebook, styles.fptCameraTypo]}
                      >
                        Tin nhắn
                      </Text>
                    </View>
                    <View style={styles.switchLayout}>
                      <View
                        style={[
                          styles.switchNobdefault4,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.componentSettingNoti1,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.titleParent}>
                      <Text style={[styles.title5, styles.nguynLayout]}>
                        Tin nhắn mới
                      </Text>
                      <Text style={[styles.helperText1, styles.helperTypo]}>
                        Nhận toàn bộ thông báo từ ứng dụng
                      </Text>
                    </View>
                    <View style={[styles.switch2, styles.switchLayout1]}>
                      <View
                        style={[
                          styles.switchNobdefault5,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.componentSettingNoti1,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.titleParent}>
                      <Text
                        style={[styles.title5, styles.nguynLayout]}
                      >{`Chỉ định hội thoại `}</Text>
                      <Text style={[styles.helperText1, styles.helperTypo]}>
                        Nhận toàn bộ thông báo từ ứng dụng
                      </Text>
                    </View>
                    <View style={[styles.switch2, styles.switchLayout1]}>
                      <View
                        style={[
                          styles.switchNobdefault6,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.componentSettingNoti1,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.titleParent}>
                      <Text style={[styles.title5, styles.nguynLayout]}>
                        Nhắc phản hồi tin nhắn
                      </Text>
                      <Text style={[styles.helperText1, styles.helperTypo]}>
                        Nhận toàn bộ thông báo từ ứng dụng
                      </Text>
                    </View>
                    <View style={[styles.switch3, styles.switchLayout]}>
                      <View
                        style={[
                          styles.switchNobdefault7,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.separator360, styles.separatorLayout]} />
                <View
                  style={[styles.componentSettingNoti2, styles.componentLayout]}
                >
                  <View style={styles.tabParent}>
                    <Image
                      style={styles.notiSettingIcon}
                      resizeMode="cover"
                      source={require("../../assets/noti-setting-icon1.png")}
                    />
                    <Text style={[styles.bnhLunFacebook, styles.fptCameraTypo]}>
                      Bình luận Facebook
                    </Text>
                  </View>
                  <View style={styles.switchLayout1}>
                    <View
                      style={[styles.switchNobdefault8, styles.switchShadowBox]}
                    >
                      <View
                        style={[
                          styles.switchNobdefaultChild,
                          styles.menuIcon4Position,
                        ]}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.componentSettingNoti2, styles.componentLayout]}
                >
                  <View style={styles.tabParent}>
                    <Image
                      style={styles.notiSettingIcon}
                      resizeMode="cover"
                      source={require("../../assets/noti-setting-iconwebsite.png")}
                    />
                    <Text style={[styles.bnhLunFacebook, styles.fptCameraTypo]}>
                      Lượt truy cập Website
                    </Text>
                  </View>
                  <View style={styles.switchLayout1}>
                    <View
                      style={[styles.switchNobdefault9, styles.switchShadowBox]}
                    >
                      <View
                        style={[
                          styles.switchNobdefaultChild,
                          styles.menuIcon4Position,
                        ]}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.componentSettingNoti2, styles.componentLayout]}
                >
                  <View style={styles.tabParent}>
                    <Image
                      style={styles.notiSettingIcon}
                      resizeMode="cover"
                      source={require("../../assets/noti-setting-icon2.png")}
                    />
                    <Text style={[styles.bnhLunFacebook, styles.fptCameraTypo]}>
                      Nhắc nhở
                    </Text>
                  </View>
                  <View style={styles.switchLayout1}>
                    <View
                      style={[
                        styles.switchNobdefault10,
                        styles.switchShadowBox,
                      ]}
                    >
                      <View
                        style={[
                          styles.switchNobdefaultChild,
                          styles.menuIcon4Position,
                        ]}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.separator360, styles.separatorLayout]} />
                <View style={styles.frameContainer}>
                  <View
                    style={[
                      styles.componentSettingNoti9,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.tabParent}>
                      <Image
                        style={styles.notiSettingIcon}
                        resizeMode="cover"
                        source={require("../../assets/noti-setting-iconci-t.png")}
                      />
                      <Text
                        style={[styles.bnhLunFacebook, styles.fptCameraTypo]}
                      >
                        Cài đặt
                      </Text>
                    </View>
                    <View style={styles.switchLayout}>
                      <View
                        style={[
                          styles.switchNobdefault11,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.componentSettingNoti1,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.titleParent}>
                      <Text style={[styles.title5, styles.nguynLayout]}>
                        Cấu hình kết nối kênh chat
                      </Text>
                      <Text style={[styles.helperText1, styles.helperTypo]}>
                        Nhận toàn bộ thông báo từ ứng dụng
                      </Text>
                    </View>
                    <View style={[styles.switch3, styles.switchLayout]}>
                      <View
                        style={[
                          styles.switchNobdefault12,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.componentSettingNoti1,
                      styles.componentLayout,
                    ]}
                  >
                    <View style={styles.titleParent}>
                      <Text style={[styles.title5, styles.nguynLayout]}>
                        Cập nhật vai trò
                      </Text>
                      <Text style={[styles.helperText1, styles.helperTypo]}>
                        Nhận toàn bộ thông báo từ ứng dụng
                      </Text>
                    </View>
                    <View style={[styles.switch2, styles.switchLayout1]}>
                      <View
                        style={[
                          styles.switchNobdefault13,
                          styles.switchShadowBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.switchNobdefaultChild,
                            styles.menuIcon4Position,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.actionSheetfooter}>
            <View style={styles.buttonParent}>
              <View style={[styles.button1, styles.buttonFlexBox]}>
                <Image
                  style={[styles.iconsetplaceholder, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/iconsetplaceholder4.png")}
                />
                <Text style={[styles.text4, styles.textTypo]}>Secondary</Text>
                <Image
                  style={[styles.iconsetplaceholder3, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/iconsetplaceholder4.png")}
                />
              </View>
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <Image
                  style={[styles.iconsetplaceholder, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/iconsetplaceholder1.png")}
                />
                <Text style={[styles.text5, styles.textTypo]}>Lưu cài đặt</Text>
                <Image
                  style={[styles.iconsetplaceholder3, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/iconsetplaceholder1.png")}
                />
              </View>
            </View>
            <View style={styles.alphabetickeyboard}>
              <View style={[styles.keys, styles.keysPosition]}>
                <View style={styles.topRow}>
                  <View style={styles.key}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      Q
                    </Text>
                  </View>
                  <View style={styles.key1}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      W
                    </Text>
                  </View>
                  <View style={[styles.key2, styles.keyPosition5]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      E
                    </Text>
                  </View>
                  <View style={[styles.key3, styles.keyPosition4]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      R
                    </Text>
                  </View>
                  <View style={[styles.key4, styles.keyPosition3]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      T
                    </Text>
                  </View>
                  <View style={[styles.key5, styles.keyPosition2]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      Y
                    </Text>
                  </View>
                  <View style={styles.key6}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      U
                    </Text>
                  </View>
                  <View style={[styles.key7, styles.keyPosition1]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      I
                    </Text>
                  </View>
                  <View style={[styles.key8, styles.keyPosition]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      O
                    </Text>
                  </View>
                  <View style={styles.key9}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      P
                    </Text>
                  </View>
                </View>
                <View style={styles.middleRow}>
                  <View style={styles.key10}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      A
                    </Text>
                  </View>
                  <View style={[styles.key11, styles.keyPosition5]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      S
                    </Text>
                  </View>
                  <View style={[styles.key12, styles.keyPosition4]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      D
                    </Text>
                  </View>
                  <View style={[styles.key13, styles.keyPosition3]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      F
                    </Text>
                  </View>
                  <View style={[styles.key14, styles.keyPosition2]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      G
                    </Text>
                  </View>
                  <View style={styles.key15}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      H
                    </Text>
                  </View>
                  <View style={[styles.key16, styles.keyPosition1]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      J
                    </Text>
                  </View>
                  <View style={[styles.key17, styles.keyPosition]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      K
                    </Text>
                  </View>
                  <View style={styles.key18}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      L
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomRow}>
                  <View style={styles.keys1}>
                    <View style={styles.key19}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        Z
                      </Text>
                    </View>
                    <View style={styles.key20}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        X
                      </Text>
                    </View>
                    <View style={styles.key21}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        C
                      </Text>
                    </View>
                    <View style={styles.key22}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter22, styles.letterPosition1]}>
                        V
                      </Text>
                    </View>
                    <View style={styles.key23}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        B
                      </Text>
                    </View>
                    <View style={styles.key24}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        N
                      </Text>
                    </View>
                    <View style={styles.key25}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        M
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.keyIcon, styles.keyIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/-key.png")}
                  />
                  <Image
                    style={[styles.keyIcon1, styles.keyIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/-key1.png")}
                  />
                </View>
              </View>
              <View style={[styles.bottomRow1, styles.keysPosition]}>
                <View style={styles.key26}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterPosition]}>
                    123
                  </Text>
                </View>
                <View style={styles.key27}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter27, styles.letterPosition]}>
                    Dấu cách
                  </Text>
                </View>
                <View style={styles.key28}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterPosition]}>
                    Nhập
                  </Text>
                </View>
              </View>
              <View style={styles.emojiDictation}>
                <Image
                  style={styles.iconEmoji}
                  resizeMode="cover"
                  source={require("../../assets/icon--emoji.png")}
                />
                <Image
                  style={styles.iconDictation}
                  resizeMode="cover"
                  source={require("../../assets/icon--dictation.png")}
                />
              </View>
              <View style={[styles.homeindicator1, styles.scrollbarPosition]}>
                <View style={[styles.homeIndicator1, styles.homeLayout]} />
              </View>
            </View>
            <View style={styles.homeindicator2}>
              <View style={[styles.homeIndicator, styles.homeLayout]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentLayout: {
    width: 343,
    flexDirection: "row",
  },
  titleTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  notiSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  nguynLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  thTNgy1Typo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
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
  frameBg: {
    backgroundColor: Color.neutral3F5F5F5,
    borderRadius: Border.br_base,
  },
  frameItemLayout: {
    width: 89,
    height: 16,
    marginTop: 4,
  },
  scrollbarFramePosition: {
    width: 11,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  scrollbarPosition: {
    left: 1,
    position: "absolute",
  },
  frameInnerBg: {
    backgroundColor: Color.lineAudioLength,
    borderRadius: Border.br_base,
  },
  loremIpsumIsTypo: {
    width: 299,
    fontFamily: FontFamily.defaultRegularCallout,
    textAlign: "left",
  },
  tabBarBorder: {
    borderColor: Color.gray4D9D9D9,
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  menuIconLayout: {
    height: 22,
    width: 22,
  },
  badgeSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  homeLayout: {
    width: 134,
    bottom: 8,
    height: 5,
    backgroundColor: Color.black,
    borderRadius: Border.br_81xl,
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
  titlePageSpaceBlock: {
    paddingRight: Padding.p_21xl,
    paddingLeft: Padding.p_base,
    width: 375,
    flexDirection: "row",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  luPosition: {
    right: 16,
    top: 10,
    position: "absolute",
  },
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    lineHeight: 20,
    letterSpacing: 0,
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
  notisettingPosition: {
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  separatorLayout: {
    height: 1,
    width: 334,
  },
  switchShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 35, 11, 0.2)",
    borderRadius: Border.br_58xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    overflow: "hidden",
  },
  menuIcon4Position: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  switchLayout1: {
    width: 40,
    borderRadius: Border.br_11xl,
    padding: Padding.p_11xs,
    justifyContent: "flex-end",
    height: 20,
    backgroundColor: Color.brandPrimary,
    alignItems: "center",
    flexDirection: "row",
  },
  helperTypo: {
    marginTop: 2,
    color: Color.textSecondary,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
    textAlign: "left",
  },
  switchLayout: {
    backgroundColor: Color.gray68C8C8C,
    width: 40,
    borderRadius: Border.br_11xl,
    padding: Padding.p_11xs,
    height: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonFlexBox: {
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    flex: 1,
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.text14Regular,
    marginLeft: 8,
    textAlign: "left",
    letterSpacing: 0,
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  letterPosition1: {
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
    textAlign: "center",
    color: Color.black,
    display: "flex",
    justifyContent: "center",
    letterSpacing: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  keyPosition5: {
    right: 262,
    top: 0,
    height: 42,
    position: "absolute",
  },
  keyPosition4: {
    right: 225,
    top: 0,
    height: 42,
    position: "absolute",
  },
  keyPosition3: {
    right: 187,
    top: 0,
    height: 42,
    position: "absolute",
  },
  keyPosition2: {
    right: 150,
    top: 0,
    height: 42,
    position: "absolute",
  },
  keyPosition1: {
    right: 75,
    top: 0,
    height: 42,
    position: "absolute",
  },
  keyPosition: {
    right: 38,
    top: 0,
    height: 42,
    position: "absolute",
  },
  keyIconLayout: {
    width: 42,
    top: 0,
    height: 42,
    position: "absolute",
  },
  letterPosition: {
    marginTop: -10,
    top: "50%",
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "center",
    color: Color.black,
    display: "flex",
    fontFamily: FontFamily.defaultRegularCallout,
    justifyContent: "center",
    letterSpacing: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  label: {
    textAlign: "left",
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "600",
    letterSpacing: 0,
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
    height: 32,
    width: 32,
  },
  nguynKhnhHuyn1: {
    letterSpacing: 0,
  },
  nhcNBn: {
    fontFamily: FontFamily.text14Regular,
  },
  nguynKhnhHuynContainer: {
    alignSelf: "stretch",
    textAlign: "left",
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
    marginTop: 4,
    height: 18,
    width: 77,
  },
  nguynKhnhHuynBnhLuParent: {
    marginLeft: 8,
    flex: 1,
  },
  notiInApp: {
    zIndex: 1,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  notiInAppItem: {
    display: "none",
  },
  notiInApp1: {
    zIndex: 2,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  fptCamera: {
    letterSpacing: 0,
  },
  notiInApp2: {
    zIndex: 3,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  notiInApp3: {
    zIndex: 4,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  notiInApp4: {
    zIndex: 5,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  notiInApp5: {
    zIndex: 6,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  notiInApp6: {
    zIndex: 7,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  notiInApp7: {
    zIndex: 8,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  notiInApp8: {
    zIndex: 9,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  nguynKhnhHuyn8: {
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.textPrimary,
  },
  notiInApp9: {
    zIndex: 10,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
  },
  notiInApp10: {
    zIndex: 11,
    width: 375,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
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
    backgroundColor: Color.textWhite,
  },
  notiInApp13: {
    zIndex: 15,
    width: 375,
    backgroundColor: Color.textWhite,
  },
  frameChild: {
    height: 42,
    alignSelf: "stretch",
  },
  frameItem: {
    height: 16,
    backgroundColor: Color.neutral3F5F5F5,
    borderRadius: Border.br_base,
  },
  notiInApp14: {
    zIndex: 16,
    width: 375,
    backgroundColor: Color.textWhite,
  },
  scrollbar: {
    borderRadius: Border.br_9xs_5,
    backgroundColor: Color.neutral6BFBFBF,
    borderColor: Color.colorGray_1200,
    width: 9,
    height: 260,
    borderWidth: 1,
    borderStyle: "solid",
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
    left: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  backgroundIcon: {
    width: 534,
    height: 1101,
    top: 0,
    display: "none",
    left: 0,
    position: "absolute",
  },
  nguynKhnhHuynContainer12: {
    color: Color.characterBlack85,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    alignSelf: "stretch",
    textAlign: "left",
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
    alignItems: "flex-end",
    display: "flex",
    width: 299,
    fontFamily: FontFamily.defaultRegularCallout,
    fontWeight: "700",
    fontSize: FontSize.text14Regular_size,
  },
  loremIpsumIs: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 19,
    color: Color.b35,
    width: 299,
    fontFamily: FontFamily.defaultRegularCallout,
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
    position: "absolute",
  },
  line: {
    marginLeft: -67.5,
    bottom: 11,
    width: 135,
    height: 5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    left: "50%",
    position: "absolute",
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
    textAlign: "center",
    color: Color.textSecondary,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    marginTop: 4,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
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
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    color: Color.brandPrimary,
    marginTop: 4,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  tabBarParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  homeIndicator: {
    marginLeft: -66.5,
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  tabBar: {
    borderTopWidth: 0.5,
    height: 84,
    justifyContent: "space-between",
    bottom: 0,
    right: 0,
    width: 375,
    position: "absolute",
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
    height: 13,
  },
  statusbarIphone13: {
    height: 47,
    width: 375,
    overflow: "hidden",
  },
  leftIcon: {
    zIndex: 0,
    overflow: "hidden",
  },
  title3: {
    textAlign: "center",
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "600",
    letterSpacing: 0,
  },
  title2: {
    justifyContent: "center",
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
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
    zIndex: 3,
    overflow: "hidden",
  },
  titlePage: {
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
  },
  socialIcon: {
    width: 20,
    height: 20,
    borderRadius: Border.br_base,
    display: "none",
  },
  label7: {
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    marginLeft: 8,
    color: Color.textPrimary,
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
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    textAlign: "center",
    color: Color.brandPrimary,
    marginLeft: 8,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    marginLeft: -187.5,
    left: "50%",
    top: 0,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  notisettingluThayIChild: {
    opacity: 0.4,
    backgroundColor: Color.black,
    marginLeft: -187.5,
    top: 0,
    width: 375,
    height: 812,
  },
  title4: {
    maxWidth: 260,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    overflow: "hidden",
    width: "100%",
  },
  titleFrame: {
    maxWidth: 295,
    zIndex: 1,
    alignItems: "center",
    flex: 1,
  },
  iconsetplaceholder: {
    display: "none",
  },
  text3: {
    marginLeft: 4,
    color: Color.brandPrimary,
    textAlign: "left",
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  iconsetplaceholder1: {
    marginLeft: 4,
    display: "none",
  },
  button: {
    borderRadius: Border.br_9xs,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    justifyContent: "flex-end",
    top: 20,
    right: 16,
    display: "none",
    zIndex: 2,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  closeIcon: {
    top: 20,
    right: 16,
    width: 24,
    height: 24,
    zIndex: 3,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  actionSheetheader: {
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderColor: Color.divider,
    borderBottomWidth: 1,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_5xs,
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  separator362: {
    backgroundColor: Color.cloudDark,
    display: "none",
  },
  mThanhThng: {
    lineHeight: 24,
    fontSize: FontSize.calloutRegular_size,
    color: Color.characterBlack85,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  switchNobdefaultChild: {
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  switchNobdefault: {
    width: 18,
    height: 18,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 35, 11, 0.2)",
    borderRadius: Border.br_58xl,
  },
  switch: {
    width: 44,
    padding: Padding.p_11xs,
    justifyContent: "flex-end",
    height: 22,
    borderRadius: Border.br_base,
    backgroundColor: Color.brandPrimary,
    alignItems: "center",
    flexDirection: "row",
  },
  mThanhThngBoParent: {
    justifyContent: "space-between",
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  switchNobdefault1: {
    width: 18,
    height: 18,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 35, 11, 0.2)",
    borderRadius: Border.br_58xl,
  },
  nhnThngBoParent: {
    marginTop: 16,
    justifyContent: "space-between",
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  title5: {
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  titleParent: {
    paddingTop: Padding.p_11xs,
    flex: 1,
  },
  switchNobdefault2: {
    width: 16,
    height: 16,
  },
  switch2: {
    marginLeft: 16,
  },
  componentSettingNoti: {
    flexDirection: "row",
  },
  helperText1: {
    display: "none",
  },
  switchNobdefault3: {
    width: 16,
    height: 16,
  },
  switch3: {
    marginLeft: 16,
  },
  componentSettingNoti1: {
    marginTop: 16,
    flexDirection: "row",
  },
  separator360: {
    backgroundColor: Color.textGrayF3F4F6,
    marginTop: 16,
  },
  notiSettingIcon: {
    width: 16,
    height: 16,
  },
  bnhLunFacebook: {
    marginLeft: 6,
    textAlign: "center",
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    letterSpacing: 0,
  },
  switchNobdefault4: {
    width: 16,
    height: 16,
  },
  componentSettingNoti2: {
    marginTop: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  switchNobdefault5: {
    width: 16,
    height: 16,
  },
  switchNobdefault6: {
    width: 16,
    height: 16,
  },
  switchNobdefault7: {
    width: 16,
    height: 16,
  },
  componentSettingNotiParent: {
    alignSelf: "stretch",
  },
  switchNobdefault8: {
    width: 16,
    height: 16,
  },
  switchNobdefault9: {
    width: 16,
    height: 16,
  },
  switchNobdefault10: {
    width: 16,
    height: 16,
  },
  switchNobdefault11: {
    width: 16,
    height: 16,
  },
  componentSettingNoti9: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  switchNobdefault12: {
    width: 16,
    height: 16,
  },
  switchNobdefault13: {
    width: 16,
    height: 16,
  },
  frameContainer: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  frameGroup: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  notisettingdefault: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  text4: {
    color: Color.textPrimary,
  },
  iconsetplaceholder3: {
    display: "none",
    marginLeft: 8,
  },
  button1: {
    height: 41,
    borderColor: Color.gray4D9D9D9,
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
    borderWidth: 1,
    display: "none",
  },
  text5: {
    color: Color.textWhite,
  },
  button2: {
    height: 40,
    marginLeft: 16,
    backgroundColor: Color.brandPrimary,
  },
  buttonParent: {
    padding: Padding.p_base,
    justifyContent: "center",
    width: 375,
    alignItems: "center",
    flexDirection: "row",
  },
  keycontainerShadowBox1: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.textWhite,
  },
  letter: {
    width: 32,
  },
  key: {
    right: 337,
    top: 0,
    height: 42,
    left: 0,
    position: "absolute",
  },
  letter1: {
    width: 31,
  },
  key1: {
    right: 300,
    left: 38,
    top: 0,
    height: 42,
    position: "absolute",
  },
  key2: {
    left: 75,
  },
  key3: {
    left: 113,
  },
  key4: {
    left: 150,
  },
  key5: {
    left: 188,
  },
  key6: {
    right: 113,
    left: 225,
    top: 0,
    height: 42,
    position: "absolute",
  },
  key7: {
    left: 262,
  },
  key8: {
    left: 300,
  },
  key9: {
    left: 337,
    right: 0,
    top: 0,
    height: 42,
    position: "absolute",
  },
  topRow: {
    right: 0,
    top: 0,
    height: 42,
    left: 0,
    position: "absolute",
  },
  key10: {
    right: 299,
    top: 0,
    height: 42,
    left: 0,
    position: "absolute",
  },
  key11: {
    left: 38,
  },
  key12: {
    left: 75,
  },
  key13: {
    left: 112,
  },
  key14: {
    left: 150,
  },
  key15: {
    right: 112,
    left: 187,
    top: 0,
    height: 42,
    position: "absolute",
  },
  key16: {
    left: 225,
  },
  key17: {
    left: 262,
  },
  key18: {
    left: 299,
    right: 0,
    top: 0,
    height: 42,
    position: "absolute",
  },
  middleRow: {
    top: 54,
    right: 19,
    left: 19,
    height: 42,
    position: "absolute",
  },
  key19: {
    right: 222,
    top: 0,
    height: 42,
    left: 0,
    position: "absolute",
  },
  letter20: {
    width: 30,
  },
  key20: {
    right: 186,
    left: 37,
    top: 0,
    height: 42,
    position: "absolute",
  },
  key21: {
    right: 149,
    left: 73,
    top: 0,
    height: 42,
    position: "absolute",
  },
  letter22: {
    width: 33,
  },
  key22: {
    right: 110,
    left: 110,
    top: 0,
    height: 42,
    position: "absolute",
  },
  key23: {
    right: 74,
    left: 149,
    top: 0,
    height: 42,
    position: "absolute",
  },
  key24: {
    right: 37,
    left: 185,
    top: 0,
    height: 42,
    position: "absolute",
  },
  key25: {
    left: 222,
    right: 0,
    top: 0,
    height: 42,
    position: "absolute",
  },
  keys1: {
    right: 58,
    left: 58,
    top: 0,
    height: 42,
    position: "absolute",
  },
  keyIcon: {
    left: 0,
  },
  keyIcon1: {
    right: 0,
  },
  bottomRow: {
    top: 108,
    right: 0,
    height: 42,
    left: 0,
    position: "absolute",
  },
  keys: {
    top: 8,
    height: 150,
  },
  keycontainerShadowBox: {
    backgroundColor: Color.colorDarkgray_100,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  letter26: {
    width: 91,
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    width: 175,
  },
  key27: {
    marginLeft: 6,
    height: 42,
    flex: 1,
  },
  key28: {
    width: 91,
    marginLeft: 6,
    height: 42,
  },
  bottomRow1: {
    top: 170,
    flexDirection: "row",
  },
  iconEmoji: {
    height: 27,
    width: 27,
  },
  iconDictation: {
    width: 19,
    height: 28,
  },
  emojiDictation: {
    top: 235,
    right: 31,
    left: 31,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
  },
  homeindicator1: {
    height: 34,
    bottom: 0,
    right: 0,
  },
  alphabetickeyboard: {
    backgroundColor: Color.colorLightgray_100,
    height: 278,
    display: "none",
    width: 375,
    overflow: "hidden",
  },
  homeindicator2: {
    height: 34,
    width: 375,
  },
  actionSheetfooter: {
    minHeight: 34,
    backgroundColor: Color.textWhite,
  },
  actionSheet: {
    height: 752,
    minHeight: 240,
    maxHeight: 752,
  },
  notisetting: {
    bottom: 0,
  },
  notisettingluThayI: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default NotiSettingLuThayI;
