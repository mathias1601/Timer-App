import React, { useState } from 'react'
import { useAlarmSoundContext } from '../contexts/AlarmSoundContext'

type alarmSounds = {
	soundName: string,
	soundFile: string,
}

interface Props {
	optionList: alarmSounds[]
}

const SettingDropDown = ({ optionList }: Props) => {

	const { alarmUrl, setAlarmUrl } = useAlarmSoundContext()
	const allOptions = optionList.map((sound, index) => (
		<option key={index} value={sound.soundFile}>{sound.soundName}</option>
	))

	return (
		<div>
			<label htmlFor="dropdown" className="block mb-1">Choose a sound:</label>
			<select
				id="dropdown"
				value={alarmUrl}
				onChange={(e) => setAlarmUrl(e.target.value)}
				className="border rounded p-2"
			>
				{allOptions}
			</select>
		</div>
	);
}

export default SettingDropDown