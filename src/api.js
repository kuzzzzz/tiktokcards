import axios from "axios";

const API_KEY = process.env.API_KEY;

const callApi = async (userName) => {
  const options = {
    method: "GET",
    url: "https://tiktok-scraper2.p.rapidapi.com/user/info",
    params: { user_name: userName },
    headers: {
      "X-RapidAPI-Host": "tiktok-scraper2.p.rapidapi.com",
      "X-RapidAPI-Key": API_KEY,
    },
  };

  const data = await axios
    .request(options)
    .then(function (response) {
      let profileInfo = {
        ...response.data.userInfo?.user,
        ...response.data.userInfo?.stats,
      };

      localStorage.setItem(userName, JSON.stringify(profileInfo));
      return profileInfo;
    })
    .catch(function (error) {
      return error;
    });
  return data;
};
export default callApi;
