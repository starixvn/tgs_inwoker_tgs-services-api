import { GeneralService } from "../services/GeneralService";
import {
  GETMOBILEPREFIX_SUCCESS,
  GETSITETOKEN_SUCCESS,
  GETSITETOKEN_FAIL,
  GETPROMOLIST_BEGIN,
  GETPROMOLIST_SUCCESS,
  GETPROMOLIST_FAILURE,
  GETPLAYERPROMOLIST_BEGIN,
  GETPLAYERPROMOLIST_SUCCESS,
  GETPLAYERPROMOLIST_FAILURE,
  JOINPROMO_BEGIN,
  JOINPROMO_SUCCESS,
  JOINPROMO_FAILURE,
  GETBRANDCOMMUNICATION_BEGIN,
  GETBRANDCOMMUNICATION_SUCCESS,
  GETBRANDCOMMUNICATION_FAIL,
  GETBRANDLANGUAGE_BEGIN,
  GETBRANDLANGUAGE_SUCCESS,
  GETBRANDLANGUAGE_FAIL,
  GETLIVECHATURL_BEGIN,
  GETLIVECHATURL_SUCCESS,
  GETLIVECHATURL_FAIL,
  GETBANNER_BEGIN,
  GETBANNER_SUCCESS,
  GETBANNER_FAIL,
  GETBRAND_BEGIN,
  GETBRAND_SUCCESS,
  GETBRAND_FAIL,
  GETVIP_BEGIN,
  GETVIP_SUCCESS,
  GETVIP_FAILED,
  GETINVITATIONCODE_SUCCESS,
  GETINVITATIONCODE_FAILED,
  GETPROMOROULETTE_STATUS_BEGIN,
  GETPROMOROULETTE_STATUS_SUCCESS,
  GETPROMOROULETTE_STATUS_FAILED,
  GETDAROULETTE_STATUS_BEGIN,
  GETDAROULETTE_STATUS_SUCCESS,
  GETDAROULETTE_STATUS_FAILED,
  GETPROMOROULETTE_RESULT_BEGIN,
  GETPROMOROULETTE_RESULT_SUCCESS,
  GETPROMOROULETTE_RESULT_FAILED,
  GETDAROULETTE_RESULT_BEGIN,
  GETDAROULETTE_RESULT_SUCCESS,
  GETDAROULETTE_RESULT_FAILED,
  GETDAROULETTE_HISTORY_BEGIN,
  GETDAROULETTE_HISTORY_SUCCESS,
  GETDAROULETTE_HISTORY_FAILED,
  GETROULETTE_COUNT_BEGIN,
  GETROULETTE_COUNT_SUCCESS,
  GETROULETTE_COUNT_FAILED,
  GETPROMOTION_BEGIN,
  GETPROMOTION_SUCCESS,
  GETPROMOTION_FAILURE,
  GETBRANDALLAGENT_BEGIN,
  GETBRANDALLAGENT_SUCCESS,
  GETBRANDALLAGENT_FAIL,
  GETAFFILIATESTATUS_SUCCESS,
  GETAFFILIATESTATUS_FAIL,
  GETMEMOV2_BEGIN,
  GETMEMOV2_SUCCESS,
  GETMEMOV2_FAIL,
  REPLYMEMO_BEGIN,
  REPLYMEMO_SUCCESS,
  REPLYMEMO_FAIL,
  COMPOSEMEMO_BEGIN,
  COMPOSEMEMO_SUCCESS,
  COMPOSEMEMO_FAIL,
  READMEMO_BEGIN,
  READMEMO_SUCCESS,
  READMEMO_FAIL,
  DELIVERYBOX_BEGIN,
  DELIVERYBOX_SUCCESS,
  DELIVERYBOX_FAIL,
} from "../constant/actionType";
// These are the constants to represent each of three recommended actions for a single API fetch or post.

export const generalAction = {
  getMobilePrefix,
  getSiteToken,
  getPromotionList,
  joinPromotion,
  getPlayerPromotionList,
  getBrandCommunication,
  getBrandLanguage,
  getLiveChatURL,
  getBanner,
  getBrand,
  getVIP,
  getInvitationCode,
  getPromotionRouletteStatus,
  getPromotionRouletteResult,
  getPromotion,
  getPromotionRouletteCount,
  getDepositAccumulateRoulette,
  getDepositAccumulateRouletteResult,
  getDepositAccumulateRouletteHistory,
  getBrandAllAgent,
  getAffiliateStatus,
  getMemoV2,
  replyMemo,
  composeMemo,
  readMemo,
  deliveryBox,
};
function getSiteToken() {
  return (dispatch) => {
    const result = GeneralService.GetSiteToken()
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETSITETOKEN_SUCCESS,
            payload: response.data,
          });

          // AppHistory.push("/");
        } else {
          dispatch({
            type: GETSITETOKEN_FAIL,
            payload: response.data,
          });
        }
        return response;
      })
      .catch((response) => {
        dispatch({
          type: GETSITETOKEN_FAIL,
          payload: response.data,
        });
        return response;
      });

    return result;
  };
}
function getBrand() {
  return (dispatch) => {
    const result = GeneralService.GetBrand().then((response) => {
      if (response.IsSuccess) {
        dispatch({
          type: GETBRAND_SUCCESS,
          payload: response,
        });

        // AppHistory.push("/");
      } else {
        dispatch({
          type: GETBRAND_FAIL,
          payload: response,
        });
      }
      return response;
    });

    return result;
  };
}

function getMobilePrefix() {
  return (dispatch) => {
    const result = GeneralService.GetMobilePrefix().then((response) => {
      if (response.IsSuccess) {
        dispatch({
          type: GETMOBILEPREFIX_SUCCESS,
          payload: response.data,
        });

        // AppHistory.push("/");
      }
      return response;
    });

    return result;
  };
}
function getPromotionList(language, page, rows, desc, sort, all) {
  return (dispatch) => {
    dispatch({
      type: GETPROMOLIST_BEGIN,
      loading: true,
    });
    const result = GeneralService.GetPromotionList(
      language,
      page,
      rows,
      desc,
      sort,
      all
    )
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETPROMOLIST_SUCCESS,
            payload: response,
            loading: false,
          });

          // AppHistory.push("/");
        } else {
          dispatch({
            type: GETPROMOLIST_FAILURE,
            payload: response,
            loading: false,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: GETPROMOLIST_FAILURE,
          payload: error,
          loading: false,
        });
      });
    return result;
  };
}
function getPlayerPromotionList(language, page, rows, desc, sort, all) {
  return (dispatch) => {
    dispatch({
      type: GETPLAYERPROMOLIST_BEGIN,
      loading: true,
    });
    const result = GeneralService.GetPlayerPromotionList(
      language,
      page,
      rows,
      desc,
      sort,
      all
    )
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETPLAYERPROMOLIST_SUCCESS,
            payload: response,
            loading: false,
          });

          // AppHistory.push("/");
        } else {
          dispatch({
            type: GETPLAYERPROMOLIST_FAILURE,
            payload: response,
            loading: false,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: GETPLAYERPROMOLIST_FAILURE,
          payload: error,
          loading: false,
        });
      });
    return result;
  };
}
function joinPromotion(id) {
  return (dispatch) => {
    dispatch({
      type: JOINPROMO_BEGIN,
      loading: true,
    });
    const result = GeneralService.JoinPromotion(id)
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: JOINPROMO_SUCCESS,
            payload: response,
            loading: false,
          });

          // AppHistory.push("/");
        } else {
          dispatch({
            type: JOINPROMO_FAILURE,
            payload: response,
            loading: false,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: JOINPROMO_FAILURE,
          payload: error,
          loading: false,
        });
      });
    return result;
  };
}

function getBrandCommunication() {
  return (dispatch) => {
    dispatch({
      type: GETBRANDCOMMUNICATION_BEGIN,
      loading: true,
    });
    const result = GeneralService.GetBrandCommunication()
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETBRANDCOMMUNICATION_SUCCESS,
            payload: response,
            loading: false,
          });

          // AppHistory.push("/");
        } else {
          dispatch({
            type: GETBRANDCOMMUNICATION_FAIL,
            payload: response,
            loading: false,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: GETBRANDCOMMUNICATION_FAIL,
          payload: error,
          loading: false,
        });
      });
    return result;
  };
}
function getBrandLanguage() {
  return (dispatch) => {
    dispatch({
      type: GETBRANDLANGUAGE_BEGIN,
      loading: true,
    });
    const result = GeneralService.GetBrandLanguage()
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETBRANDLANGUAGE_SUCCESS,
            payload: response,
            loading: false,
          });

          // AppHistory.push("/");
        } else {
          dispatch({
            type: GETBRANDLANGUAGE_FAIL,
            payload: response,
            loading: false,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: GETBRANDLANGUAGE_FAIL,
          payload: error,
          loading: false,
        });
      });
    return result;
  };
}
function getBanner() {
  return (dispatch) => {
    dispatch({
      type: GETBANNER_BEGIN,
      loading: true,
    });
    const result = GeneralService.GetBanner()
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETBANNER_SUCCESS,
            payload: response,
            loading: false,
          });

          // AppHistory.push("/");
        } else {
          dispatch({
            type: GETBANNER_FAIL,
            payload: response,
            loading: false,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: GETBANNER_FAIL,
          payload: error,
          loading: false,
        });
      });
    return result;
  };
}
function getLiveChatURL() {
  return (dispatch) => {
    dispatch({
      type: GETLIVECHATURL_BEGIN,
      loading: true,
    });
    const result = GeneralService.GetLiveChatURL()
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETLIVECHATURL_SUCCESS,
            payload: response,
            loading: false,
          });

          // AppHistory.push("/");
        } else {
          dispatch({
            type: GETLIVECHATURL_FAIL,
            payload: response,
            loading: false,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: GETLIVECHATURL_FAIL,
          payload: error,
          loading: false,
        });
      });
    return result;
  };
}

function getVIP() {
  return (dispatch) => {
    dispatch({
      type: GETVIP_BEGIN,
    });
    const result = GeneralService.GetVIP().then((response) => {
      if (response.IsSuccess) {
        dispatch({
          type: GETVIP_SUCCESS,
          payload: response,
        });

        // AppHistory.push("/");
      } else {
        dispatch({
          type: GETVIP_FAILED,
          payload: response,
        });
      }
      return response;
    });

    return result;
  };
}

function getInvitationCode() {
  return (dispatch) => {
    const result = GeneralService.GetInvitationCode().then((response) => {
      if (response.IsSuccess) {
        dispatch({
          type: GETINVITATIONCODE_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: GETINVITATIONCODE_FAILED,
          payload: response,
        });
      }
      return response;
    });

    return result;
  };
}

function getPromotionRouletteStatus(id) {
  return (dispatch) => {
    dispatch({
      type: GETPROMOROULETTE_STATUS_BEGIN,
    });
    const result = GeneralService.GetPromotionRouletteStatus(id).then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETPROMOROULETTE_STATUS_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: GETPROMOROULETTE_STATUS_FAILED,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}

function getPromotionRouletteResult(id) {
  return (dispatch) => {
    dispatch({
      type: GETPROMOROULETTE_RESULT_BEGIN,
    });
    const result = GeneralService.GetPromotionRouletteResult(id).then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETPROMOROULETTE_RESULT_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: GETPROMOROULETTE_RESULT_FAILED,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}

function getPromotion() {
  return (dispatch) => {
    dispatch({
      type: GETPROMOTION_BEGIN,
      loading: true,
    });
    const result = GeneralService.GetPromotion()
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETPROMOTION_SUCCESS,
            payload: response,
            loading: false,
          });
        } else {
          dispatch({
            type: GETPROMOTION_FAILURE,
            payload: response,
            loading: false,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: GETPROMOTION_FAILURE,
          payload: error,
          loading: false,
        });
      });
    return result;
  };
}

function getPromotionRouletteCount() {
  return (dispatch) => {
    dispatch({
      type: GETROULETTE_COUNT_BEGIN,
    });
    const result = GeneralService.GetPromotionRouletteCount().then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETROULETTE_COUNT_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: GETROULETTE_COUNT_FAILED,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}

function getDepositAccumulateRoulette(id) {
  return (dispatch) => {
    dispatch({
      type: GETDAROULETTE_STATUS_BEGIN,
    });
    const result = GeneralService.GetDepositAccumulateRoulette(id).then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETDAROULETTE_STATUS_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: GETDAROULETTE_STATUS_FAILED,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}

function getDepositAccumulateRouletteResult(id) {
  return (dispatch) => {
    dispatch({
      type: GETDAROULETTE_RESULT_BEGIN,
    });
    const result = GeneralService.GetDepositAccumulateRouletteResult(id).then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETDAROULETTE_RESULT_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: GETDAROULETTE_RESULT_FAILED,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}

function getDepositAccumulateRouletteHistory(id) {
  return (dispatch) => {
    dispatch({
      type: GETDAROULETTE_HISTORY_BEGIN,
    });
    const result = GeneralService.GetDepositAccumulateRouletteHistory(id).then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETDAROULETTE_HISTORY_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: GETDAROULETTE_HISTORY_FAILED,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}

function getBrandAllAgent() {
  return (dispatch) => {
    dispatch({
      type: GETBRANDALLAGENT_BEGIN,
    });
    const result = GeneralService.GetBrandAllAgent().then((response) => {
      if (response.IsSuccess) {
        dispatch({
          type: GETBRANDALLAGENT_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: GETBRANDALLAGENT_FAIL,
          payload: response,
        });
      }
      return response;
    });
    return result;
  };
}

function getAffiliateStatus() {
  return (dispatch) => {
    const result = GeneralService.GetAffiliateStatus()
      .then((response) => {
        if (response.IsSuccess) {
          dispatch({
            type: GETAFFILIATESTATUS_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: GETAFFILIATESTATUS_FAIL,
            payload: response,
          });
        }
        return response;
      })
      .catch((response) => {
        dispatch({
          type: GETAFFILIATESTATUS_FAIL,
          payload: response,
        });
        return response;
      });

    return result;
  };
}

function getMemoV2(letterId) {
  return (dispatch) => {
    dispatch({
      type: GETMEMOV2_BEGIN,
    });
    const result = GeneralService.GetMemoV2(letterId).then((response) => {
      if (response.IsSuccess) {
        dispatch({
          type: GETMEMOV2_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: GETMEMOV2_FAIL,
          payload: response,
        });
      }
      return response;
    });
    return result;
  };
}

function replyMemo(letterId, content) {
  return (dispatch) => {
    dispatch({
      type: REPLYMEMO_BEGIN,
    });
    const result = GeneralService.ReplyMemo(letterId, content).then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: REPLYMEMO_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: REPLYMEMO_FAIL,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}

function composeMemo(subject, content) {
  return (dispatch) => {
    dispatch({
      type: COMPOSEMEMO_BEGIN,
    });
    const result = GeneralService.ComposeMemo(subject, content).then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: COMPOSEMEMO_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: COMPOSEMEMO_FAIL,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}

function readMemo(letterId) {
  return (dispatch) => {
    dispatch({
      type: READMEMO_BEGIN,
    });
    const result = GeneralService.ReadMemo(letterId).then((response) => {
      if (response.IsSuccess) {
        dispatch({
          type: READMEMO_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: READMEMO_FAIL,
          payload: response,
        });
      }
      return response;
    });
    return result;
  };
}

function deliveryBox(action, id, page, rows) {
  return (dispatch) => {
    dispatch({
      type: DELIVERYBOX_BEGIN,
    });
    const result = GeneralService.SentAction(action, id, page, rows).then(
      (response) => {
        if (response.IsSuccess) {
          dispatch({
            type: DELIVERYBOX_SUCCESS,
            payload: response,
          });
        } else {
          dispatch({
            type: DELIVERYBOX_FAIL,
            payload: response,
          });
        }
        return response;
      }
    );
    return result;
  };
}
