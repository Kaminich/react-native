import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Border, FontSize, Color } from "../../GlobalStyles";

const CommentRoom8 = () => {
  return (
    <View style={[styles.commentRoom, styles.commentRoomLayout]}>
      <View style={styles.roomheaderParent}>
        <View style={[styles.roomheader, styles.toastSpaceBlock]}>
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
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../../assets/return-visitor1.png")}
                  />
                  <Text style={[styles.lMinhTr, styles.titleTypo1]}>
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
            <Text style={[styles.camThNtContainer, styles.descriptionLayout]}>
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
                <Text style={[styles.text, styles.descriptionLayout]}>
                  01/06/2022
                </Text>
              </View>
              <View style={styles.hyperlink}>
                <Text style={[styles.xemBiVit, styles.descriptionLayout]}>
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
          <View style={[styles.layoutBlocksVertical, styles.postSpaceBlock]}>
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
                    <Text style={[styles.lMinhTr1, styles.minhTypo]}>
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
                  <Text style={[styles.choMnhHi, styles.choTypo]}>
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
                        source={require("../../assets/emoji20.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji22.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji17.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji25.png")}
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
            <View style={styles.commentcell}>
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
                <View style={[styles.tree2, styles.treeSpaceBlock]}>
                  <View style={[styles.treeChild, styles.treeBorder]} />
                </View>
              </View>
              <View style={styles.comment1}>
                <View
                  style={[styles.nameContainer, styles.helperTextSpaceBlock]}
                >
                  <View style={styles.hyperlink}>
                    <Text style={[styles.fptCamera1, styles.minhTypo]}>
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
                  <Text style={[styles.bnCheckIb, styles.choTypo]}>
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
                        source={require("../../assets/emoji20.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji22.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji17.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji25.png")}
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
                        source={require("../../assets/emoji20.png")}
                      />
                      <Image
                        style={[styles.emojiIcon2, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji22.png")}
                      />
                      <Image
                        style={[styles.emojiIcon3, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji17.png")}
                      />
                      <Image
                        style={[styles.emojiIcon4, styles.emojiIconLayout]}
                        resizeMode="cover"
                        source={require("../../assets/emoji25.png")}
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
            <View style={styles.commentcell}>
              <View style={[styles.tree1, styles.tree1FlexBox]}>
                <View style={[styles.treeItem, styles.treeBorder]} />
              </View>
              <View style={styles.commentavt1}>
                <Image
                  style={styles.avtIcon}
                  resizeMode="cover"
                  source={require("../../assets/avt6.png")}
                />
                <View style={[styles.tree2, styles.treeSpaceBlock]}>
                  <View style={[styles.treeChild, styles.treeBorder]} />
                </View>
              </View>
              <View style={styles.comment1}>
                <View style={[styles.frameView, styles.nameGroupSpaceBlock]}>
                  <View style={styles.hyperlink}>
                    <Text style={[styles.lMinhTr2, styles.minhTypo]}>
                      Thu Hương
                    </Text>
                    <Image
                      style={styles.nameChild}
                      resizeMode="cover"
                      source={require("../../assets/ellipse-672.png")}
                    />
                    <View style={styles.timerpm1}>
                      <Text style={[styles.text6, styles.labelLayout]}>
                        07:00
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.choMnhHi1, styles.choTypo]}>
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
                <View style={[styles.action3, styles.actionSpaceBlock]}>
                  <Text style={[styles.text1, styles.timeClr]}>
                    Đã ẩn: 01/06/2022 08:30
                  </Text>
                  <View style={styles.arrowReplyParent}>
                    <Image
                      style={[styles.eyeIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require("../../assets/eye.png")}
                    />
                    <Text style={[styles.trLi, styles.labelLayout]}>Bỏ ẩn</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeClr]}>17:05</Text>
              <View style={[styles.logMessagenormal, styles.toastLayout]}>
                <Text style={[styles.bn, styles.descriptionLayout]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.descriptionLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
            <View style={styles.messagelogAction}>
              <Text style={[styles.time, styles.timeClr]}>17:55</Text>
              <View style={[styles.logMessagenormal, styles.toastLayout]}>
                <Text style={[styles.bn, styles.descriptionLayout]}>Bạn</Text>
                <Text style={[styles.honTtCuc, styles.descriptionLayout]}>
                  đã hoàn tất cuộc hội thoại
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.composeBar}>
          <View style={[styles.helperText, styles.helperTextSpaceBlock]}>
            <Text style={[styles.description, styles.descriptionLayout]}>
              Bình luận đã bị ẩn
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.tree1FlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.leftIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../../assets/camera2.png")}
              />
            </View>
            <View style={[styles.composer, styles.composerBorder]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.timeClr]}>
                  Viết phản hồi
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon18, styles.emojiIcon18Position]}
                resizeMode="cover"
                source={require("../../assets/emoji111.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.emojiIcon18Position]} />
          </View>
        </View>
      </View>
      <View style={[styles.statusbarIphone13, styles.toastPosition]}>
        <Image
          style={[styles.notchIcon, styles.toastPosition]}
          resizeMode="cover"
          source={require("../../assets/notch1.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text7, styles.text7Position]}>9:41</Text>
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
            style={[styles.iconMobileSignal, styles.text7Position]}
            resizeMode="cover"
            source={require("../../assets/icon--mobile-signal.png")}
          />
        </View>
      </View>
      <View style={[styles.toast, styles.toastLayout]}>
        <Image
          style={styles.iconContainer}
          resizeMode="cover"
          source={require("../../assets/icon-container20.png")}
        />
        <View style={styles.titleParent}>
          <Text style={[styles.title, styles.titleTypo]}>Đã ẩn bình luận</Text>
          <Text style={[styles.description1, styles.descriptionLayout]}>
            The list has been saved.
          </Text>
        </View>
        <Image
          style={[styles.closeIcon8, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../../assets/23-close5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentRoomLayout: {
    width: "100%",
    flex: 1,
  },
  toastSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  iconLayout3: {
    height: 24,
    width: 24,
  },
  iconLayout2: {
    width: 12,
    height: 12,
  },
  titleTypo1: {
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
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
  descriptionLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  imageLayout: {
    height: 343,
    width: 343,
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
  minhTypo: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  timeClr: {
    color: Color.textSecondary,
    fontFamily: FontFamily.text14Regular,
  },
  choTypo: {
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
  helperTextSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  actionSpaceBlock: {
    paddingLeft: Padding.p_xs,
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  toastLayout: {
    width: 343,
    flexDirection: "row",
  },
  composerBorder: {
    borderStyle: "solid",
    flexDirection: "row",
  },
  emojiIcon18Position: {
    bottom: 8,
    position: "absolute",
  },
  toastPosition: {
    position: "absolute",
    left: "50%",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  text7Position: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.calloutRegular_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  iconLayout1: {
    height: 20,
    width: 20,
    display: "none",
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
    overflow: "hidden",
  },
  lMinhTr: {
    textAlign: "left",
    color: Color.textPrimary,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlineSemiBold_size,
    fontWeight: "500",
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
    overflow: "hidden",
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
  },
  camThNtChunMngThLu: {
    color: Color.textPrimary,
  },
  xemThm: {
    color: Color.brandPrimary,
    letterSpacing: 0,
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
    overflow: "hidden",
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
    paddingLeft: Padding.p_sm,
    width: 28,
  },
  tree2: {
    display: "none",
    alignItems: "center",
    flex: 1,
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
  lMinhTr2: {
    color: Color.textDisable,
    textAlign: "center",
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
  },
  text6: {
    color: Color.textDisable,
    textAlign: "right",
    fontFamily: FontFamily.text14Regular,
  },
  choMnhHi1: {
    color: Color.textDisable,
  },
  frameView: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  eyeIcon: {
    height: 12,
  },
  action3: {
    width: 309,
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
    justifyContent: "center",
  },
  messagelogAction: {
    paddingBottom: Padding.p_base,
    display: "none",
    alignItems: "center",
    alignSelf: "stretch",
  },
  layoutBlocksVertical: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  khungChat: {
    justifyContent: "flex-end",
    backgroundColor: Color.neutral3F5F5F5,
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  description: {
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
    color: Color.textPrimary,
    flex: 1,
  },
  helperText: {
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.neutral3F5F5F5,
    display: "none",
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
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 22,
  },
  nhpTinNhnWrapper: {
    maxHeight: 72,
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  emojiIcon18: {
    right: 8,
    zIndex: 1,
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  composer: {
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_4xs,
    marginLeft: 12,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: Color.textWhite,
  },
  composeBar1: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.neutral3F5F5F5,
    flexDirection: "row",
  },
  homeIndicator: {
    marginLeft: -66.5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
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
  },
  text7: {
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
  },
  iconContainer: {
    width: 20,
    height: 24,
  },
  title: {
    lineHeight: 24,
    color: Color.textWhite,
    fontFamily: FontFamily.text14Medium,
    fontWeight: "500",
  },
  description1: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    display: "none",
    alignSelf: "stretch",
  },
  titleParent: {
    marginLeft: 8,
    flex: 1,
  },
  closeIcon8: {
    marginLeft: 8,
    overflow: "hidden",
  },
  toast: {
    marginLeft: -190,
    backgroundColor: Color.tagGray600,
    shadowColor: "rgba(5, 16, 55, 0.15)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    left: "50%",
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    position: "absolute",
  },
  commentRoom: {
    height: 812,
    backgroundColor: Color.textWhite,
  },
});

export default CommentRoom8;
