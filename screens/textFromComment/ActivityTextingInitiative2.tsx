import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, Color, FontFamily, Padding, Border } from "../../GlobalStyles";

const ActivityTextingInitiative2 = () => {
  return (
    <View style={[styles.activityTextingInitiative, styles.title1Layout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <View style={styles.frameGroup}>
            <View style={styles.tinParentSpaceBlock}>
              <Text style={[styles.tinTVn, styles.textLayout]}>
                Tin tư vấn 48 giờ
              </Text>
              <Text style={[styles.text, styles.textTypo1]}>3/8</Text>
            </View>
            <View style={styles.frameChild} />
            <View
              style={[styles.tinTVnTrongThngParent, styles.tinParentSpaceBlock]}
            >
              <Text style={[styles.tinTVn, styles.textLayout]}>
                Tin tư vấn trong tháng
              </Text>
              <View style={styles.parent}>
                <Text style={styles.textTypo1}>45/2000</Text>
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
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>
              Thông tin khách hàng
            </Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room9.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Nhóm</Text>
            <Text style={[styles.value, styles.valueTypo]}>5</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room10.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>
              Nhãn khách hàng
            </Text>
            <Text style={[styles.value, styles.valueTypo]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room11.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>
              Hồ sơ liên quan
            </Text>
            <Text style={[styles.value, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room4.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Social Profile</Text>
            <Text style={[styles.value, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room12.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Đơn hàng</Text>
            <Text style={[styles.value, styles.valueTypo]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/icon-room13.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Hoạt động</Text>
            <Text style={[styles.value, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room14.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Tệp đính kèm</Text>
            <Text style={[styles.value, styles.valueTypo]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room15.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Ảnh và video</Text>
            <Text style={[styles.value, styles.valueTypo]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
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
                  <Text style={styles.text2}>9:41</Text>
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
                  style={styles.iconMobileSignal}
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
                  source={require("../../assets/social21.png")}
                />
                <Text style={[styles.label9, styles.fptTypo]}>Tab 1</Text>
                <View style={styles.badgeSpaceBlock}>
                  <Text style={[styles.number, styles.textLayout]}>16</Text>
                </View>
              </View>
              <View style={styles.tabFlexBox}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social21.png")}
                />
                <Text style={[styles.label10, styles.labelTypo1]}>Tab 1</Text>
                <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                  <Text style={[styles.number, styles.textLayout]}>1</Text>
                </View>
              </View>
              <View style={styles.tabFlexBox}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social21.png")}
                />
                <Text style={[styles.label10, styles.labelTypo1]}>Tab 1</Text>
                <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                  <Text style={[styles.number, styles.textLayout]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social13.png")}
                />
                <Text style={[styles.label10, styles.labelTypo1]}>Tab 1</Text>
                <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                  <Text style={[styles.number, styles.textLayout]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social13.png")}
                />
                <Text style={[styles.label10, styles.labelTypo1]}>Tab 1</Text>
                <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                  <Text style={[styles.number, styles.textLayout]}>1</Text>
                </View>
              </View>
              <View style={[styles.tab3, styles.tabFlexBox]}>
                <Image
                  style={[styles.socialIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/social13.png")}
                />
                <Text style={[styles.label10, styles.labelTypo1]}>Tab 1</Text>
                <View style={[styles.badge1, styles.badgeSpaceBlock]}>
                  <Text style={[styles.number, styles.textLayout]}>1</Text>
                </View>
              </View>
            </View>
            <View style={[styles.leftParent, styles.leftParentSpaceBlock]}>
              <Image
                style={styles.leftIcon}
                resizeMode="cover"
                source={require("../../assets/27-left.png")}
              />
              <View style={styles.customerInfoavt}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt3.png")}
                />
                <View style={styles.row1Parent}>
                  <View style={styles.row1}>
                    <View style={styles.name}>
                      <Image
                        style={[styles.mobileIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/mobile2.png")}
                      />
                      <Text style={[styles.name1, styles.name1Typo]}>
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Image
                      style={[styles.icon23Edit, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon23-edit.png")}
                    />
                  </View>
                  <View style={styles.row2}>
                    <Text style={[styles.angOnline, styles.userLayout]}>
                      Đang online
                    </Text>
                  </View>
                  <View style={styles.button}>
                    <Text style={[styles.label15, styles.userLayout]}>
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
          <View style={styles.qunLTinZalo}>
            <View style={styles.tinParentSpaceBlock}>
              <Text style={[styles.tinTVn, styles.textLayout]}>
                Tin tư vấn 48 giờ
              </Text>
              <Text style={[styles.text, styles.textTypo1]}>3/8</Text>
            </View>
            <View
              style={[styles.tinTVnTrongThngParent, styles.tinParentSpaceBlock]}
            >
              <Text style={[styles.tinTVn, styles.textLayout]}>
                Tin tư vấn trong tháng
              </Text>
              <Text style={[styles.text, styles.textTypo1]}>45/2000</Text>
            </View>
          </View>
        </View>
        <View style={styles.qunLTinZalo1}>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room.png")}
            />
            <Text style={styles.label16}>Thông tin khách hàng</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room9.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Nhóm</Text>
            <Text style={[styles.value8, styles.valueTypo]}>5</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room10.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>
              Nhãn khách hàng
            </Text>
            <Text style={[styles.value8, styles.valueTypo]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room11.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>
              Hồ sơ liên quan
            </Text>
            <Text style={[styles.value8, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room4.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Social Profile</Text>
            <Text style={[styles.value8, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room12.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Đơn hàng</Text>
            <Text style={[styles.value8, styles.valueTypo]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/icon-room13.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Hoạt động</Text>
            <Text style={[styles.value8, styles.valueTypo]}>2</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room14.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Tệp đính kèm</Text>
            <Text style={[styles.value8, styles.valueTypo]}>3</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
          <View style={styles.listCell}>
            <Image
              style={[styles.iconRoom, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/icon-room15.png")}
            />
            <Text style={[styles.label, styles.valueTypo]}>Ảnh và video</Text>
            <Text style={[styles.value8, styles.valueTypo]}>4</Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/arrow-right1.png")}
            />
          </View>
        </View>
        <View style={styles.ghiCh}>
          <View style={styles.fieldtextArea}>
            <Text style={[styles.text5, styles.userLayout]}>{`Nhập ghi chú

`}</Text>
          </View>
          <View style={styles.lchSGhiCh}>
            <View style={styles.title}>
              <Text style={[styles.label25, styles.name1Typo]}>
                Lịch sử ghi chú
              </Text>
            </View>
            <View style={styles.lchSGhiCh1}>
              <View style={styles.avt}>
                <Text style={[styles.label15, styles.userLayout]}>H</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.frameView}>
                  <View style={styles.name}>
                    <Text style={[styles.huongnt256, styles.textLayout]}>
                      HuongNT256
                    </Text>
                    <Image
                      style={styles.frameItem}
                      resizeMode="cover"
                      source={require("../../assets/ellipse-672.png")}
                    />
                    <Text style={[styles.text6, styles.textLayout]}>
                      16/11/2022 12:11
                    </Text>
                  </View>
                  <Image
                    style={[styles.optionsHorizontalIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/optionshorizontal1.png")}
                  />
                </View>
                <Text style={[styles.niDungGhi, styles.textLayout]}>
                  Nội dung ghi chú cho khách hàng, có thể sửa xóa, dài thì xuống
                  dòng
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={styles.iphoneXsHomeIndicator}>
          <View style={styles.line} />
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon.png")}
            />
            <Text style={[styles.label26, styles.labelTypo]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon13.png")}
            />
            <Text style={[styles.label27, styles.labelTypo]}>Cài đặt</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon2.png")}
            />
            <Text style={[styles.label26, styles.labelTypo]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon3.png")}
            />
            <Text style={[styles.label26, styles.labelTypo]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon4.png")}
            />
            <Text style={[styles.label26, styles.labelTypo]}>Khách hàng</Text>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
      </View>
      <View style={styles.activityTextingInitiativeChild} />
      <View style={[styles.actionSheet, styles.tabBarPosition]}>
        <View style={[styles.actionSheetheader, styles.leftParentSpaceBlock]}>
          <Image
            style={styles.leftIcon1}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.titleWrapper}>
            <Text style={[styles.title1, styles.labelTypo1]} numberOfLines={1}>
              Hoạt động
            </Text>
          </View>
          <View style={styles.button1}>
            <Image
              style={styles.iconsetplaceholder}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder3.png")}
            />
            <Text style={[styles.text7, styles.labelTypo1]}>Lưu</Text>
            <Image
              style={styles.iconsetplaceholder1}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder3.png")}
            />
          </View>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../../assets/23-close4.png")}
          />
        </View>
        <View style={styles.dsHotNg}>
          <View style={styles.activityFeed}>
            <View style={styles.activityFeedLog}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame-4273187676.png")}
              />
              <View style={styles.frameParent1}>
                <View style={styles.name}>
                  <Text style={[styles.text8, styles.userLayout]}>
                    01/06/2022 12:05:03
                  </Text>
                  <Image
                    style={[styles.warningIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={styles.content}>
                  <Text style={[styles.user, styles.userLayout]}>
                    <Text
                      style={[styles.huongnt2561, styles.fptTypo]}
                    >{`HuongNT256 `}</Text>
                    <Text style={styles.phnHiBnh}>
                      phản hồi bình luận từ trang
                    </Text>
                    <Text style={[styles.huongnt2561, styles.fptTypo]}>
                      {" "}
                      Internet Camera FPT
                    </Text>
                  </Text>
                  <Text style={[styles.action, styles.userLayout]}>
                    nhắn tin
                  </Text>
                  <Text
                    style={[styles.fptCameraH, styles.fptTypo]}
                    numberOfLines={1}
                  >
                    FPT Camera Hà Nội
                  </Text>
                </View>
                <View style={styles.count}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message1.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.activityFeedLog}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon1.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      01/06/2022 12:05:03
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        nhắn tin
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon2.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      01/06/2022 11:04:45
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>HaDT53</Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        đã chỉ định chat cho
                      </Text>
                      <Text
                        style={[styles.object1, styles.fptTypo]}
                        numberOfLines={1}
                      >{`HuongNT256 `}</Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame3.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon3.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      01/06/2022 11:30:22
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        nhắc nhở
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={styles.dchTypo}>“Gửi thông tin sản phẩm”</Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame3.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon4.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      01/06/2022 11:30:22
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        đã tạo đơn hàng
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={styles.dchTypo}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon1.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 12:00:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        Lê Minh Trí
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        nhắn tin
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon5.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 12:01:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        đã chặn
                      </Text>
                      <Text
                        style={[styles.object1, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon6.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 12:02:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        đã bỏ chặn
                      </Text>
                      <Text
                        style={[styles.object1, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon7.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 13:00:11
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        hoàn tất
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon8.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 14:00:42
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        mở lại
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon2.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      03/06/2022 08:34:00
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>HaDT53</Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        đã chỉ định chat cho
                      </Text>
                      <Text
                        style={[styles.object1, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        TriLM22
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog2, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon2.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      03/06/2022 08:35:00
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>HaDT53</Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        đã chỉ định chat cho
                      </Text>
                      <Text
                        style={[styles.object1, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        VanNT99
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.activityFeedMessage}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.optionsHorizontalIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/minus-square.png")}
                  />
                  <Text style={[styles.thuGn, styles.thuGnClr]}>Thu gọn</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.activityFeed1}>
            <View style={styles.activityFeedLog}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame-4273187674.png")}
              />
              <View style={styles.frameParent1}>
                <View style={styles.name}>
                  <Text style={[styles.text8, styles.userLayout]}>
                    01/06/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={styles.content}>
                  <Text style={[styles.user1, styles.fptTypo]}>
                    Lê Minh Trí
                  </Text>
                  <Text style={[styles.action1, styles.userLayout]}>
                    bình luận
                  </Text>
                  <Text
                    style={[styles.object1, styles.fptTypo]}
                    numberOfLines={1}
                  >
                    FPT Camera Hà Nội
                  </Text>
                </View>
                <View style={styles.count}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message1.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.activityFeedMessage}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.optionsHorizontalIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/add-square.png")}
                  />
                  <Text style={[styles.xemThmHot, styles.fptTypo]}>
                    Xem thêm hoạt động
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.activityFeed1}>
            <View style={styles.activityFeedLog}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame-4273187677.png")}
              />
              <View style={styles.frameParent1}>
                <View style={styles.name}>
                  <Text style={[styles.text8, styles.userLayout]}>
                    31/05/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={styles.content}>
                  <Text style={[styles.user1, styles.fptTypo]}>
                    Lê Minh Trí
                  </Text>
                  <Text style={[styles.action1, styles.userLayout]}>
                    đã truy cập
                  </Text>
                  <Text
                    style={[styles.fptCameraH2, styles.fptTypo]}
                    numberOfLines={1}
                  >
                    fptcore.com/combo-internet-truyen-hinh/
                  </Text>
                </View>
                <View style={styles.count}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message1.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog16}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame1.png")}
              />
              <View style={styles.content1}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon9.png")}
                />
                <View style={styles.hyperlink}>
                  <View style={styles.frameView}>
                    <Text style={[styles.ltXemTrang, styles.userLayout]}>
                      Lượt xem trang: 4
                    </Text>
                    <Image
                      style={[styles.iconRoom, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../../assets/double-down.png")}
                    />
                    <Image
                      style={[styles.uangleDoubleUpIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../../assets/uangledoubleup.png")}
                    />
                  </View>
                  <View
                    style={[styles.frameParent4, styles.content2SpaceBlock]}
                  >
                    <View style={styles.tabBarParent}>
                      <Text style={[styles.giLuxWifi, styles.text28Typo]}>
                        Gói Lux (wifi 6) - FPT Telecom
                      </Text>
                      <Text style={[styles.text28, styles.text28Typo]}>2</Text>
                    </View>
                    <View style={styles.internetCNhnFptTelecomParent}>
                      <Text style={[styles.giLuxWifi, styles.text28Typo]}>
                        Internet cá nhân - FPT Telecom
                      </Text>
                      <Text style={[styles.text28, styles.text28Typo]}>1</Text>
                    </View>
                    <View style={styles.internetCNhnFptTelecomParent}>
                      <Text style={[styles.giLuxWifi, styles.text28Typo]}>
                        Liên hệ - FPT Telecom
                      </Text>
                      <Text style={[styles.text28, styles.text28Typo]}>1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.activityFeedMessage}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.optionsHorizontalIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/add-square.png")}
                  />
                  <Text style={[styles.xemThmHot, styles.fptTypo]}>
                    Xem thêm hoạt động
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.activityFeed1}>
            <View style={styles.activityFeedLog}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame-4273187673.png")}
              />
              <View style={styles.frameParent1}>
                <View style={styles.name}>
                  <Text style={[styles.text8, styles.userLayout]}>
                    31/05/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon3, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={styles.content}>
                  <Text style={[styles.user1, styles.fptTypo]}>
                    236.178.229.134
                  </Text>
                  <Text style={[styles.action1, styles.userLayout]}>
                    đã truy cập
                  </Text>
                  <Text
                    style={[styles.fptCameraH2, styles.fptTypo]}
                    numberOfLines={1}
                  >
                    fptcore.com/combo-internet-truyen-hinh/
                  </Text>
                </View>
                <View style={styles.count3}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message1.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog16}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame1.png")}
              />
              <View style={styles.content1}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon9.png")}
                />
                <View style={styles.hyperlink}>
                  <View style={styles.frameView}>
                    <Text style={[styles.ltXemTrang, styles.userLayout]}>
                      Lượt xem trang: 4
                    </Text>
                    <Image
                      style={[styles.iconRoom, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../../assets/double-down.png")}
                    />
                    <Image
                      style={[styles.uangleDoubleUpIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../../assets/uangledoubleup.png")}
                    />
                  </View>
                  <View
                    style={[styles.frameParent4, styles.content2SpaceBlock]}
                  >
                    <View style={styles.tabBarParent}>
                      <Text style={[styles.giLuxWifi, styles.text28Typo]}>
                        Gói Lux (wifi 6) - FPT Telecom
                      </Text>
                      <Text style={[styles.text28, styles.text28Typo]}>2</Text>
                    </View>
                    <View style={styles.internetCNhnFptTelecomParent}>
                      <Text style={[styles.giLuxWifi, styles.text28Typo]}>
                        Internet cá nhân - FPT Telecom
                      </Text>
                      <Text style={[styles.text28, styles.text28Typo]}>1</Text>
                    </View>
                    <View style={styles.internetCNhnFptTelecomParent}>
                      <Text style={[styles.giLuxWifi, styles.text28Typo]}>
                        Liên hệ - FPT Telecom
                      </Text>
                      <Text style={[styles.text28, styles.text28Typo]}>1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.activityFeedMessage}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.optionsHorizontalIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/add-square.png")}
                  />
                  <Text style={[styles.xemThmHot, styles.fptTypo]}>
                    Xem thêm hoạt động
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.activityFeed4}>
            <View style={styles.activityFeedLog}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame-4273187674.png")}
              />
              <View style={styles.frameParent1}>
                <View style={styles.name}>
                  <Text style={[styles.text8, styles.userLayout]}>
                    01/06/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={styles.content}>
                  <Text style={[styles.user1, styles.fptTypo]}>
                    Lê Minh Trí
                  </Text>
                  <Text style={[styles.action1, styles.userLayout]}>
                    bình luận
                  </Text>
                  <Text
                    style={[styles.object1, styles.fptTypo]}
                    numberOfLines={1}
                  >
                    FPT Camera Hà Nội
                  </Text>
                </View>
                <View style={styles.count}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message1.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={styles.icon10Message}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text9, styles.textLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.activityFeedLog}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon10.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      01/06/2022 11:00:03
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        Lê Minh Trí
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        bình luận
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon10.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      01/06/2022 11:04:45
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user17, styles.userLayout]}>
                        <Text
                          style={[styles.huongnt2561, styles.fptTypo]}
                        >{`Thu Hương `}</Text>
                        <Text style={styles.phnHiBnh}>
                          trả lời bình luận của
                        </Text>
                        <Text style={[styles.huongnt2561, styles.fptTypo]}>
                          {" "}
                          Lê Minh Trí
                        </Text>
                      </Text>
                      <Text style={[styles.action, styles.userLayout]}>
                        trả lời bình luận của
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame4.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon11.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      01/06/2022 11:30:22
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.userLayout]}>
                        <Text
                          style={[styles.huongnt2561, styles.fptTypo]}
                        >{`HuongNT256 `}</Text>
                        <Text style={styles.phnHiBnh}>đã ẩn bình luận của</Text>
                        <Text style={[styles.huongnt2561, styles.fptTypo]}>
                          {" "}
                          Lê Minh Trí
                        </Text>
                      </Text>
                      <Text style={[styles.action, styles.userLayout]}>
                        đã ẩn bình luận của
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gửi thông tin sản phẩm”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame4.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon12.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      01/06/2022 11:30:22
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.userLayout]}>
                        <Text
                          style={[styles.huongnt2561, styles.fptTypo]}
                        >{`HuongNT256 `}</Text>
                        <Text style={styles.phnHiBnh}>
                          đã bỏ ẩn bình luận của
                        </Text>
                        <Text style={[styles.huongnt2561, styles.fptTypo]}>
                          {" "}
                          Lê Minh Trí
                        </Text>
                      </Text>
                      <Text style={[styles.action, styles.userLayout]}>
                        đã bỏ ẩn bình luận của
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame4.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon10.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 12:00:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.userLayout]}>
                        <Text
                          style={[styles.huongnt2561, styles.fptTypo]}
                        >{`HuongNT256 `}</Text>
                        <Text style={styles.phnHiBnh}>
                          trả lời bình luận của
                        </Text>
                        <Text style={[styles.huongnt2561, styles.fptTypo]}>
                          {" "}
                          Thu Hương
                        </Text>
                      </Text>
                      <Text style={[styles.action, styles.userLayout]}>
                        trả lời bình luận của
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Thu Hương
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon13.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 12:01:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        đã sửa bình luận
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon14.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 12:02:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        đã xóa bình luận của mình
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame4.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon14.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 13:00:11
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.userLayout]}>
                        <Text
                          style={[styles.huongnt2561, styles.fptTypo]}
                        >{`HuongNT256 `}</Text>
                        <Text style={styles.phnHiBnh}>
                          đã xóa bình luận của
                        </Text>
                        <Text style={[styles.huongnt2561, styles.fptTypo]}>
                          {" "}
                          Lê Minh Trí
                        </Text>
                      </Text>
                      <Text style={[styles.action, styles.userLayout]}>
                        đã xóa bình luận của
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        Lê Minh Trí
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon7.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 14:00:42
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        hoàn tất
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.activitySpaceBlock}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon8.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text11, styles.userLayout]}>
                      02/06/2022 14:51:42
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user1, styles.fptTypo]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action1, styles.userLayout]}>
                        mở lại
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.fptTypo]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gói dịch vụ FPT Play Box”
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.activityFeedMessage}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.optionsHorizontalIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/minus-square.png")}
                  />
                  <Text style={[styles.thuGn, styles.thuGnClr]}>Thu gọn</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actionSheetfooter}>
          <View style={styles.buttonParent}>
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Image
                style={styles.iconsetplaceholder}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
              <Text style={[styles.text50, styles.textTypo]}>Secondary</Text>
              <Image
                style={styles.iconsetplaceholder3}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
            </View>
            <View style={[styles.button3, styles.buttonFlexBox]}>
              <Image
                style={styles.iconsetplaceholder}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder5.png")}
              />
              <Text style={[styles.text51, styles.textTypo]}>Primary</Text>
              <Image
                style={styles.iconsetplaceholder3}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder5.png")}
              />
            </View>
          </View>
          <View style={styles.alphabetickeyboard}>
            <View style={[styles.keys, styles.keysPosition]}>
              <View style={styles.topRow}>
                <View style={styles.key}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>Q</Text>
                </View>
                <View style={styles.key1}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    W
                  </Text>
                </View>
                <View style={[styles.key2, styles.keyPosition5]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>E</Text>
                </View>
                <View style={[styles.key3, styles.keyPosition4]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    R
                  </Text>
                </View>
                <View style={[styles.key4, styles.keyPosition3]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>T</Text>
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
                  <Text style={[styles.letter, styles.letterPosition1]}>I</Text>
                </View>
                <View style={[styles.key8, styles.keyPosition]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    O
                  </Text>
                </View>
                <View style={styles.key9}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>P</Text>
                </View>
              </View>
              <View style={styles.middleRow}>
                <View style={styles.key10}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>A</Text>
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
                  <Text style={[styles.letter, styles.letterPosition1]}>F</Text>
                </View>
                <View style={[styles.key14, styles.keyPosition2]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    G
                  </Text>
                </View>
                <View style={styles.key15}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>H</Text>
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
                  <Text style={[styles.letter, styles.letterPosition1]}>L</Text>
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
              <View style={[styles.key27, styles.keySpaceBlock]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter27, styles.letterPosition]}>
                  Dấu cách
                </Text>
              </View>
              <View style={[styles.key28, styles.keySpaceBlock]}>
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
            <View style={[styles.homeindicator1, styles.tabBarPosition]}>
              <View style={[styles.homeIndicator1, styles.homeLayout]} />
            </View>
          </View>
          <View style={styles.homeindicator2}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title1Layout: {
    width: "100%",
    overflow: "hidden",
  },
  textLayout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  textTypo1: {
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
  valueTypo: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    marginLeft: 16,
    letterSpacing: 0,
    fontFamily: FontFamily.text14Regular,
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
  fptTypo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  labelTypo1: {
    fontSize: FontSize.subheadlineSemiBold_size,
    lineHeight: 20,
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
  leftParentSpaceBlock: {
    paddingRight: Padding.p_21xl,
    paddingLeft: Padding.p_base,
    flexDirection: "row",
  },
  iconLayout: {
    height: 16,
    overflow: "hidden",
  },
  name1Typo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  userLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  tabBarPosition: {
    bottom: 0,
    position: "absolute",
  },
  labelTypo: {
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    textAlign: "center",
    marginTop: 4,
    letterSpacing: 0,
    fontFamily: FontFamily.text14Regular,
  },
  homeLayout: {
    width: 134,
    bottom: 8,
    height: 5,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  tinNhnSpaceBlock: {
    backgroundColor: Color.tagBlue100,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  content2SpaceBlock: {
    marginTop: 2,
    alignSelf: "stretch",
  },
  dchTypo: {
    fontStyle: "italic",
    marginTop: 2,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    color: Color.textSecondary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  activitySpaceBlock: {
    width: 343,
    flexDirection: "row",
  },
  thuGnClr: {
    color: Color.blue,
    textAlign: "left",
  },
  text28Typo: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    letterSpacing: 0,
    fontFamily: FontFamily.text14Regular,
  },
  buttonFlexBox: {
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    marginLeft: 8,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  letterPosition1: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
    display: "flex",
    textAlign: "center",
    left: 0,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  keyPosition5: {
    right: 262,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition4: {
    right: 225,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition3: {
    right: 187,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition2: {
    right: 150,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition1: {
    right: 75,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition: {
    right: 38,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIconLayout: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  letterPosition: {
    marginTop: -10,
    color: Color.labelColorLightPrimary,
    top: "50%",
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularCallout,
    left: 0,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
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
    backgroundColor: "#e4e4e4",
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
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
  divider: {
    height: 4,
    backgroundColor: Color.colorGray_300,
    width: 375,
  },
  iconRoom: {
    overflow: "hidden",
  },
  label: {
    marginLeft: 16,
    textAlign: "left",
    color: Color.textPrimary,
    flex: 1,
  },
  arrowRightIcon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  listCell: {
    height: 48,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 375,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  value: {
    textAlign: "right",
    color: Color.textSecondary,
    marginLeft: 16,
  },
  frameParent: {
    top: 185,
    backgroundColor: Color.neutral2,
    alignItems: "center",
    left: 1,
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
    textAlign: "center",
    color: Color.textWhite,
    fontFamily: FontFamily.defaultRegularCallout,
    top: 1,
    width: 54,
    left: 0,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    height: 20,
    fontWeight: "600",
    letterSpacing: 0,
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
  socialIcon: {
    borderRadius: Border.br_base,
  },
  label9: {
    color: Color.brandPrimary,
    fontSize: FontSize.subheadlineSemiBold_size,
    lineHeight: 20,
    textAlign: "center",
    marginLeft: 8,
  },
  number: {
    textAlign: "center",
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  label10: {
    textAlign: "center",
    marginLeft: 8,
    letterSpacing: 0,
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  badge1: {
    width: 16,
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
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  avtIcon: {
    width: 80,
    height: 80,
    borderRadius: Border.br_11xl,
  },
  mobileIcon: {
    width: 16,
    display: "none",
  },
  name1: {
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    marginLeft: 4,
    textAlign: "center",
    color: Color.textWhite,
  },
  name: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon23Edit: {
    width: 16,
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
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  row2: {
    marginTop: 8,
    display: "none",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
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
    paddingLeft: Padding.p_base,
    display: "none",
    flexDirection: "row",
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
    marginTop: 10,
    alignSelf: "stretch",
  },
  roomInfoHeader: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 0.45,
    elevation: 0.45,
    height: 185,
    backgroundColor: Color.colorGray_300,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    alignItems: "center",
  },
  qunLTinZalo: {
    padding: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
  roomInfoHeaderParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  label16: {
    width: 271,
    display: "flex",
    marginLeft: 16,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
    alignItems: "center",
  },
  value8: {
    color: Color.brandPrimary,
    textAlign: "right",
    marginLeft: 16,
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
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
  label25: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
  },
  title: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
  avt: {
    backgroundColor: Color.brandSecondary,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    width: 32,
    borderRadius: Border.br_11xl,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  huongnt256: {
    fontWeight: "700",
    fontFamily: FontFamily.caption1SemiBold,
    color: Color.textBlack,
    letterSpacing: 0,
    textAlign: "left",
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
  optionsHorizontalIcon: {
    width: 16,
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
    padding: Padding.p_base,
    marginTop: 4,
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  chiTitRoom: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_300,
    alignItems: "center",
    position: "absolute",
  },
  line: {
    marginLeft: -67.5,
    bottom: 11,
    width: 135,
    height: 5,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
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
  label26: {
    color: Color.textSecondary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  label27: {
    color: Color.brandPrimary,
  },
  tabBarParent: {
    flexDirection: "row",
    alignSelf: "stretch",
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
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    justifyContent: "space-between",
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    width: 375,
    backgroundColor: Color.textWhite,
  },
  activityTextingInitiativeChild: {
    backgroundColor: Color.colorGray_400,
    opacity: 0.7,
    left: 0,
    top: 0,
    width: 376,
    position: "absolute",
    height: 812,
  },
  leftIcon1: {
    zIndex: 0,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  title1: {
    maxWidth: 260,
    textAlign: "center",
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.textPrimary,
    overflow: "hidden",
    width: "100%",
  },
  titleWrapper: {
    maxWidth: 295,
    zIndex: 1,
    alignItems: "center",
    flex: 1,
  },
  iconsetplaceholder: {
    height: 24,
    width: 24,
    display: "none",
  },
  text7: {
    marginLeft: 4,
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "left",
  },
  iconsetplaceholder1: {
    marginLeft: 4,
    height: 24,
    width: 24,
    display: "none",
  },
  button1: {
    justifyContent: "flex-end",
    zIndex: 2,
    paddingVertical: Padding.p_11xs,
    right: 16,
    top: 20,
    display: "none",
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    paddingHorizontal: 0,
    alignItems: "center",
    position: "absolute",
  },
  closeIcon: {
    opacity: 0,
    zIndex: 3,
    right: 16,
    top: 20,
    height: 24,
    width: 24,
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
    borderStyle: "solid",
    width: 375,
    justifyContent: "center",
    backgroundColor: Color.textWhite,
  },
  activityFeedLogChild: {
    maxHeight: "100%",
    width: 24,
    alignSelf: "stretch",
    marginLeft: 15,
  },
  text8: {
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  warningIcon: {
    marginLeft: 4,
    display: "none",
    overflow: "hidden",
  },
  huongnt2561: {
    color: Color.textPrimary,
  },
  phnHiBnh: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  user: {
    textAlign: "left",
    flex: 1,
  },
  action: {
    marginLeft: 4,
    color: Color.textSecondary,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  fptCameraH: {
    marginLeft: 4,
    display: "none",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
    overflow: "hidden",
    flex: 1,
  },
  content: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  icon10Message: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  text9: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  tinNhn: {
    display: "none",
  },
  duration: {
    marginLeft: 8,
  },
  count: {
    display: "none",
    marginTop: 4,
    flexDirection: "row",
  },
  frameParent1: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 1,
  },
  activityFeedLog: {
    width: 343,
    flexDirection: "row",
  },
  text11: {
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
  },
  user1: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
  },
  action1: {
    marginLeft: 4,
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  content2: {
    flexDirection: "row",
    alignItems: "center",
  },
  giDchV: {
    display: "none",
  },
  hyperlink: {
    marginLeft: 4,
    justifyContent: "center",
    flex: 1,
  },
  content1: {
    marginLeft: 8,
    flexDirection: "row",
    flex: 1,
  },
  object1: {
    marginLeft: 4,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    color: Color.textPrimary,
    overflow: "hidden",
    flex: 1,
  },
  activityFeedLog2: {
    display: "none",
  },
  thuGn: {
    marginLeft: 4,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  content23: {
    width: 153,
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  activityFeedMessage: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  activityFeedLog12: {
    width: 343,
  },
  activityFeed: {
    width: 343,
  },
  xemThmHot: {
    marginLeft: 4,
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
  },
  activityFeed1: {
    width: 343,
    display: "none",
  },
  fptCameraH2: {
    marginLeft: 4,
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
  },
  ltXemTrang: {
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  uangleDoubleUpIcon: {
    display: "none",
    overflow: "hidden",
  },
  giLuxWifi: {
    color: Color.blue,
    textAlign: "left",
    height: 16,
    overflow: "hidden",
    flex: 1,
  },
  text28: {
    width: 24,
    textAlign: "right",
    color: Color.textSecondary,
    marginLeft: 2,
  },
  internetCNhnFptTelecomParent: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent4: {
    backgroundColor: Color.tagGray100,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    marginTop: 2,
    display: "none",
  },
  activityFeedLog16: {
    width: 343,
    flexDirection: "row",
  },
  warningIcon3: {
    marginLeft: 4,
    overflow: "hidden",
  },
  count3: {
    marginTop: 4,
    flexDirection: "row",
  },
  user17: {
    textAlign: "left",
  },
  activityFeed4: {
    width: 343,
  },
  dsHotNg: {
    paddingTop: Padding.p_base,
    width: 375,
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  text50: {
    color: Color.textPrimary,
  },
  iconsetplaceholder3: {
    height: 24,
    width: 24,
    marginLeft: 8,
    display: "none",
  },
  button2: {
    height: 41,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  text51: {
    color: Color.textWhite,
  },
  button3: {
    backgroundColor: Color.brandPrimary,
    height: 40,
    marginLeft: 16,
  },
  buttonParent: {
    padding: Padding.p_base,
    display: "none",
    flexDirection: "row",
    width: 375,
    justifyContent: "center",
    alignItems: "center",
  },
  keycontainerShadowBox1: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.textWhite,
  },
  letter: {
    width: 32,
  },
  key: {
    right: 337,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  letter1: {
    width: 31,
  },
  key1: {
    right: 300,
    left: 38,
    height: 42,
    top: 0,
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
    height: 42,
    top: 0,
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
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  topRow: {
    height: 42,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  key10: {
    right: 299,
    height: 42,
    left: 0,
    top: 0,
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
    height: 42,
    top: 0,
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
    height: 42,
    right: 0,
    top: 0,
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
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  letter20: {
    width: 30,
  },
  key20: {
    right: 186,
    left: 37,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key21: {
    right: 149,
    left: 73,
    height: 42,
    top: 0,
    position: "absolute",
  },
  letter22: {
    width: 33,
  },
  key22: {
    right: 110,
    left: 110,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key23: {
    right: 74,
    left: 149,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key24: {
    right: 37,
    left: 185,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key25: {
    left: 222,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  keys1: {
    right: 58,
    left: 58,
    height: 42,
    top: 0,
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
    height: 42,
    right: 0,
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
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
    flex: 1,
  },
  key28: {
    width: 91,
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
    right: 0,
    height: 34,
    left: 1,
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
    marginLeft: -205,
    bottom: 0,
    left: "50%",
  },
  activityTextingInitiative: {
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.textWhite,
  },
});

export default ActivityTextingInitiative2;
