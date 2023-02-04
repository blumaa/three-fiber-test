import { useState } from "react";
import "./App.css";
import { Osc1 } from "./components/Osc1";

let actx = new AudioContext();

let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
osc1.connect(gain1);
osc1.connect(out);

function App() {
  const [osc1Freq, setOsc1Freq] = useState<number>(osc1.frequency.value);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const changeOsc1Freq = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setOsc1Freq(Number(value));
    osc1.frequency.value = osc1Freq;
    console.log(value);
  };
  return (
    <div>
      <h1>Hello world</h1>
      <div
        style={{
          display: "flex",
          // width: "30%",
          flexDirection: "row",
          padding: "3rem",
          // border: "1px solid red",
          justifyContent: "space-around",
        }}
      >
        <button
          style={{ padding: "2rem", borderRadius: "20px" }}
          onClick={() => {
            if (!isPlaying) {
              setIsPlaying(true);
              osc1.start();
            } else {
              setIsPlaying(false);
              osc1.stop();
            }
          }}
        >
          {isPlaying ? "stop" : "start"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Osc1 changeFreq={changeOsc1Freq} freq={osc1.frequency.value} />
      </div>
    </div>
  );
}

export default App;
