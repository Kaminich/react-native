import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Border, FontSize, Color, FontFamily } from "../../GlobalStyles";

const ChNhChatTmKim = () => {
  return (
    <View style={styles.chNhChatTmKim}>
      <View style={styles.roomheaderParent}>
        <View style={[styles.roomheader, styles.roomheaderSpaceBlock]}>
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
                  style={[styles.mobileIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/mobile1.png")}
                />
                <View style={styles.returnVisitorParent}>
                  <Image
                    style={[
                      styles.returnVisitorIcon,
                      styles.returnVisitorIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../../assets/return-visitor1.png")}
                  />
                  <Text style={styles.lMinhTr}>Lê Minh Trí</Text>
                  <Image
                    style={[styles.ficheckSquareIcon, styles.iconLayout]}
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
              <View style={styles.roomlistNhn}>
                <View style={[styles.purple, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>chưa gọi</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelTypo]}>+4</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
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
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={[styles.logMessagenormal, styles.logFlexBox]}>
                <Text style={[styles.bn, styles.kTypo]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.text2Typo]}>
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
              <Text style={[styles.huongnt256, styles.kTypo]}>HuongNT256</Text>
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
                <View style={styles.iconLayout} />
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
              <Text style={[styles.huongnt256, styles.kTypo]}>HuongNT256</Text>
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
                <View style={styles.iconLayout} />
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
              <Text style={[styles.huongnt256, styles.kTypo]}>HuongNT256</Text>
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
                    style={styles.returnVisitorIconLayout}
                    resizeMode="cover"
                    source={require("../../assets/attachment--filetypes.png")}
                  />
                  <View style={styles.fileName}>
                    <Text
                      style={[styles.fileDinhKemdoc, styles.text2Typo]}
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
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../../assets/messagestatus3.png")}
                />
              </View>
            </View>
            <View style={[styles.messagelogAction1, styles.messagecellFlexBox]}>
              <Text style={[styles.time, styles.timeClr]}>12:05</Text>
              <View style={styles.logFlexBox}>
                <Text style={[styles.bn, styles.kTypo]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.text2Typo]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.composeBar, styles.composeBarBg]}>
          <View style={[styles.helperText, styles.composeBarBg]}>
            <Text style={[styles.description, styles.text2Typo]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.fieldinputSpaceBlock]}>
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
                source={require("../../assets/camera9.png")}
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
      <View
        style={[styles.statusbarIphone13, styles.statusbarIphone13Position]}
      >
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
      <View style={styles.chNhChatTmKimChild} />
      <View style={[styles.actionSheetchNhChat, styles.actionPosition]}>
        <View style={[styles.actionSheetheader, styles.actionPosition]}>
          <Image
            style={[styles.leftIcon1, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../../assets/27-left11.png")}
          />
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, styles.titleTypo]} numberOfLines={1}>
              Chỉ định chat
            </Text>
          </View>
          <View style={[styles.button, styles.buttonFlexBox1]}>
            <Image
              style={[styles.iconsetplaceholder, styles.leftIconLayout]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder11.png")}
            />
            <Text style={[styles.text1, styles.titleTypo]}>Xác nhận</Text>
            <Image
              style={[styles.iconsetplaceholder1, styles.leftIconLayout]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder11.png")}
            />
          </View>
          <Image
            style={[styles.closeIcon7, styles.buttonPosition]}
            resizeMode="cover"
            source={require("../../assets/23-close2.png")}
          />
        </View>
        <View style={styles.listAgent}>
          <View style={[styles.fieldinputParent, styles.roomheaderSpaceBlock]}>
            <View style={[styles.fieldinput, styles.buttonFlexBox1]}>
              <Image
                style={[styles.searchIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/1-search2.png")}
              />
              <View style={styles.returnVisitorParent}>
                <Text style={[styles.text2, styles.text2Typo]}>H</Text>
                <View style={styles.line} />
              </View>
              <Image
                style={[styles.validateIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/validate.png")}
              />
            </View>
            <View style={styles.selectedWrapper}>
              <View style={styles.selected}>
                <Image
                  style={styles.roommessageavtIcon}
                  resizeMode="cover"
                  source={require("../../assets/frame-4273187711.png")}
                />
                <Text style={[styles.name1, styles.labelTypo]}>
                  Tôi (HaDT53)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.listAgent1}>
            <View style={styles.dropdownitem}>
              <Image
                style={styles.avtIcon3}
                resizeMode="cover"
                source={require("../../assets/avt14.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>
                  Tôi (HaDT53)
                </Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem}>
              <Image
                style={styles.avtIcon3}
                resizeMode="cover"
                source={require("../../assets/avt15.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>HaLT82</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem}>
              <View style={styles.avt3}>
                <Text style={[styles.k, styles.kTypo]}>H</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>HiepNH21</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem}>
              <Image
                style={styles.avtIcon3}
                resizeMode="cover"
                source={require("../../assets/avt16.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>HuongNT256</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <View style={styles.avt3}>
                <Text style={[styles.k, styles.kTypo]}>M</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>MinhPD11</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <Image
                style={styles.avtIcon3}
                resizeMode="cover"
                source={require("../../assets/avt17.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>NguyetNB2</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <View style={styles.avt3}>
                <Text style={[styles.k, styles.kTypo]}>N</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>NhungVTH15</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <Image
                style={styles.avtIcon3}
                resizeMode="cover"
                source={require("../../assets/avt18.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>QuanDV17</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <View style={styles.avt3}>
                <Text style={[styles.k, styles.kTypo]}>Q</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>QuangDD16</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <Image
                style={styles.avtIcon3}
                resizeMode="cover"
                source={require("../../assets/avt19.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>SangTT9</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <View style={styles.avt3}>
                <Text style={[styles.k, styles.kTypo]}>T</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>ThucPT3</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <View style={styles.avt3}>
                <Text style={[styles.k, styles.kTypo]}>T</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>TriLM22</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={styles.dropdownitem4}>
              <View style={styles.avt3}>
                <Text style={[styles.k, styles.kTypo]}>V</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name2, styles.text2Typo]}>VanNT99</Text>
                <Text style={[styles.text3, styles.timeClr]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
          </View>
        </View>
        <View style={styles.actionSheetfooter}>
          <View style={styles.buttonParent}>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder4.png")}
              />
              <Text style={[styles.text16, styles.textTypo]}>Secondary</Text>
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
                source={require("../../assets/iconsetplaceholder6.png")}
              />
              <Text style={[styles.text17, styles.textTypo]}>Xác nhận</Text>
              <Image
                style={[styles.iconsetplaceholder3, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder6.png")}
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
            <View
              style={[styles.homeindicator1, styles.homeindicator1Position]}
            >
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
  roomheaderSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  leftIconLayout: {
    height: 24,
    width: 24,
  },
  iconLayout1: {
    width: 12,
    display: "none",
    height: 12,
    overflow: "hidden",
  },
  returnVisitorIconLayout: {
    height: 20,
    width: 20,
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  redFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
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
    textAlign: "left",
  },
  khungChatFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  timeClr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  logFlexBox: {
    width: 343,
    justifyContent: "center",
    flexDirection: "row",
  },
  kTypo: {
    color: Color.brandPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "center",
  },
  text2Typo: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text14Regular,
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
  composeBarBg: {
    backgroundColor: Color.neutral3F5F5F5,
    width: 375,
  },
  fieldinputSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  composerSpaceBlock: {
    paddingRight: Padding.p_21xl,
    flexDirection: "row",
    borderStyle: "solid",
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
  statusbarIphone13Position: {
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
  actionPosition: {
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    backgroundColor: Color.textWhite,
  },
  titleTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
  },
  buttonFlexBox1: {
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonPosition: {
    right: 16,
    top: 20,
    display: "none",
    position: "absolute",
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
  homeindicator1Position: {
    bottom: 0,
    position: "absolute",
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
    fontWeight: "500",
    fontFamily: FontFamily.text14Medium,
    textAlign: "left",
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
    marginLeft: 8,
  },
  ficheckSquareIcon: {
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
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
  },
  cyan: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
  },
  yellow: {
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.tagYellow500,
    paddingHorizontal: Padding.p_5xs,
    display: "none",
  },
  blue: {
    backgroundColor: Color.tagBlue500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  green: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  red: {
    backgroundColor: Color.tagRed500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
  xTag: {
    backgroundColor: Color.tagGray500,
    marginLeft: 2,
    paddingVertical: Padding.p_7xs,
  },
  roomlistNhn: {
    marginTop: 4,
    flexDirection: "row",
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
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Color.divider,
    borderStyle: "solid",
  },
  time: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: 0,
  },
  bn: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    color: Color.brandPrimary,
    letterSpacing: 0,
  },
  honTtCuc: {
    width: 173,
    textAlign: "center",
    marginLeft: 2,
    color: Color.textPrimary,
  },
  logMessagenormal: {
    display: "none",
  },
  messagelogAction: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  avtIcon: {
    width: 28,
    height: 28,
    borderRadius: Border.br_11xl,
  },
  huongnt256: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    color: Color.brandPrimary,
    letterSpacing: 0,
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
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  description: {
    textAlign: "center",
    color: Color.textPrimary,
    flex: 1,
  },
  helperText: {
    paddingVertical: Padding.p_5xs,
    display: "none",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
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
    marginLeft: 12,
    borderWidth: 1,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  icon1: {
    marginLeft: 12,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  composeBar1: {
    alignItems: "flex-end",
    flexDirection: "row",
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
  chNhChatTmKimChild: {
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
    color: Color.brandLight5,
    marginLeft: 4,
    textAlign: "left",
  },
  iconsetplaceholder1: {
    marginLeft: 4,
    display: "none",
  },
  button: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    zIndex: 2,
    right: 16,
    top: 20,
    display: "none",
    position: "absolute",
    justifyContent: "flex-end",
  },
  closeIcon7: {
    zIndex: 3,
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  actionSheetheader: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_21xl,
    flexDirection: "row",
    borderStyle: "solid",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Color.divider,
    width: 375,
  },
  searchIcon: {
    overflow: "hidden",
  },
  text2: {
    textAlign: "left",
    color: Color.textPrimary,
  },
  line: {
    width: 1,
    height: 18,
    backgroundColor: Color.brandPrimary,
  },
  validateIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  fieldinput: {
    borderColor: Color.brandPrimary,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    height: 40,
    borderStyle: "solid",
  },
  name1: {
    fontFamily: FontFamily.text14Regular,
    marginTop: 4,
    color: Color.textPrimary,
  },
  selected: {
    alignItems: "center",
  },
  selectedWrapper: {
    marginTop: 8,
    display: "none",
    alignSelf: "stretch",
  },
  fieldinputParent: {
    backgroundColor: Color.textWhite,
  },
  avtIcon3: {
    width: 32,
    height: 32,
    borderRadius: Border.br_11xl,
  },
  name2: {
    textAlign: "left",
    color: Color.textPrimary,
    alignSelf: "stretch",
  },
  text3: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    textAlign: "left",
    display: "none",
    alignSelf: "stretch",
  },
  nameSecondLine: {
    marginLeft: 12,
    flex: 1,
  },
  radio: {
    borderColor: Color.gray68C8C8C,
    marginLeft: 12,
    borderWidth: 1,
    borderRadius: Border.br_base,
    height: 20,
    width: 20,
    borderStyle: "solid",
  },
  dropdownitem: {
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  k: {
    fontFamily: FontFamily.text14Regular,
  },
  avt3: {
    backgroundColor: Color.brandLight5,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    width: 32,
    height: 32,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownitem4: {
    paddingVertical: Padding.p_5xs,
    display: "none",
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  listAgent1: {
    alignSelf: "stretch",
    flex: 1,
  },
  listAgent: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  text16: {
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
    display: "none",
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  text17: {
    color: Color.textDisable,
  },
  button2: {
    marginLeft: 16,
    backgroundColor: Color.tagGray100,
    height: 40,
  },
  buttonParent: {
    padding: Padding.p_base,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
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
    justifyContent: "space-between",
    flexDirection: "row",
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
    overflow: "hidden",
    width: 375,
  },
  homeindicator2: {
    height: 34,
    display: "none",
    width: 375,
  },
  actionSheetfooter: {
    minHeight: 34,
    backgroundColor: Color.textWhite,
  },
  actionSheetchNhChat: {
    height: 752,
    bottom: -20,
    position: "absolute",
    marginLeft: -205,
    left: "50%",
  },
  chNhChatTmKim: {
    width: "100%",
    height: 681,
    backgroundColor: Color.textWhite,
  },
});

export default ChNhChatTmKim;
