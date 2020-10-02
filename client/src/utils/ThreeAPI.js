import axios from "axios";

const BASEURL = "https://dog.ceo/api/breeds/image/random/3";



export default {
  findThreeDog: function() {
    return axios.get(BASEURL);
  }
};
