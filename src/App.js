
import './App.css';
import './index.js'
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const instruments = [
  {
    key: "Q",
    keyCode: 81,
    id: "snare",
    src: "https://freewavesamples.com/files/Ensoniq-ESQ-1-Snare.wav",
    displayString: "Snare"
  },
  {
    key: "W",
    keyCode: 87,
    id: "hi-hat",
    src: "https://freewavesamples.com/files/Closed-Hi-Hat-1.wav",
    displayString: "Hi-Hat"
  },
  {
    key: "E",
    keyCode: 69,
    id: "bamboo",
    src: "https://freewavesamples.com/files/Bamboo.wav",
    displayString: "Bamboo"
  },
  {
    key: "A",
    keyCode: 65,
    id: "cymbals",
    src: "https://freewavesamples.com/files/Crash-Cymbal-1.wav",
    displayString: "Cymbals"
  },
  {
    key: "S",
    keyCode: 83,
    id: "kick-drum",
    src: "https://freewavesamples.com/files/Bass-Drum-1.wav",
    displayString: "Kick Drum"
  },
  {
    key: "D",
    keyCode: 68,
    id: "clap",
    src: "https://freewavesamples.com/files/Clap-1.wav",
    displayString: "Clap"
  },
  {
    key: "Z",
    keyCode: 90,
    id: "high-tom",
    src: "https://freewavesamples.com/files/Electro-Tom.wav",
    displayString: "High Tom"
  },
  {
    key: "X",
    keyCode: 88,
    id: "bottle",
    src: "https://freewavesamples.com/files/Bottle.wav",
    displayString: "Bottle"
  },
  {
    key: "C",
    keyCode: 67,
    id: "cross-sticks",
    src: "https://freewavesamples.com/files/Cross-Sticks.wav",
    displayString: "Cross Sticks"
  }
];

const animals = [
  {
    key: "Q",
    keyCode: 81,
    id: "birds",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/07/spatz.mp3",
    displayString: "Birds"
  },
  {
    key: "W",
    keyCode: 87,
    id: "fox",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/08/fox.mp3",
    displayString: "Fox"
  },
  {
    key: "E",
    keyCode: 69,
    id: "cat",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/07/Katze_miaut.mp3",
    displayString: "Cat"
  },
  {
    key: "A",
    keyCode: 65,
    id: "cow",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/07/Rinder_muh.mp3?_=1",
    displayString: "Cow"
  },
  {
    key: "S",
    keyCode: 83,
    id: "chicken",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/07/huehner.mp3",
    displayString: "Chicken"
  },
  {
    key: "D",
    keyCode: 68,
    id: "rooster",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/07/hahn_kikeriki.mp3",
    displayString: "Rooster"
  },
  {
    key: "Z",
    keyCode: 90,
    id: "bees",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/07/bee.mp3",
    displayString: "Bees"
  },
  {
    key: "X",
    keyCode: 88,
    id: "crickets",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/08/crickets.mp3",
    displayString: "Crickets"
  },
  {
    key: "C",
    keyCode: 67,
    id: "donkey",
    src: "https://freeanimalsounds.org/wp-content/uploads/2017/09/donkey.mp3",
    displayString: "Donkey"
  }
];

const silly = [
  {
    key: "Q",
    keyCode: 81,
    id: "hee-hee",
    src: "https://www.fesliyanstudios.com/play-mp3/3977",
    displayString: "Hee Hee!"
  }, 
  {
    key: "W",
    keyCode: 87,
    id: "boing",
    src: "https://www.fesliyanstudios.com/play-mp3/5459",
    displayString: "Boing!"
  },
  {
    key: "E",
    keyCode: 69,
    id: "womp-womp",
    src: "https://www.fesliyanstudios.com/play-mp3/5637",
    displayString: "Womp Womp!"
  },
  {
    key: "A",
    keyCode: 65,
    id: "haw-haw",
    src: "https://www.fesliyanstudios.com/play-mp3/3980",
    displayString: "Haw Haw!"
  },
  {
    key: "S",
    keyCode: 83,
    id: "squeak",
    src: "https://www.fesliyanstudios.com/play-mp3/7001",
    displayString: "Squeak!"
  },
  {
    key: "D",
    keyCode: 68,
    id: "dizzy",
    src: "https://www.fesliyanstudios.com/play-mp3/7002",
    displayString: "Dizzy!"
  },
  {
    key: "Z",
    keyCode: 90,
    id: "falling",
    src: "https://www.fesliyanstudios.com/play-mp3/7006",
    displayString: "Falling!"
  },
  {
    key: "X",
    keyCode: 88,
    id: "happy",
    src: "https://www.fesliyanstudios.com/play-mp3/7011",
    displayString: "Happy!"
  },
  {
    key: "C",
    keyCode: 67,
    id: "fart",
    src: "https://www.fesliyanstudios.com/play-mp3/3520",
    displayString: "Fart"
  }
];

// Generates buttons; handles relevant functions
class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundName: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  //Updates sound and display when key is pressed down
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  // Handles key presses
  handleKeyDown(e, sound) {
    // Converts the key pressed to uppercase to match soundBank keys
    let keyPressed = e.key.toUpperCase();
    let currentSoundBank = this.props.soundBank;
    // Filters current sound bank to find the one matching the key pressed
    let soundBankFilter = currentSoundBank.filter(soundObj => soundObj.key === keyPressed);
    // If the key pressed is found in the current sound bank
    if (keyPressed === soundBankFilter[0].key) {
      const soundClip = document.getElementById(keyPressed);
      soundClip.currentTime = 0;
      soundClip.play();
      this.setState({
        soundName: soundBankFilter[0].displayString
      });
    }
  }
  // Plays sound and updates display when a button is clicked
  handleClick(e, sound) {
    const soundClip = document.getElementById(sound.key);
    soundClip.currentTime = 0;
    soundClip.play();
    this.setState({
      soundName: sound.displayString
    });
  }
  render() {
    const thisStyle = this.props.style;
    return (
      <div className="container">
        <div id="display-div" className="row justify-content-center">
          <Display soundName={this.state.soundName} style={this.props.style}/>
        </div>
        <div className="button-maker row justify-content-center"
          >
          {this.props.soundBank.map(sound => (
            <button
              className={thisStyle === "red" ? "drum-pad btn btn-danger col-4" : thisStyle === "green" ? "drum-pad btn btn-success col-4" : "drum-pad btn btn-primary col-4"} 
              id={sound.id}
              keyCode={sound.keyCode}
              onClick={e => this.handleClick(e, sound)}
              onKeyPress={e => this.handleKeyDown(e, sound)}
              tabIndex="0"
            >
              {sound.key}
              <audio className="clip" id={sound.key} src={sound.src} />
            </button>
            ))}
        </div>
      </div>
    );
  }
}

// Displays sound type & name
class Display extends React.Component{
  /*constructor(props){
    super(props);
  };*/ /* No longer required; useless constructor */
  render(){
  const style = this.props.style;
  return (
    <div id="display" className="container">
      <div className="row justify-content-center">
        <h3 id={style === "red" ? "sound-title-red" : style === "green" ? "sound-title-green" : "sound-title"} >
          Sound:
        </h3>
        <div className="w-100"></div>
        <div id={style === "red" ? "sound-div-red" : style === "green" ? "sound-div-green" : "sound-div"}>
          <p id="sound" className="text-center">
            {this.props.soundName}
          </p>
        </div>
      </div>
    </div>
  );
  }
};


// Houses app
class DrumMachineApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundBank: animals,
      style: ''
    };
    this.soundBankSwitcher = this.soundBankSwitcher.bind(this);
  };
  // Changes sound sets based on radio buttons
  soundBankSwitcher(e){
    switch (e.target.value){
      case "animals":
        this.setState({
         soundBank: animals,
         style: ""
        });
      break;
      case "instruments":
        this.setState({
          soundBank: instruments,
          style: "red"
        });
      break;
      case "silly":
        this.setState({
          soundBank: silly,
          style: "green"
        });
        break;
        default:
    }
  };
  
  render() {
    const whichStyle = this.state.style;
    return (
      <div className="container">
        <div id="drum-machine" className="row justify-content-center">
          <div className="row justify-content-center">
          <h1 id={whichStyle === "red" ? "title-red" : whichStyle === "green" ? "title-green" : "title"} className="text-center">
            Sound Machine
          </h1>
          <div className="w-100"></div>
          <h2 id="subtitle" className="text-center">
            Pick A Sound Type & Play!
          </h2>
          <div className="w-100"></div>
          <h3 id={whichStyle === "red" ? "type-title-red" : whichStyle === "green" ? "type-title-green" : "type-title"} className="text-center">
            Type:
          </h3>          
          </div>
          <div className="w-100"></div>
          <form>
          <div className="row justify-content-center">         
            <label for="animals" className="col">              
              <input 
                id="animals" 
                type="radio" 
                name="sound-type" 
                value="animals" 
                onChange={this.soundBankSwitcher} 
                checked={this.state.soundBank === animals}
                />
                Animals
            </label>
            <label for="instruments" className="col">
              <input 
                id="instruments" 
                type="radio" 
                name="sound-type" 
                value="instruments" 
                onChange={this.soundBankSwitcher}
                checked={this.state.soundBank === instruments}
                />
                Instruments
            </label>
            <label for="silly" className="col">
              <input 
                id="silly" 
                type="radio" 
                name="sound-type" 
                value="silly" 
                onChange={this.soundBankSwitcher}
                checked={this.state.soundBank === silly}
                />
                Silly
            </label>
          </div>
            </form>
          <Buttons soundBank={this.state.soundBank} style={this.state.style}/>
              </div>
        <a href="https://codepen.io/JMThinker"><p id="footer-text" className="text-center">A Calisa P. Project</p> </a>
      </div>
    );
  }
}


export default DrumMachineApp;
