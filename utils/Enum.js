import Config from "../../config/config";

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
};
export const GameEnum = {
  AG: "AG",
  BBIN: "BBIN",
  DG: "DG",
  GD: "GD",
  MG: "MG",
  KY: "KY",
  AP: "AP",
  BL: "BL",
  LEG: "LEG",
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

export const SlotGameIsTest = {
  Yes: 1,
  No: 2,
};
export const SlotGameWithTest = {
  No: 0,
  Yes: 1,
};
export const customGPname = {
  WGFM: Config.brand === "WGHK" ? "MGM" : ""
};
