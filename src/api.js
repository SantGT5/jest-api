import axios from "axios";

export const APIScan = {
  fetchAPIScan: async (link) => {
    try {
      const response = await axios.get(link);
      return response.data;
    } catch (error) {
      throw new Error("Ha fallado fetchAPIScan");
    }
  },
};

export const INICIAL_STATE = {
  counte: Number,
  next: String,
  results: [],
};

export default APIScan;
