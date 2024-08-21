import axios from "axios";
import config from "../../config/config";

export const ApiService = {
  get,
  post,
  del,
  put,
  patch,
  postFormData,
  postExternal,
  getImage,
  postFile,
  postArray,
};
const custmHeader = {
  "b-id": config.brandId,
};

const getUrl = (apiEndpoint) => {
  const brandPaths = ["brandcommunication", "brandlivechat", "brand/maintenance"];
  if (brandPaths.some((path) => apiEndpoint.startsWith(path))) {
    return config.baseUrl + config.brandPath + apiEndpoint;
  }
  return config.baseUrl + config.operatorPath + apiEndpoint;
};

function getImage(apiEndpoint) {
  return axios
    .get(getUrl(apiEndpoint), {
      headers: {
        "Content-Type": "image/png",
        ...custmHeader,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function get(apiEndpoint) {
  return axios
    .get(getUrl(apiEndpoint), {
      headers: {
        "Content-Type": "application/json",
        ...custmHeader,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function post(apiEndpoint, payload, formData = false) {
  var bodyFormData = new FormData();
  let request = null;
  if (formData) {
    for (let v in payload) {
      bodyFormData.append(v, payload[v]);
    }
    request = postFormData(getUrl(apiEndpoint), bodyFormData);
  } else {
    request = axios.post(
      getUrl(apiEndpoint),

      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          ...custmHeader,
        },
      },
    );
  }
  return request;
}
function postArray(apiEndpoint, payload) {
  var bodyFormData = new FormData();
  let request = null;
  request = axios.post(
    getUrl(apiEndpoint),

    JSON.stringify(payload),
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        ...custmHeader,
      },
    },
  );
  return request;
}
function put(apiEndpoint, payload) {
  let request = null;
  request = axios.put(getUrl(apiEndpoint), JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      ...custmHeader,
    },
  });

  request
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
  return request;
}

function patch(apiEndpoint, payload) {
  let request = null;
  request = axios.patch(getUrl(apiEndpoint), JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      ...custmHeader,
    },
  });

  request
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
  return request;
}

function del(apiEndpoint, payload, withoutQuerystring = false) {
  let request = null;
  let url = getUrl(apiEndpoint);
  let i = 0;
  for (var key in payload) {
    if (i == 0) {
      url += "?";
    }
    if (withoutQuerystring === true) {
      url = getUrl(apiEndpoint) + "/" + payload[key];
    } else {
      url += key + "=" + payload[key];
    }

    i++;
  }
  request = axios.delete(url, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      ...custmHeader,
    },
  });
  request
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
  return request;
}
function postFormData(url, bodyFormData) {
  const request = axios({
    method: "post",
    url: url,
    data: bodyFormData,

    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      ...custmHeader,
    },
  });
  return request;
}

function postFile(apiEndpoint, file, payload, forIdentity) {
  var data = new FormData();
  data.append("file", file);

  if (forIdentity) {
    data.append("request", JSON.stringify(payload));
  } else {
    for (var key in payload) {
      data.append(key, payload[key]);
    }
  }

  const request = axios({
    method: "post",
    url: getUrl(apiEndpoint),
    data: data,

    headers: {
      accept: "application/json",
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      ...custmHeader,
    },
  });
  return request;
}

function postExternal(url, payload, formData = false) {
  var bodyFormData = new FormData();
  let request = null;
  if (formData) {
    for (let v in payload) {
      bodyFormData.set(v, payload[v]);
    }
    request = axios({
      method: "post",
      url: url,
      data: bodyFormData,

      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        ...custmHeader,
      },
    });
  } else {
    request = axios.post(
      url,

      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...custmHeader,
        },
      },
    );
  }
  return request;
}
