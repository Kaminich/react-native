import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Padding, Border, FontSize } from "../../GlobalStyles";

const LogNhChatViewNgiMtR = () => {
  return (
    <View style={styles.logNhChatViewNgiMtR}>
      <View style={styles.roomheaderParent}>
        <View style={[styles.roomheader, styles.roomheaderBorder]}>
          <Image
            style={[styles.leftIcon, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt54.png")}
            />
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
                    Lê Minh Trí
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
                <View style={[styles.purple, styles.purpleFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.purpleFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>+4</Text>
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
        <View style={[styles.khungChat, styles.khungChatFlexBox]}>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.textClr]}>12:05</Text>
              <View style={styles.logMessagenormal}>
                <Text style={[styles.bn, styles.bnTypo]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.textLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi cần hỗ trợ
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Chào bạn, tôi có thể giúp gì cho bạn
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={[styles.messagestatus, styles.squareIconLayout]} />
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Tôi muốn tìm hiểu về sản phẩm dịch vụ bên bạn, vui lòng tư
                    vấn giúp tôi
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell1, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH1, styles.tiCnHTypo]}>
                    Cảm ơn bạn đã quan tâm
                  </Text>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox]}>
                <View style={[styles.messagestatus, styles.squareIconLayout]} />
              </View>
            </View>
            <View style={[styles.messagecell, styles.messagecellFlexBox]}>
              <View style={styles.avtFlexBox}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
              </View>
              <Text style={[styles.huongnt256, styles.bnTypo]}>HuongNT256</Text>
              <View style={[styles.messageitem, styles.messageitemLayout]}>
                <View style={[styles.messageTypetext, styles.messageFlexBox]}>
                  <Text style={[styles.tiCnH, styles.tiCnHTypo]}>
                    Gửi cho tôi xin thông tin
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.messagecell5, styles.messagecellFlexBox]}>
              <View style={[styles.messageitem1, styles.messageitemLayout]}>
                <View style={[styles.messageTypefile, styles.messageFlexBox]}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/attachment--filetypes.png")}
                  />
                  <View style={styles.fileName}>
                    <Text
                      style={[styles.fileDinhKemdoc, styles.textLayout]}
                      numberOfLines={1}
                    >
                      file_dinh_kem.doc
                    </Text>
                    <Text style={styles.kb}>4.2 KB</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.status, styles.avtFlexBox1]}>
                <Image
                  style={[styles.messagestatus, styles.squareIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/messagestatus3.png")}
                />
              </View>
            </View>
            <View style={[styles.messagelogAction1, styles.messagecellFlexBox]}>
              <Text style={[styles.time, styles.textClr]}>12:05</Text>
              <View style={styles.logMessagenormal1}>
                <Text style={[styles.bn, styles.bnTypo]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.textLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={styles.helperText}>
            <Text style={[styles.description, styles.textLayout]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.khungChatFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer, styles.icon1FlexBox]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={styles.nhpTinNhn}>Nhập tin nhắn</Text>
              </View>
              <Image
                style={styles.emojiIcon}
                resizeMode="cover"
                source={require("../../assets/emoji111.png")}
              />
            </View>
            <View style={[styles.icon1, styles.icon1FlexBox]}>
              <Image
                style={[styles.leftIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/camera9.png")}
              />
            </View>
            <View style={[styles.icon1, styles.icon1FlexBox]}>
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
      <View style={styles.logNhChatViewNgiMtRChild} />
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
            <Text style={[styles.text1, styles.titleTypo]}>Lưu</Text>
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
                source={require("../../assets/frame-42731876728.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text2, styles.textLayout]}>
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
                    <Text style={[styles.text3, styles.labelTypo]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text3, styles.labelTypo]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.logCon}>
              <View style={styles.activityFeedLog}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon27.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      01/06/2022 11:00:03
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        Lê Minh Trí
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        nhắn tin
                      </Text>
                      <Text
                        style={[styles.object, styles.textLayout]}
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
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon24.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      01/06/2022 11:04:45
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HaLT82
                      </Text>
                      <Text
                        style={[styles.action, styles.textLayout]}
                      >{`đã chỉ định chat cho `}</Text>
                      <Text
                        style={[styles.fptCameraH, styles.textLayout]}
                        numberOfLines={1}
                      >{`HaDT53 `}</Text>
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
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon24.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      01/06/2022 11:30:22
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HaLT82
                      </Text>
                      <Text
                        style={[styles.action, styles.textLayout]}
                      >{`đã chỉ định chat cho người khác `}</Text>
                      <Text
                        style={[styles.object, styles.textLayout]}
                        numberOfLines={1}
                      >
                        FPT Camera Hà Nội...
                      </Text>
                    </View>
                    <Text style={[styles.giDchV, styles.dchTypo]}>
                      “Gửi thông tin sản phẩm”
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.activityFeedLog4, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame3.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon4.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      01/06/2022 11:30:22
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        đã tạo đơn hàng
                      </Text>
                      <Text
                        style={[styles.object, styles.textLayout]}
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
                style={[styles.activityFeedLog4, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon27.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      02/06/2022 12:00:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        Lê Minh Trí
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        nhắn tin
                      </Text>
                      <Text
                        style={[styles.object, styles.textLayout]}
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
                style={[styles.activityFeedLog4, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon29.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      02/06/2022 12:01:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        đã chặn
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.textLayout]}
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
                style={[styles.activityFeedLog4, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon30.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      02/06/2022 12:02:15
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        đã bỏ chặn
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.textLayout]}
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
                style={[styles.activityFeedLog4, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon7.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      02/06/2022 13:00:11
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        hoàn tất
                      </Text>
                      <Text
                        style={[styles.object, styles.textLayout]}
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
                style={[styles.activityFeedLog4, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon8.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      02/06/2022 14:00:42
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HuongNT256
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        mở lại
                      </Text>
                      <Text
                        style={[styles.object, styles.textLayout]}
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
                style={[styles.activityFeedLog4, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon24.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      03/06/2022 08:34:00
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HaDT53
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        đã chỉ định chat cho
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.textLayout]}
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
                style={[styles.activityFeedLog4, styles.activitySpaceBlock]}
              >
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame2.png")}
                />
                <View style={styles.content1}>
                  <Image
                    style={styles.warningIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/activity-feed--icon24.png")}
                  />
                  <View style={styles.hyperlink}>
                    <Text style={[styles.text5, styles.textLayout]}>
                      03/06/2022 08:35:00
                    </Text>
                    <View style={[styles.content2, styles.content2SpaceBlock]}>
                      <Text style={[styles.user, styles.textLayout]}>
                        HaDT53
                      </Text>
                      <Text style={[styles.action, styles.textLayout]}>
                        đã chỉ định chat cho
                      </Text>
                      <Text
                        style={[styles.fptCameraH, styles.textLayout]}
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
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.minusSquareIcon, styles.squareIconLayout]}
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
                source={require("../../assets/frame-42731876728.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text2, styles.textLayout]}>
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
                    <Text style={[styles.text3, styles.labelTypo]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text3, styles.labelTypo]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.minusSquareIcon, styles.squareIconLayout]}
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
                source={require("../../assets/frame-42731876727.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text2, styles.textLayout]}>
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
                    <Text style={[styles.text3, styles.labelTypo]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text3, styles.labelTypo]}>
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
                      source={require("../../assets/uangledoubleup2.png")}
                    />
                  </View>
                  <View style={[styles.frameView, styles.content2SpaceBlock]}>
                    <View style={styles.giLuxWifi6FptTelecomParent}>
                      <Text style={[styles.giLuxWifi, styles.thuGnClr]}>
                        Gói Lux (wifi 6) - FPT Telecom
                      </Text>
                      <Text style={[styles.text22, styles.textClr]}>2</Text>
                    </View>
                    <View style={[styles.roomlistNhn, styles.countSpaceBlock]}>
                      <Text style={[styles.giLuxWifi, styles.thuGnClr]}>
                        Internet cá nhân - FPT Telecom
                      </Text>
                      <Text style={[styles.text22, styles.textClr]}>1</Text>
                    </View>
                    <View style={[styles.roomlistNhn, styles.countSpaceBlock]}>
                      <Text style={[styles.giLuxWifi, styles.thuGnClr]}>
                        Liên hệ - FPT Telecom
                      </Text>
                      <Text style={[styles.text22, styles.textClr]}>1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.minusSquareIcon, styles.squareIconLayout]}
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
                source={require("../../assets/frame-4273187673.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text2, styles.textLayout]}>
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
                    236.178.229.134
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
                    <Text style={[styles.text3, styles.labelTypo]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text3, styles.labelTypo]}>
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
                      source={require("../../assets/uangledoubleup2.png")}
                    />
                  </View>
                  <View style={[styles.frameView, styles.content2SpaceBlock]}>
                    <View style={styles.giLuxWifi6FptTelecomParent}>
                      <Text style={[styles.giLuxWifi, styles.thuGnClr]}>
                        Gói Lux (wifi 6) - FPT Telecom
                      </Text>
                      <Text style={[styles.text22, styles.textClr]}>2</Text>
                    </View>
                    <View style={[styles.roomlistNhn, styles.countSpaceBlock]}>
                      <Text style={[styles.giLuxWifi, styles.thuGnClr]}>
                        Internet cá nhân - FPT Telecom
                      </Text>
                      <Text style={[styles.text22, styles.textClr]}>1</Text>
                    </View>
                    <View style={[styles.roomlistNhn, styles.countSpaceBlock]}>
                      <Text style={[styles.giLuxWifi, styles.thuGnClr]}>
                        Liên hệ - FPT Telecom
                      </Text>
                      <Text style={[styles.text22, styles.textClr]}>1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.minusSquareIcon, styles.squareIconLayout]}
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
                source={require("../../assets/frame-4273187674.png")}
              />
              <View style={styles.nameParent}>
                <View style={styles.parent}>
                  <Text style={[styles.text2, styles.textLayout]}>
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
                    bình luận
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
                    <Text style={[styles.text3, styles.labelTypo]}>12</Text>
                  </View>
                  <View style={[styles.duration, styles.tinNhnSpaceBlock]}>
                    <Image
                      style={[styles.icon10Message, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../../assets/3-watch.png")}
                    />
                    <Text style={[styles.text3, styles.labelTypo]}>
                      00:08:12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.activityFeedLog12}>
              <View style={styles.name}>
                <Image
                  style={styles.activityFeedLogChild}
                  resizeMode="cover"
                  source={require("../../assets/frame.png")}
                />
                <View style={styles.content23}>
                  <Image
                    style={[styles.minusSquareIcon, styles.squareIconLayout]}
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
            <View style={[styles.button1, styles.buttonFlexBox]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  roomheaderBorder: {
    borderBottomWidth: 1,
    borderColor: Color.divider,
    flexDirection: "row",
  },
  leftIconLayout: {
    height: 24,
    width: 24,
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
  purpleFlexBox: {
    backgroundColor: Color.tagYellow500,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_base,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  redFlexBox: {
    borderRadius: Border.br_base,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  khungChatFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textClr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  bnTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  messagecellFlexBox: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  messageitemLayout: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
    flexDirection: "row",
  },
  messageFlexBox: {
    maxWidth: 270,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  tiCnHTypo: {
    maxWidth: 238,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  avtFlexBox: {
    paddingBottom: Padding.p_9xs,
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  avtFlexBox1: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon1FlexBox: {
    marginLeft: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  homeLayout: {
    height: 5,
    width: 134,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    left: "50%",
    bottom: 8,
    position: "absolute",
  },
  actionSheetPosition1: {
    marginLeft: -187.5,
    left: "50%",
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
  actionSheetPosition: {
    bottom: -20,
    position: "absolute",
  },
  composerSpaceBlock: {
    paddingRight: Padding.p_21xl,
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
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
  content2SpaceBlock: {
    marginTop: 2,
    alignSelf: "stretch",
  },
  dchTypo: {
    fontStyle: "italic",
    marginTop: 2,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  activitySpaceBlock: {
    width: 343,
    flexDirection: "row",
  },
  thuGnClr: {
    color: Color.blue,
    textAlign: "left",
    letterSpacing: 0,
  },
  emojiDictationFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonFlexBox: {
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    letterSpacing: 0,
    marginLeft: 8,
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  letterPosition1: {
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
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
    color: Color.black,
    top: "50%",
    lineHeight: 21,
    fontFamily: FontFamily.defaultRegularCallout,
    fontSize: FontSize.calloutRegular_size,
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
  leftIcon: {
    overflow: "hidden",
  },
  roommessageavtIcon: {
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
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "500",
    letterSpacing: 0,
    marginLeft: 8,
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
    fontFamily: FontFamily.text14Regular,
  },
  closeIcon: {
    display: "none",
    height: 12,
    marginLeft: 8,
  },
  purple: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
  },
  yellow: {
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  blue: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  green: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  red: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  xTag: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
  },
  roomlistNhn: {
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
    alignSelf: "stretch",
  },
  time: {
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    letterSpacing: 0,
  },
  bn: {
    color: Color.brandPrimary,
  },
  honTtCuc: {
    width: 173,
    textAlign: "center",
    marginLeft: 2,
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  logMessagenormal: {
    width: 343,
    display: "none",
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
  huongnt256: {
    color: Color.brandPrimary,
    display: "none",
    marginLeft: 8,
  },
  tiCnH: {
    color: Color.textColorPrimary,
  },
  messageTypetext: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
  },
  messageitem: {
    backgroundColor: Color.tagGray100,
    marginLeft: 8,
  },
  messagecell: {
    overflow: "hidden",
    flexDirection: "row",
  },
  tiCnH1: {
    color: Color.textWhite,
  },
  messageitem1: {
    backgroundColor: Color.brandPrimary,
    justifyContent: "flex-end",
  },
  messagestatus: {
    height: 16,
  },
  status: {
    marginLeft: 4,
  },
  messagecell1: {
    justifyContent: "flex-end",
    overflow: "hidden",
    flexDirection: "row",
  },
  fileDinhKemdoc: {
    maxWidth: 210,
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    overflow: "hidden",
  },
  kb: {
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    color: Color.textGrayF3F4F6,
    maxWidth: 210,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    letterSpacing: 0,
  },
  fileName: {
    maxWidth: 210,
    marginLeft: 8,
    justifyContent: "center",
  },
  messageTypefile: {
    paddingVertical: Padding.p_7xs,
  },
  messagecell5: {
    justifyContent: "flex-end",
    display: "none",
    overflow: "hidden",
    flexDirection: "row",
  },
  logMessagenormal1: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
  },
  messagelogAction1: {
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
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  description: {
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    flex: 1,
  },
  helperText: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_5xs,
    display: "none",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
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
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
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
    paddingRight: Padding.p_21xl,
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
    borderWidth: 1,
    flex: 1,
  },
  icon1: {
    height: 40,
  },
  composeBar1: {
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_5xs,
  },
  homeIndicator: {
    marginLeft: -66.5,
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  composeBar: {
    backgroundColor: Color.neutral3F5F5F5,
    justifyContent: "flex-end",
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
  text: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.defaultRegularCallout,
    top: 1,
    width: 54,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    height: 20,
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
    top: 1,
    left: "50%",
    height: 12,
    position: "absolute",
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
  logNhChatViewNgiMtRChild: {
    height: 812,
    opacity: 0.4,
    top: 0,
    backgroundColor: Color.black,
    width: 375,
    left: 0,
    position: "absolute",
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
  text1: {
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
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Color.divider,
    width: 375,
  },
  activityFeedLogChild: {
    maxHeight: "100%",
    width: 24,
    alignSelf: "stretch",
  },
  text2: {
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    color: Color.textPrimary,
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
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
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
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
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
  text3: {
    marginLeft: 4,
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
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
  text5: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  object: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
    display: "none",
    overflow: "hidden",
    flex: 1,
  },
  content2: {
    alignItems: "center",
    flexDirection: "row",
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
  activityFeedLog4: {
    display: "none",
  },
  logCon: {
  },
  minusSquareIcon: {
    height: 16,
    overflow: "hidden",
  },
  thuGn: {
    marginLeft: 4,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
  },
  content23: {
    width: 153,
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
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
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  activityFeed1: {
    width: 343,
  },
  fptCameraH2: {
    marginLeft: 4,
    color: Color.brandPrimary,
    textAlign: "left",
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
    letterSpacing: 0,
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
  giLuxWifi: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    fontFamily: FontFamily.text14Regular,
    height: 16,
    overflow: "hidden",
    flex: 1,
  },
  text22: {
    textAlign: "right",
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    marginLeft: 2,
    letterSpacing: 0,
    width: 24,
  },
  giLuxWifi6FptTelecomParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameView: {
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.tagGray100,
    paddingHorizontal: Padding.p_5xs,
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
  dsHotNg: {
    backgroundColor: Color.textWhite,
  },
  text34: {
    color: Color.textPrimary,
  },
  iconsetplaceholder3: {
    display: "none",
    marginLeft: 8,
  },
  button1: {
    borderColor: Color.gray4D9D9D9,
    height: 41,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  text35: {
    color: Color.textWhite,
  },
  button2: {
    marginLeft: 16,
    backgroundColor: Color.brandPrimary,
    height: 40,
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
  logNhChatViewNgiMtR: {
    width: "100%",
    height: 681,
    backgroundColor: Color.textWhite,
  },
});

export default LogNhChatViewNgiMtR;
