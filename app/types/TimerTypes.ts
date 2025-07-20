export type TimerData = {
    id: number;
    duration: number;
    name?: string;
    hasFinished: boolean;
    repetitions: number;

    originalDuration: number;
    originalRepetitions: number;
};

export type TimeContainer = {
    id: number,
    name: string,
    timers: TimerData[];
}