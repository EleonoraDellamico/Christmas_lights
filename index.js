const checkBoxContainer = document.querySelector('.checkbox-container');
const lightSwitch = document.querySelector('.light-switch');
const lightBulbContainer = document.querySelector('.light-bulbs');
const lightSwitchState = document.querySelector('.light-switch-state');
const lightBulbs = lightBulbContainer.querySelectorAll('.light-bulb');
const intervalControl = document.querySelector('.interval-control');
const colorWheelBtn = document.querySelector('.color-wheel');
const colorWheels = lightBulbContainer.querySelectorAll('.color-setting');

const lightSwitchLabels = {
	on: 'off',
	off: 'on'
};

checkBoxContainer.addEventListener('click', (e) => {
	e.target.classList.toggle('active');
	lightSwitch.click();
});

lightSwitch.addEventListener('change', () => {
	lightBulbContainer.classList.toggle('on');
	lightSwitchState.textContent = lightSwitchLabels[lightSwitchState.textContent];
});

intervalControl.addEventListener('change', (e) => {
	const duration = e.target.value;
	lightBulbs.forEach((lightBulb) => {
		lightBulb.style.animationDuration = `${duration}s`;
	});
});

lightBulbContainer.addEventListener('input', (e) => {
	/*
    This uses destructuring to get the themeColor
    value set using the data attribute
   */
	const { themeColor } = e.target.dataset;
	const lightBulb = e.target.parentElement;

	// This updates value of the css variable to the value set on the color picker
	lightBulb.style.setProperty(`--theme-color-${themeColor}`, e.target.value);
});

colorWheelBtn.addEventListener('click', (e) => {
	colorWheels.forEach((colorWheel) => {
		colorWheel.classList.toggle('hidden');
	});
});
