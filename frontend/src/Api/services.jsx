import API from "./api";

export const refresh = async () => {
  const data = {
    refresh_token: localStorage.getItem("refresh"),
  };
  const response = await API.post(`/refresh/`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => console.log(err));
  if (response.response) {
    if (response.response.status != 200) {
      console.log(response.response.data);
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    }
    return {};
  } else {
    if (response.status == 200) {
      return response ? response.data : {};
    }
  }
};

export const login = async (userDetails) => {
  const response = await API.post(`/login/`, userDetails, {
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => console.log(err));
  if (response.response) {
    if (response.response.status == 404) {
      console.log(response.response.data);
    }
    if (response.response.status == 401) {
      console.log(response.response.data);
    }
    return response.response.data;
  } else {
    if (response.status == 200) {
      return response ? response.data : {};
    }
  }
};
export const sendOtpApi = async (value) => {
  const response = await API.post(
    `/send-otp/`,
    { postFor: "email", data: value },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch((err) => console.log(err));
  return response ? response.data : {};
};

export const updatePasswordApi = async (value) => {
  const response = await API.put(`/update-password/`, value, {
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => console.log(err));
  return response ? response.data : {};
};
export const verifyOtpApi = async (value) => {
  try {
    const response = await API.post("/verify-otp/", {
      postFor: "otp",
      data: value,
    });
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};
export const getReports = async (selectedCategory) => {
  try {
    const response = await API.get("/get-reports/", {
      params: {
        selectedCategory: selectedCategory,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response.data);
      return {};
    }
  } catch (err) {
    console.error("Error fetching reports:", err);
    return {};
  }
};
