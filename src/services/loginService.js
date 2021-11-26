import http from "./httpService";

export const loginService = (data) => {
    return http.post("/user/login", data);
}