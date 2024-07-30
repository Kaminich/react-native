import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../../GlobalStyles";

const CommentRoomTexting2 = () => {
  return (
    <View style={styles.commentRoomTexting}>
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
              source={require("../../assets/roommessageavt5.png")}
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
                    style={styles.returnVisitorIcon}
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
              <View style={[styles.roomlistNhn, styles.actionSpaceBlock]}>
                <View style={[styles.purple, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    chưa gọi
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>+4</Text>
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
        <View style={styles.khungChat}>
          <View style={styles.post}>
            <View style={styles.page}>
              <Image
                style={styles.pageChild}
                resizeMode="cover"
                source={require("../../assets/rectangle-18784.png")}
              />
              <View style={styles.fptCameraParent}>
                <Text style={[styles.fptCamera, styles.xemTypo]}>
                  FPT Camera
                </Text>
                <View style={styles.tag3}>
                  <Text style={[styles.label7, styles.labelLayout]}>
                    Đang hiện
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/23-close3.png")}
                  />
                </View>
              </View>
            </View>
            <Text style={[styles.camThNtContainer, styles.textLayout]}>
              <Text style={styles.camThNtChunMngThLu}>
                <Text style={styles.camThNt}>{`Cam thì nét chuẩn
Mạng thì luôn căng
Kết hợp COMBO
Càng thêm hấp dẫn
Combo `}</Text>
                <Text style={[styles.internetFpt, styles.xemTypo]}>
                  Internet + FPT
                </Text>
                <Text style={styles.camThNt}>{` Camera đang ... `}</Text>
              </Text>
              <Text style={[styles.xemThm, styles.xemTypo]}>Xem thêm</Text>
            </Text>
            <View style={[styles.image, styles.imageLayout]}>
              <Image
                style={styles.imageLayout}
                resizeMode="cover"
                source={require("../../assets/image-8.png")}
              />
            </View>
            <View style={[styles.timerpmParent, styles.timerpmParentFlexBox]}>
              <View style={styles.timerpm}>
                <Text style={[styles.text, styles.textLayout]}>01/06/2022</Text>
              </View>
              <View style={styles.hyperlink}>
                <Text style={[styles.xemBiVit, styles.textLayout]}>
                  Xem bài viết
                </Text>
                <Image
                  style={[styles.shareIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/share.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.layoutBlocksVertical}>
            <View style={styles.commentcell}>
              <View style={styles.commentavt}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt1.png")}
                />
                <View style={[styles.tree, styles.treeSpaceBlock]}>
                  <View style={[styles.treeChild, styles.treeBorder]} />
                </View>
              </View>
              <View style={styles.comment}>
                <View style={[styles.nameGroup, styles.nameGroupSpaceBlock]}>
                  <View style={styles.hyperlink}>
                    <Text style={[styles.lMinhTr1, styles.timeTypo]}>
                      Lê Minh Trí
                    </Text>
                    <Image
                      style={styles.nameChild}
                      resizeMode="cover"
                      source={require("../../assets/ellipse-186.png")}
                    />
                    <View style={styles.timerpm1}>
                      <Text style={[styles.text1, styles.timeClr]}>06:34</Text>
                    </View>
                  </View>
                  <Text style={[styles.choMnhHi, styles.choMnhHiTypo]}>
                    Cho mình hỏi sản phẩm giá bao nhiêu ạ?
                  </Text>
                </View>
                <View style={[styles.commentmedia, styles.actionSpaceBlock]}>
                  <Image
                    style={styles.image1Icon}
                    resizeMode="cover"
                    source={require("../../assets/image1.png")}
                  />
                </View>
                <View style={[styles.action, styles.actionSpaceBlock]}>
                  <View style={styles.option}>
                    <View style={styles.react}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/1-like1.png")}
                      />
                      <Text style={[styles.thch, styles.labelLayout]}>
                        Thích
                      </Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/arrow-reply1.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>
                        Trả lời
                      </Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/message1.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>
                        Nhắn tin
                      </Text>
                    </View>
                    <View style={styles.messageGroup}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/message2.png")}
                      />
                      <Text style={[styles.xemHiThoi, styles.labelLayout]}>
                        Xem hội thoại
                      </Text>
                    </View>
                    <Text style={[styles.sa, styles.labelLayout]}>Đã sửa</Text>
                  </View>
                  <View style={[styles.reacted, styles.reactedFlexBox]}>
                    <View style={styles.emojiParent}>
                      <Image
                        style={[styles.emojiIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji2.png")}
                      />
                      <Image
                        style={[styles.emojiIcon1, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji3.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji4.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji5.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji6.png")}
                      />
                      <Image
                        style={[styles.emojiIcon5, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji7.png")}
                      />
                    </View>
                    <Text style={[styles.thch, styles.labelLayout]}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.commentcell1}>
              <View style={[styles.tree1, styles.tree1FlexBox]}>
                <View style={[styles.treeItem, styles.treeBorder]} />
                <View style={[styles.treeInner, styles.treeBorder]} />
              </View>
              <View style={styles.commentavt1}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt5.png")}
                />
                <View style={[styles.tree, styles.treeSpaceBlock]}>
                  <View style={[styles.treeChild, styles.treeBorder]} />
                </View>
              </View>
              <View style={styles.comment1}>
                <View style={styles.nameContainer}>
                  <View style={styles.hyperlink}>
                    <Text style={[styles.fptCamera1, styles.timeTypo]}>
                      FPT Camera
                    </Text>
                    <Image
                      style={styles.nameChild}
                      resizeMode="cover"
                      source={require("../../assets/ellipse-1861.png")}
                    />
                    <View style={styles.timerpm1}>
                      <Text style={[styles.text3, styles.labelLayout]}>
                        06:35
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.bnCheckIb, styles.choMnhHiTypo]}>
                    Bạn check ib shop nhé ạ
                  </Text>
                </View>
                <View style={[styles.commentmedia, styles.actionSpaceBlock]}>
                  <Image
                    style={styles.image1Icon}
                    resizeMode="cover"
                    source={require("../../assets/image1.png")}
                  />
                </View>
                <View style={[styles.action, styles.actionSpaceBlock]}>
                  <View style={styles.option}>
                    <View style={styles.hyperlink}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/edit.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>Sửa</Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/delete2.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>Xóa</Text>
                    </View>
                  </View>
                  <View style={[styles.reacted1, styles.reactedFlexBox]}>
                    <View style={styles.emojiParent}>
                      <Image
                        style={[styles.emojiIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji2.png")}
                      />
                      <Image
                        style={[styles.emojiIcon1, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji3.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji4.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji5.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji6.png")}
                      />
                      <Image
                        style={[styles.emojiIcon5, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji7.png")}
                      />
                    </View>
                    <Text style={[styles.thch, styles.labelLayout]}>3</Text>
                  </View>
                </View>
                <View style={[styles.action2, styles.actionSpaceBlock]}>
                  <View style={styles.option2}>
                    <View style={styles.hyperlink}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/edit.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>Sửa</Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/delete2.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>Xóa</Text>
                    </View>
                  </View>
                  <View style={[styles.reacted1, styles.reactedFlexBox]}>
                    <View style={styles.emojiParent}>
                      <Image
                        style={[styles.emojiIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji2.png")}
                      />
                      <Image
                        style={[styles.emojiIcon1, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji3.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji4.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji5.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji6.png")}
                      />
                      <Image
                        style={[styles.emojiIcon5, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji7.png")}
                      />
                    </View>
                    <Text style={[styles.thch, styles.labelLayout]}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.commentcell1}>
              <View style={[styles.tree1, styles.tree1FlexBox]}>
                <View style={[styles.treeItem, styles.treeBorder]} />
              </View>
              <View style={styles.commentavt1}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt6.png")}
                />
                <View style={[styles.tree, styles.treeSpaceBlock]}>
                  <View style={[styles.treeChild, styles.treeBorder]} />
                </View>
              </View>
              <View style={styles.comment1}>
                <View style={[styles.frameView, styles.nameGroupSpaceBlock]}>
                  <View style={styles.hyperlink}>
                    <Text style={[styles.lMinhTr1, styles.timeTypo]}>
                      Thu Hương
                    </Text>
                    <Image
                      style={styles.nameChild}
                      resizeMode="cover"
                      source={require("../../assets/ellipse-186.png")}
                    />
                    <View style={styles.timerpm1}>
                      <Text style={[styles.text1, styles.timeClr]}>07:00</Text>
                    </View>
                  </View>
                  <Text style={[styles.choMnhHi, styles.choMnhHiTypo]}>
                    Cho mình hỏi sản phẩm giá bao nhiêu ạ?
                  </Text>
                </View>
                <View style={[styles.commentmedia, styles.actionSpaceBlock]}>
                  <Image
                    style={styles.image1Icon}
                    resizeMode="cover"
                    source={require("../../assets/image1.png")}
                  />
                </View>
                <View style={[styles.action, styles.actionSpaceBlock]}>
                  <View style={styles.option}>
                    <View style={styles.react}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/1-like1.png")}
                      />
                      <Text style={[styles.thch, styles.labelLayout]}>
                        Thích
                      </Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/arrow-reply1.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>
                        Trả lời
                      </Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/message1.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>
                        Nhắn tin
                      </Text>
                    </View>
                    <View style={styles.messageGroup}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout1]}
                        resizeMode="cover"
                        source={require("../../assets/message2.png")}
                      />
                      <Text style={[styles.xemHiThoi, styles.labelLayout]}>
                        Xem hội thoại
                      </Text>
                    </View>
                    <Text style={[styles.sa, styles.labelLayout]}>Đã sửa</Text>
                  </View>
                  <View style={[styles.reacted, styles.reactedFlexBox]}>
                    <View style={styles.emojiParent}>
                      <Image
                        style={[styles.emojiIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji2.png")}
                      />
                      <Image
                        style={[styles.emojiIcon1, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji3.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji4.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji5.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji6.png")}
                      />
                      <Image
                        style={[styles.emojiIcon5, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji7.png")}
                      />
                    </View>
                    <Text style={[styles.thch, styles.labelLayout]}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeClr]}>17:05</Text>
              <View style={styles.logMessagenormal}>
                <Text style={[styles.bn, styles.textLayout]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.textLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeClr]}>17:55</Text>
              <View style={styles.logMessagenormal}>
                <Text style={[styles.bn, styles.textLayout]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.textLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={styles.helperText}>
            <Image
              style={[styles.hourglassIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/2-hourglass1.png")}
            />
            <Text style={[styles.cnLi4, styles.textLayout]}>
              Còn lại 4 ngày để nhắn tin
            </Text>
            <Image
              style={[styles.questionCircleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/question-circle.png")}
            />
          </View>
          <View style={[styles.composeBar1, styles.tree1FlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/plus.png")}
              />
            </View>
            <View style={styles.composer}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.timeClr]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={styles.emojiIcon24}
                resizeMode="cover"
                source={require("../../assets/emoji11.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/camera1.png")}
              />
            </View>
            <View style={styles.icon1}>
              <Image
                style={[styles.leftIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/mic.png")}
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
            <Text style={styles.text8}>9:41</Text>
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
      <View style={styles.commentRoomTextingChild} />
      <View style={[styles.actionSheet, styles.actionSheetPosition]}>
        <View
          style={[styles.actionSheetheader, styles.fieldtextAreaSpaceBlock]}
        >
          <Image
            style={[styles.leftIcon1, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, styles.titleTypo]} numberOfLines={1}>
              Nhắn tin cho Lê Minh Trí
            </Text>
          </View>
          <View style={[styles.button, styles.buttonPosition]}>
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
            style={[styles.closeIcon8, styles.buttonPosition]}
            resizeMode="cover"
            source={require("../../assets/23-close2.png")}
          />
        </View>
        <View style={styles.nhnTinTBnhLun}>
          <Text style={[styles.user, styles.textLayout]}>
            <Text
              style={styles.timeClr}
            >Bắt đầu cuộc trò chuyện chỉ hai bạn mới thấy. Gửi phản hồi riêng tư về bình luận của </Text>
            <Text style={[styles.lMinhTr3, styles.xemTypo]}>Lê Minh Trí</Text>
            <Text style={styles.timeClr}> trong </Text>
            <Text style={[styles.lMinhTr3, styles.xemTypo]}>Messenger</Text>
            <Text style={styles.timeClr}>.</Text>
          </Text>
          <View style={styles.roomParent}>
            <View style={styles.room1}>
              <Image
                style={styles.avtIcon3}
                resizeMode="cover"
                source={require("../../assets/avt2.png")}
              />
              <Text style={[styles.lMinhTr4, styles.xemTypo]}>Lê Minh Trí</Text>
            </View>
            <View
              style={[styles.fieldtextArea, styles.fieldtextAreaSpaceBlock]}
            >
              <View style={styles.option2}>
                <Text style={[styles.text11, styles.textLayout]}>
                  <Text style={styles.text12}>|</Text>
                  <Text style={styles.nhpTinNhn1}>{`Nhập tin nhắn

`}</Text>
                </Text>
                <View style={styles.line} />
              </View>
              <Image
                style={[styles.validateIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/validate.png")}
              />
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
              <Text style={[styles.text13, styles.textTypo]}>Secondary</Text>
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
                source={require("../../assets/iconsetplaceholder2.png")}
              />
              <Text style={[styles.text14, styles.textTypo]}>Lưu</Text>
              <Image
                style={[styles.iconsetplaceholder3, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder2.png")}
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
            <View style={[styles.emojiDictation, styles.timerpmParentFlexBox]}>
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
    borderColor: Color.divider,
    borderBottomWidth: 1,
  },
  leftIconLayout: {
    height: 24,
    width: 24,
  },
  iconLayout1: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  actionSpaceBlock: {
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
  xemTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    maxWidth: 355,
  },
  imageLayout: {
    height: 343,
    width: 343,
  },
  timerpmParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  treeSpaceBlock: {
    paddingLeft: Padding.p_sm,
    width: 28,
  },
  treeBorder: {
    borderLeftWidth: 1,
    borderColor: Color.textPlaceHolder,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  nameGroupSpaceBlock: {
    backgroundColor: Color.tagGray100,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_base,
  },
  timeTypo: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  timeClr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  choMnhHiTypo: {
    maxWidth: 247,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text14Regular,
    marginTop: 4,
    textAlign: "left",
  },
  reactedFlexBox: {
    borderRadius: Border.br_3xs,
    justifyContent: "flex-end",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  emojiIconLayout: {
    marginLeft: -6,
    borderRadius: Border.br_5xs,
    height: 16,
    width: 16,
  },
  tree1FlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  homeLayout: {
    height: 5,
    width: 134,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
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
    bottom: 0,
    position: "absolute",
  },
  fieldtextAreaSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  titleTypo: {
    fontSize: FontSize.subheadlineSemiBold_size,
    lineHeight: 20,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
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
    textAlign: "left",
    letterSpacing: 0,
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
    color: Color.labelColorLightPrimary,
    top: "50%",
    fontFamily: FontFamily.defaultRegularCallout,
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
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
    width: 20,
    height: 20,
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
    textAlign: "left",
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
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  pageChild: {
    width: 34,
    height: 34,
    borderRadius: Border.br_9xs,
  },
  fptCamera: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.textPrimary,
  },
  label7: {
    color: Color.tagBlue700,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  tag3: {
    backgroundColor: Color.tagBlue100,
    paddingVertical: Padding.p_9xs,
    marginTop: 2,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_5xs,
    height: 16,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  fptCameraParent: {
    marginLeft: 8,
    justifyContent: "center",
  },
  page: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  camThNt: {
    fontFamily: FontFamily.text14Regular,
  },
  internetFpt: {
    letterSpacing: 0,
    fontWeight: "600",
  },
  camThNtChunMngThLu: {
    color: Color.textPrimary,
  },
  xemThm: {
    color: Color.brandPrimary,
    letterSpacing: 0,
    fontWeight: "600",
  },
  camThNtContainer: {
    marginTop: 12,
    textAlign: "left",
    alignSelf: "stretch",
  },
  image: {
    marginTop: 12,
    flexDirection: "row",
    backgroundColor: Color.textWhite,
  },
  text: {
    color: Color.gray68C8C8C,
    textAlign: "right",
    fontFamily: FontFamily.text14Regular,
  },
  timerpm: {
    flexDirection: "row",
  },
  xemBiVit: {
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
  },
  shareIcon: {
    marginLeft: 4,
    overflow: "hidden",
  },
  hyperlink: {
    alignItems: "center",
    flexDirection: "row",
  },
  timerpmParent: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  post: {
    padding: Padding.p_base,
    width: 375,
    backgroundColor: Color.textWhite,
  },
  avtIcon: {
    height: 28,
    width: 28,
    borderRadius: Border.br_11xl,
  },
  treeChild: {
    flex: 1,
  },
  tree: {
    display: "none",
    alignItems: "center",
    flex: 1,
  },
  commentavt: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  lMinhTr1: {
    textAlign: "center",
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    color: Color.textPrimary,
  },
  nameChild: {
    width: 4,
    height: 4,
    marginLeft: 8,
  },
  text1: {
    textAlign: "right",
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
  },
  timerpm1: {
    marginLeft: 8,
    flexDirection: "row",
  },
  choMnhHi: {
    color: Color.textPrimary,
  },
  nameGroup: {
    paddingVertical: Padding.p_5xs,
  },
  image1Icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_9xs,
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  commentmedia: {
    width: 200,
    height: 112,
    backgroundColor: Color.neutral3F5F5F5,
    borderRadius: Border.br_base,
    display: "none",
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  likeIcon: {
    height: 12,
  },
  thch: {
    marginLeft: 2,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    color: Color.textPrimary,
  },
  react: {
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  trLi: {
    textAlign: "center",
    marginLeft: 2,
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
  },
  arrowReplyParent: {
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  xemHiThoi: {
    textAlign: "center",
    color: Color.brandPrimary,
    marginLeft: 2,
    fontFamily: FontFamily.text14Regular,
  },
  messageGroup: {
    display: "none",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  sa: {
    textDecorationLine: "underline",
    color: Color.blue,
    textAlign: "right",
    fontFamily: FontFamily.text14Regular,
    display: "none",
    marginLeft: 10,
  },
  option: {
    width: 297,
    alignItems: "center",
    flexDirection: "row",
  },
  emojiIcon: {
    zIndex: 5,
    borderRadius: Border.br_5xs,
  },
  emojiIcon1: {
    zIndex: 4,
  },
  emojiIcon2: {
    zIndex: 3,
  },
  emojiIcon3: {
    zIndex: 2,
    display: "none",
  },
  emojiIcon4: {
    zIndex: 1,
    display: "none",
  },
  emojiIcon5: {
    zIndex: 0,
    display: "none",
  },
  emojiParent: {
    borderRadius: Border.br_5xs,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  reacted: {
    marginLeft: 8,
  },
  action: {
    paddingLeft: Padding.p_xs,
    alignItems: "center",
  },
  comment: {
    paddingBottom: Padding.p_base,
    width: 309,
    marginLeft: 4,
    justifyContent: "center",
  },
  commentcell: {
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  treeItem: {
    borderBottomLeftRadius: Border.br_sm,
    height: 14,
    borderBottomWidth: 1,
  },
  treeInner: {
    marginTop: -16,
    flex: 1,
  },
  tree1: {
    paddingLeft: Padding.p_sm,
    width: 28,
  },
  commentavt1: {
    marginLeft: 4,
    alignItems: "center",
    alignSelf: "stretch",
  },
  fptCamera1: {
    textAlign: "center",
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    color: Color.textWhite,
  },
  text3: {
    color: Color.tagGray100,
    textAlign: "right",
    fontFamily: FontFamily.text14Regular,
  },
  bnCheckIb: {
    color: Color.textWhite,
  },
  nameContainer: {
    backgroundColor: Color.brandPrimary,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_base,
  },
  reacted1: {
    marginLeft: 10,
  },
  option2: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  action2: {
    paddingLeft: Padding.p_xs,
    width: 309,
    display: "none",
    alignItems: "center",
  },
  comment1: {
    width: 277,
    paddingBottom: Padding.p_base,
    marginLeft: 4,
    justifyContent: "center",
  },
  commentcell1: {
    display: "none",
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameView: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  time: {
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    letterSpacing: 0,
  },
  bn: {
    textAlign: "center",
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
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
    justifyContent: "center",
    flexDirection: "row",
  },
  messagelogAction: {
    paddingBottom: Padding.p_base,
    display: "none",
    alignItems: "center",
    alignSelf: "stretch",
  },
  layoutBlocksVertical: {
    marginTop: 8,
    padding: Padding.p_base,
    alignSelf: "stretch",
    backgroundColor: Color.textWhite,
  },
  khungChat: {
    justifyContent: "flex-end",
    backgroundColor: Color.neutral3F5F5F5,
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  hourglassIcon: {
    overflow: "hidden",
  },
  cnLi4: {
    color: Color.textBlack,
    marginLeft: 12,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
  },
  questionCircleIcon: {
    marginLeft: 12,
    overflow: "hidden",
  },
  helperText: {
    backgroundColor: Color.alertWarning,
    paddingVertical: Padding.p_5xs,
    display: "none",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
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
  emojiIcon24: {
    right: 8,
    bottom: 8,
    zIndex: 1,
    overflow: "hidden",
    height: 24,
    width: 24,
    position: "absolute",
  },
  composer: {
    borderColor: Color.colorWhitesmoke_100,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_4xs,
    paddingRight: Padding.p_21xl,
    borderWidth: 1,
    marginLeft: 12,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
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
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.neutral3F5F5F5,
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
    fontFamily: FontFamily.defaultRegularCallout,
    top: 1,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
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
  commentRoomTextingChild: {
    backgroundColor: Color.colorGray_400,
    opacity: 0.7,
    top: 0,
    width: 376,
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
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    zIndex: 2,
    borderRadius: Border.br_9xs,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  closeIcon8: {
    zIndex: 3,
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  actionSheetheader: {
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xl,
    paddingRight: Padding.p_21xl,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Color.divider,
    width: 375,
  },
  lMinhTr3: {
    color: Color.textPrimary,
    letterSpacing: 0,
    fontWeight: "600",
  },
  user: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  avtIcon3: {
    borderRadius: Border.br_11xl,
    height: 24,
    width: 24,
  },
  lMinhTr4: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.textPrimary,
    marginLeft: 8,
  },
  room1: {
    width: 241,
    alignItems: "center",
    flexDirection: "row",
  },
  text12: {
    color: Color.brandPrimary,
  },
  nhpTinNhn1: {
    color: Color.textPlaceHolder,
  },
  text11: {
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    flex: 1,
  },
  line: {
    width: 1,
    height: 18,
    backgroundColor: Color.brandPrimary,
    display: "none",
  },
  validateIcon: {
    marginLeft: 4,
    display: "none",
    overflow: "hidden",
  },
  fieldtextArea: {
    borderColor: Color.brandPrimary,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    borderWidth: 1,
    paddingLeft: Padding.p_xs,
    marginTop: 8,
    width: 343,
    borderRadius: Border.br_9xs,
  },
  roomParent: {
    marginTop: 16,
  },
  nhnTinTBnhLun: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  text13: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    marginLeft: 8,
  },
  iconsetplaceholder3: {
    display: "none",
    marginLeft: 8,
  },
  button1: {
    borderColor: Color.colorGainsboro_100,
    height: 41,
    borderWidth: 1,
    display: "none",
    borderStyle: "solid",
    backgroundColor: Color.textWhite,
  },
  text14: {
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
    marginLeft: 8,
  },
  button2: {
    marginLeft: 16,
    backgroundColor: Color.brandPrimary,
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
  actionSheet: {
    height: 752,
    minHeight: 240,
    maxHeight: 752,
    marginLeft: -205,
    left: "50%",
  },
  commentRoomTexting: {
    height: 812,
    width: "100%",
    backgroundColor: Color.textWhite,
  },
});

export default CommentRoomTexting2;
