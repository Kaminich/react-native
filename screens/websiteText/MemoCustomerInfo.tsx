import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../../GlobalStyles";

const MemoCustomerInfo = () => {
  return (
    <View style={styles.ghiNhKhchHngInfo}>
      <View style={styles.roomheaderParent}>
        <View style={[styles.roomheader, styles.roomheaderBorder]}>
          <Image
            style={[styles.leftIcon, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <View style={styles.roommessageavt}>
              <View style={styles.avt}>
                <Text style={[styles.k, styles.kLayout]}>1</Text>
              </View>
              <Image
                style={styles.socialIcon}
                resizeMode="cover"
                source={require("../../assets/social16.png")}
              />
            </View>
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Image
                  style={[styles.mobileIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/mobile1.png")}
                />
                <View style={styles.returnVisitorParent}>
                  <Image
                    style={[styles.returnVisitorIcon, styles.warningIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/return-visitor1.png")}
                  />
                  <Text style={[styles.lMinhTr, styles.fptTypo]}>
                    154.214.144.116
                  </Text>
                  <Image
                    style={[styles.ficheckSquareIcon, styles.squareIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/fichecksquare.png")}
                  />
                  <Image
                    style={styles.statusIcon}
                    resizeMode="cover"
                    source={require("../../assets/status.png")}
                  />
                </View>
              </View>
              <View style={[styles.roomlistNhn, styles.countSpaceBlock]}>
                <View style={[styles.purple, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    chưa gọi
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>+4</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.thmNHng, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../../assets/thm-n-hng.png")}
          />
          <Image
            style={[styles.optionsVerticalIcon, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../../assets/optionsvertical.png")}
          />
        </View>
        <View style={[styles.khungChat, styles.avt1FlexBox]}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.textClr]}>11:00</Text>
              <View style={styles.logMessagenormal}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo1}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                    <Text style={styles.text2}>{` `}</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.truyCp1}>{`đã truy cập `}</Text>
                  </Text>
                  <Text
                    style={[styles.internetCNhnFptTelecom, styles.textTypo1]}
                  >
                    <Text style={styles.internetCNhn}>
                      {" "}
                      Internet cá nhân - FPT Telecom
                    </Text>
                    {` `}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellFlexBox]}>
              <View style={[styles.avt1, styles.avt1FlexBox]}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt11.png")}
                />
              </View>
              <View style={styles.huongnt256Parent}>
                <Text style={[styles.huongnt256, styles.labelLayout]}>
                  https://fptcore.net
                </Text>
                <View style={styles.messageitem}>
                  <View style={styles.messageTypetext}>
                    <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                      Lời chào tự động khi khách vào web
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.messagecellFlexBox}>
              <Text style={[styles.time, styles.textClr]}>11:02</Text>
              <View style={styles.logMessagenormal}>
                <Text
                  style={[styles.truyCpInternetContainer, styles.textLayout]}
                >
                  <Text style={styles.textTypo1}>
                    <Text style={styles.text1}>154.214.144.116</Text>
                    <Text style={styles.text2}>{` `}</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.truyCp1}>{`đã truy cập `}</Text>
                  </Text>
                  <Text style={[styles.giLuxWifi, styles.textTypo1]}>
                    {" "}
                    Gói Lux (wifi 6) - FPT Telecom
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.messagecellFlexBox}>
              <Text style={[styles.time, styles.textClr]}>11:03</Text>
              <View style={styles.logMessagenormal2}>
                <Text style={[styles.text6, styles.textTypo1]}>
                  154.214.144.116
                </Text>
                <Text style={[styles.mRngCa, styles.textLayout]}>
                  đã mở rộng cửa sổ chat
                </Text>
                <Image
                  style={[styles.activityFeedIcon, styles.squareIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon21.png")}
                />
              </View>
            </View>
            <View style={styles.messagecellFlexBox}>
              <Text style={[styles.time, styles.textClr]}>11:04</Text>
              <View style={styles.logMessagenormal2}>
                <Text style={[styles.text6, styles.textTypo1]}>
                  154.214.144.116
                </Text>
                <Text style={[styles.mRngCa, styles.textLayout]}>
                  đã thu nhỏ cửa sổ chat
                </Text>
                <Image
                  style={[styles.activityFeedIcon, styles.squareIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon22.png")}
                />
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.avt1, styles.avt1FlexBox]}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo1]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem1}>
                <View style={styles.messageTypetext}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Gửi cho tôi xin thông tin
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.avt1, styles.avt1FlexBox]}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo1]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem1}>
                <View style={styles.messageTypetext}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagelogAction4, styles.messagecellFlexBox]}>
              <Text style={[styles.time, styles.textClr]}>12:05</Text>
              <View style={styles.logMessagenormal}>
                <Text style={[styles.text6, styles.textTypo1]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.textLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.avt1, styles.avt1FlexBox]}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo1]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem1}>
                <View style={styles.messageTypetext}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.avt1, styles.avt1FlexBox]}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt2561, styles.textTypo1]}>
                HuongNT256
              </Text>
              <View style={styles.messageitem1}>
                <View style={styles.messageTypetext}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={[styles.helperText, styles.helperTextBg]}>
            <Text style={[styles.description, styles.textLayout]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.helperTextBg]}>
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer, styles.composerSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={styles.nhpTinNhn}>Nhập tin nhắn</Text>
              </View>
              <Image
                style={styles.emojiIcon}
                resizeMode="cover"
                source={require("../../assets/emoji111.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/camera.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/mic3.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.statusbarIphone13, styles.actionSheetPosition1]}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../../assets/notch1.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text8, styles.text8Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text8Position]}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <View style={styles.ghiNhKhchHngInfoChild} />
      <View style={[styles.actionSheet, styles.actionSheetPosition]}>
        <View style={[styles.actionSheetheader, styles.composerSpaceBlock]}>
          <Image
            style={[styles.leftIcon1, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../../assets/27-left11.png")}
          />
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, styles.titleTypo]} numberOfLines={1}>
              Hoạt động
            </Text>
          </View>
          <View style={styles.button}>
            <Image
              style={[styles.iconsetplaceholder, styles.leftIconLayout]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder3.png")}
            />
            <Text style={[styles.text9, styles.titleTypo]}>Lưu</Text>
            <Image
              style={[styles.iconsetplaceholder1, styles.leftIconLayout]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder3.png")}
            />
          </View>
          <Image
            style={styles.closeIcon7}
            resizeMode="cover"
            source={require("../../assets/23-close4.png")}
          />
        </View>
        <View style={[styles.dsHotNg, styles.dsHotNgSpaceBlock]}>
          <View style={styles.activityFeed}>
            <View style={styles.activityFeedLog}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame-42731876716.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text10, styles.textLayout]}>
                    01/06/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon, styles.warningIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={[styles.content, styles.countSpaceBlock]}>
                  <Text style={[styles.user, styles.textLayout]}>
                    Lê Minh Trí
                  </Text>
                  <Text style={[styles.action, styles.textLayout]}>
                    nhắn tin
                  </Text>
                  <Text
                    style={[styles.fptCameraH, styles.textLayout]}
                    numberOfLines={1}
                  >
                    FPT Camera Hà Nội
                  </Text>
                </View>
                <View style={[styles.count, styles.countSpaceBlock]}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message3.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog1}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={[styles.addSquareIcon, styles.squareIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/add-square.png")}
                  />
                  <Text style={[styles.xemThmHot, styles.textLayout]}>
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
                source={require("../../assets/frame-42731876719.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text10, styles.textLayout]}>
                    01/06/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon, styles.warningIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={[styles.content, styles.countSpaceBlock]}>
                  <Text style={[styles.user, styles.textLayout]}>
                    Lê Minh Trí
                  </Text>
                  <Text style={[styles.action, styles.textLayout]}>
                    nhắn tin
                  </Text>
                  <Text
                    style={[styles.fptCameraH, styles.textLayout]}
                    numberOfLines={1}
                  >
                    FPT Camera Hà Nội
                  </Text>
                </View>
                <View style={[styles.count, styles.countSpaceBlock]}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message3.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog1}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={[styles.addSquareIcon, styles.squareIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/add-square.png")}
                  />
                  <Text style={[styles.xemThmHot, styles.textLayout]}>
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
                source={require("../../assets/frame-42731876720.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text10, styles.textLayout]}>
                    31/05/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon, styles.warningIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={[styles.content, styles.countSpaceBlock]}>
                  <Text style={[styles.user, styles.textLayout]}>
                    Lê Minh Trí
                  </Text>
                  <Text style={[styles.action, styles.textLayout]}>
                    đã truy cập
                  </Text>
                  <Text
                    style={[styles.fptCameraH2, styles.textLayout]}
                    numberOfLines={1}
                  >
                    fptcore.com/combo-internet-truyen-hinh/
                  </Text>
                </View>
                <View style={[styles.count, styles.countSpaceBlock]}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message3.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog5}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame1.png")}
              />
              <View style={styles.content5}>
                <Image
                  style={styles.warningIconLayout}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon.png")}
                />
                <View style={styles.hyperlink}>
                  <View
                    style={[
                      styles.ltXemTrang4Parent,
                      styles.emojiDictationFlexBox,
                    ]}
                  >
                    <Text style={[styles.ltXemTrang, styles.textLayout]}>
                      Lượt xem trang: 4
                    </Text>
                    <Image
                      style={[styles.doubleDownIcon, styles.warningIconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/double-down.png")}
                    />
                    <Image
                      style={[
                        styles.uangleDoubleUpIcon,
                        styles.warningIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../../assets/uangledoubleup1.png")}
                    />
                  </View>
                  <View style={styles.frameView}>
                    <View style={styles.giLuxWifi6FptTelecomParent}>
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Gói Lux (wifi 6) - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>2</Text>
                    </View>
                    <View
                      style={[
                        styles.internetCNhnFptTelecomParent,
                        styles.countSpaceBlock,
                      ]}
                    >
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Internet cá nhân - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>1</Text>
                    </View>
                    <View
                      style={[
                        styles.internetCNhnFptTelecomParent,
                        styles.countSpaceBlock,
                      ]}
                    >
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Liên hệ - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog1}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={[styles.addSquareIcon, styles.squareIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/add-square.png")}
                  />
                  <Text style={[styles.xemThmHot, styles.textLayout]}>
                    Xem thêm hoạt động
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.activityFeed3}>
            <View style={styles.activityFeedLog}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame-4273187673.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text10, styles.textLayout]}>
                    31/05/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon3, styles.warningIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={[styles.content, styles.countSpaceBlock]}>
                  <Text style={[styles.user, styles.textLayout]}>
                    154.214.144.116
                  </Text>
                  <Text style={[styles.action, styles.textLayout]}>
                    đã truy cập
                  </Text>
                  <Text
                    style={[styles.fptCameraH2, styles.textLayout]}
                    numberOfLines={1}
                  >
                    fptcore.com/combo-internet-truyen-hinh/
                  </Text>
                </View>
                <View style={styles.countSpaceBlock}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message3.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog5}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame1.png")}
              />
              <View style={styles.content5}>
                <Image
                  style={styles.warningIconLayout}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon.png")}
                />
                <View style={styles.hyperlink}>
                  <View
                    style={[
                      styles.ltXemTrang4Parent,
                      styles.emojiDictationFlexBox,
                    ]}
                  >
                    <Text style={[styles.ltXemTrang, styles.textLayout]}>
                      Lượt xem trang: 4
                    </Text>
                    <Image
                      style={[styles.doubleDownIcon, styles.warningIconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/double-down.png")}
                    />
                    <Image
                      style={[
                        styles.uangleDoubleUpIcon,
                        styles.warningIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../../assets/uangledoubleup1.png")}
                    />
                  </View>
                  <View style={styles.frameView}>
                    <View style={styles.giLuxWifi6FptTelecomParent}>
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Gói Lux (wifi 6) - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>2</Text>
                    </View>
                    <View
                      style={[
                        styles.internetCNhnFptTelecomParent,
                        styles.countSpaceBlock,
                      ]}
                    >
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Internet cá nhân - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>1</Text>
                    </View>
                    <View
                      style={[
                        styles.internetCNhnFptTelecomParent,
                        styles.countSpaceBlock,
                      ]}
                    >
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Liên hệ - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog1}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={[styles.addSquareIcon, styles.squareIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/add-square.png")}
                  />
                  <Text style={[styles.xemThmHot, styles.textLayout]}>
                    Xem thêm hoạt động
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.activityFeed3}>
            <View style={styles.activityFeedLog}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame-42731876720.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text10, styles.textLayout]}>
                    30/05/2022 11:00:03
                  </Text>
                  <Image
                    style={[styles.warningIcon3, styles.warningIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/4-warning2.png")}
                  />
                </View>
                <View style={[styles.content, styles.countSpaceBlock]}>
                  <Text style={[styles.user, styles.textLayout]}>
                    Lê Minh Trí
                  </Text>
                  <Text style={[styles.action, styles.textLayout]}>
                    đã truy cập
                  </Text>
                  <Text
                    style={[styles.fptCameraH2, styles.textLayout]}
                    numberOfLines={1}
                  >
                    fptcore.com/combo-internet-truyen-hinh/
                  </Text>
                </View>
                <View style={[styles.count, styles.countSpaceBlock]}>
                  <View style={[styles.tinNhn, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/icon10-message3.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text11, styles.labelLayout]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog5}>
              <Image
                style={styles.activityFeedLogChild}
                resizeMode="cover"
                source={require("../../assets/frame1.png")}
              />
              <View style={styles.content5}>
                <Image
                  style={styles.warningIconLayout}
                  resizeMode="cover"
                  source={require("../../assets/activity-feed--icon.png")}
                />
                <View style={styles.hyperlink}>
                  <View
                    style={[
                      styles.ltXemTrang4Parent,
                      styles.emojiDictationFlexBox,
                    ]}
                  >
                    <Text style={[styles.ltXemTrang, styles.textLayout]}>
                      Lượt xem trang: 4
                    </Text>
                    <Image
                      style={[styles.doubleDownIcon, styles.warningIconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/double-down.png")}
                    />
                    <Image
                      style={[
                        styles.uangleDoubleUpIcon,
                        styles.warningIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../../assets/uangledoubleup1.png")}
                    />
                  </View>
                  <View style={styles.frameView}>
                    <View style={styles.giLuxWifi6FptTelecomParent}>
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Gói Lux (wifi 6) - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>2</Text>
                    </View>
                    <View
                      style={[
                        styles.internetCNhnFptTelecomParent,
                        styles.countSpaceBlock,
                      ]}
                    >
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Internet cá nhân - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>1</Text>
                    </View>
                    <View
                      style={[
                        styles.internetCNhnFptTelecomParent,
                        styles.countSpaceBlock,
                      ]}
                    >
                      <Text style={[styles.giLuxWifi1, styles.timeLayout]}>
                        Liên hệ - FPT Telecom
                      </Text>
                      <Text style={[styles.text19, styles.textClr]}>1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog1}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={[styles.addSquareIcon, styles.squareIconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/add-square.png")}
                  />
                  <Text style={[styles.xemThmHot, styles.textLayout]}>
                    Xem thêm hoạt động
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actionSheetfooter}>
          <View style={[styles.buttonParent, styles.dsHotNgSpaceBlock]}>
            <View style={styles.buttonBorder}>
              <Image
                style={[styles.iconsetplaceholder, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
              <Text style={[styles.text34, styles.textTypo]}>Secondary</Text>
              <Image
                style={[styles.iconsetplaceholder3, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
            </View>
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder5.png")}
              />
              <Text style={[styles.text35, styles.textTypo]}>Primary</Text>
              <Image
                style={[styles.iconsetplaceholder3, styles.leftIconLayout]}
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
            <View style={[styles.emojiDictation, styles.emojiDictationFlexBox]}>
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
            <View style={[styles.homeindicator1, styles.actionSheetPosition]}>
              <View style={[styles.homeIndicator1, styles.homeLayout]} />
            </View>
          </View>
          <View style={styles.homeindicator2}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
      </View>
      <View style={styles.ghiNhKhchHngInfoItem} />
      <View style={styles.confirmation}>
        <Image
          style={[styles.doubleDownIcon, styles.warningIconLayout]}
          resizeMode="cover"
          source={require("../../assets/23-close.png")}
        />
        <View style={styles.contentParent}>
          <View style={styles.messagelogAction}>
            <View style={styles.confirmationIcon}>
              <Image
                style={styles.validateIcon}
                resizeMode="cover"
                source={require("../../assets/validate4.png")}
              />
            </View>
            <View style={styles.titleParent}>
              <Text style={[styles.title1, styles.textTypo1]}>
                Ghi nhớ khách hàng Fchat
              </Text>
              <Text style={[styles.text36, styles.textLayout]}>
                Thông qua cookies, hệ thống nhận diện khách hàng có thể đã tương
                tác với bạn trước đó
              </Text>
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <View style={[styles.button3, styles.buttonBorder]}>
              <Image
                style={[styles.iconsetplaceholder, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder7.png")}
              />
              <Text style={[styles.text34, styles.textTypo]}>Hủy</Text>
              <Image
                style={[styles.iconsetplaceholder3, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder7.png")}
              />
            </View>
            <View style={[styles.button4, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text35, styles.textTypo]}>Đã hiểu</Text>
              <Image
                style={[styles.iconsetplaceholder3, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  roomheaderBorder: {
    borderBottomWidth: 1,
    borderColor: Color.divider,
  },
  leftIconLayout: {
    height: 24,
    width: 24,
  },
  kLayout: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    color: Color.textPrimary,
    letterSpacing: 0,
  },
  iconLayout: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  warningIconLayout: {
    height: 20,
    width: 20,
  },
  fptTypo: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
  },
  squareIconLayout: {
    width: 16,
    height: 16,
  },
  countSpaceBlock: {
    marginTop: 4,
    flexDirection: "row",
  },
  redFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelLayout: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  avt1FlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  textClr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  textTypo1: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  messagecellFlexBox: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  tiCnHTypo: {
    maxWidth: 238,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  helperTextBg: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  composerSpaceBlock: {
    paddingRight: Padding.p_21xl,
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  homeLayout: {
    height: 5,
    width: 134,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    left: "50%",
    bottom: 8,
    position: "absolute",
  },
  actionSheetPosition1: {
    marginLeft: -205,
    left: "50%",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  text8Position: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  actionSheetPosition: {
    bottom: 0,
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
  },
  dsHotNgSpaceBlock: {
    padding: Padding.p_base,
    width: 375,
  },
  tinNhnSpaceBlock: {
    backgroundColor: Color.tagBlue100,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  emojiDictationFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  timeLayout: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    letterSpacing: 0,
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    marginLeft: 8,
    fontFamily: FontFamily.text14Regular,
    letterSpacing: 0,
  },
  buttonFlexBox: {
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.brandPrimary,
    justifyContent: "center",
    height: 40,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  letterPosition1: {
    display: "flex",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    marginTop: -14,
    top: "50%",
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
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
    display: "flex",
    color: Color.labelColorLightPrimary,
    top: "50%",
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.defaultRegularCallout,
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  buttonBorder: {
    height: 41,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  leftIcon: {
    overflow: "hidden",
  },
  k: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  avt: {
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    backgroundColor: Color.tagGray100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_5xl,
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  socialIcon: {
    height: "37.5%",
    width: "37.5%",
    top: "62.5%",
    left: "62.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_base,
    bottom: "0%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  roommessageavt: {
    width: 40,
    height: 40,
  },
  mobileIcon: {
    display: "none",
    height: 12,
  },
  returnVisitorIcon: {
    display: "none",
  },
  lMinhTr: {
    textAlign: "left",
    marginLeft: 8,
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
  },
  ficheckSquareIcon: {
    height: 16,
    display: "none",
    marginLeft: 8,
    overflow: "hidden",
  },
  statusIcon: {
    width: 8,
    height: 8,
    marginLeft: 8,
  },
  returnVisitorParent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  name: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label: {
    color: Color.textWhite,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
  },
  closeIcon: {
    display: "none",
    height: 12,
    marginLeft: 8,
  },
  purple: {
    backgroundColor: Color.tagYellow500,
    paddingVertical: Padding.p_7xs,
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
  },
  yellow: {
    marginLeft: 2,
    backgroundColor: Color.tagYellow500,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  blue: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    display: "none",
  },
  green: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    display: "none",
  },
  red: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    display: "none",
  },
  xTag: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
  },
  roomlistNhn: {
    display: "none",
    alignSelf: "stretch",
  },
  nameParent: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 1,
  },
  room: {
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  thmNHng: {
    marginLeft: 10,
  },
  optionsVerticalIcon: {
    marginLeft: 10,
    overflow: "hidden",
  },
  roomheader: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: Color.divider,
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  time: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    letterSpacing: 0,
    textAlign: "center",
  },
  text1: {
    color: Color.brandPrimary,
  },
  text2: {
    color: Color.textPrimary,
  },
  truyCp1: {
    fontFamily: FontFamily.defaultRegularCallout,
  },
  internetCNhn: {
    textDecorationLine: "underline",
  },
  internetCNhnFptTelecom: {
    color: Color.blue,
  },
  truyCpInternetContainer: {
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.text14Regular_size,
    flex: 1,
  },
  logMessagenormal: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
  },
  messagelogAction: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  avtIcon: {
    borderRadius: Border.br_11xl,
    width: 28,
    height: 28,
  },
  avt1: {
    paddingBottom: Padding.p_9xs,
    flexDirection: "row",
  },
  huongnt256: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.textPrimary,
  },
  tiCnH: {
    color: Color.textWhite,
  },
  messageTypetext: {
    maxWidth: 270,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  messageitem: {
    backgroundColor: Color.brandPrimary,
    borderRadius: Border.br_xl,
    marginTop: 4,
    overflow: "hidden",
    flexDirection: "row",
  },
  huongnt256Parent: {
    marginLeft: 8,
  },
  messagecell: {
    overflow: "hidden",
    flexDirection: "row",
  },
  giLuxWifi: {
    textDecorationLine: "underline",
    color: Color.blue,
  },
  text6: {
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  mRngCa: {
    marginLeft: 2,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  activityFeedIcon: {
    marginLeft: 2,
    height: 16,
  },
  logMessagenormal2: {
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  huongnt2561: {
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    display: "none",
    marginLeft: 8,
    textAlign: "center",
    letterSpacing: 0,
  },
  tiCnH1: {
    color: Color.textColorPrimary,
  },
  messageitem1: {
    borderRadius: Border.br_xl,
    marginLeft: 8,
    backgroundColor: Color.tagGray100,
    overflow: "hidden",
    flexDirection: "row",
  },
  messagecell1: {
    display: "none",
    overflow: "hidden",
    flexDirection: "row",
  },
  honTtCuc: {
    width: 173,
    marginLeft: 2,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  messagelogAction4: {
    display: "none",
  },
  layoutBlocksVertical: {
    flex: 1,
  },
  khungChat: {
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_21xl,
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  description: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
    flex: 1,
  },
  helperText: {
    paddingHorizontal: Padding.p_base,
    width: 375,
  },
  icon: {
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  nhpTinNhn: {
    fontSize: FontSize.calloutRegular_size,
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  nhpTinNhnWrapper: {
    maxHeight: 72,
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  emojiIcon: {
    right: 8,
    zIndex: 1,
    bottom: 8,
    overflow: "hidden",
    height: 24,
    width: 24,
    position: "absolute",
  },
  composer: {
    borderRadius: Border.br_5xs,
    borderColor: Color.colorWhitesmoke_100,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_4xs,
    marginLeft: 12,
    borderWidth: 1,
    paddingRight: Padding.p_21xl,
    alignItems: "center",
    flex: 1,
  },
  icon1: {
    marginLeft: 12,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  composeBar1: {
    paddingHorizontal: Padding.p_xs,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  homeIndicator: {
    marginLeft: -66.5,
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  composeBar: {
    justifyContent: "flex-end",
    backgroundColor: Color.neutral3F5F5F5,
    width: 375,
  },
  roomheaderParent: {
    top: 47,
    height: 765,
    width: 375,
    left: 0,
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
  text8: {
    color: Color.colorGray_200,
    width: 54,
    top: 1,
    fontFamily: FontFamily.defaultRegularCallout,
    fontWeight: "600",
    height: 20,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    left: 0,
  },
  statusbarTime: {
    marginLeft: -27,
    top: 0,
    borderRadius: Border.br_5xl,
    height: 21,
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
    left: "50%",
    height: 12,
  },
  rightSide: {
    marginLeft: 86.5,
    top: 19,
    width: 77,
  },
  statusbarIphone13: {
    height: 47,
    top: 0,
    overflow: "hidden",
    width: 375,
    position: "absolute",
  },
  ghiNhKhchHngInfoChild: {
    backgroundColor: Color.colorGray_400,
    opacity: 0.7,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
    height: 812,
  },
  leftIcon1: {
    zIndex: 0,
    overflow: "hidden",
  },
  title: {
    maxWidth: 260,
    textAlign: "center",
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
    display: "none",
  },
  text9: {
    marginLeft: 4,
    color: Color.brandPrimary,
    textAlign: "left",
  },
  iconsetplaceholder1: {
    marginLeft: 4,
    display: "none",
  },
  button: {
    borderRadius: Border.br_9xs,
    paddingHorizontal: 0,
    zIndex: 2,
    paddingVertical: Padding.p_11xs,
    right: 16,
    top: 20,
    justifyContent: "flex-end",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  closeIcon7: {
    opacity: 0,
    zIndex: 3,
    right: 16,
    top: 20,
    display: "none",
    overflow: "hidden",
    height: 24,
    width: 24,
    position: "absolute",
  },
  actionSheetheader: {
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_5xs,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Color.divider,
    width: 375,
  },
  activityFeedLogChild: {
    maxHeight: "100%",
    width: 24,
    alignSelf: "stretch",
  },
  text10: {
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Regular,
  },
  warningIcon: {
    marginLeft: 4,
    display: "none",
    overflow: "hidden",
  },
  parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  user: {
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    color: Color.textPrimary,
    letterSpacing: 0,
    fontSize: FontSize.text14Regular_size,
  },
  action: {
    marginLeft: 4,
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  fptCameraH: {
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    color: Color.textPrimary,
    letterSpacing: 0,
    fontSize: FontSize.text14Regular_size,
    overflow: "hidden",
    flex: 1,
  },
  content: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  icon10Message: {
    height: 12,
  },
  text11: {
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
  },
  activityFeedLog: {
    width: 343,
    flexDirection: "row",
  },
  addSquareIcon: {
    height: 16,
    overflow: "hidden",
  },
  xemThmHot: {
    marginLeft: 4,
    color: Color.brandPrimary,
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.text14Regular_size,
  },
  content1: {
    width: 153,
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  activityFeedLog1: {
    width: 343,
  },
  activityFeed: {
    width: 343,
    display: "none",
  },
  activityFeed1: {
    width: 343,
    display: "none",
  },
  fptCameraH2: {
    marginLeft: 4,
    color: Color.brandPrimary,
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.text14Regular_size,
    overflow: "hidden",
    flex: 1,
  },
  ltXemTrang: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  doubleDownIcon: {
    overflow: "hidden",
  },
  uangleDoubleUpIcon: {
    display: "none",
    overflow: "hidden",
  },
  ltXemTrang4Parent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  giLuxWifi1: {
    color: Color.blue,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    overflow: "hidden",
    flex: 1,
  },
  text19: {
    textAlign: "right",
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    letterSpacing: 0,
    marginLeft: 2,
    width: 24,
  },
  giLuxWifi6FptTelecomParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  internetCNhnFptTelecomParent: {
    alignSelf: "stretch",
  },
  frameView: {
    paddingVertical: Padding.p_9xs,
    marginTop: 2,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
    backgroundColor: Color.tagGray100,
    alignSelf: "stretch",
  },
  hyperlink: {
    marginLeft: 4,
    justifyContent: "center",
    flex: 1,
  },
  content5: {
    marginLeft: 8,
    flexDirection: "row",
    flex: 1,
  },
  activityFeedLog5: {
    width: 343,
    flexDirection: "row",
  },
  warningIcon3: {
    marginLeft: 4,
    overflow: "hidden",
  },
  activityFeed3: {
    width: 343,
  },
  dsHotNg: {
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  text34: {
    color: Color.textPrimary,
  },
  iconsetplaceholder3: {
    display: "none",
    marginLeft: 8,
  },
  text35: {
    color: Color.textWhite,
  },
  button2: {
    marginLeft: 16,
  },
  buttonParent: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  keycontainerShadowBox1: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
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
    top: 0,
    left: 0,
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
    top: 0,
    left: 0,
    position: "absolute",
  },
  key10: {
    right: 299,
    height: 42,
    top: 0,
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
    top: 0,
    left: 0,
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
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
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
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
  },
  homeindicator1: {
    left: 1,
    right: 0,
    height: 34,
  },
  alphabetickeyboard: {
    backgroundColor: Color.colorLightgray_100,
    height: 278,
    display: "none",
    overflow: "hidden",
    width: 375,
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
    left: "50%",
  },
  ghiNhKhchHngInfoItem: {
    opacity: 0.4,
    top: 0,
    backgroundColor: Color.labelColorLightPrimary,
    width: 375,
    left: 0,
    position: "absolute",
    height: 812,
  },
  validateIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  confirmationIcon: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.tagSky100,
    width: 60,
    height: 60,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title1: {
    textAlign: "center",
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  text36: {
    marginTop: 8,
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "center",
    alignSelf: "stretch",
  },
  titleParent: {
    marginTop: 16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  button3: {
    display: "none",
  },
  button4: {
    marginLeft: 12,
  },
  buttonGroup: {
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  contentParent: {
    alignSelf: "stretch",
  },
  confirmation: {
    marginTop: -131,
    marginLeft: -190,
    shadowColor: "rgba(5, 16, 55, 0.15)",
    shadowRadius: 30,
    elevation: 30,
    top: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_7xs,
    padding: Padding.p_base,
    left: "50%",
    width: 343,
    alignItems: "flex-end",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.textWhite,
  },
  ghiNhKhchHngInfo: {
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default MemoCustomerInfo;
