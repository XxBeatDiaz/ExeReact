import "./moodBtn.css";

type Mood = "Happy 😀" | "Sad 😢" | "Angry 😡";

type Props = {
  label: string,
  mood: Mood,
  onClick: (mood: Mood) => void;
}

export default function MoodBtn({label, mood, onClick}: Props) {
  return (
    <button className="moodBtn" onClick={() => {onClick(mood);} }>{label}</button>
  )
}