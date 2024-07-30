import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../../GlobalStyles";

const ListRoomWebsite = () => {
  return (
    <View style={styles.listRoomWebsite}>
      <View style={[styles.header3Parent, styles.tabBarPosition]}>
        <View style={styles.header3}>
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
            <View style={[styles.alert, styles.pageSpaceBlock]}>
              <Image
                style={styles.validateIcon}
                resizeMode="cover"
                source={require("../../assets/validate1.png")}
              />
              <Text style={styles.description}>Không có kết nối internet</Text>
              <Image
                style={styles.closeIcon}
                resizeMode="cover"
                source={require("../../assets/23-close.png")}
              />
            </View>
            <View style={[styles.titlePage, styles.pageSpaceBlock]}>
              <Image
                style={[styles.leftIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../../assets/27-left1.png")}
              />
              <View style={styles.title}>
                <Text style={[styles.title1, styles.luTypo]}>Tin nhắn</Text>
              </View>
              <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
              <Image
                style={[styles.filterIcon, styles.luPosition]}
                resizeMode="cover"
                source={require("../../assets/filter1.png")}
              />
            </View>
            <View style={styles.tabControl}>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon}
                  resizeMode="cover"
                  source={require("../../assets/social15.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Tất cả</Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.textTypo]}>44</Text>
                </View>
              </View>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon1}
                  resizeMode="cover"
                  source={require("../../assets/social15.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Messenger</Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.textTypo]}>11</Text>
                </View>
              </View>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon2}
                  resizeMode="cover"
                  source={require("../../assets/social11.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Zalo</Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>7</Text>
                </View>
              </View>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon1}
                  resizeMode="cover"
                  source={require("../../assets/social15.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Fchat</Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>1</Text>
                </View>
              </View>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon1}
                  resizeMode="cover"
                  source={require("../../assets/social3.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Faceboook</Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab5, styles.tabSpaceBlock]}>
                <Image
                  style={styles.socialIcon1}
                  resizeMode="cover"
                  source={require("../../assets/social4.png")}
                />
                <Text style={[styles.label5, styles.label5Typo]}>Website</Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.textTypo]}>16</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.pageParent, styles.listRoomSpaceBlock]}>
            <View style={styles.page}>
              <View style={styles.pageInner}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-18793.png")}
                  />
                  <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                    <Image
                      style={[styles.groupItem, styles.groupLayout]}
                      resizeMode="cover"
                      source={require("../../assets/rectangle-18787.png")}
                    />
                    <View style={[styles.groupInner, styles.groupPosition]} />
                    <Text style={[styles.text1, styles.textTypo]}>+2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameParent}>
                <View style={styles.ttCTrangWrapper}>
                  <Text style={[styles.ttCTrang, styles.ttCTrangTypo]}>
                    Tất cả trang
                  </Text>
                </View>
                <Image
                  style={styles.frameChildLayout}
                  resizeMode="cover"
                  source={require("../../assets/frame-34372.png")}
                />
              </View>
            </View>
            <View style={[styles.filter, styles.filterLayout]}>
              <Image
                style={[styles.searchIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../../assets/1-search.png")}
              />
              <View style={[styles.badge6, styles.badgeLayout]}>
                <Text style={styles.text2}>3</Text>
              </View>
            </View>
            <View style={styles.filterLayout}>
              <Image
                style={[styles.searchIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../../assets/12-filter.png")}
              />
              <View style={[styles.badge7, styles.badgeLayout]}>
                <Text style={styles.text2}>3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.listRoomSpaceBlock}>
          <View style={styles.sync}>
            <View style={styles.page}>
              <Image
                style={styles.syncIcon}
                resizeMode="cover"
                source={require("../../assets/sync.png")}
              />
              <Text style={styles.ngBY}>Đồng bộ đầy đủ tin nhắn</Text>
            </View>
            <Text style={[styles.label6, styles.luTypo]}>Đồng bộ</Text>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavt}>
              <View style={[styles.avt, styles.avtPosition]}>
                <Text style={[styles.k, styles.kLayout]}>2</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.ttCTrangTypo]}>
                      206.96.186.211
                    </Text>
                    <Image
                      style={styles.statusIcon}
                      resizeMode="cover"
                      source={require("../../assets/status.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/assign-user.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/alarmoutline.png")}
                    />
                  </View>
                  <View style={styles.timerParent}>
                    <View style={styles.timer}>
                      <Text style={[styles.text4, styles.textTypo]}>13:02</Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type1.png")}
                    />
                  </View>
                </View>
                <View style={styles.page1}>
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
                  <Text style={[styles.sccService, styles.number6Typo]}>
                    https://fptcore.com
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.lastFlexBox]}>
                <View style={[styles.purple, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redBg]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.tagFlexBox1]}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.lastFlexBox]}>
                <Text
                  style={[styles.tVnGip, styles.label5Typo]}
                  numberOfLines={1}
                >
                  Tư vấn giúp mình
                </Text>
                <View style={[styles.badge8, styles.badgeSpaceBlock]}>
                  <Text style={[styles.number6, styles.number6Typo]}>1</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavt}>
              <View style={[styles.avt, styles.avtPosition]}>
                <Text style={[styles.k, styles.kLayout]}>1</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.ttCTrangTypo]}>
                      19.10.17.89
                    </Text>
                    <Image
                      style={styles.statusIcon}
                      resizeMode="cover"
                      source={require("../../assets/status.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/assign-user.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/alarmoutline.png")}
                    />
                  </View>
                  <View style={styles.timerParent}>
                    <View style={styles.timer}>
                      <Text style={[styles.text4, styles.textTypo]}>13:01</Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type1.png")}
                    />
                  </View>
                </View>
                <View style={styles.page1}>
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
                  <Text style={[styles.sccService, styles.number6Typo]}>
                    Lắp đặt Camera FPT
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.lastFlexBox]}>
                <View style={[styles.purple1, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue1, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redBg]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox1}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.lastFlexBox]}>
                <Text
                  style={[styles.tVnGip, styles.label5Typo]}
                  numberOfLines={1}
                >
                  Chào Hạ Đỗ. Sản phẩm camera bên bạn còn không ạ?
                </Text>
                <View style={styles.badgeSpaceBlock}>
                  <Text style={[styles.number6, styles.number6Typo]}>16</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavt}>
              <View style={[styles.avt, styles.avtPosition]}>
                <Text style={[styles.k, styles.kLayout]}>6</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.ttCTrangTypo]}>
                      66.100.159.173
                    </Text>
                    <Image
                      style={styles.statusIcon}
                      resizeMode="cover"
                      source={require("../../assets/status.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/assign-user.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/alarmoutline.png")}
                    />
                  </View>
                  <View style={styles.timerParent}>
                    <View style={styles.timer}>
                      <Text style={[styles.text4, styles.textTypo]}>13:00</Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type1.png")}
                    />
                  </View>
                </View>
                <View style={styles.page1}>
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
                  <Text style={[styles.sccService, styles.number6Typo]}>
                    FPT Camera
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.lastFlexBox]}>
                <View style={[styles.purple, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan2, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue1, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red2, styles.redBg]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.tagFlexBox1]}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage2, styles.lastFlexBox]}>
                <Text style={styles.bnHnhNh} numberOfLines={1}>
                  Bạn: [Hình ảnh]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavt}>
              <View style={[styles.avt3, styles.avtPosition]}>
                <Text style={[styles.k, styles.kLayout]}>1</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.ttCTrangTypo]}>
                      154.214.144.116
                    </Text>
                    <Image
                      style={styles.statusIcon}
                      resizeMode="cover"
                      source={require("../../assets/status.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/assign-user.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/alarmoutline.png")}
                    />
                  </View>
                  <View style={styles.timerParent}>
                    <View style={styles.timer}>
                      <Text style={[styles.text4, styles.textTypo]}>12:58</Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type1.png")}
                    />
                  </View>
                </View>
                <View style={styles.page1}>
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
                  <Text style={[styles.sccService, styles.number6Typo]}>
                    https://fptcore.net
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.lastFlexBox]}>
                <View style={[styles.purple1, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue1, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redBg]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox1}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage2, styles.lastFlexBox]}>
                <Text style={styles.bnHnhNh} numberOfLines={1}>
                  Bạn: [Tệp đính kèm]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavt}>
              <View style={[styles.avt, styles.avtPosition]}>
                <Text style={[styles.k, styles.kLayout]}>1</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.ttCTrangTypo]}>
                      113.2.183.254
                    </Text>
                    <Image
                      style={styles.statusIcon}
                      resizeMode="cover"
                      source={require("../../assets/status2.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/assign-user.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/alarmoutline.png")}
                    />
                  </View>
                  <View style={styles.timerParent}>
                    <View style={styles.timer}>
                      <Text style={[styles.text4, styles.textTypo]}>12:49</Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type1.png")}
                    />
                  </View>
                </View>
                <View style={styles.page1}>
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
                  <Text style={[styles.sccService, styles.number6Typo]}>
                    https://fptcore.com
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.lastFlexBox]}>
                <View style={[styles.tag3, styles.tagFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.tag31, styles.greenSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.tag32, styles.tagFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage2, styles.lastFlexBox]}>
                <Text style={styles.bn}>Bạn:</Text>
                <Image
                  style={[styles.emojiIcon, styles.cyanSpaceBlock]}
                  resizeMode="cover"
                  source={require("../../assets/emoji34.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavt}>
              <View style={[styles.avt, styles.avtPosition]}>
                <Text style={[styles.k, styles.kLayout]}>9</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.ttCTrangTypo]}>
                      95.126.206.226
                    </Text>
                    <Image
                      style={styles.statusIcon}
                      resizeMode="cover"
                      source={require("../../assets/status.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/assign-user.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/alarmoutline.png")}
                    />
                  </View>
                  <View style={styles.timerParent}>
                    <View style={styles.timer}>
                      <Text style={[styles.text4, styles.textTypo]}>12:44</Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type1.png")}
                    />
                  </View>
                </View>
                <View style={styles.page1}>
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
                  <Text style={[styles.sccService, styles.number6Typo]}>
                    https://fptcore.net
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.lastFlexBox]}>
                <View style={[styles.purple1, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue1, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redBg]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox1}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.lastFlexBox]}>
                <Text style={styles.bnHnhNh} numberOfLines={1}>
                  Bạn: [Video]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavt}>
              <View style={[styles.avt, styles.avtPosition]}>
                <Text style={[styles.k, styles.kLayout]}>1</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.ttCTrangTypo]}>
                      118.100.254.148
                    </Text>
                    <Image
                      style={styles.statusIcon}
                      resizeMode="cover"
                      source={require("../../assets/status.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/assign-user.png")}
                    />
                    <Image
                      style={[styles.assignUserIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/alarmoutline.png")}
                    />
                  </View>
                  <View style={styles.timerParent}>
                    <View style={styles.timer}>
                      <Text style={[styles.text4, styles.textTypo]}>12:32</Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type1.png")}
                    />
                  </View>
                </View>
                <View style={styles.page1}>
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
                  <Text style={[styles.sccService, styles.number6Typo]}>
                    https://fptcore.net
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.lastFlexBox]}>
                <View style={[styles.purple1, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue1, styles.cyanSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redBg]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox1}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.lastFlexBox]}>
                <Text style={styles.bnHnhNh} numberOfLines={1}>
                  Bạn: [Video]
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon24.png")}
            />
            <Text style={[styles.label52, styles.labelTypo]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon20.png")}
            />
            <Text style={[styles.label52, styles.labelTypo]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon25.png")}
            />
            <Text style={[styles.label54, styles.labelTypo]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon15.png")}
            />
            <Text style={[styles.label52, styles.labelTypo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon26.png")}
            />
            <Text style={[styles.label52, styles.labelTypo]}>Khách hàng</Text>
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
  tabBarPosition: {
    left: "50%",
    marginLeft: -205,
    width: 375,
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
  pageSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  iconPosition: {
    zIndex: 0,
    overflow: "hidden",
  },
  luTypo: {
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
  labelTypo1: {
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 4,
    textAlign: "center",
  },
  textTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  tabSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.textWhite,
  },
  label5Typo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
  },
  listRoomSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  groupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupLayout1: {
    width: "87.5%",
    height: "87.5%",
  },
  groupPosition: {
    borderRadius: Border.br_9xs,
    left: "0%",
    top: "0%",
  },
  ttCTrangTypo: {
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  filterLayout: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_9xs,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 32,
  },
  badgeLayout: {
    borderWidth: 3,
    backgroundColor: Color.brandPrimary,
    borderRadius: Border.br_61xl,
    right: -3,
    top: -3,
    borderStyle: "solid",
    zIndex: 1,
    width: 20,
    height: 20,
    display: "none",
    position: "absolute",
  },
  avtPosition: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_4xs,
    backgroundColor: Color.tagGray100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  kLayout: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  number6Typo: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  lastFlexBox: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  redFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChildLayout: {
    width: 12,
    marginLeft: 8,
    height: 12,
  },
  cyanSpaceBlock: {
    marginLeft: 2,
    overflow: "hidden",
  },
  greenSpaceBlock: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  redBg: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
  },
  tagFlexBox1: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  badgeSpaceBlock: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_7xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  tagFlexBox: {
    height: 28,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  lineLayout: {
    height: 5,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  labelTypo: {
    lineHeight: 13,
    marginTop: 4,
    fontSize: FontSize.caption2Regular_size,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
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
    left: 0,
    fontFamily: FontFamily.defaultRegularCallout,
    color: Color.colorGray_200,
    height: 20,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    top: 1,
    width: 54,
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
    overflow: "hidden",
    width: 375,
  },
  validateIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  description: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  closeIcon: {
    marginLeft: 8,
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  alert: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    display: "none",
    alignSelf: "stretch",
  },
  leftIcon: {
    height: 24,
    width: 24,
    display: "none",
  },
  title1: {
    color: Color.textPrimary,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
  },
  title: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  lu: {
    zIndex: 2,
    textAlign: "right",
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
  },
  filterIcon: {
    zIndex: 3,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  titlePage: {
    paddingVertical: Padding.p_3xs,
    width: 375,
  },
  socialIcon: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
    display: "none",
  },
  label: {
    marginLeft: 4,
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    letterSpacing: 0,
  },
  number: {
    color: Color.textWhite,
    textAlign: "center",
  },
  badge: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  socialIcon1: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
  },
  socialIcon2: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  badge2: {
    width: 16,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  label5: {
    marginLeft: 4,
    fontSize: FontSize.subheadlineSemiBold_size,
    textAlign: "center",
    color: Color.brandPrimary,
  },
  tab5: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  tabControl: {
    justifyContent: "flex-end",
    flexDirection: "row",
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
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  groupChild: {
    right: "12.5%",
    bottom: "12.5%",
    borderRadius: Border.br_9xs,
    left: "0%",
    top: "0%",
    width: "87.5%",
    height: "87.5%",
  },
  groupItem: {
    borderRadius: Border.br_9xs,
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  groupInner: {
    backgroundColor: Color.colorGray_500,
    borderWidth: 1,
    borderColor: Color.textWhite,
    bottom: "0%",
    right: "0%",
    height: "100%",
    borderRadius: Border.br_9xs,
    width: "100%",
    borderStyle: "solid",
    position: "absolute",
  },
  text1: {
    top: "21.43%",
    left: "25%",
    color: Color.textWhite,
    textAlign: "center",
    position: "absolute",
  },
  rectangleGroup: {
    top: "12.5%",
    left: "12.5%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  rectangleParent: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  pageInner: {
    width: 32,
    height: 32,
  },
  ttCTrang: {
    lineHeight: 24,
  },
  ttCTrangWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  page: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  text2: {
    top: -1,
    left: 3,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.title1Bold,
    fontSize: FontSize.caption2Regular_size,
    color: Color.textWhite,
    textAlign: "left",
    position: "absolute",
  },
  badge6: {
    borderColor: Color.neutral3F5F5F5,
  },
  filter: {
    overflow: "hidden",
  },
  badge7: {
    borderColor: Color.textWhite,
  },
  pageParent: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  header3: {
    width: 375,
  },
  syncIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  ngBY: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    flex: 1,
  },
  label6: {
    marginLeft: 4,
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
  },
  sync: {
    backgroundColor: Color.backgroundSky,
    paddingVertical: Padding.p_7xs,
    height: 48,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "none",
    width: 375,
  },
  k: {
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    letterSpacing: 0,
  },
  avt: {
    borderRadius: Border.br_11xl,
  },
  socialIcon6: {
    height: "37.5%",
    width: "37.5%",
    top: "62.5%",
    left: "62.5%",
    bottom: "0%",
    right: "0%",
    borderRadius: Border.br_base,
  },
  roommessageavt: {
    width: 48,
    height: 48,
  },
  returnVisitorIcon: {
    display: "none",
  },
  dngKiuAnh: {
    marginLeft: 8,
    lineHeight: 20,
  },
  statusIcon: {
    width: 8,
    height: 8,
    marginLeft: 8,
  },
  assignUserIcon: {
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  text4: {
    color: Color.textSecondary,
    textAlign: "right",
  },
  timer: {
    flexDirection: "row",
  },
  iconMessageType: {
    marginLeft: 8,
  },
  timerParent: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  roomName: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconright: {
    width: 10,
    height: 10,
    display: "none",
    overflow: "hidden",
  },
  pageChild: {
    borderRadius: Border.br_11xs,
    marginLeft: 6,
  },
  sccService: {
    color: Color.blue,
    marginLeft: 6,
    textAlign: "left",
    flex: 1,
  },
  page1: {
    marginTop: 2,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  roomNameParent: {
    alignSelf: "stretch",
  },
  label7: {
    color: Color.textWhite,
    textAlign: "left",
  },
  closeIcon1: {
    display: "none",
    overflow: "hidden",
  },
  purple: {
    backgroundColor: Color.tagPurple500,
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
    display: "none",
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  yellow: {
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    display: "none",
  },
  blue: {
    backgroundColor: Color.tagBlue500,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  green: {
    display: "none",
    alignSelf: "stretch",
  },
  red: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    display: "none",
    overflow: "hidden",
  },
  xTag: {
    display: "none",
  },
  roomlistNhn: {
    display: "none",
  },
  tVnGip: {
    textAlign: "left",
    color: Color.textPrimary,
    fontSize: FontSize.text14Regular_size,
    height: 20,
    overflow: "hidden",
    flex: 1,
  },
  number6: {
    color: Color.textWhite,
    textAlign: "center",
  },
  badge8: {
    width: 20,
  },
  lastMessage: {
    alignItems: "center",
    display: "none",
  },
  content: {
    marginLeft: 8,
    flex: 1,
  },
  roomitem: {
    padding: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  purple1: {
    backgroundColor: Color.tagPurple500,
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
  },
  blue1: {
    backgroundColor: Color.tagBlue500,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    display: "none",
  },
  cyan2: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    display: "none",
  },
  red2: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  bnHnhNh: {
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    height: 20,
    overflow: "hidden",
    flex: 1,
  },
  lastMessage2: {
    alignItems: "center",
  },
  avt3: {
    borderRadius: Border.br_5xl,
  },
  tag3: {
    backgroundColor: Color.tagBlue500,
  },
  tag31: {
    height: 24,
  },
  tag32: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
  },
  bn: {
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  emojiIcon: {
    height: 16,
    width: 16,
  },
  header3Parent: {
    height: 757,
    width: 375,
    top: 0,
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
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  label52: {
    color: Color.textSecondary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  label54: {
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
    bottom: 0,
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 0.5,
    height: 84,
    justifyContent: "space-between",
    borderStyle: "solid",
    width: 375,
    backgroundColor: Color.textWhite,
  },
  listRoomWebsite: {
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default ListRoomWebsite;
