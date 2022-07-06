import Form from "./components/Form";
import Card from "./components/Card";
import React from "react";
import "./App.css";

const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

class App extends React.Component {
  state = {
    profiles: App.allStorage(),
  };
  static allStorage() {
    let archive = [];
    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
      archive.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return archive;
  }
  addNewProfile = (profileData) => {
    if (!profileData.message) {
      this.setState((prevState) => ({
        profiles: [
          ...prevState.profiles.filter((x) => x.id !== profileData.id),
          profileData,
        ],
      }));
    } else {
      alert("try again tommorrow");
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
