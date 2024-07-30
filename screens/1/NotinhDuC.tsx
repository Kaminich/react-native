import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, FontSize, Color, Padding, Border } from "../../GlobalStyles";

const NotinhDuC = () => {
  return (
    <View style={styles.notinhDuC}>
      <View style={[styles.noti, styles.notiPosition]}>
        <View style={styles.titleWrapper}>
          <View style={styles.title}>
            <Text style={[styles.label, styles.luTypo]}>Hôm nay</Text>
          </View>
        </View>
        <View style={[styles.notiInApp, styles.title2Position]}>
          <Image
            style={styles.maskGroupIcon}
            resizeMode="cover"
            source={require("../../assets/mask-group.png")}
          />
          <View style={styles.swipeActionParent}>
            <View style={styles.swipeAction}>
              <Image
                style={[styles.envelopeIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/envelope2.png")}
              />
              <Text style={[styles.label1, styles.numberClr]}>Đã đọc</Text>
            </View>
            <View style={styles.swipeAction1}>
              <Image
                style={[styles.envelopeIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../../assets/delete3.png")}
              />
              <Text style={[styles.label1, styles.numberClr]}>Xóa</Text>
            </View>
          </View>
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
              <Text style={styles.giTinNhn}>đã gửi tin nhắn mới đến bạn</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                vài giây trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              <Text style={styles.giTinNhn}>
                đã bình luận về ảnh trên trang{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                FPT Camera
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                1 phút trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              <Text style={styles.giTinNhn}>
                đã bình luận về bài viết trên trang{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                FPT Camera
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                20 phút trước
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
              <Text style={styles.giTinNhn}>Nhắc nhở:{` `}</Text>
              <Text
                style={[styles.fptCamera, styles.fptCameraTypo]}
              >{`Gửi thông tin sản phẩm `}</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              <Text style={styles.giTinNhn}>
                đã chỉ định chat với khách hàng
              </Text>
              <Text style={styles.fptCameraTypo}>
                {` `}
                <Text style={styles.nguynKhnhHuyn1}>{`Lê Trí `}</Text>
              </Text>
              <Text style={styles.giTinNhn}>cho bạn</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              <Text style={styles.giTinNhn}>
                Bạn vẫn chưa phản hồi khách hàng{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Tuấn Trinh
              </Text>
              <Text style={styles.giTinNhn}>{` `}</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              <Text style={styles.giTinNhn}>{`Bạn có feedback mới từ `}</Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Quect3
              </Text>
              <Text style={styles.giTinNhn}>
                {` `}và{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Minhpd11
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                20 phút trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              <Text style={styles.giTinNhn}>
                và 2 người khác đã nhắc đến bạn trong một bình luận
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
            <Text style={[styles.nguynKhnhHuyn6, styles.nguynContainerTypo]}>
              Bạn vừa bị mất kết nối với 2 trang Facebook. Vui lòng kết nối lại!
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              <Text style={styles.giTinNhn}>
                đã chỉ định chat với khách hàng
              </Text>
              <Text style={styles.fptCameraTypo}>
                {` `}
                <Text style={styles.nguynKhnhHuyn1}>Duy Mạnh</Text>
                {` `}
              </Text>
              <Text style={styles.giTinNhn}>cho bạn</Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                3 tiếng trước
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              style={[styles.settingIcon, styles.iconLayout]}
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
              <Text style={styles.giTinNhn}>
                {` `}đã cập nhật vai trò{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Admin
              </Text>
              <Text style={styles.giTinNhn}>
                {` `}
                {`cho bạn `}
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.viGiyTrc, styles.thTNgy1Position]}>
                Thứ Tư, ngày 12/04 09:35
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
            resizeMode="cover"
            source={require("../../assets/rectangle-1881.png")}
          />
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.title}>
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
            <Text style={[styles.nguynKhnhHuyn6, styles.nguynContainerTypo]}>
              Bạn vừa bị mất kết nối với 3 trang Zalo OA. Vui lòng kết nối lại!
            </Text>
            <View style={styles.time}>
              <Text style={[styles.thTNgy1, styles.thTNgy1Position]}>
                Thứ Tư, ngày 12/04 09:35
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
              <Text style={styles.giTinNhn}>
                Bạn vẫn chưa phản hồi khách hàng{` `}
              </Text>
              <Text style={[styles.fptCamera, styles.fptCameraTypo]}>
                Tuấn Trinh
              </Text>
              <Text style={styles.giTinNhn}>
                {` `}
                {`và 3 khách hàng khác `}
              </Text>
            </Text>
            <View style={styles.time}>
              <Text style={[styles.thTNgy1, styles.thTNgy1Position]}>
                Thứ Tư, ngày 12/09/2023 09:35
              </Text>
            </View>
          </View>
          <Image
            style={[styles.notiInAppChild, styles.notiLayout]}
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
        source={require("../../assets/background2.png")}
      />
      <View style={[styles.notiLine, styles.notiSpaceBlock]}>
        <Image
          style={styles.notiIcon}
          resizeMode="cover"
          source={require("../../assets/notiicon21.png")}
        />
        <View style={styles.nguynKhnhHuynBnhLuParent}>
          <Text
            style={[styles.nguynKhnhHuynContainer11, styles.nguynContainerTypo]}
          >
            <Text style={styles.giTinNhn}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.fptCameraTypo}>QueCT3</Text>
          </Text>
          <Text style={styles.phtTrc3}>Thứ Tư, ngày 12/04 15:11</Text>
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
            style={[styles.nguynKhnhHuynContainer11, styles.nguynContainerTypo]}
          >
            <Text style={styles.giTinNhn}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.fptCameraTypo}>QueCT3</Text>
            <Text style={styles.giTinNhn}>{` và `}</Text>
            <Text style={styles.fptCameraTypo}>HaDT53</Text>
          </Text>
          <Text style={styles.phtTrc3}>Thứ Tư, ngày 12/04 15:23</Text>
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
            style={[styles.nguynKhnhHuynContainer11, styles.nguynContainerTypo]}
          >
            <Text style={styles.giTinNhn}>{`Bạn có feedback mới từ `}</Text>
            <Text style={styles.fptCameraTypo}>QueCT3</Text>
            <Text style={styles.giTinNhn}> và 3 người khác</Text>
          </Text>
          <Text style={styles.phtTrc3}>Thứ Tư, ngày 12/04 17:00</Text>
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
            style={[styles.nguynKhnhHuynContainer11, styles.nguynContainerTypo]}
          >
            <Text style={styles.fptCameraTypo}>{`Thu Hương `}</Text>
            <Text style={styles.giTinNhn}>đã gửi tin nhắn mới đến bạn</Text>
          </Text>
          <Text style={styles.phtTrc3}>Thứ Năm, ngày 13/04 11:12</Text>
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
            style={[styles.nguynKhnhHuynContainer11, styles.nguynContainerTypo]}
          >
            <Text style={styles.fptCameraTypo}>{`Lê Trí `}</Text>
            <Text style={styles.giTinNhn}>đã gửi tin nhắn mới đến bạn</Text>
          </Text>
          <Text style={styles.phtTrc3}>Thứ Bảy, ngày 25/03 12:31</Text>
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
            style={[styles.nguynKhnhHuynContainer11, styles.nguynContainerTypo]}
          >
            <Text
              style={styles.giTinNhn}
            >{`Bạn vừa bị mất kết nối với trang `}</Text>
            <Text style={styles.fptCameraTypo}>FPT Camera Hà Nội.</Text>
            <Text style={styles.giTinNhn}> Vui lòng kết nối lại!</Text>
          </Text>
          <Text style={styles.phtTrc3}>5 phút trước</Text>
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
            style={[styles.vectorIcon, styles.iconLayout]}
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
            <Text style={[styles.label4, styles.labelTypo1]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon27.png")}
            />
            <Text style={[styles.label4, styles.labelTypo1]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon28.png")}
            />
            <Text style={[styles.label4, styles.labelTypo1]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <View style={styles.menuIconLayout}>
              <Image
                style={[styles.menuIcon4, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/menu-icon29.png")}
              />
              <View style={[styles.badge, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.numberClr]}>12</Text>
              </View>
            </View>
            <Text style={[styles.label7, styles.labelTypo1]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={[styles.menuIcon, styles.menuIconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={[styles.label4, styles.labelTypo1]}>Khách hàng</Text>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.lineLayout]} />
        </View>
      </View>
      <View style={[styles.headerNotiTtC, styles.iconPosition]}>
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
            style={[styles.leftIcon, styles.iconLayout1]}
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
            <View style={[styles.tab, styles.tabFlexBox]}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social22.png")}
              />
              <Text style={[styles.label9, styles.labelTypo]}>Tất cả</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number1, styles.numberClr]}>12</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social22.png")}
              />
              <Text style={[styles.label10, styles.labelTypo]}>Chưa đọc</Text>
              <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                <Text style={[styles.number1, styles.numberClr]}>12</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social22.png")}
              />
              <Text
                style={[styles.label10, styles.labelTypo]}
              >{`Đã đọc `}</Text>
              <View style={[styles.badge3, styles.badgeSpaceBlock]}>
                <Text style={[styles.number1, styles.numberClr]}>4</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  notiPosition: {
    left: 0,
    position: "absolute",
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
  iconLayout1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  numberClr: {
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
  },
  notiSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
  },
  nguynContainerTypo: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    alignSelf: "stretch",
    textAlign: "left",
  },
  thTNgy1Position: {
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    textAlign: "left",
    position: "absolute",
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
  iconLayout: {
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
    backgroundColor: Color.black,
    borderRadius: Border.br_81xl,
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
  labelTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    textAlign: "center",
    lineHeight: 20,
    marginLeft: 8,
    letterSpacing: 0,
  },
  label: {
    textAlign: "left",
    color: Color.textPrimary,
  },
  title: {
    width: 343,
    alignItems: "center",
    flexDirection: "row",
  },
  titleWrapper: {
    zIndex: 0,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  maskGroupIcon: {
    width: 199,
    height: 80,
  },
  envelopeIcon: {
    height: 24,
  },
  label1: {
    marginTop: 4,
    lineHeight: 16,
    color: Color.textWhite,
    fontSize: FontSize.caption1Regular_size,
    textAlign: "left",
  },
  swipeAction: {
    paddingVertical: Padding.p_8xl,
    paddingHorizontal: Padding.p_lg,
    justifyContent: "center",
    backgroundColor: Color.brandPrimary,
    alignSelf: "stretch",
    zIndex: 1,
    alignItems: "center",
    flex: 1,
  },
  swipeAction1: {
    borderTopRightRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    backgroundColor: Color.otherRed,
    paddingVertical: Padding.p_8xl,
    paddingHorizontal: Padding.p_lg,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    zIndex: 0,
    flex: 1,
  },
  swipeActionParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  notiInApp: {
    paddingRight: Padding.p_base,
    height: 80,
    width: 375,
  },
  notiIcon: {
    width: 32,
    height: 32,
  },
  nguynKhnhHuyn1: {
    letterSpacing: 0,
  },
  giTinNhn: {
    fontFamily: FontFamily.text14Regular,
  },
  nguynKhnhHuynContainer: {
    color: Color.textPrimary,
  },
  viGiyTrc: {
    color: Color.brandPrimary,
  },
  time: {
    height: 18,
    width: 77,
    marginTop: 4,
  },
  nguynKhnhHuynBnhLuParent: {
    marginLeft: 8,
    flex: 1,
  },
  notiInAppChild: {
    display: "none",
  },
  notiInApp1: {
    zIndex: 2,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  fptCamera: {
    letterSpacing: 0,
  },
  notiInApp2: {
    zIndex: 3,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  notiInApp3: {
    zIndex: 4,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  notiInApp4: {
    zIndex: 5,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  notiInApp5: {
    zIndex: 6,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  notiInApp6: {
    zIndex: 7,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  notiInApp7: {
    zIndex: 8,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  notiInApp8: {
    zIndex: 9,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  nguynKhnhHuyn6: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  notiInApp9: {
    zIndex: 10,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  notiInApp10: {
    zIndex: 11,
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  notiIconChild: {
    backgroundColor: Color.brandPrimary,
    borderRadius: Border.br_61xl,
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
    backgroundColor: Color.backgroundBlue,
    paddingVertical: Padding.p_5xs,
    width: 375,
  },
  titleContainer: {
    zIndex: 13,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
  },
  thTNgy1: {
    color: Color.darkGray450616161,
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
    top: 135,
    backgroundColor: Color.textWhite,
  },
  backgroundIcon: {
    width: 534,
    height: 1101,
    top: 0,
    display: "none",
  },
  nguynKhnhHuynContainer11: {
    color: Color.characterBlack85,
  },
  phtTrc3: {
    lineHeight: 18,
    color: Color.characterBlack45,
    marginTop: 4,
    fontFamily: FontFamily.text14Regular,
    fontSize: FontSize.caption1Regular_size,
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
    position: "absolute",
  },
  line: {
    marginLeft: -67.5,
    bottom: 11,
    width: 135,
  },
  iphoneXsHomeIndicator: {
    display: "none",
    height: 24,
    width: 375,
  },
  menuIcon: {
    overflow: "hidden",
  },
  label4: {
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
    textAlign: "center",
    letterSpacing: 0,
  },
  badge: {
    height: "69.09%",
    width: "95.45%",
    top: "-19.55%",
    right: "-32.73%",
    bottom: "50.45%",
    left: "37.27%",
    borderColor: Color.textWhite,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    backgroundColor: Color.otherRed,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  label7: {
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
    height: 24,
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
    color: Color.brandPrimary,
    zIndex: 2,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
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
    width: 375,
    flexDirection: "row",
  },
  socialIcon: {
    width: 20,
    height: 20,
    borderRadius: Border.br_base,
    display: "none",
  },
  label9: {
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    color: Color.brandPrimary,
  },
  number1: {
    textAlign: "center",
    lineHeight: 16,
    color: Color.textWhite,
    fontSize: FontSize.caption1Regular_size,
  },
  badge1: {
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    backgroundColor: Color.otherRed,
    justifyContent: "center",
    overflow: "hidden",
    marginLeft: 8,
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  label10: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  badge3: {
    width: 16,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    backgroundColor: Color.otherRed,
    justifyContent: "center",
    overflow: "hidden",
    display: "none",
    marginLeft: 8,
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
    marginLeft: -187.5,
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
  notinhDuC: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default NotinhDuC;
