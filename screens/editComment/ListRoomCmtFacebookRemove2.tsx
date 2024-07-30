import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Border, FontSize, Color } from "../../GlobalStyles";

const ListRoomCmtFacebookRemove2 = () => {
  return (
    <View style={styles.listRoomCmtFacebookRemove}>
      <View style={styles.header3Parent}>
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
                style={[styles.validateIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../../assets/validate1.png")}
              />
              <Text style={styles.description}>Không có kết nối internet</Text>
              <Image
                style={[styles.closeIcon, styles.iconLayout2]}
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
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Image
                  style={[styles.socialIcon, styles.socialIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/social10.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Tất cả</Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.textTypo]}>44</Text>
                </View>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Image
                  style={styles.socialIconLayout}
                  resizeMode="cover"
                  source={require("../../assets/social10.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Messenger</Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.textTypo]}>11</Text>
                </View>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Image
                  style={[styles.socialIcon2, styles.socialIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/social14.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Zalo</Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>7</Text>
                </View>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Image
                  style={styles.socialIconLayout}
                  resizeMode="cover"
                  source={require("../../assets/social17.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Fchat</Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab4, styles.tabBorder]}>
                <Image
                  style={styles.socialIconLayout}
                  resizeMode="cover"
                  source={require("../../assets/social3.png")}
                />
                <Text style={[styles.label4, styles.choHTypo]}>Faceboook</Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.textTypo]}>16</Text>
                </View>
              </View>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Image
                  style={styles.socialIconLayout}
                  resizeMode="cover"
                  source={require("../../assets/social16.png")}
                />
                <Text style={[styles.label, styles.labelTypo1]}>Website</Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>1</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.pageParent, styles.pageSpaceBlock]}>
            <View style={styles.page}>
              <View style={styles.pageInner}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout]}
                    resizeMode="cover"
                    source={require("../../assets/rectangle-1879.png")}
                  />
                  <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                    <Image
                      style={[styles.groupItem, styles.groupLayout]}
                      resizeMode="cover"
                      source={require("../../assets/rectangle-1878.png")}
                    />
                    <View style={styles.groupInner} />
                    <Text style={[styles.text1, styles.textTypo]}>+2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameParent}>
                <View style={styles.ttCTrangWrapper}>
                  <Text style={[styles.ttCTrang, styles.dngTypo]}>
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
        <View style={styles.listRoom}>
          <View style={styles.sync}>
            <View style={styles.page}>
              <Image
                style={[styles.syncIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../../assets/sync.png")}
              />
              <Text style={styles.ngBY}>Đồng bộ đầy đủ tin nhắn</Text>
            </View>
            <Text style={[styles.label6, styles.luTypo]}>Đồng bộ</Text>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt9.png")}
            />
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.dngTypo]}>
                      Lê Minh Trí
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
                    source={require("../../assets/rectangle-18781.png")}
                  />
                  <Text
                    style={[styles.sccService, styles.number6Typo]}
                  >{`SCC - Service Command Center `}</Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.roomlistNhnFlexBox]}>
                <View style={[styles.purple, styles.purpleFlexBox]}>
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
                <View style={styles.blueFlexBox}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.tagFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistNhnFlexBox]}>
                <Text style={styles.tVnGip} numberOfLines={1}>
                  Bình luận đã bị xóa
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt10.png")}
            />
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh, styles.dngTypo]}>
                      Đỗ Thị Hạ
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
                      <Text style={[styles.text4, styles.textTypo]}>08:08</Text>
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
              <View style={[styles.roomlistNhn, styles.roomlistNhnFlexBox]}>
                <View style={[styles.purple1, styles.purpleFlexBox]}>
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
                <View style={[styles.blue1, styles.blueFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistNhnFlexBox]}>
                <Text style={[styles.choH, styles.choHTypo]} numberOfLines={1}>
                  Trí Lê: Sản phẩm camera bên bạn còn không ạ?
                </Text>
                <View style={styles.badge8}>
                  <Text style={[styles.number6, styles.number6Typo]}>2</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt11.png")}
            />
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh2, styles.dngTypo]}>
                      Dương Kiều Anh
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
                      <Text style={[styles.text4, styles.textTypo]}>
                        06/06/2022
                      </Text>
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
              <View style={[styles.roomlistNhn, styles.roomlistNhnFlexBox]}>
                <View style={[styles.purple, styles.purpleFlexBox]}>
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
                <View style={[styles.blue1, styles.blueFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.redFlexBox}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.tagFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistNhnFlexBox]}>
                <Text style={styles.tVnGip} numberOfLines={1}>
                  [Tệp đính kèm]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt9.png")}
            />
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh2, styles.dngTypo]}>
                      Phạm Đức Minh
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
                      <Text style={[styles.text4, styles.textTypo]}>
                        04/06/2022
                      </Text>
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
                    https://fptcore.com
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.roomlistNhnFlexBox]}>
                <View style={[styles.purple1, styles.purpleFlexBox]}>
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
                <View style={[styles.blue1, styles.blueFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistNhnFlexBox]}>
                <Text style={styles.tVnGip} numberOfLines={1}>
                  [Hình ảnh]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt9.png")}
            />
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh2, styles.dngTypo]}>
                      112.34.56.391.12
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
                      <Text style={[styles.text4, styles.textTypo]}>
                        03/06/2022
                      </Text>
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
                    https://fptcore.com
                  </Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.roomlistNhnFlexBox]}>
                <View style={[styles.purple1, styles.purpleFlexBox]}>
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
                <View style={[styles.blue1, styles.blueFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.greenFlexBox}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistNhnFlexBox]}>
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
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt12.png")}
            />
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh2, styles.dngTypo]}>
                      Trương Tấn Sang
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
                      <Text style={[styles.text4, styles.textTypo]}>
                        31/05/2022
                      </Text>
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
                  <Text
                    style={[styles.sccService, styles.number6Typo]}
                  >{`SCC - Service Command Center `}</Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.roomlistNhnFlexBox]}>
                <View style={[styles.purple1, styles.purpleFlexBox]}>
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
                <View style={[styles.blue1, styles.blueFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistNhnFlexBox]}>
                <Text style={styles.tVnGip} numberOfLines={1}>
                  Bạn: [Video]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt12.png")}
            />
            <View style={styles.content}>
              <View style={styles.roomNameParent}>
                <View style={styles.roomName}>
                  <View style={styles.page}>
                    <Image
                      style={[styles.returnVisitorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/return-visitor.png")}
                    />
                    <Text style={[styles.dngKiuAnh2, styles.dngTypo]}>
                      Trương Tấn Sang
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
                      <Text style={[styles.text4, styles.textTypo]}>
                        06/05/2022
                      </Text>
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
                  <Text
                    style={[styles.sccService, styles.number6Typo]}
                  >{`SCC - Service Command Center `}</Text>
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.roomlistNhnFlexBox]}>
                <View style={[styles.purple1, styles.purpleFlexBox]}>
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
                <View style={[styles.blue1, styles.blueFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.greenFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagFlexBox}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistNhnFlexBox]}>
                <Text style={styles.tVnGip} numberOfLines={1}>
                  Bạn: [Video]
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBorder]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon14.png")}
            />
            <Text style={[styles.label56, styles.labelTypo]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon19.png")}
            />
            <Text style={[styles.label56, styles.labelTypo]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon12.png")}
            />
            <Text style={[styles.label58, styles.labelTypo]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon15.png")}
            />
            <Text style={[styles.label56, styles.labelTypo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon16.png")}
            />
            <Text style={[styles.label56, styles.labelTypo]}>Khách hàng</Text>
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
  iconLayout2: {
    width: 20,
    height: 20,
  },
  iconPosition: {
    zIndex: 0,
    overflow: "hidden",
  },
  luTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
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
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  socialIconLayout: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
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
  tabBorder: {
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  choHTypo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
  },
  groupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_9xs,
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout1: {
    width: "87.5%",
    height: "87.5%",
  },
  dngTypo: {
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    color: Color.textPrimary,
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
    position: "absolute",
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
  roomlistNhnFlexBox: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  purpleFlexBox: {
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
  greenFlexBox: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  redFlexBox: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  tagFlexBox: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  blueFlexBox: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
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
  validateIcon: {
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
    fontFamily: FontFamily.headlineSemiBold,
    letterSpacing: 0,
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
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
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
  tab: {
    backgroundColor: Color.textWhite,
  },
  socialIcon2: {
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
  label4: {
    marginLeft: 4,
    fontSize: FontSize.subheadlineSemiBold_size,
    textAlign: "center",
    color: Color.brandPrimary,
  },
  tab4: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    width: "87.5%",
    height: "87.5%",
  },
  groupItem: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  groupInner: {
    backgroundColor: Color.colorGray_500,
    borderWidth: 1,
    borderColor: Color.textWhite,
    borderRadius: Border.br_9xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
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
    fontFamily: FontFamily.text14Regular,
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
    fontFamily: FontFamily.caption1SemiBold,
    fontSize: FontSize.caption2Regular_size,
    color: Color.textWhite,
    textAlign: "left",
    position: "absolute",
  },
  badge6: {
    borderColor: Color.neutral3F5F5F5,
    display: "none",
  },
  filter: {
    overflow: "hidden",
  },
  badge7: {
    borderColor: Color.textWhite,
  },
  pageParent: {
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    alignSelf: "stretch",
  },
  header3: {
    width: 375,
  },
  syncIcon: {
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
    letterSpacing: 0,
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
  roommessageavtIcon: {
    width: 48,
    height: 48,
  },
  returnVisitorIcon: {
    display: "none",
  },
  dngKiuAnh: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
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
  green: {
    display: "none",
  },
  red: {
    display: "none",
  },
  xTag: {
    display: "none",
  },
  roomlistNhn: {
    display: "none",
  },
  tVnGip: {
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    height: 20,
    overflow: "hidden",
    flex: 1,
    marginLeft: 5,
  },
  lastMessage: {
    alignItems: "center",
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
    display: "none",
  },
  choH: {
    textAlign: "left",
    color: Color.textPrimary,
    fontSize: FontSize.text14Regular_size,
    height: 20,
    overflow: "hidden",
    flex: 1,
    marginLeft: 5,
  },
  number6: {
    color: Color.textWhite,
    textAlign: "center",
  },
  badge8: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_12xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  dngKiuAnh2: {
    marginLeft: 8,
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
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
  bn: {
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    marginLeft: 5,

  },
  emojiIcon: {
    height: 16,
    width: 16,
  },
  listRoom: {
    height: 572,
    alignSelf: "stretch",
  },
  header3Parent: {
    width: 375,
    left: 0,
    top: 0,
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
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  label56: {
    color: Color.textSecondary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  label58: {
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
    marginLeft: -187.5,
    bottom: 0,
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 0.5,
    height: 84,
    justifyContent: "space-between",
    left: "50%",
    borderStyle: "solid",
    width: 375,
    position: "absolute",
  },
  listRoomCmtFacebookRemove: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default ListRoomCmtFacebookRemove2;
