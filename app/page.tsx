'use client'
import TimerMenu from './components/TimerMenu';
import ToggleTheme from './components/ToggleTheme';
import { AlarmSoundContextProvider } from './contexts/AlarmSoundContext';

export default function Home() {



  return (
    <div>
      <h1>PomoFlex</h1>
      <AlarmSoundContextProvider>
        <TimerMenu />
      </AlarmSoundContextProvider>
    </div>
  )
}
