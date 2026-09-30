export const BASE_URL = "http://localhost:4000/api/v1";

export const API_PATH = {

  AUTH: {
    REGISTER: "/auth/register",
    VERIFY_OTP: "/auth/verify-otp",
    LOGIN: "/auth/login",
    GET_PROFILE: "/auth/getprofile",
    UPDATE_USER: (id) => `/auth/update/${id}`,
    DELETE_USER: (id) => `/auth/delete/${id}`,
  },


  
  STORY: {
    CREATE: "/story/create",
    GET_ALL: "/story/get",
    UPDATE: (id) => `/story/update/${id}`,
    DELETE: (id) => `/story/story/${id}`,
  },
};