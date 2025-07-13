'use client'
import TimerMenu from './components/TimerMenu';
import ToggleTheme from './components/ToggleTheme';
import { AlarmSoundContextProvider } from './contexts/AlarmSoundContext';

export default function Home() {



  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-lg shadow-md">
      <h1>PomoFlex</h1>
      <AlarmSoundContextProvider>
        <TimerMenu />
        <ToggleTheme />
      </AlarmSoundContextProvider>
    </div>
  )
}
