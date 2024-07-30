import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
import { IncallMinimize } from '../components/CallMinimize2'

const AcceptCallMinimize2 = () => {
  return (
    <View style={styles.incallCallMinimize}>
      <View style={styles.header3Parent}>
        <View style={styles.header3}>
          <View style={[styles.header, styles.headerShadowBox]}>
            <View style={styles.statusbarIphone13}>
              <Image
                style={styles.notchIcon}
                resizeMode="cover"
                source={require("../../assets/notch.png")}
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
                source={require("../../assets/validate.png")}
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
                source={require("../../assets/27-left.png")}
              />
              <View style={styles.title}>
                <Text style={[styles.title1, styles.luTypo]}>Tin nhắn</Text>
              </View>
              <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
              <Image
                style={[styles.filterIcon, styles.luPosition]}
                resizeMode="cover"
                source={require("../../assets/filter.png")}
              />
            </View>
            <View style={styles.tabControl}>
              <View style={[styles.tab, styles.tabSpaceBlock]}>
                <Image
                  style={styles.socialIcon}
                  resizeMode="cover"
                  source={require("../../assets/social.png")}
                />
                <Text style={[styles.label, styles.labelSpaceBlock]}>
                  Tất cả
                </Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.textTypo]}>44</Text>
                </View>
              </View>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon1}
                  resizeMode="cover"
                  source={require("../../assets/social.png")}
                />
                <Text style={[styles.label1, styles.labelSpaceBlock]}>
                  Messenger
                </Text>
                <View style={styles.badge}>
                  <Text style={[styles.number, styles.textTypo]}>11</Text>
                </View>
              </View>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon2}
                  resizeMode="cover"
                  source={require("../../assets/social1.png")}
                />
                <Text style={[styles.label1, styles.labelSpaceBlock]}>
                  Zalo
                </Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>7</Text>
                </View>
              </View>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon1}
                  resizeMode="cover"
                  source={require("../../assets/social2.png")}
                />
                <Text style={[styles.label1, styles.labelSpaceBlock]}>
                  Fchat
                </Text>
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
                <Text style={[styles.label1, styles.labelSpaceBlock]}>
                  Faceboook
                </Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>1</Text>
                </View>
              </View>
              <View style={styles.tabSpaceBlock}>
                <Image
                  style={styles.socialIcon1}
                  resizeMode="cover"
                  source={require("../../assets/social4.png")}
                />
                <Text style={[styles.label1, styles.labelSpaceBlock]}>
                  Website
                </Text>
                <View style={styles.badge2}>
                  <Text style={[styles.number, styles.textTypo]}>1</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.pageParent, styles.listRoomSpaceBlock]}>
            <View style={styles.page}>
              <View style={styles.pageInner}>
                <View style={styles.avtPosition}>
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
                    <View style={[styles.groupInner, styles.groupPosition]} />
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
        <View style={[styles.listRoom, styles.listRoomSpaceBlock]}>
          <View style={styles.sync}>
            <View style={styles.page}>
              <Image
                style={styles.syncIcon}
                resizeMode="cover"
                source={require("../../assets/sync.png")}
              />
              <Text style={[styles.ngBY, styles.labelSpaceBlock]}>
                Đồng bộ đầy đủ tin nhắn
              </Text>
            </View>
            <Text style={[styles.label6, styles.labelSpaceBlock]}>Đồng bộ</Text>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt.png")}
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
                      <Text style={[styles.text4, styles.textTypo]}>13:02</Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type.png")}
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
              <View style={styles.roomlistFlexBox}>
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
                <View style={styles.blueSpaceBlock}>
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
                <View style={[styles.red, styles.redSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.tagSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistFlexBox]}>
                <Text
                  style={[styles.tVnGip, styles.labelTypo1]}
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
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt1.png")}
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
                      source={require("../../assets/icon-message-type.png")}
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
              <View style={[styles.roomlistNhn1, styles.roomlistFlexBox]}>
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
                <View style={[styles.blue1, styles.blueSpaceBlock]}>
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
                <View style={[styles.red, styles.redSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagSpaceBlock}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistFlexBox]}>
                <Text
                  style={[styles.tVnGip, styles.labelTypo1]}
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
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt2.png")}
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
                      <Text style={[styles.text4, styles.textTypo]}>
                        06/06/2022
                      </Text>
                    </View>
                    <Image
                      style={[styles.iconMessageType, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon-message-type.png")}
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
              <View style={styles.roomlistFlexBox}>
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
                <View style={[styles.blue1, styles.blueSpaceBlock]}>
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
                <View style={styles.redSpaceBlock}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.tagSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistFlexBox]}>
                <Text style={styles.hnhNh} numberOfLines={1}>
                  [Hình ảnh]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavtIcon}>
              <View style={[styles.avt, styles.avtSpaceBlock]}>
                <Text style={[styles.k, styles.kLayout]}>PM</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social5.png")}
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
                      source={require("../../assets/icon-message-type.png")}
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
              <View style={[styles.roomlistNhn1, styles.roomlistFlexBox]}>
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
                <View style={[styles.blue1, styles.blueSpaceBlock]}>
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
                <View style={[styles.red, styles.redSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagSpaceBlock}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistFlexBox]}>
                <Text style={styles.hnhNh} numberOfLines={1}>
                  [Tệp đính kèm]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <View style={styles.roommessageavtIcon}>
              <View style={[styles.avt, styles.avtSpaceBlock]}>
                <Text style={[styles.k, styles.kLayout]}>1</Text>
              </View>
              <Image
                style={[styles.socialIcon6, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/social5.png")}
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
                      source={require("../../assets/icon-message-type.png")}
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
              <View style={styles.roomlistFlexBox}>
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
                <View style={[styles.blue1, styles.blueSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.greenSpaceBlock}>
                  <Text style={[styles.label7, styles.textTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagSpaceBlock}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistFlexBox]}>
                <Text style={styles.bn}>Bạn:</Text>
                <Image
                  style={[styles.emojiIcon, styles.cyanSpaceBlock]}
                  resizeMode="cover"
                  source={require("../../assets/emoji.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt3.png")}
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
                      source={require("../../assets/icon-message-type.png")}
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
              <View style={[styles.roomlistNhn1, styles.roomlistFlexBox]}>
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
                <View style={[styles.blue1, styles.blueSpaceBlock]}>
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
                <View style={[styles.red, styles.redSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagSpaceBlock}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistFlexBox]}>
                <Text style={styles.hnhNh} numberOfLines={1}>
                  Bạn: [Video]
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.roomitem}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt3.png")}
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
                      source={require("../../assets/icon-message-type.png")}
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
              <View style={[styles.roomlistNhn1, styles.roomlistFlexBox]}>
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
                <View style={[styles.blue1, styles.blueSpaceBlock]}>
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
                <View style={[styles.red, styles.redSpaceBlock]}>
                  <Text style={[styles.label7, styles.textTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={styles.tagSpaceBlock}>
                  <Text style={[styles.label7, styles.textTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon1, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
              <View style={[styles.lastMessage, styles.roomlistFlexBox]}>
                <Text style={styles.hnhNh} numberOfLines={1}>
                  Bạn: [Video]
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.callMinimize, styles.tabBarPosition]}>
        <IncallMinimize />
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.tabControl}>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon.png")}
            />
            <Text style={[styles.label56, styles.labelTypo]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon1.png")}
            />
            <Text style={[styles.label56, styles.labelTypo]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon2.png")}
            />
            <Text style={[styles.label58, styles.labelTypo]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon3.png")}
            />
            <Text style={[styles.label56, styles.labelTypo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon4.png")}
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
  headerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
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
    backgroundColor: Color.textWhite,
  },
  labelSpaceBlock: {
    marginLeft: 4,
    lineHeight: 20,
  },
  textTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
  },
  listRoomSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  groupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    zIndex: 0,
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
  purpleFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    height: 28,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    height: 20,
    overflow: "hidden",
  },
  redSpaceBlock: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 27,
    overflow: "hidden",
  },
  tagSpaceBlock: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    height: 28,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  roomlistFlexBox: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelTypo1: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
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
  blueSpaceBlock: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 27,
    overflow: "hidden",
  },
  avtSpaceBlock: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_4xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
  },
  kLayout: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
  },
  tabBarPosition: {
    left: "50%",
    position: "absolute",
  },
  iconContainerLayout: {
    height: 40,
    width: 40,
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
    letterSpacing: 0,
  },
  title: {
    zIndex: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
    display: "none",
  },
  label: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 4,
    textAlign: "center",
    color: Color.brandPrimary,
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
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  socialIcon1: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
  },
  label1: {
    fontSize: FontSize.subheadlineSemiBold_size,
    marginLeft: 4,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
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
  tabControl: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 0.45,
    elevation: 0.45,
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
    width: "100%",
    height: "100%",
  },
  groupInner: {
    backgroundColor: Color.colorGray_500,
    borderWidth: 1,
    borderColor: Color.textWhite,
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    borderRadius: Border.br_9xs,
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
  avtPosition: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
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
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
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
    fontFamily: FontFamily.interBold,
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
    flex: 1,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    fontSize: FontSize.text14Regular_size,
  },
  label6: {
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
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
    color: Color.colorRoyalblue_100,
    marginLeft: 6,
    flex: 1,
    textAlign: "left",
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
    height: 28,
    overflow: "hidden",
    display: "none",
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
    paddingHorizontal: Padding.p_5xs,
    height: 28,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  yellow: {
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
    height: 28,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  tVnGip: {
    flex: 1,
    textAlign: "left",
    color: Color.textPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    height: 20,
    overflow: "hidden",
    marginLeft: 6,
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
  },
  content: {
    flex: 1,
    marginLeft: 8,
  },
  roomitem: {
    padding: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  purple1: {
    backgroundColor: Color.tagPurple500,
    paddingHorizontal: Padding.p_5xs,
    height: 28,
    overflow: "hidden",
  },
  blue1: {
    display: "none",
  },
  roomlistNhn1: {
    display: "none",
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
    height: 28,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "none",
  },
  hnhNh: {
    color: Color.textSecondary,
    flex: 1,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    height: 20,
    overflow: "hidden",
    marginLeft: 6,
  },
  k: {
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
  },
  avt: {
    backgroundColor: Color.tagGray100,
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
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
  listRoom: {
    flex: 1,
  },
  header3Parent: {
    height: 757,
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
  },
  avt2: {
    backgroundColor: Color.tagBlue100,
    width: 44,
    height: 44,
  },
  trL: {
    display: "flex",
    alignItems: "flex-end",
    color: Color.textWhite,
    textAlign: "left",
    width: 77,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
  },
  text11: {
    color: Color.textGrayF3F4F6,
    width: 128,
    marginTop: 2,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  iconContainer: {
    borderRadius: Border.br_17xl,
  },
  iconContainer1: {
    marginLeft: 16,
  },
  iconContainerParent: {
    marginLeft: 35,
    flexDirection: "row",
  },
  callMinimize: {
    marginLeft: -150,
    top: 85,
    borderRadius: Border.br_3xs,
    width: 343,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
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
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  label58: {
    color: Color.brandPrimary,
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
    borderStyle: "solid",
    width: 375,
    backgroundColor: Color.textWhite,
  },
  incallCallMinimize: {
    height: 812,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.textWhite,
  },
});

export default AcceptCallMinimize2;
