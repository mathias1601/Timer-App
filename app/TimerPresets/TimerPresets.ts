import TimerContainer from "../components/TimerContainer";

type TimerData = {
  id: number;
  duration: number;
  name?: string;
  hasFinished: boolean;
	repetitions: number;

	originalDuration: number;
	originalRepetitions: number;
};


type TimeContainer = {
	name: string,
	open: boolean,
	timers: TimerData[];
}

const CONTAINER_PRESETS: TimeContainer[] = [
  {
    name: "Pomodoro Set",
    open: false,
    timers: [
      { id: 1, duration: 1500, name: "Focus", hasFinished: false, repetitions: 1, originalDuration: 1500, originalRepetitions: 1 },
      { id: 2, duration: 300, name: "Break", hasFinished: false, repetitions: 1, originalDuration: 300, originalRepetitions: 1 },
    ]
  }]

export default CONTAINER_PRESETS
