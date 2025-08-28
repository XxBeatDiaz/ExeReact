import { useState } from "react";
import "./moodSelector.css";
import MoodBtn from "./MoodBtn";

const moods = {
  happy: "Happy 😀",
  sad: "Sad 😢",
  angry: "Angry 😡"
 } as const;

 const countMood = {
  "Neutral 😐": -1,
  "Happy 😀": 0,
  "Sad 😢": 1,
  "Angry 😡": 2
};

 type Mood = "Neutral 😐" | "Happy 😀" | "Sad 😢" | "Angry 😡";

export default function MoodSelector() {
  const [currentMood, setCurrentMood] = useState<Mood>("Neutral 😐");//default Neutral
  const [history, setHistory] = useState<Mood[]>([]);
  const [count, setCount] = useState([0,0,0]);

  function handleSet(newMood: Mood) {
    setCurrentMood(newMood);
    setHistory((prev) => [...prev, newMood].slice(-3));
    const numMood = countMood[newMood];
    setCount((prev) => {
      const newCount = [...prev];
      newCount[numMood] += 1;
      return newCount;
    })
  }

  function randMood() {
    const moodValues = Object.values(moods);
    const x = Math.floor(Math.random() * 3);
    const randomMood = moodValues[x] as Mood;
    handleSet(randomMood);
  }

  function resetMoods() {
    setCurrentMood("Neutral 😐");
    setHistory([]); 
    setCount([0,0,0]);
  }
  
  return (
    <div className="container">
      <header>
        <h1 className="title">Mood Selector</h1>
        <h2 className="currentMood">Current Mood: {currentMood}</h2>
      </header>
      <div className="buttons">
        <MoodBtn label={`${moods.happy} ${count[0]}`} mood={moods.happy} onClick={handleSet} />
        <MoodBtn label={`${moods.sad} ${count[1]}`} mood={moods.sad} onClick={handleSet} />
        <MoodBtn label={`${moods.angry} ${count[2]}`} mood={moods.angry} onClick={handleSet} />
      </div>
      <div>
        <button onClick={randMood}>Random Mood: {currentMood}</button>
      </div>
      <div>
        <h3>History:</h3>
          {history.map((m, i) => (
            <h4 key={i}>{m}</h4>
          ))}
      </div>
      <div>
        <button onClick={resetMoods}>Reset all</button>
      </div>
    </div>
  );
}
