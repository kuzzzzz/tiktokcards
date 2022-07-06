import axios from "axios";
const callApi = async (userName) => {
  const options = {
    method: "GET",
    url: "https://tiktok-scraper2.p.rapidapi.com/user/info",
    params: { user_name: userName },
    headers: {
      "X-RapidAPI-Host": "tiktok-scraper2.p.rapidapi.com",
      "X-RapidAPI-Key": "0fed2f57b8mshdf90dd960715f6bp16f5d3jsn8906ad5ecd6f",
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
      return error
    });
  return data;
};
export default callApi;
