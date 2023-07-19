import http from "./http";

export const getUser = async () => {
    return await http.get(`/users`)
};