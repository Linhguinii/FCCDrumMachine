let current = 'Q';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.audioQ = React.createRef();
    this.audioW = React.createRef();
    this.audioE = React.createRef();
    this.audioA = React.createRef();
    this.audioS = React.createRef();
    this.audioD = React.createRef();
    this.audioZ = React.createRef();
    this.audioX = React.createRef();
    this.audioC = React.createRef();
    //this.playSound = this.playSound.bind(this);
    this.playSoundQ = this.playSoundQ.bind(this);
    this.playSoundW = this.playSoundW.bind(this);
    this.playSoundE = this.playSoundE.bind(this);
    this.playSoundA = this.playSoundA.bind(this);
    this.playSoundS = this.playSoundS.bind(this);
    this.playSoundD = this.playSoundD.bind(this);
    this.playSoundZ = this.playSoundZ.bind(this);
    this.playSoundX = this.playSoundX.bind(this);
    this.playSoundC = this.playSoundC.bind(this);
  }
  /*
  playSound(){
    this.audio.current.play();
  }
  */
  playSoundQ() {
    const display = document.getElementById('display');
    display.innerText = 'Q';
    this.audioQ.current.play();
  }
  playSoundW() {
    const display = document.getElementById('display');
    display.innerText = 'W';
    this.audioW.current.play();
  }
  playSoundE() {
    const display = document.getElementById('display');
    display.innerText = 'E';
    this.audioE.current.play();
  }
  playSoundA() {
    const display = document.getElementById('display');
    display.innerText = 'A';
    this.audioA.current.play();
  }
  playSoundS() {
    const display = document.getElementById('display');
    display.innerText = 'S';
    this.audioS.current.play();
  }
  playSoundD() {
    const display = document.getElementById('display');
    display.innerText = 'D';
    this.audioD.current.play();
  }
  playSoundZ() {
    const display = document.getElementById('display');
    display.innerText = 'Z';
    this.audioZ.current.play();
  }
  playSoundX() {
    const display = document.getElementById('display');
    display.innerText = 'X';
    this.audioX.current.play();
  }
  playSoundC() {
    const display = document.getElementById('display');
    display.innerText = 'C';
    this.audioC.current.play();
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "css" }, /*#__PURE__*/
      React.createElement("div", { id: "display" },
      current), /*#__PURE__*/

      React.createElement("div", { className: "drum-pad", id: "Q_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', onClick: this.playSoundQ }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioQ, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', className: "clip", id: "Q" }), "Q"), /*#__PURE__*/



      React.createElement("div", { className: "drum-pad", id: "W_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', onClick: this.playSoundW }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioW, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', className: "clip", id: "W" }), "W"), /*#__PURE__*/



      React.createElement("div", { className: "drum-pad", id: "E_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', onClick: this.playSoundE }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioE, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', className: "clip", id: "E" }), "E"), /*#__PURE__*/



      React.createElement("div", { className: "drum-pad", id: "A_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', onClick: this.playSoundA }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioA, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', className: "clip", id: "A" }), "A"), /*#__PURE__*/



      React.createElement("div", { className: "drum-pad", id: "S_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', onClick: this.playSoundS }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioS, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', className: "clip", id: "S" }), "S"), /*#__PURE__*/



      React.createElement("div", { className: "drum-pad", id: "D_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', onClick: this.playSoundD }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioD, src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', className: "clip", id: "D" }), "D"), /*#__PURE__*/



      React.createElement("div", { className: "drum-pad", id: "Z_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', onClick: this.playSoundZ }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioZ, src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', className: "clip", id: "Z" }), "Z"), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad", id: "X_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', onClick: this.playSoundX }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioX, src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', className: "clip", id: "X" }), "X"), /*#__PURE__*/


      React.createElement("div", { className: "drum-pad", id: "C_audio", audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', onClick: this.playSoundC }, /*#__PURE__*/
      React.createElement("audio", { ref: this.audioC, src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', className: "clip", id: "C" }), "C"))));





  }}


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    this.audio.current.play();
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "box", onClick: this.playSound },
      this.props.text, /*#__PURE__*/
      React.createElement("audio", { ref: this.audio, src: this.props.audio, className: "clip", id: this.props.id })));


  }}


document.addEventListener('keydown', e => {
  const audio = document.getElementById(e.key.toUpperCase());
  if (audio) {
    const display = document.getElementById('display');
    if (e.key.toUpperCase() == 'Q') {
      display.innerText = 'Q';
    } else
    if (e.key.toUpperCase() == 'W') {
      display.innerText = 'W';
    } else
    if (e.key.toUpperCase() == 'E') {
      display.innerText = 'E';
    } else
    if (e.key.toUpperCase() == 'A') {
      display.innerText = 'A';
    } else
    if (e.key.toUpperCase() == 'S') {
      display.innerText = 'S';
    } else
    if (e.key.toUpperCase() == 'D') {
      display.innerText = 'D';
    } else
    if (e.key.toUpperCase() == 'Z') {
      display.innerText = 'Z';
    } else
    if (e.key.toUpperCase() == 'X') {
      display.innerText = 'X';
    } else
    if (e.key.toUpperCase() == 'C') {
      display.innerText = 'C';
    }
    audio.play();
  }

});

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('drum-machine'));