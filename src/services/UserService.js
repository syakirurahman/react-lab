import axios from 'axios';

export default {

  getList: async function(page) {
    try {
      let url;
      if(page!=null & page > 1) {
        url ="https://reqres.in/api/users?per_page=2&page="+page;
      } else {
        url = "https://reqres.in/api/users?per_page=2";
      }
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      throw error;
    }
  }
}