import config from "../config/config";
export const ConfigService = {
  setPc,
  setLang,
  setFrom,
  setBaseUrl,
  setClient,
  setCurrency,
  setLiveChatUrl,
};
function setPc(pc) {
  config.isPC = pc;
}
function setLang(lang) {
  config.lang = lang;
}
function setFrom(from) {
  config.lang = from;
}
function setBaseUrl(baseUrl) {
  config.baseUrl = baseUrl;
}
function setClient(client) {
  config.client = client;
}
function setCurrency(currency) {
  config.currency = currency;
}
function setLiveChatUrl(liveChatUrl) {
  config.liveChatUrl = liveChatUrl;
}
