import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { CSSProperties } from "react";
import BasicDropDown from './SettingDropDown';
import TIMER_SOUNDS from '../presets/SoundSettings';

type alarmSounds = {
	soundName: string,
	soundFile: string,
}

const SettingsMenu = () => {

	const soundPresets: alarmSounds[] = TIMER_SOUNDS
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button style={triggerStyle}>
					Settings
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay style={overlayStyle} />
				<Dialog.Content style={contentStyle}>
					<Dialog.Title>Settings</Dialog.Title>
					<Dialog.Description>
					</Dialog.Description>
					<BasicDropDown optionList={soundPresets} />
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

export default SettingsMenu;


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
