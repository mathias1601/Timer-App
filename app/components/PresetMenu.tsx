import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { CSSProperties } from "react";

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


interface Props {
  addPreset: (preset: any) => void,
  listOfPresets: TimeContainer[]
}

const PresetMenu = ({ addPreset, listOfPresets }: Props) => {

  const displayPresets = listOfPresets.map((preset: TimeContainer, index) => (
    <div key={index}>
      <button onClick={() => addPreset(preset)}>{preset.name}</button>
    </div>
  ))


  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button style={triggerStyle}>
          Use a preset!
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay style={overlayStyle} />
        <Dialog.Content style={contentStyle}>
          <Dialog.Title>Presets</Dialog.Title>
          <Dialog.Description>
            Choose a preset
          </Dialog.Description>
          {displayPresets}
          <Dialog.Close asChild>
            <button style={closeButtonStyle}>
              <Cross2Icon /> Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PresetMenu;


const overlayStyle: CSSProperties = {
  backgroundColor: 'rgba(0,0,0,0.5)',
  position: 'fixed',
  inset: 0
};

const contentStyle: CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '20px',
  width: '90%',
  maxWidth: '400px',
  margin: '100px auto',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const triggerStyle = {
  padding: '8px 16px',
  backgroundColor: '#4f46e5',
  color: 'white',
  border: 'none',
  borderRadius: '4px'
};

const closeButtonStyle = {
  padding: '8px 12px',
  marginLeft: '8px',
  backgroundColor: '#ef4444',
  color: 'white',
  border: 'none',
  borderRadius: '4px'
};
