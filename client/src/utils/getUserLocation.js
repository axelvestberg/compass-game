export const getUserLocation = () => {
	navigator.geolocation.getCurrentPosition(showPosition);

	showPosition = (pos) => {
		const { longitude, latitude } = pos.coords;
		
		const posObj = {
			longitude,
			latitude
		}
		console.log(posObj);
	}
	return posObj;
}
