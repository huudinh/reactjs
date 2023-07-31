import http from "./http";

// export const getUser = async () => {
//     return await http.get(`/users`)
// };
// export const deleteUser = async (id) => {
//     return await http.delete(`/users/${id}`)
// };

// export const editUser = async (id, data) => {
//     return await http.put(`/users/${id}`, data)
// };


export const getMovies = async (query, activePage) => {
    return await http.get(`?s=${query}&apikey=4a3b711b&Page=${activePage}`)
}