import axios from "axios";

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key: "b882b6c302feb31f00f97449520b1a4a",
        language: "ko-KR",
    },
});

export default instance;