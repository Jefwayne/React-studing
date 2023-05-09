import React from "react";
import Header from "./components/Header";
import Image from "./components/image";
import logo from "./img/communityIcon_4g1uo0kd87c61.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hay world",
      userData: ""
    };

    this.inputClick = this.inputClick.bind(this);
  }

  text = "Hay world";
  render() {
    return (
      <div className="name">
        <Header title="Шапка сайта" />
        <h1>{this.state.text}</h1>
        <h2>{this.state.userData}</h2>
        <input
          placeholder={this.state.text}
          onChange={(event) => this.setState({ userData: event.target.value })}
          onClick={this.inputClick}
        />
        <p>{8 + 4}</p>
        <Image image={logo} />
      </div>
    );
  }

  inputClick() {
    this.setState({ text: "Changed" });
    console.log("Clicked");
  }
}

export default App;
