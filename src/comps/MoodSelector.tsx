import { useState } from "react";
import MoodBtn from "./MoodBtn";

const moods = {
  happy: "Happy 😀",
  sad: "Sad 😢",
  angry: "Angry 😡"
 } as const;

 type Mood = "Neutral 😐" | "Happy 😀" | "Sad 😢" | "Angry 😡";

export default function MoodSelector() {
  const [currentMood, setCurrentMood] = useState<Mood>("Neutral 😐");
  const [history, setHistory] = useState<Mood[]>([]);
  const [count, setCount] = useState([0,0,0]);

  function handleSet(newMood: Mood) {
    setCurrentMood(newMood);
    setHistory((prev) => [...prev, newMood].slice(-3));
  }

  function randMood() {
    const moodValues = Object.values(moods);
    const x = Math.floor(Math.random() * 3);
    const randomMood = moodValues[x] as Mood;
    handleSet(randomMood);
  }

  function resetMoods() {
    const moodValues = Object.values(moods);
    moodValues.forEach((m) => {setHistory([]); setCurrentMood("Neutral 😐")})
  }
  
  return (
    <div>
        <h1>Mood Selector</h1>
      <h2>Current Mood: {currentMood}</h2>
      <div>
        <MoodBtn label={moods.happy} mood={moods.happy} onClick={handleSet} />
        <MoodBtn label={moods.sad} mood={moods.sad} onClick={handleSet} />
        <MoodBtn label={moods.angry} mood={moods.angry} onClick={handleSet} />
      </div>
      <div>
        <button onClick={randMood}>Random Mood</button>
      </div>
      <div>
        <h3>History:</h3>
          {history.map((m, i) => (
            <h4 key={i}>{m}</h4>
          ))}
      </div>
    </div>
  );
}
