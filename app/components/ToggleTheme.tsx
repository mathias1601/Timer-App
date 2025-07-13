import React, { useState, useEffect } from 'react';

const ToggleTheme = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<button onClick={toggleTheme}>
			Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
		</button>
	);
};

export default ToggleTheme;