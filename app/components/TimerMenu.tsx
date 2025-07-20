import React, { useEffect, useState } from 'react'
import TimerContainer from './TimerContainer';
import '../styles/TimerStyles.css';
import CONTAINER_PRESETS from '../presets/TimerPresets';
import PresetMenu from './PresetMenu';
import SettingsMenu from './SettingsMenu';

import { TimeContainer } from '../types/TimerTypes';

const TimerMenu = () => {
	console.log("TimerMenu mount")
	const [containerName, setContainerName] = useState<string>("");
	const [containerList, setContainerList] = useState<TimeContainer[]>([]);

	//Checks whether a container is open or not, if open, then all other containers should not be visible
	const [openContainer, setOpenContainer] = useState<boolean>(false);
	const [currentOpenContainer, setCurrentOpenContainer] = useState<number>(0);

	const presets = CONTAINER_PRESETS

	//Loads the local storage
	useEffect(() => {
		const saved = localStorage.getItem('containerList');
		if (saved) {
			setContainerList(JSON.parse(saved));
		}
	}, []);

	//Saves the containerList to local storage on the browser
	useEffect(() => {
		localStorage.setItem('containerList', JSON.stringify(containerList));
	}, [containerList]);

	const whenOpen = (id: number) => {
		setCurrentOpenContainer(id)
		setOpenContainer(!openContainer)
	}

	//Function to change the name of a time-container
	const changeName = (newName: string, id: number) => {
		setContainerList(containerList =>
			containerList.map(container => container.id === id ? { ...container, name: newName } : container)
		)
	}

	const displayContainers =
		containerList.map((container) => (
			(container.id != currentOpenContainer && openContainer) ? null
				:
				<div className='timeContainer' key={container.id}>
					<TimerContainer
						id={container.id}
						name={container.name}
						whenOpen={whenOpen}
						timers={container.timers}
						setTimers={(newTimers) => {
							setContainerList(prev =>
								prev.map(c =>
									c.name === container.name
										? { ...c, timers: newTimers }
										: c
								)
							);
						}}
						changeName={changeName}
					/>
					<button onClick={() => {
						if (container.id == currentOpenContainer) {
							setOpenContainer(false)
							setCurrentOpenContainer(0)
						}

						setContainerList(prev => prev.filter(t => t.id !== container.id));
					}}>
						Remove Container
					</button>
				</div>
		));

	const addContainer = () => {
		setContainerList(prev => [...prev, { id: Date.now(), name: containerName, timers: [] }])
	}

	const addPreset = (preset: any) => {
		if (!containerList.some(container => container.name == preset.name)) {
			setContainerList(prev => [...prev, { id: Date.now(), name: preset.name, timers: preset.timers }])
		}
		else {
			setContainerList(prev => [...prev, { id: Date.now(), name: preset.name + "(1)", timers: [] }])
		}
	}

	return (
		<div className='menuDiv'>
			<h3>Create a time-set</h3>
			<input type="text" placeholder='name' onChange={(e) => setContainerName((e.target.value))} />
			<button onClick={addContainer}>Add container</button>
			<PresetMenu addPreset={addPreset} listOfPresets={presets} />
			<SettingsMenu />
			<div>
				{displayContainers}
			</div>
		</div>
	)
}

export default TimerMenu