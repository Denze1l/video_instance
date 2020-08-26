import React, { Component } from "react";
import { Player, ControlBar } from "video-react";
import styles from "./app.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    };
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
  }
  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }
  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  }

  // also you can choose rewind time gap by your self
  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      if (player.paused === false) {
        this.player.seek(player.currentTime + seconds);
      }
    };
  }

  render() {
    const { source } = this.state;
    return (
      <>
        <div className={styles.videoDiv}>
          <Player
            playsInline
            ref={(player) => {
              this.player = player;
            }}
          >
            <source src={source} />
            <ControlBar autoHide={true} />
          </Player>
        </div>
        <div className={styles.buttonsDiv}>
          <button onClick={this.changeCurrentTime(-10)}>Time -10s</button>
          <button onClick={this.changeCurrentTime(10)}>Time +10s</button>
        </div>
      </>
    );
  }
}

export default App;
