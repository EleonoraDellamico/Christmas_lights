const checkBoxContainer = document.querySelector('.checkbox-container');
const lightSwitch = document.querySelector('.light-switch');
const lightBulbContainer = document.querySelector('.light-bulbs');
const lightSwitchState = document.querySelector('.light-switch-state');

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
