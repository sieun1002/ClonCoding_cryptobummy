import api from "./api";

const getDataAPI = {
  getPosts: async () => {
    try {
      const response = await api.get("/comments");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default getDataAPI;
