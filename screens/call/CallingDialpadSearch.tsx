import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Padding, Color, Border } from "../../GlobalStyles";

const CallingDialpadSearch = () => {
  return (
    <View style={styles.callingDialpadSearch}>
      <View style={[styles.headerParent, styles.headerParentPosition]}>
        <View style={styles.header}>
          <View style={styles.alert}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/validate.png")}
            />
            <Text style={[styles.description, styles.textTypo1]}>
              Không có kết nối internet
            </Text>
            <Image
              style={[styles.closeIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../../assets/23-close.png")}
            />
          </View>
          <View style={[styles.titlePage, styles.titlePageSpaceBlock]}>
            <Image
              style={[styles.leftIcon, styles.iconsetplaceholderLayout]}
              resizeMode="cover"
              source={require("../../assets/27-left.png")}
            />
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.luTypo]}>Cuộc gọi</Text>
            </View>
            <Text style={[styles.lu, styles.luPosition]}>Lưu</Text>
            <Image
              style={[styles.filterIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/filter.png")}
            />
          </View>
          <View style={styles.tabControl}>
            <View style={[styles.tab, styles.tabFlexBox]}>
              <Image
                style={[styles.socialIcon, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social.png")}
              />
              <Text style={styles.label10}>Tất cả</Text>
              <View style={[styles.badge, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.text2Typo]}>16</Text>
              </View>
            </View>
            <View style={styles.tabFlexBox}>
              <Image
                style={[styles.socialIcon, styles.socialIconLayout]}
                resizeMode="cover"
                source={require("../../assets/social1.png")}
              />
              <Text style={[styles.label1, styles.label1Typo]}>
                Cuộc gọi nhỡ
              </Text>
              <View style={[styles.badge1, styles.badge1Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={[styles.label1, styles.label1Typo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badge1Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={[styles.label1, styles.label1Typo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badge1Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={[styles.label1, styles.label1Typo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badge1Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
            <View style={[styles.tab2, styles.tabFlexBox]}>
              <Image
                style={styles.socialIconLayout}
                resizeMode="cover"
                source={require("../../assets/social2.png")}
              />
              <Text style={[styles.label1, styles.label1Typo]}>Tab 1</Text>
              <View style={[styles.badge1, styles.badge1Layout]}>
                <Text style={[styles.number, styles.text2Typo]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.callHistoryList}>
          <View>
            <View style={[styles.title2, styles.badgeSpaceBlock]}>
              <Text style={styles.label6}>Hôm nay</Text>
            </View>
            <View style={styles.callMinimizecallHistoryParent}>
              <View style={styles.callMinimizecallHistory}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kLayout]}>TL</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>Trí Lê</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.textTypo1]}>
                      00:01:16
                    </Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status.png")}
                    />
                    <Text style={[styles.cucGiN, styles.textTypo1]}>
                      Cuộc gọi đến
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>13:01</Text>
                  </View>
                </View>
              </View>
              <View style={styles.callMinimizecallHistory}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kLayout]}>0</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>0901887055</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.textTypo1]}>
                      00:02:48
                    </Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.textTypo1]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>11:08</Text>
                  </View>
                </View>
              </View>
              <View style={styles.callMinimizecallHistory}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kLayout]}>TH</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL2, styles.trL2Clr]}>Thu Hương</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.textTypo1]}>
                      00:00:00
                    </Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status2.png")}
                    />
                    <Text style={[styles.cucGiNh, styles.trL2Clr]}>
                      Cuộc gọi nhỡ
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>10:22</Text>
                  </View>
                </View>
              </View>
              <View style={styles.callMinimizecallHistory}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kLayout]}>0</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL2, styles.trL2Clr]}>0331783910</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.textTypo1]}>
                      00:00:00
                    </Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status2.png")}
                    />
                    <Text style={[styles.cucGiNh, styles.trL2Clr]}>
                      Cuộc gọi nhỡ
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>09:04</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.callHistoryList}>
            <View style={[styles.title2, styles.badgeSpaceBlock]}>
              <Text style={styles.label6}>Cũ hơn</Text>
            </View>
            <View style={styles.callMinimizecallHistoryParent}>
              <View style={styles.callMinimizecallHistory}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kLayout]}>HT</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>Hiền Thảo</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.textTypo1]}>
                      00:02:11
                    </Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.textTypo1]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>
                      06/06/2023
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.callMinimizecallHistory}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kLayout]}>NT</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>
                    Nguyễn Thu Trang
                  </Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.textTypo1]}>
                      00:00:33
                    </Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.textTypo1]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>
                      06/06/2023
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.callMinimizecallHistory}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kLayout]}>LH</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>Lê Thu Hà</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.textTypo1]}>
                      00:00:00
                    </Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.textTypo1]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>
                      05/06/2023
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.callMinimizecallHistory}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.kLayout]}>0</Text>
                </View>
                <View style={styles.trLParent}>
                  <Text style={[styles.trL, styles.trLTypo]}>0945188271</Text>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/2-hourglass.png")}
                    />
                    <Text style={[styles.text1, styles.textTypo1]}>
                      00:00:46
                    </Text>
                  </View>
                </View>
                <View style={styles.callStatusParent}>
                  <View style={styles.hourglassParent}>
                    <Image
                      style={[styles.hourglassIcon, styles.badge1Layout]}
                      resizeMode="cover"
                      source={require("../../assets/call-status1.png")}
                    />
                    <Text style={[styles.cucGiN, styles.textTypo1]}>
                      Cuộc gọi đi
                    </Text>
                  </View>
                  <View style={styles.timer}>
                    <Text style={[styles.text2, styles.text2Typo]}>
                      04/06/2023
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarBorder]}>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon.png")}
            />
            <Text style={[styles.label8, styles.labelTypo1]}>Trang chủ</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon1.png")}
            />
            <Text style={[styles.label9, styles.labelTypo1]}>Cuộc gọi</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon2.png")}
            />
            <Text style={[styles.label8, styles.labelTypo1]}>Tin nhắn</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon3.png")}
            />
            <Text style={[styles.label8, styles.labelTypo1]}>Thông báo</Text>
          </View>
          <View style={styles.tabBar1}>
            <Image
              style={styles.menuIcon}
              resizeMode="cover"
              source={require("../../assets/menu-icon4.png")}
            />
            <Text style={[styles.label8, styles.labelTypo1]}>Khách hàng</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.callingDialpadSearchChild, styles.headerParentPosition]}
      />
      <View style={[styles.actionSheet, styles.tabBarPosition]}>
        <View style={[styles.actionSheetheader, styles.titlePageSpaceBlock]}>
          <Image
            style={[styles.leftIcon, styles.iconsetplaceholderLayout]}
            resizeMode="cover"
            source={require("../../assets/27-left1.png")}
          />
          <View style={styles.titleFlexBox}>
            <Text style={styles.title4}>Bàn phím</Text>
          </View>
          <View style={[styles.button, styles.buttonPosition]}>
            <Image
              style={[
                styles.iconsetplaceholder,
                styles.iconsetplaceholderLayout,
              ]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder.png")}
            />
            <Text style={[styles.text17, styles.label1Typo]}>Lưu</Text>
            <Image
              style={[
                styles.iconsetplaceholder1,
                styles.iconsetplaceholderLayout,
              ]}
              resizeMode="cover"
              source={require("../../assets/iconsetplaceholder.png")}
            />
          </View>
          <Image
            style={[styles.closeIcon1, styles.buttonPosition]}
            resizeMode="cover"
            source={require("../../assets/23-close1.png")}
          />
        </View>
        <View style={styles.dialpadSearch}>
          <View style={[styles.fieldinput, styles.buttonFlexBox]}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../../assets/1-search.png")}
            />
            <View style={styles.textWapper}>
              <Text style={styles.text18}>0336174</Text>
              <View style={styles.line1} />
            </View>
            <Image
              style={styles.deleteIcon}
              resizeMode="cover"
              source={require("../../assets/delete.png")}
            />
          </View>
          <View style={styles.suggestion}>
            <View style={styles.searchSt}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.kLayout]}>TL</Text>
              </View>
              <View style={styles.trLParent}>
                <Text style={[styles.trL, styles.trLTypo]}>Trí Lê</Text>
                <Text style={[styles.text19, styles.textTypo1]}>
                  0336174912
                </Text>
              </View>
              <Image
                style={[styles.iconContainer, styles.avtLayout]}
                resizeMode="cover"
                source={require("../../assets/icon-container.png")}
              />
            </View>
            <View style={styles.searchSt}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.kLayout]}>TH</Text>
              </View>
              <View style={styles.trLParent}>
                <Text style={[styles.trL, styles.trLTypo]}>Thu Hương</Text>
                <Text style={[styles.text19, styles.textTypo1]}>
                  0336174800
                </Text>
              </View>
              <Image
                style={[styles.iconContainer, styles.avtLayout]}
                resizeMode="cover"
                source={require("../../assets/icon-container.png")}
              />
            </View>
            <View style={styles.searchSt}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.kLayout]}>LH</Text>
              </View>
              <View style={styles.trLParent}>
                <Text style={[styles.trL, styles.trLTypo]}>Lê Thu Hà</Text>
                <Text style={[styles.text19, styles.textTypo1]}>
                  0336174122
                </Text>
              </View>
              <Image
                style={[styles.iconContainer, styles.avtLayout]}
                resizeMode="cover"
                source={require("../../assets/icon-container.png")}
              />
            </View>
            <View style={styles.searchSt}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.kLayout]}>NT</Text>
              </View>
              <View style={styles.trLParent}>
                <Text style={[styles.trL, styles.trLTypo]}>Nguyễn Trang</Text>
                <Text style={[styles.text19, styles.textTypo1]}>
                  0336174315
                </Text>
              </View>
              <Image
                style={[styles.iconContainer, styles.avtLayout]}
                resizeMode="cover"
                source={require("../../assets/icon-container.png")}
              />
            </View>
            <View style={styles.searchSt}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.kLayout]}>NV</Text>
              </View>
              <View style={styles.trLParent}>
                <Text style={[styles.trL, styles.trLTypo]}>Nguyễn Thị Vân</Text>
                <Text style={[styles.text19, styles.textTypo1]}>
                  0336174755
                </Text>
              </View>
              <Image
                style={[styles.iconContainer, styles.avtLayout]}
                resizeMode="cover"
                source={require("../../assets/icon-container.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.actionSheetfooter}>
          <View style={styles.buttonParent}>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Image
                style={[
                  styles.iconsetplaceholder,
                  styles.iconsetplaceholderLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text24, styles.textTypo]}>Secondary</Text>
              <Image
                style={[
                  styles.iconsetplaceholder3,
                  styles.iconsetplaceholderLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder1.png")}
              />
            </View>
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Image
                style={[
                  styles.iconsetplaceholder,
                  styles.iconsetplaceholderLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder2.png")}
              />
              <Text style={[styles.text25, styles.textTypo]}>Primary</Text>
              <Image
                style={[
                  styles.iconsetplaceholder3,
                  styles.iconsetplaceholderLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/iconsetplaceholder2.png")}
              />
            </View>
          </View>
          <View style={[styles.numberpad, styles.avtBg]}>
            <View style={styles.keyParent}>
              <View style={[styles.keyboardRow]}>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>1</Text>
                </View>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>2</Text>
                  <Text style={[styles.label, styles.stTypo]}>ABC</Text>
                </View>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>3</Text>
                  <Text style={[styles.label, styles.stTypo]}>DEF</Text>
                </View>
              </View>
              <View style={[styles.keyboardRow]}>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>4</Text>
                  <Text style={[styles.label, styles.stTypo]}>GHI</Text>
                </View>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>5</Text>
                  <Text style={[styles.label, styles.stTypo]}>JKL</Text>
                </View>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>6</Text>
                  <Text style={[styles.label, styles.stTypo]}>MNO</Text>
                </View>
              </View>
              <View style={[styles.keyboardRow]}>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>7</Text>
                  <Text style={[styles.label, styles.stTypo]}>PQRS</Text>
                </View>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>8</Text>
                  <Text style={[styles.label, styles.stTypo]}>TUV</Text>
                </View>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>9</Text>
                  <Text style={[styles.label, styles.stTypo]}>TUV</Text>
                </View>
              </View>
              <View style={[styles.keyboardRow]}>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>*</Text>
                </View>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>0</Text>
                </View>
                <View style={[styles.key, styles.keyShadowBox]}>
                  <Text style={[styles.letter, styles.letterTypo]}>#</Text>
                </View>
              </View>
              <Image
                style={styles.iconButton}
                resizeMode="cover"
                source={require("../../assets/icon-button2.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerParentPosition: {
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
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
  textTypo1: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    fontFamily: FontFamily.text16Regular,
  },
  iconLayout1: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  titlePageSpaceBlock: {
    paddingRight: Padding.p_21xl,
    paddingLeft: Padding.p_base,
    flexDirection: "row",
    width: "100%",
  },
  iconsetplaceholderLayout: {
    width: 24,
    height: 24,
  },
  titleFlexBox: {
    zIndex: 1,
    flex: 1,
    alignItems: "center",
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
  iconLayout: {
    zIndex: 3,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  tabFlexBox: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  socialIconLayout: {
    borderRadius: Border.br_base,
    width: 20,
    height: 20,
  },
  badgeSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  text2Typo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    fontFamily: FontFamily.text16Regular,
  },
  label1Typo: {
    fontSize: FontSize.subheadlineRegular_size,
    lineHeight: 20,
    letterSpacing: 0,
  },
  badge1Layout: {
    width: 16,
    overflow: "hidden",
  },
  avtLayout: {
    height: 44,
    width: 44,
  },
  kLayout: {
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
  },
  trLTypo: {
    fontSize: FontSize.text16Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.text16Medium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  trL2Clr: {
    color: Color.otherRed,
    textAlign: "left",
  },
  tabBarBorder: {
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  lineLayout: {
    height: 5,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  labelTypo1: {
    marginTop: 4,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular_size,
    fontFamily: FontFamily.text16Regular,
    textAlign: "center",
    letterSpacing: 0,
  },
  tabBarPosition: {
    bottom: 0,
    position: "absolute",
  },
  buttonPosition: {
    top: 20,
    right: 16,
    display: "none",
    position: "absolute",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.text16Regular_size,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.text16Regular,
    letterSpacing: 0,
  },
  avtBg: {
    backgroundColor: Color.tagGray100,
    alignItems: "center",
  },
  labelTypo: {
    color: Color.labelColorLightPrimary,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    top: "61.83%",
    height: "28.5%",
    width: 90,
    textAlign: "center",
    fontFamily: FontFamily.defaultBoldBody,
    left: 0,
    position: "absolute",
  },
  letterTypo: {
    fontFamily: FontFamily.text16Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  keyShadowBox: {
    height: 60,
    width: 90,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_21xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  keycontainerShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    position: "absolute",
  },
  letterPosition: {
    fontFamily: FontFamily.defaultRegularTitle2,
    top: "50%",
    color: Color.labelColorLightPrimary,
    width: 90,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 32,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  text: {
    color: Color.colorGray_100,
    height: 20,
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
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
    width: "100%",
  },
  description: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.text16Regular,
  },
  closeIcon: {
    marginLeft: 8,
  },
  alert: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
  },
  leftIcon: {
    zIndex: 0,
    height: 24,
    overflow: "hidden",
  },
  title1: {
    color: Color.textPrimary,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
  },
  title: {
    justifyContent: "center",
    flexDirection: "row",
  },
  lu: {
    zIndex: 2,
    textAlign: "right",
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
  },
  filterIcon: {
    right: 16,
    top: 10,
    display: "none",
    position: "absolute",
  },
  titlePage: {
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
  },
  socialIcon: {
    display: "none",
  },
  label: {
    fontFamily: FontFamily.text16Medium,
    fontWeight: "500",
    fontSize: FontSize.subheadlineRegular_size,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
  },
  stTypo: {
    marginTop: 2,
    color: Color.textPrimary,
    fontFamily: FontFamily.calloutRegular,
    textAlign: "center",
  },
  number: {
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
  },
  badge: {
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    paddingVertical: 0,
    marginLeft: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  tab: {
    borderColor: Color.brandPrimary,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  label1: {
    marginLeft: 8,
    color: Color.textPrimary,
    fontFamily: FontFamily.text16Regular,
    textAlign: "center",
  },
  badge1: {
    paddingVertical: 0,
    alignItems: "center",
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    marginLeft: 8,
    justifyContent: "center",
  },
  tab2: {
    display: "none",
  },
  tabControl: {
    flexDirection: "row",
    width: "100%",
  },
  header: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 0.45,
    elevation: 0.45,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.15000000596046448,
    },
    backgroundColor: Color.labelColorDarkPrimary,
  },
  label6: {
    fontSize: FontSize.title3Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.headlineSemiBold,
    textAlign: "left",
    color: Color.textPrimary,
    fontWeight: "600",
    letterSpacing: 0,
  },
  title2: {
    width: 343,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  k: {
    color: Color.textPrimary,
    fontFamily: FontFamily.text16Regular,
    textAlign: "center",
  },
  avt: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    backgroundColor: Color.tagGray100,
    alignItems: "center",
    justifyContent: "center",
  },
  trL: {
    textAlign: "left",
    color: Color.textPrimary,
  },
  hourglassIcon: {
    height: 16,
  },
  text1: {
    marginLeft: 4,
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text16Regular,
  },
  hourglassParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  trLParent: {
    flex: 1,
    marginLeft: 8,
  },
  cucGiN: {
    marginLeft: 4,
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text16Regular,
    display: "none",
  },
  text2: {
    color: Color.textSecondary,
    textAlign: "right",
  },
  timer: {
    marginTop: 8,
    flexDirection: "row",
  },
  callStatusParent: {
    alignItems: "flex-end",
    marginLeft: 8,
    justifyContent: "center",
  },
  callMinimizecallHistory: {
    padding: Padding.p_base,
    flexDirection: "row",
    width: "100%",
  },
  trL2: {
    fontSize: FontSize.text16Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.text16Medium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  cucGiNh: {
    marginLeft: 4,
    fontFamily: FontFamily.text16Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    display: "none",
  },
  callMinimizecallHistoryParent: {
    marginTop: 8,
  },
  callHistoryList: {
    marginTop: 24,
  },
  headerParent: {
    height: 757,
  },
  line: {
    marginLeft: -67.5,
    bottom: 11,
    width: 135,
  },
  iphoneXsHomeIndicator: {
    height: 24,
    display: "none",
    width: "100%",
  },
  menuIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  label8: {
    color: Color.textSecondary,
  },
  tabBar1: {
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  label9: {
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
    borderTopWidth: 0.5,
    height: 84,
    justifyContent: "space-between",
    bottom: 0,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    width: "100%",
  },
  callingDialpadSearchChild: {
    backgroundColor: Color.colorGray_300,
    opacity: 0.7,
    height: "100%",
  },
  title4: {
    display: "flex",
    fontSize: FontSize.subheadlineRegular_size,
    fontFamily: FontFamily.headlineSemiBold,
    height: 24,
    color: Color.textPrimary,
    lineHeight: 20,
    justifyContent: "center",
    alignSelf: "stretch",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    alignItems: "center",
  },
  iconsetplaceholder: {
    height: 24,
    display: "none",
  },
  text17: {
    marginLeft: 4,
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  iconsetplaceholder1: {
    marginLeft: 4,
    height: 24,
    display: "none",
  },
  button: {
    borderRadius: Border.br_9xs,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  closeIcon1: {
    zIndex: 3,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  label10: {
    fontFamily: FontFamily.text16Medium,
    fontWeight: "500",
    fontSize: FontSize.subheadlineRegular_size,
    color: Color.brandPrimary,
    marginLeft: 8,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
  },
  actionSheetheader: {
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderColor: Color.divider,
    borderBottomWidth: 1,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  text18: {
    fontSize: FontSize.size_9xl,
    lineHeight: 30,
    color: Color.brandPrimary,
    fontFamily: FontFamily.headlineSemiBold,
    textAlign: "left",
    fontWeight: "600",
    letterSpacing: 0,
  },
  line1: {
    width: 1,
    height: 18,
    backgroundColor: Color.brandPrimary,
    display: "none",
  },
  textWapper: {
    flex: 1,
    marginLeft: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  deleteIcon: {
    width: 28,
    height: 28,
    marginLeft: 8,
    overflow: "hidden",
  },
  fieldinput: {
    paddingHorizontal: 0,
    width: "100%",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  text19: {
    color: Color.textSecondary,
    textAlign: "left",
    fontFamily: FontFamily.text16Regular,
  },
  iconContainer: {
    borderRadius: Border.br_17xl,
    marginLeft: 8,
  },
  searchSt: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  suggestion: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  dialpadSearch: {
    padding: Padding.p_base,
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  text24: {
    color: Color.textPrimary,
  },
  iconsetplaceholder3: {
    height: 24,
    marginLeft: 8,
    display: "none",
  },
  button1: {
    borderWidth: 1,
    height: 41,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.labelColorDarkPrimary,
    flex: 1,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  text25: {
    color: Color.labelColorDarkPrimary,
  },
  button2: {
    height: 40,
    marginLeft: 16,
    backgroundColor: Color.brandPrimary,
    flex: 1,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  buttonParent: {
    padding: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    display: "none",
    alignItems: "center",
    width: "100%",
  },
  label13: {
    display: "none",
  },
  letter: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    alignSelf: "stretch",
    color: Color.textPrimary,
  },
  keycontainer1: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  letter1: {
    //     marginTop: -21,
  },
  keyboardRow: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%"
  },
  key: {
    marginHorizontal: 8,
    marginVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_7xs,
  },
  keycontainer2: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  keycontainer3: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  keycontainer4: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  keycontainer5: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  keycontainer6: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  keycontainer7: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  keycontainer8: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  letter9: {
    marginTop: -4,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.defaultRegularTitle2,
    top: "50%",
    lineHeight: 30,
  },
  keycontainer10: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  letter10: {
    marginTop: -15,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.defaultRegularTitle2,
    top: "50%",
  },
  keycontainer11: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  iconButton: {
    width: 72,
    height: 72,
    marginLeft: 24,
    borderRadius: Border.br_17xl,
  },
  keyParent: {
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%"
  },
  homeindicator1: {
    height: 34,
    marginTop: 8,
    display: "none",
    width: "100%",
  },
  numberpad: {
    paddingTop: Padding.p_base,
    width: "100%",
  },
  homeindicator2: {
    height: 34,
    display: "none",
    width: "100%",
  },
  actionSheetfooter: {
    minHeight: 34,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  actionSheet: {
    height: "90%",
    maxHeight: 800,
    width: "100%",
  },
  callingDialpadSearch: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    backgroundColor: Color.labelColorDarkPrimary,
  },
});

export default CallingDialpadSearch;
