import api from "."

export const getAlbum = (token: string) => {
    return api.get("/albums", {
        headers: {Authorization: 'Bearer' + token}
    });
}