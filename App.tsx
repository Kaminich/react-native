/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CommentRoom4 from './screens/editComment/CommentRoom4';
import CommentRoom5 from './screens/editComment/CommentRoom5';
import CommentRoom6 from './screens/editComment/CommentRoom6';
import CommentRoom7 from './screens/editComment/CommentRoom7';
import CommentRoom8 from './screens/editComment/CommentRoom8';
import CommentRoom9 from './screens/editComment/CommentRoom9';
import CommentRoom10 from './screens/editComment/CommentRoom10';
import CommentRoom11 from './screens/editComment/CommentRoom11';
import CommentRoom12 from './screens/editComment/CommentRoom12';
import CommentRoom13 from './screens/editComment/CommentRoom13';
import FatherCustomer2 from './screens/customerInformationF&S/FatherCustomer2';
import SonCustomer2 from './screens/customerInformationF&S/SonCustomer2';
import ActivitySonComment2 from './screens/customerInformationF&S/ActivitySonComment2';
import Less10CmtSon from './screens/moreCmt/Less10CmtSon';
import More10CmtSon from './screens/moreCmt/More10CmtSon';
import More10CmtSonMore from './screens/moreCmt/More10CmtSonMore';
import AllListRoom from './screens/listRoomCmt/AllListRoom';
import ListRoomCmtFacebook2 from './screens/listRoomCmt/ListRoomCmtFacebook2';
import ListRoomCmtFacebook3 from './screens/listRoomCmt/ListRoomCmtFacebook3';
import ListRoomCmtFacebook4 from './screens/listRoomCmt/ListRoomCmtFacebook4';
import ListRoomCmtFacebook5 from './screens/listRoomCmt/ListRoomCmtFacebook5';
import ListRoomConnectedEmpty from './screens/listRoomCmt/ListRoomConnectedEmpty';
import ListRoomDisconnect from './screens/listRoomCmt/ListRoomDisconnect';
import DeletedNew from './screens/newStatus/DeletedNew';
import DisconnectedNew from './screens/newStatus/DisconnectedNew';
import IgconitoNew from './screens/newStatus/IgconitoNew';
import VisibleNew from './screens/newStatus/VisibleNew';
import Search from './screens/searchFilter/Search';
import SearchMore30Letters from './screens/searchFilter/SearchMore30Letters';
import SearchPhone1 from './screens/searchFilter/SearchPhone1';
import SearchResult from './screens/searchFilter/SearchResult';
import SearchResult1 from './screens/searchFilter/SearchResult1';
import SearchResultMoreCmt from './screens/searchFilter/SearchResultMoreCmt';
import SearchResultMoreContact from './screens/searchFilter/SearchResultMoreContact';
import SearchText from './screens/searchFilter/SearchText';
import ListRoomWebsite from './screens/websiteText/ListRoomWebsite';
import MemoCustomerInfo from './screens/websiteText/MemoCustomerInfo';
import RoomWebsite from './screens/websiteText/RoomWebsite';
import WebsiteLogHotNgCollapse from './screens/websiteText/WebsiteLogHotNgCollapse';
import WebsiteLogHotNgExpand from './screens/websiteText/WebsiteLogHotNgExpand';
import WebsiteRoomDetail3Log from './screens/websiteText/WebsiteRoomDetail3Log';
import WebsiteRoomDetailIP from './screens/websiteText/WebsiteRoomDetailIP';
import WebsiteRoomDetailKhchBm from './screens/websiteText/WebsiteRoomDetailKhchBm';
import WebsiteRoomDetailKhchGi from './screens/websiteText/WebsiteRoomDetailKhchGi';
import WebsiteRoomDetailLog from './screens/websiteText/WebsiteRoomDetailLog';
import WebsiteRoomDetailLog1 from './screens/websiteText/WebsiteRoomDetailLog1';
import WebsiteRoomDetailLog2 from './screens/websiteText/WebsiteRoomDetailLog2';
import WebsiteRoomDetailLogExpand from './screens/websiteText/WebsiteRoomDetailLogExpand';
import WebsiteRoomDetailMapInfo from './screens/websiteText/WebsiteRoomDetailMapInfo';
import WebsiteRoomDetailOption from './screens/websiteText/WebsiteRoomDetailOption';
import WebsiteRoomDetailSaleNhn from './screens/websiteText/WebsiteRoomDetailSaleNhn';
import WebsiteRoomDetailTheoDiH from './screens/websiteText/WebsiteRoomDetailTheoDiH';
import WebsiteRoomDetailTheoDiH1 from './screens/websiteText/WebsiteRoomDetailTheoDiH1';
import ChiTitRoom from './screens/1/ChiTitRoom';
import ChiTitRoom1 from './screens/1/ChiTitRoom1';
import ChiTitRoom2 from './screens/1/ChiTitRoom2';
import ChiTitRoom3 from './screens/1/ChiTitRoom3';
import ChiTitRoomChaNhpTextC from './screens/1/ChiTitRoomChaNhpTextC';
import ChiTitRoomChaNhpTextC1 from './screens/1/ChiTitRoomChaNhpTextC1';
import ChiTitRoomChn1FileIos from './screens/1/ChiTitRoomChn1FileIos';
import ChiTitRoomChn1FileIos1 from './screens/1/ChiTitRoomChn1FileIos1';
import ChiTitRoomChn1FileIos2 from './screens/1/ChiTitRoomChn1FileIos2';
import ChiTitRoomChnFileIos from './screens/1/ChiTitRoomChnFileIos';
import ChiTitRoomChnNhiuFile from './screens/1/ChiTitRoomChnNhiuFile';
import ChiTitRoomChnNhiuFile1 from './screens/1/ChiTitRoomChnNhiuFile1';
import ChiTitRoomChnNhiuFile2 from './screens/1/ChiTitRoomChnNhiuFile2';
import ChiTitRoomChnNhiuFile3 from './screens/1/ChiTitRoomChnNhiuFile3';
import ChiTitRoomChnSticker from './screens/1/ChiTitRoomChnSticker';
import ChiTitRoomCoutdownHnGi from './screens/1/ChiTitRoomCoutdownHnGi';
import ChiTitRoomCoutdownHnGi1 from './screens/1/ChiTitRoomCoutdownHnGi1';
import ChiTitRoomCoutdownHnGi2 from './screens/1/ChiTitRoomCoutdownHnGi2';
import ChiTitRoomCoutdownHnGi3 from './screens/1/ChiTitRoomCoutdownHnGi3';
import ChiTitRoomFail from './screens/1/ChiTitRoomFail';
import ChiTitRoomFail2 from './screens/1/ChiTitRoomFail2';
import ChiTitRoomFail1 from './screens/1/ChiTitRoomFail1';
import ChiTitRoomFail3 from './screens/1/ChiTitRoomFail3';
import ChiTitRoomFail4 from './screens/1/ChiTitRoomFail4';
import ChiTitRoomFchatQuDungL from './screens/1/ChiTitRoomFchatQuDungL';
import ChiTitRoomFocus from './screens/1/ChiTitRoomFocus';
import ChiTitRoomFocus1 from './screens/1/ChiTitRoomFocus1';
import ChiTitRoomFocus2 from './screens/1/ChiTitRoomFocus2';
import ChiTitRoomFocus3 from './screens/1/ChiTitRoomFocus3';
import ChiTitRoomFocus4 from './screens/1/ChiTitRoomFocus4';
import ChiTitRoomFocus5 from './screens/1/ChiTitRoomFocus5';
import ChiTitRoomFocus6 from './screens/1/ChiTitRoomFocus6';
import ChiTitRoomFocus7 from './screens/1/ChiTitRoomFocus7';
import ChiTitRoomFocus8 from './screens/1/ChiTitRoomFocus8';
import ChiTitRoomFocus9 from './screens/1/ChiTitRoomFocus9';
import ChiTitRoomFocus10 from './screens/1/ChiTitRoomFocus10';
import ChiTitRoomFocus11 from './screens/1/ChiTitRoomFocus11';
import ChiTitRoomFocus12 from './screens/1/ChiTitRoomFocus12';
import ChiTitRoomFocusAdd from './screens/1/ChiTitRoomFocusAdd';
import ChiTitRoomFocusAddKhi from './screens/1/ChiTitRoomFocusAddKhi';
import ChiTitRoomFocusAddKhi1 from './screens/1/ChiTitRoomFocusAddKhi1';
import ChiTitRoomFocusAddKhi2 from './screens/1/ChiTitRoomFocusAddKhi2';
import ChiTitRoomFocusAddKhiCh from './screens/1/ChiTitRoomFocusAddKhiCh';
import ChiTitRoomHtHnGi from './screens/1/ChiTitRoomHtHnGi';
import ChiTitRoomHtHnGi1 from './screens/1/ChiTitRoomHtHnGi1';
import ChiTitRoomHtHnGi2 from './screens/1/ChiTitRoomHtHnGi2';
import ChiTitRoomHtHnGi3 from './screens/1/ChiTitRoomHtHnGi3';
import ChiTitRoomHtHnGiXem from './screens/1/ChiTitRoomHtHnGiXem';
import ChiTitRoomHtHnGiXem1 from './screens/1/ChiTitRoomHtHnGiXem1';
import ChiTitRoomMessQuDungL from './screens/1/ChiTitRoomMessQuDungL';
import ChiTitRoomMessQuDungL1 from './screens/1/ChiTitRoomMessQuDungL1';
import ChiTitRoomPageBNgtKt from './screens/1/ChiTitRoomPageBNgtKt';
import ChiTitRoomPageBNgtKt1 from './screens/1/ChiTitRoomPageBNgtKt1';
import ChiTitRoomPageBXaKt from './screens/1/ChiTitRoomPageBXaKt';
import ChiTitRoomPageBXaKt1 from './screens/1/ChiTitRoomPageBXaKt1';
import ChiTitRoomPageBXaKt2 from './screens/1/ChiTitRoomPageBXaKt2';
import ChiTitRoomTyping from './screens/1/ChiTitRoomTyping';
import ChiTitRoomTypingAdd from './screens/1/ChiTitRoomTypingAdd';
import ChiTitRoomTypingAdd1 from './screens/1/ChiTitRoomTypingAdd1';
import ChiTitRoomTypingAdd2 from './screens/1/ChiTitRoomTypingAdd2';
import ChiTitRoomviewAdmin from './screens/1/ChiTitRoomviewAdmin';
import ChiTitRoomZaloQuDungL from './screens/1/ChiTitRoomZaloQuDungL';
import ChNhChat from './screens/1/ChNhChat';
import ChNhChatAgent from './screens/1/ChNhChatAgent';
import ChNhChatThnhCng from './screens/1/ChNhChatThnhCng';
import ChNhChatTi from './screens/1/ChNhChatTi';
import ChNhChatTmKim from './screens/1/ChNhChatTmKim';
import ChNhChatViewNgiMtR from './screens/1/ChNhChatViewNgiMtR';
import ChNhChatViewNgiNhn from './screens/1/ChNhChatViewNgiNhn';
import ChNhChatViewNgiNhn1 from './screens/1/ChNhChatViewNgiNhn1';
import ChnNh from './screens/1/ChnNh';
import ChnNh1 from './screens/1/ChnNh1';
import ChpNh from './screens/1/ChpNh';
import ClickAva from './screens/1/ClickAva';
import ClickVoTinNhnCRep from './screens/1/ClickVoTinNhnCRep';
import ClickVoTinNhnCRep1 from './screens/1/ClickVoTinNhnCRep1';
import INhThnhCng from './screens/1/INhThnhCng';
import INhThnhCng1 from './screens/1/INhThnhCng1';
import INhThtBi from './screens/1/INhThtBi';
import INhThtBi1 from './screens/1/INhThtBi1';
import KhngCQuynTruyCpNh from './screens/1/KhngCQuynTruyCpNh';
import ListRoom from './screens/1/ListRoom';
import LogNhChatViewNgiMtR from './screens/1/LogNhChatViewNgiMtR';
import LogNhChatViewNgiNhn from './screens/1/LogNhChatViewNgiNhn';
import NhDc from './screens/1/NhDc';
import NhDcClickVoNhNToo from './screens/1/NhDcClickVoNhNToo';
import NHng from './screens/1/NHng';
import ListRoomZalo from './screens/1/ListRoomZalo';
import NHng1 from './screens/1/NHng1';
import NHng2 from './screens/1/NHng2';
import NhNgang from './screens/1/NhNgang';
import NhNgangClickVoNhNT from './screens/1/NhNgangClickVoNhNT';
import NoticTtC from './screens/1/NoticTtC';
import NotiDanhSch from './screens/1/NotiDanhSch';
import NotiDanhSchChat from './screens/1/NotiDanhSchChat';
import NotiKhngCThngBo from './screens/1/NotiKhngCThngBo';
import NotinhDuC from './screens/1/NotinhDuC';
import NotinhDuChaC from './screens/1/NotinhDuChaC';
import NotinhDuChaCThnhC from './screens/1/NotinhDuChaCThnhC';
import NotinhDuCThnhCn from './screens/1/NotinhDuCThnhCn';
import NotiSettingBtTtCThng from './screens/1/NotiSettingBtTtCThng';
import NotiSettingLuThayI from './screens/1/NotiSettingLuThayI';
import NotiSettingLuThayI1 from './screens/1/NotiSettingLuThayI1';
import NotiXa from './screens/1/NotiXa';
import ReplyGridHnhNh from './screens/1/ReplyGridHnhNh';
import ReplyHnhNh from './screens/1/ReplyHnhNh';
import ReplyTinNhnParagraph from './screens/1/ReplyTinNhnParagraph';
import ReplyTinNhnVnBn from './screens/1/ReplyTinNhnVnBn';
import ReplyTpNhKm from './screens/1/ReplyTpNhKm';
import SaoChpTinNhn from './screens/1/SaoChpTinNhn';
import Search1 from './screens/1/Search1';
import SearchDetailInvisible from './screens/1/SearchDetailInvisible';
import SearchDetailInvisible1 from './screens/1/SearchDetailInvisible1';
import SearchDetailInvisible2 from './screens/1/SearchDetailInvisible2';
import SearchFilled from './screens/1/SearchFilled';
import SearchFilled1 from './screens/1/SearchFilled1';
import SearchNoResult from './screens/1/SearchNoResult';
import SearchResult2 from './screens/1/SearchResult2';
import SearchResultClickVisible from './screens/1/SearchResultClickVisible';
import TinNhnNhDc from './screens/1/TinNhnNhDc';
import TinNhnNhNgang from './screens/1/TinNhnNhNgang';
import ToNHnConfirm from './screens/1/ToNHnConfirm';
import ToNHngChaCiAppSC from './screens/1/ToNHngChaCiAppSC';
import ToNHngChnLoiNHn from './screens/1/ToNHngChnLoiNHn';
import ToNHngonboarding from './screens/1/ToNHngonboarding';
import ToNHngThnhCng from './screens/1/ToNHngThnhCng';
import TrangCh from './screens/1/TrangCh';
import TrangChActionSheet from './screens/1/TrangChActionSheet';
import TrangChActionSheet1 from './screens/1/TrangChActionSheet1';
import TruyCpCameraTHLoginKC from './screens/1/TruyCpCameraTHLoginKC';
import TruyCpNhTHLoginKCpQ from './screens/1/TruyCpNhTHLoginKCpQ';
import TyChnEmail from './screens/1/TyChnEmail';
import TyChnSt1 from './screens/1/TyChnSt1';
import Update141220234375To from './screens/1/Update141220234375To';
import ViewAdminChiaChatChaPhn from './screens/1/ViewAdminChiaChatChaPhn';
import ViewAdminChiaChatPhnH from './screens/1/ViewAdminChiaChatPhnH';
import ViewAdminChiaLiChatCha from './screens/1/ViewAdminChiaLiChatCha';
import ViewAdminChiaLiChatPh from './screens/1/ViewAdminChiaLiChatPh';
import ViewAdminLogChiaChat from './screens/1/ViewAdminLogChiaChat';
import ViewAdminLogChiaChat1 from './screens/1/ViewAdminLogChiaChat1';
import ViewNgiCChiaChat from './screens/1/ViewNgiCChiaChat';
import ViewNgiMtRoom from './screens/1/ViewNgiMtRoom';
import ViewNgiMtRoomLogChiaC from './screens/1/ViewNgiMtRoomLogChiaC';
import XemTrangCNhn from './screens/1/XemTrangCNhn';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          position: 'relative'
        }}>
        <ChiTitRoomFocusAddKhi1 />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
