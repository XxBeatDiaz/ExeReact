type Props = {
    label: string,
    mood: string,
    onClick: (mood: string) => void;
}
export default function MoodBtn({label, mood, onClick}: Props) {
  return (
    <button onClick={() => {onClick(mood)}}>{label}</button>
  )
}
