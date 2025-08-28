import { useState } from "react";
type Mood = "Neutral 😐" | "Happy 😀" | "Sad 😢" | "Angry 😡";

type Props = {
  label: string,
  mood: Mood,
  onClick: (mood: Mood) => void;
}

export default function MoodBtn({label, mood, onClick}: Props) {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => {onClick(mood); setCount(count + 1);} }>{`${label}, ${count}`}</button>
  )
}


