import axios from 'axios';

const helper = {
  getArticles: function(){
    return axios.get("./api")
  }
}

export default helper
