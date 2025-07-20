import { TimeContainer } from "../types/TimerTypes"

const CONTAINER_PRESETS: TimeContainer[] = [
  {
    id: Date.now(),
    name: "Pomodoro Set",
    timers: [
      { id: 1, duration: 1500, name: "Focus", hasFinished: false, repetitions: 1, originalDuration: 1500, originalRepetitions: 1 },
      { id: 2, duration: 300, name: "Break", hasFinished: false, repetitions: 1, originalDuration: 300, originalRepetitions: 1 },
    ]
  }
]

export default CONTAINER_PRESETS
