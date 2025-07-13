import { createContext, useContext, useState } from "react";

type AlarmContextType = {
  alarmUrl: string;
  setAlarmUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const AlarmSoundContext = createContext<AlarmContextType | undefined>(undefined);

export const AlarmSoundContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [alarmUrl, setAlarmUrl] = useState("/sounds/alarm.mp3");

  return (
    <AlarmSoundContext.Provider value={{ alarmUrl, setAlarmUrl }}>
      {children}
    </AlarmSoundContext.Provider>
  );
};

export function useAlarmSoundContext() {
  const alarmSound = useContext(AlarmSoundContext)

  if (alarmSound == undefined) {
    throw new Error('useAlarmSoundContext must be used with a AlarmSoundContext')
  }

  return alarmSound
}