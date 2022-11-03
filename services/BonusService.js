import { ApiService } from "./ApiService";

export const BonusService = {
  CompletedList,
  ReceiveBonus,
  GetActivityDetails,
};

async function CompletedList(token) {
  const result = await ApiService.post(
    "bonus_receive/receivedList",
    {
      token: token,
    },
    true
  );

  return result;
}
function ReceiveBonus(token, bore_id, type_id) {
  const result = ApiService.post(
    "bonus_receive/receive",
    {
      token,
      bore_id,
      type_id,
    },
    true
  );

  return result;
}

function GetActivityDetails(id) {
  const result = ApiService.get(`pc/promotion/detail?id=${id}`);

  return result;
}
