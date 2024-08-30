import { ApiService } from "./../services/ApiService";
 
function imagePathGenerator() {
  return ApiService.getAssetURL();
}

export function copy(item) {
  navigator.clipboard.writeText(item);
}

export const utility = {
  imagePathGenerator,
  copy,
};
