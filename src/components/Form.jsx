import callApi from "../api";
import { useState } from "react";

const Form = (props) => {
  const [userName, setUserNmae] = useState("");
  // const [user, setUser] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem(userName);
      data !== null
        ? props.onSubmit(JSON.parse(data))
        : props.onSubmit(await callApi(userName));
    } else {
      const data = await callApi(userName);
      if(data.error){
        console.log('error')
      }
      props.onSubmit(data);
    }

    setUserNmae("");
  };
  // useEffect(() => {
  //   if (window.localStorage !== undefined) {
  //     const data = window.localStorage.getItem(userName);
  //     // eslint-disable-next-line no-unused-expressions
  //     data !== null ? handleSubmit() : null;
  //   }
  // });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(event) => setUserNmae(event.target.value)}
        placeholder="tiktok username"
        className="search"
        required
      />
      <button>Add card</button>
    </form>
  );
};

export default Form;
