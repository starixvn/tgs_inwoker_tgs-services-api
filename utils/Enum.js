import Config from "../../config/config";
import i18n from "../../utils/i18n";
export const GameTypeEnum = {
  SPORTS: 1,
  RNGSPORTS: 2,
  RNGSPORTSLOBBY: 3,
  ESPORTS: 4,
  LIVE: 5,
  LIVELOBBY: 6,
  QIPAI: 7,
  QIPAILOBBY: 8,
  FISH: 9,
  FISHLOBBY: 10,
  ARCADE: 11,
  ARCADELOBBY: 12,
  LOTTERY: 13,
  LOTTERYLOBBY: 14,
  SLOT: 15,
  TABLEGAME: 16,
  COCKFIGHT: 17,
};
export const GameEnum = {
  AG: "AG",
  BBIN: "BBIN",
  DG: "DG",
  DGTF: "DGTF",
  GD: "GD",
  MG: "MG",
  KY: "KY",
  AP: "AP",
  BL: "BL",
  LEG: "LY",
  SBO: "SBO",
  AS: "AS",
  _633: "633",
  Sabah: "SABA",
  Pinnacle: "PINNACLE",
  BG: "BG",
  PT: "PT",
  SG: "SG",
  VR: "VR",
  IMES: "IMES",
  JDB: "JDB",
};
export const LotteryGameTypeEnum = {
  K3: "k3",
  KENO: "keno",
  SSC: "ssc",
  PK10: "pk10",
  LOTTERY: "lotto",
  _633: "lobby",
};
export const AGGameTypeEnum = {
  Lobby: 0,
  Premium: 1,
  International: 2,
  Multitable: 3,
  VIP: 4,
  WebJ: 5,
  SlotLobby: 8,
  PremiumH5Baccarat: 12,
  InternationalH5Baccarat: 13,
  InternationalH5DragonTiger: 15,
  H5VideoLobby: 18,
  PremiumBaccarat: 21,
  InternationalBaccarat: 22,
  PremiumDragonTiger: 23,
  InternationalDragonTiger: 24,
  PremiumRoulette: 25,
  InternationalRoulette: 26,
  PremiumSicbo: 27,
  VIPBaccarat: 30,
  LEDVIPBaccarat: 31,
  NiuNiu: 32,
  Blackjack: 33,
  LiveStream: 34,
  ZhaJinHua: 36,
  DouNiu: 37,
  Euro: 38,
  NewWorld: 39,
};
export const SlotFilterType = {
  All: 0,
  Hot: 1,
  New: 2,
  Bookmark: 3,
  History: 4,
  Recommend: 5,
};
export const WalletType = {
  MainWallet: 0,
  SingleWallet: 1,
  TransferWallet: 2,
};
export const SlotGameParentId = {
  QM: 31,
  HABANERO: 34,
};
export const SlotGameCategory = {
  Live: { id: 1, title: "视频扑克" },
  Table: { id: 2, title: "桌面游戏" },
  Slot: { id: 3, title: "老虎机" },
  Jackpot: { id: 4, title: "刮刮卡" },
  LittleGame: { id: 5, title: "小游戏" },
  Lobby: { id: 6, title: "游戏厅" },
  Progressive: { id: 7, title: "累积大奖" },
  Fishing: { id: 8, title: "捕鱼游戏" },
  Qipai: { id: 8, title: "棋牌" },
};
export const SlotGameIsTest = {
  Yes: 1,
  No: 2,
};
export const SlotGameWithTest = {
  No: 0,
  Yes: 1,
};
export const customGPname = {
  WGFM: Config.brand === "WGHK" ? "MGM" : "",
};

// 自定義的 GroupCode，可依照需求新增對應類型
// 前台會依照此順序顯示
export const GroupCodeEnum = {
  GCash:'GCash',
  PayMaya:'PayMaya',
  Bank: 'Bank',
  Grabpay:'Grabpay',
  Coinsph:'Coinsph',
  FPS:'FPS',
  OMNI:'OMNI',
  ETHEREUM:'ETHEREUM',
  ALI2ALI:'ALI2ALI',
  TRON:'TRON',
  ViettelPay:'ViettelPay',
  Momo:'Momo',
  TRC: 'TRC',
  Pulsa: 'Pulsa',
  EWallet: 'E-wallet',
  GcashNative:'Gcash Native',
  MayaNative:'Maya Native',
  GrabeNative:'Grabe Native',
  MANDIRI:'MANDIRI',
  DANA:'DANA',
  BCA:'BCA',
  QRIS:'QRIS',
}

// 自定義的 MovnCode
export const MovnCodeEnum = {
  NET:'NET', // 網關
  QR : 'QR', // 掃碼
  DR : 'DR', // 直聯
  MOMO : 'MOMO', // MOMO
  VP : 'VP', // ViettelPay
  USDT :'USDT', // USDT
}