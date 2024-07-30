import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color, Padding, Border, FontFamily } from "../../GlobalStyles";

const CommentRoom12 = () => {
  return (
    <View style={[styles.commentRoom, styles.commentRoomLayout]}>
      <View style={[styles.roomheaderParent, styles.commentRoomChildPosition]}>
        <View style={styles.roomheader}>
          <Image
            style={[styles.leftIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.room}>
            <Image
              style={styles.roommessageavtIcon}
              resizeMode="cover"
              source={require("../../assets/roommessageavt6.png")}
            />
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Image
                  style={[styles.mobileIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../../assets/mobile1.png")}
                />
                <View style={styles.returnVisitorParent}>
                  <Image
                    style={[styles.returnVisitorIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../assets/return-visitor1.png")}
                  />
                  <Text style={[styles.lMinhTr, styles.titleLayout]}>
                    Lê Minh Trí
                  </Text>
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
              <View style={[styles.roomlistNhn, styles.roomlistNhnSpaceBlock]}>
                <View style={[styles.purple, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>KH VIP</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.cyan, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    Tư vấn sp
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.yellow, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    chưa đóng phí
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.blue, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>Có sđt</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.green, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    chưa gọi
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.red, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>
                    liên hệ lại
                  </Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
                <View style={[styles.xTag, styles.redFlexBox]}>
                  <Text style={[styles.label, styles.labelLayout]}>+4</Text>
                  <Image
                    style={[styles.closeIcon, styles.iconLayout2]}
                    resizeMode="cover"
                    source={require("../../assets/23-close1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.thmNHng, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/thm-n-hng.png")}
          />
          <Image
            style={[styles.optionsVerticalIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../../assets/optionsvertical.png")}
          />
        </View>
        <View style={styles.khungChat}>
          <View style={[styles.post, styles.postSpaceBlock]}>
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
                    style={[styles.closeIcon, styles.iconLayout2]}
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
            <View style={styles.timerpmParent}>
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
          <View style={[styles.layoutBlocksVertical, styles.text9SpaceBlock]}>
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
                      <Text style={[styles.text1, styles.textClr]}>06:34</Text>
                    </View>
                  </View>
                  <Text style={[styles.choMnhHi, styles.choMnhHiTypo]}>
                    Cho mình hỏi sản phẩm giá bao nhiêu ạ?
                  </Text>
                </View>
                <View
                  style={[styles.commentmedia, styles.roomlistNhnSpaceBlock]}
                >
                  <Image
                    style={[styles.image1Icon, styles.commentRoomLayout]}
                    resizeMode="cover"
                    source={require("../../assets/image1.png")}
                  />
                </View>
                <View style={styles.actionSpaceBlock}>
                  <View style={styles.option}>
                    <View style={styles.react}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/1-like1.png")}
                      />
                      <Text style={[styles.thch, styles.labelLayout]}>
                        Thích
                      </Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/arrow-reply3.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>
                        Trả lời
                      </Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/message1.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>
                        Nhắn tin
                      </Text>
                    </View>
                    <View style={styles.messageGroup}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/message4.png")}
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
                        source={require("../../assets/emoji16.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji4.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji17.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji18.png")}
                      />
                      <Image
                        style={[styles.emojiIcon5, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji19.png")}
                      />
                    </View>
                    <Text style={[styles.thch, styles.labelLayout]}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.commentcell1}>
              <View style={[styles.tree1, styles.treeSpaceBlock]}>
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
                <View style={[styles.nameContainer, styles.button1SpaceBlock]}>
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
                <View
                  style={[styles.commentmedia, styles.roomlistNhnSpaceBlock]}
                >
                  <Image
                    style={[styles.image1Icon, styles.commentRoomLayout]}
                    resizeMode="cover"
                    source={require("../../assets/image1.png")}
                  />
                </View>
                <View style={styles.actionSpaceBlock}>
                  <View style={styles.option}>
                    <View style={styles.hyperlink}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/edit.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>Sửa</Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
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
                        source={require("../../assets/emoji16.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji4.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji17.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji18.png")}
                      />
                      <Image
                        style={[styles.emojiIcon5, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji19.png")}
                      />
                    </View>
                    <Text style={[styles.thch, styles.labelLayout]}>3</Text>
                  </View>
                </View>
                <View style={[styles.action2, styles.actionSpaceBlock]}>
                  <View style={styles.option2}>
                    <View style={styles.hyperlink}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/edit.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>Sửa</Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
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
                        source={require("../../assets/emoji16.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji4.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji17.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji18.png")}
                      />
                      <Image
                        style={[styles.emojiIcon5, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji19.png")}
                      />
                    </View>
                    <Text style={[styles.thch, styles.labelLayout]}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.commentcell1}>
              <View style={[styles.tree1, styles.treeSpaceBlock]}>
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
                      <Text style={[styles.text1, styles.textClr]}>07:00</Text>
                    </View>
                  </View>
                  <Text style={[styles.choMnhHi, styles.choMnhHiTypo]}>
                    Cho mình hỏi sản phẩm giá bao nhiêu ạ?
                  </Text>
                </View>
                <View
                  style={[styles.commentmedia, styles.roomlistNhnSpaceBlock]}
                >
                  <Image
                    style={[styles.image1Icon, styles.commentRoomLayout]}
                    resizeMode="cover"
                    source={require("../../assets/image1.png")}
                  />
                </View>
                <View style={styles.actionSpaceBlock}>
                  <View style={styles.option}>
                    <View style={styles.react}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/1-like1.png")}
                      />
                      <Text style={[styles.thch, styles.labelLayout]}>
                        Thích
                      </Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/arrow-reply3.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>
                        Trả lời
                      </Text>
                    </View>
                    <View style={styles.arrowReplyParent}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/message1.png")}
                      />
                      <Text style={[styles.trLi, styles.labelLayout]}>
                        Nhắn tin
                      </Text>
                    </View>
                    <View style={styles.messageGroup}>
                      <Image
                        style={[styles.likeIcon, styles.iconLayout2]}
                        resizeMode="cover"
                        source={require("../../assets/message4.png")}
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
                        source={require("../../assets/emoji16.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji4.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji17.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji18.png")}
                      />
                      <Image
                        style={[styles.emojiIcon5, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji19.png")}
                      />
                    </View>
                    <Text style={[styles.thch, styles.labelLayout]}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.textClr]}>17:05</Text>
              <View style={styles.logMessagenormal}>
                <Text style={[styles.bn, styles.textLayout]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.textLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.textClr]}>17:55</Text>
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
          <View style={styles.composeBar1}>
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/camera2.png")}
              />
            </View>
            <View style={[styles.composer, styles.buttonFlexBox]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.textClr]}>
                  Viết phản hồi
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon24, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/emoji111.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeIndicatorBg]} />
          </View>
        </View>
      </View>
      <View style={styles.statusbarIphone13}>
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
      <View style={[styles.commentRoomChild, styles.homeIndicatorBg]} />
      <View style={[styles.confirmation, styles.postSpaceBlock]}>
        <Image
          style={[styles.closeIcon8, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../../assets/23-close.png")}
        />
        <View style={styles.contentParent}>
          <View style={styles.commentavt}>
            <View style={styles.confirmationIcon}>
              <Image
                style={styles.deleteIcon2}
                resizeMode="cover"
                source={require("../../assets/delete3.png")}
              />
            </View>
            <View style={styles.titleParent}>
              <Text style={[styles.title, styles.xemTypo]}>
                Bạn có muốn xóa bình luận?
              </Text>
              <Text
                style={[styles.text9, styles.textClr]}
              >{`Bình luận sẽ bị xóa vĩnh viễn và không thể hoàn tác. 
Các phản hồi về bình luận này cũng sẽ bị xóa.`}</Text>
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder7.png")}
              />
              <Text style={[styles.text10, styles.textTypo]}>Hủy</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder7.png")}
              />
            </View>
            <View style={[styles.button1, styles.button1SpaceBlock]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder8.png")}
              />
              <Text style={[styles.text11, styles.textTypo]}>Xóa</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder8.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentRoomLayout: {
    width: "100%",
    flex: 1,
  },
  commentRoomChildPosition: {
    left: 0,
    width: 375,
  },
  iconLayout3: {
    height: 24,
    width: 24,
  },
  iconLayout2: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  titleLayout: {
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    color: Color.textPrimary,
    letterSpacing: 0,
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  roomlistNhnSpaceBlock: {
    marginTop: 4,
    display: "none",
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
  postSpaceBlock: {
    padding: Padding.p_base,
    backgroundColor: Color.textWhite,
  },
  xemTypo: {
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  imageLayout: {
    height: 343,
    width: 343,
  },
  text9SpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
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
  textClr: {
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
  button1SpaceBlock: {
    backgroundColor: Color.brandPrimary,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  actionSpaceBlock: {
    paddingLeft: Padding.p_xs,
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonFlexBox: {
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  homeIndicatorBg: {
    backgroundColor: Color.labelColorLightPrimary,
    position: "absolute",
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
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    letterSpacing: 0,
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
    borderColor: Color.divider,
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
    justifyContent: "space-between",
    marginTop: 12,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  post: {
    width: 375,
  },
  avtIcon: {
    borderRadius: Border.br_11xl,
    height: 28,
    width: 28,
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
  },
  commentmedia: {
    width: 200,
    height: 112,
    backgroundColor: Color.neutral3F5F5F5,
    borderRadius: Border.br_base,
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
    alignItems: "flex-end",
    alignSelf: "stretch",
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
    borderRadius: Border.br_base,
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
    width: 309,
    display: "none",
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
    padding: Padding.p_base,
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
    backgroundColor: Color.tagYellow100,
    paddingVertical: Padding.p_5xs,
    display: "none",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 375,
  },
  icon: {
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
    position: "absolute",
  },
  composer: {
    borderColor: Color.colorWhitesmoke_100,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_4xs,
    marginLeft: 12,
    borderRadius: Border.br_5xs,
  },
  composeBar1: {
    paddingHorizontal: Padding.p_xs,
    alignItems: "flex-end",
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.neutral3F5F5F5,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  homeIndicator: {
    marginLeft: -66.5,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
    bottom: 8,
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
    fontFamily: FontFamily.defaultRegularCallout,
    color: Color.colorGray_200,
    width: 54,
    top: 1,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    height: 20,
    left: 0,
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
    left: "50%",
    height: 12,
  },
  rightSide: {
    marginLeft: 86.5,
    top: 19,
    width: 77,
  },
  statusbarIphone13: {
    marginLeft: -187.5,
    height: 47,
    top: 0,
    left: "50%",
    overflow: "hidden",
    width: 375,
    position: "absolute",
  },
  commentRoomChild: {
    opacity: 0.4,
    top: 0,
    width: 375,
    left: 0,
    height: 812,
  },
  closeIcon8: {
    overflow: "hidden",
  },
  deleteIcon2: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  confirmationIcon: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.tagRed100,
    width: 60,
    height: 60,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    textAlign: "center",
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.headlineSemiBold_size,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  text9: {
    marginTop: 8,
    alignSelf: "stretch",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
  },
  titleParent: {
    marginTop: 16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  iconsetplaceholder: {
    display: "none",
  },
  text10: {
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    marginLeft: 8,
  },
  iconsetplaceholder1: {
    display: "none",
    marginLeft: 8,
  },
  button: {
    borderColor: Color.colorGainsboro_100,
    height: 41,
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
  },
  text11: {
    color: Color.textWhite,
    fontFamily: FontFamily.text14Regular,
    marginLeft: 8,
  },
  button1: {
    borderRadius: Border.br_7xs,
    marginLeft: 12,
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
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
    marginTop: 290,
    marginLeft: -190,
    top: "50%",
    shadowColor: "rgba(5, 16, 55, 0.15)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_7xs,
    left: "50%",
    alignItems: "flex-end",
    width: 343,
    overflow: "hidden",
    position: "absolute",
  },
  commentRoom: {
    height: 812,
    backgroundColor: Color.textWhite,
  },
});

export default CommentRoom12;
