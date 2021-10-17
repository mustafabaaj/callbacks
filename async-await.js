const button = document.getElementById('btn');
const div = document.getElementById('divID');

async function getUsersWeather() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: 'https://api.github.com/users/mustafabaaj',
			success: resolve,
			error: reject,
			dataType: 'JSON',
		});
	});
}

async function onSucces(success) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `https://api.openweathermap.org/data/2.5/weather?q=${success.location}&appid=${apiWeatherKey}`,
			success: resolve,
			error: reject,
			dataType: 'JSON',
		});
	});
}

button.addEventListener('click', async () => {
	const getUser = await getUsersWeather();
	const getWeather = await onSucces(getUser);
	div.innerHTML += JSON.stringify(getWeather);
});
