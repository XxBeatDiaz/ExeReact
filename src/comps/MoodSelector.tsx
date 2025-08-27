import { useState } from "react";
import MoodBtn from "./MoodBtn";

const moods = {
  neutral: "Neutral 😐",
  happy: "Happy 😀",
  sad: "Sad 😢",
  angry: "Angry 😡"
 };

export default function MoodSelector() {
  const [currentMood, setCurrentMood] = useState("neutral");
  return (
    <div>
        <h1>Mood Selector</h1>
      <h2>Current Mood: {currentMood}</h2>
      <div>
        <MoodBtn label={moods.happy} mood={moods.happy} onClick={setCurrentMood} />
        <MoodBtn label={moods.sad} mood={moods.sad} onClick={setCurrentMood} />
        <MoodBtn label={moods.angry} mood={moods.angry} onClick={setCurrentMood} />
      </div>
    </div>
  );
}
