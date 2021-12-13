import axios from "axios";

export const APIScan = {
  fetchAPIScan: async (link) => {
    try {
      const response = await axios.get(link);
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
};

export const INICIAL_STATE = {
  count: Number,
  next: String,
  results: [],
};

export default APIScan;
