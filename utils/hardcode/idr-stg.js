const gameList = [
  {"abbreviation":"NLC","game_platform_id":0,"game_platform_name":"NLC","is_try":2,"name":"NLC","params":null,"gpcode":"NLC","type":15,"status":0},
  {"abbreviation":"365","game_platform_id":0,"game_platform_name":"365","is_try":2,"name":"365","params":null,"gpcode":"365","type":7,"status":0},
  {"abbreviation":"365","game_platform_id":0,"game_platform_name":"365","is_try":2,"name":"365","params":null,"gpcode":"365","type":8,"status":0},
  {"abbreviation":"BC","game_platform_id":0,"game_platform_name":"BetConstruct","is_try":2,"name":"BetConstruct","params":null,"gpcode":"BC","type":1,"status":0},
  {"abbreviation":"AVIA","game_platform_id":0,"game_platform_name":"AVIA","is_try":2,"name":"AVIA","params":null,"gpcode":"AVIA","type":4,"status":0},
  {"abbreviation":"AWC_COCKFIGHT","game_platform_id":0,"game_platform_name":"SV388","is_try":2,"name":"SV388","params":null,"gpcode":"AWC_COCKFIGHT","type":1,"status":0},
  {"abbreviation":"AWC_FACAI","game_platform_id":0,"game_platform_name":"FACAI","is_try":2,"name":"FACAI","params":null,"gpcode":"AWC_FACAI","type":15,"status":0},
  {"abbreviation":"AWC_FACAI","game_platform_id":0,"game_platform_name":"FACAI","is_try":2,"name":"FACAI","params":null,"gpcode":"AWC_FACAI","type":16,"status":0},
  {"abbreviation":"AWC_FACAI","game_platform_id":0,"game_platform_name":"FACAI","is_try":2,"name":"FACAI","params":null,"gpcode":"AWC_FACAI","type":9,"status":0},
  {"abbreviation":"AWC_RCB","game_platform_id":0,"game_platform_name":"RCB","is_try":2,"name":"RCB","params":null,"gpcode":"AWC_RCB","type":1,"status":0},
  {"abbreviation":"AWC_VENUS","game_platform_id":0,"game_platform_name":"VENUS","is_try":2,"name":"VENUS","params":null,"gpcode":"AWC_VENUS","type":5,"status":0},
  {"abbreviation":"AWC_VENUS","game_platform_id":0,"game_platform_name":"VENUS","is_try":2,"name":"VENUS","params":null,"gpcode":"AWC_VENUS","type":6,"status":0},
  {"abbreviation":"NTTF","game_platform_id":0,"game_platform_name":"NTTF","is_try":2,"name":"NTTF","params":null,"gpcode":"NTTF","type":15,"status":0},
  {"abbreviation":"NTTF","game_platform_id":0,"game_platform_name":"NTTF","is_try":2,"name":"NTTF","params":null,"gpcode":"NTTF","type":5,"status":0},
  {"abbreviation":"RTTF","game_platform_id":0,"game_platform_name":"RTTF","is_try":2,"name":"RTTF","params":null,"gpcode":"RTTF","type":15,"status":0},
  {"abbreviation":"RTTF","game_platform_id":0,"game_platform_name":"RTTF","is_try":2,"name":"RTTF","params":null,"gpcode":"RTTF","type":16,"status":0},
  {"abbreviation":"TFTF","game_platform_id":0,"game_platform_name":"TFGaming","is_try":2,"name":"TFGaming","params":null,"gpcode":"TFTF","type":4,"status":0},
  {"abbreviation":"BTG","game_platform_id":0,"game_platform_name":"BTG","is_try":2,"name":"BTG","params":null,"gpcode":"BTG","type":15,"status":0},
  {"abbreviation":"PPTF","game_platform_id":0,"game_platform_name":"PragmaticPlay","is_try":2,"name":"PragmaticPlay","params":null,"gpcode":"PPTF","type":15,"status":0},
  {"abbreviation":"PPTF","game_platform_id":0,"game_platform_name":"PragmaticPlay","is_try":2,"name":"PragmaticPlay","params":null,"gpcode":"PPTF","type":2,"status":0},
  {"abbreviation":"PPTF","game_platform_id":0,"game_platform_name":"PragmaticPlay","is_try":2,"name":"PragmaticPlay","params":null,"gpcode":"PPTF","type":5,"status":0},
  {"abbreviation":"PPTF","game_platform_id":0,"game_platform_name":"PragmaticPlay","is_try":2,"name":"PragmaticPlay","params":null,"gpcode":"PPTF","type":16,"status":0},
  {"abbreviation":"PPTF","game_platform_id":0,"game_platform_name":"PragmaticPlay","is_try":2,"name":"PragmaticPlay","params":null,"gpcode":"PPTF","type":6,"status":0},
  {"abbreviation":"AWC_KM","game_platform_id":0,"game_platform_name":"Kingmaker","is_try":2,"name":"Kingmaker","params":null,"gpcode":"AWC_KM","type":16,"status":0},
  {"abbreviation":"AWC_PGS","game_platform_id":0,"game_platform_name":"PGSoft","is_try":2,"name":"PGSoft","params":null,"gpcode":"AWC_PGS","type":15,"status":0},
  {"abbreviation":"AWC_PGS","game_platform_id":0,"game_platform_name":"PGSoft","is_try":2,"name":"PGSoft","params":null,"gpcode":"AWC_PGS","type":16,"status":0},
  {"abbreviation":"AWC_SG","game_platform_id":0,"game_platform_name":"Sexy Gaming","is_try":2,"name":"Sexy Gaming","params":null,"gpcode":"AWC_SG","type":5,"status":0},
  {"abbreviation":"AWC_SG","game_platform_id":0,"game_platform_name":"Sexy Gaming","is_try":2,"name":"Sexy Gaming","params":null,"gpcode":"AWC_SG","type":6,"status":0},
  {"abbreviation":"AWC_SPADE","game_platform_id":0,"game_platform_name":"Spade Gaming","is_try":2,"name":"Spade Gaming","params":null,"gpcode":"AWC_SPADE","type":9,"status":0},
  {"abbreviation":"AWC_SPADE","game_platform_id":0,"game_platform_name":"Spade Gaming","is_try":2,"name":"Spade Gaming","params":null,"gpcode":"AWC_SPADE","type":15,"status":0},
  {"abbreviation":"AWC_SPADE","game_platform_id":0,"game_platform_name":"Spade Gaming","is_try":2,"name":"Spade Gaming","params":null,"gpcode":"AWC_SPADE","type":16,"status":0},
  {"abbreviation":"WMTF","game_platform_id":0,"game_platform_name":"WM","is_try":2,"name":"WM","params":null,"gpcode":"WMTF","type":5,"status":0},
  {"abbreviation":"WMTF","game_platform_id":0,"game_platform_name":"WM","is_try":2,"name":"WM","params":null,"gpcode":"WMTF","type":6,"status":0},
  {"abbreviation":"JILITF","game_platform_id":0,"game_platform_name":"JILI","is_try":2,"name":"JILI","params":null,"gpcode":"JILITF","type":15,"status":0},
  {"abbreviation":"JILITF","game_platform_id":0,"game_platform_name":"JILI","is_try":2,"name":"JILI","params":null,"gpcode":"JILITF","type":9,"status":0},
  {"abbreviation":"SWTF","game_platform_id":0,"game_platform_name":"Skywind","is_try":2,"name":"Skywind","params":null,"gpcode":"SWTF","type":5,"status":0},
  {"abbreviation":"SWTF","game_platform_id":0,"game_platform_name":"Skywind","is_try":2,"name":"Skywind","params":null,"gpcode":"SWTF","type":15,"status":0},
  {"abbreviation":"SWTF","game_platform_id":0,"game_platform_name":"Skywind","is_try":2,"name":"Skywind","params":null,"gpcode":"SWTF","type":6,"status":0},
  {"abbreviation":"SWTF","game_platform_id":0,"game_platform_name":"Skywind","is_try":2,"name":"Skywind","params":null,"gpcode":"SWTF","type":16,"status":0},
  {"abbreviation":"BTI","game_platform_id":0,"game_platform_name":"BTi","is_try":2,"name":"BTi","params":null,"gpcode":"BTI","type":1,"status":0},
  {"abbreviation":"HABATF","game_platform_id":0,"game_platform_name":"Habanero","is_try":2,"name":"Habanero","params":null,"gpcode":"HABATF","type":15,"status":0},{"abbreviation":"HABATF","game_platform_id":0,"game_platform_name":"Habanero","is_try":2,"name":"Habanero","params":null,"gpcode":"HABATF","type":16,"status":0},{"abbreviation":"EVOTF","game_platform_id":0,"game_platform_name":"EVO. RT. NT. BTG. NLC","is_try":2,"name":"EVO. RT. NT. BTG. NLC","params":null,"gpcode":"EVOTF","type":5,"status":0},{"abbreviation":"EVOTF","game_platform_id":0,"game_platform_name":"EVO. RT. NT. BTG. NLC","is_try":2,"name":"EVO. RT. NT. BTG. NLC","params":null,"gpcode":"EVOTF","type":6,"status":0}
];

const providerList = [{"abbreviation":"NLC","transferwallet":true,"name":"NLC","gpcode":"NLC","status":0,"balance":0},{"abbreviation":"365","transferwallet":false,"name":"365","gpcode":"365","status":0,"balance":0},{"abbreviation":"BC","transferwallet":false,"name":"BetConstruct","gpcode":"BC","status":0,"balance":0},{"abbreviation":"AVIA","transferwallet":true,"name":"AVIA","gpcode":"AVIA","status":0,"balance":0},{"abbreviation":"AWC_COCKFIGHT","transferwallet":true,"name":"SV388","gpcode":"AWC_COCKFIGHT","status":0,"balance":0},{"abbreviation":"AWC_FACAI","transferwallet":true,"name":"FACAI","gpcode":"AWC_FACAI","status":0,"balance":0},{"abbreviation":"AWC_RCB","transferwallet":true,"name":"RCB","gpcode":"AWC_RCB","status":0,"balance":0},{"abbreviation":"AWC_VENUS","transferwallet":true,"name":"VENUS","gpcode":"AWC_VENUS","status":0,"balance":0},{"abbreviation":"NTTF","transferwallet":true,"name":"NTTF","gpcode":"NTTF","status":0,"balance":0},{"abbreviation":"RTTF","transferwallet":true,"name":"RTTF","gpcode":"RTTF","status":0,"balance":0},{"abbreviation":"TFTF","transferwallet":true,"name":"TFGaming","gpcode":"TFTF","status":0,"balance":0},{"abbreviation":"BTG","transferwallet":true,"name":"BTG","gpcode":"BTG","status":0,"balance":0},{"abbreviation":"PPTF","transferwallet":true,"name":"PragmaticPlay","gpcode":"PPTF","status":0,"balance":0},{"abbreviation":"AWC_KM","transferwallet":true,"name":"Kingmaker","gpcode":"AWC_KM","status":0,"balance":0},{"abbreviation":"AWC_PGS","transferwallet":true,"name":"PGSoft","gpcode":"AWC_PGS","status":0,"balance":0},{"abbreviation":"AWC_SG","transferwallet":true,"name":"Sexy Gaming","gpcode":"AWC_SG","status":0,"balance":0},{"abbreviation":"AWC_SPADE","transferwallet":true,"name":"Spade Gaming","gpcode":"AWC_SPADE","status":0,"balance":0},{"abbreviation":"WMTF","transferwallet":true,"name":"WM","gpcode":"WMTF","status":0,"balance":0},{"abbreviation":"JILITF","transferwallet":true,"name":"JILI","gpcode":"JILITF","status":0,"balance":0},{"abbreviation":"SWTF","transferwallet":true,"name":"Skywind","gpcode":"SWTF","status":0,"balance":0},{"abbreviation":"BTI","transferwallet":true,"name":"BTi","gpcode":"BTI","status":0,"balance":0},{"abbreviation":"HABATF","transferwallet":true,"name":"Habanero","gpcode":"HABATF","status":0,"balance":0},{"abbreviation":"EVOTF","transferwallet":true,"name":"EVO. RT. NT. BTG. NLC","gpcode":"EVOTF","status":0,"balance":0}];

const language = [
  {
    culturecode: "en-US",
  },
  {
    culturecode: "id-ID",
  },
];

const brandSupport = [
  {
    type: "WeChat",
    phone: "16713494701",
    appid: "1",
    qrcodeurl:
      "https://project.srvptt.com/tgs-project/messengerQRCode/ccDXkUmswrdTmWKdWdVvg7FuKV8dXK5K.png",
  },
];

export const idr = {
  gameList,
  providerList,
  language,
  brandSupport,
};
