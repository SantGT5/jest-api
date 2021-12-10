import axios from "axios";

const APIScan = {
  
   fetchAPIScan: async (link) => {
    try {
      const response = await axios.get(link);
      console.log(response)
      return response.data;
    } catch (err) {
      console.log(err.response);
    }
  },

};

export default APIScan;
