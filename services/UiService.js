import { ApiService } from "./ApiService";

export const UiService = {
  GetMarquee,
  GetMaintenance
};

function GetMaintenance() {
  // const result = ApiService.get(`brand/maintenance`);
  const result = ApiService.get(`banner`);
  return result;
  // return new;
}

function GetMarquee(language) {
  const result = ApiService.get(`announcement/list/${language}`); //done
  return result;
}
