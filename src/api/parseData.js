function parseData(data) {
	var parsedData = [];
	//console.log(data);
	
	if (data.type === 'user') {
		return data;
	}
	
	var dataItems = data.items;

	if (dataItems.length === 0) {
		parsedData[0] = {
			id: 0,
			title: 'Data Not Found',
		}
		return parsedData;
	}
	
	if (dataItems[0].type === 'artist') {
		parsedData = parseArtists(dataItems);
	} else if (dataItems[0].type === 'track') {
		parsedData = parseTracks(dataItems);
	} else {
		//console.log('error:');
		//console.log(dataItems);
		//throw error
		parsedData = parseHistory(dataItems);
	}
	
	return parsedData;
}

// helper parse functions
function parseTrackItem(track) {
	return {
		id: track.id,
		title: track.name,
		artistName: track.artists[0].name,
		albumTitle: track.album.name,
		href: track.uri,
		image: chooseSmallestImage(track.album.images),
		releaseDate: track.album.release_date,
		type: track.type
	}
}

function parseTracks(songData) {
	var parsedData = [];
	//console.log(songData);
	
	for (var i = 0; i < songData.length; i++) {
		//console.log(songData[i]);
		parsedData[i] = parseTrackItem(songData[i]);
		parsedData[i].id = i + 1;
	}
	
	//console.log(parsedData);
	
	return parsedData;
}

function parseArtists(artistData) {
	var parsedData = [];
	
	for (var i = 0; i < artistData.length; i++) {
		//console.log(songData[i]);
		parsedData[i] = {
			id: i + 1,
			title: artistData[i].name,
			href: artistData[i].uri,
			image: chooseSmallestImage(artistData[i].images),
			genres: arrToString(artistData[i].genres),
			type: artistData[i].type
		}
	}

	//console.log(parsedData);
	
	return parsedData;
}

function parseHistory(historyData) {
	//console.log(historyData);
	var parsedData = [];

	for (var i = 0; i < historyData.length; i++) {
		parsedData[i] = parseTrackItem(historyData[i].track);
		parsedData[i].id = i + 1;
		parsedData[i].playedAt = formatDate(historyData[i].played_at);
	}

	return parsedData;
}

function parsePlaylistList(data) {
	//console.log(data)
	var parsedData = [];
	data = data.items;

	for (var i = 0; i < data.length; i++) {
		parsedData[i] = {
			id: data[i].id,
			title: data[i].name,
			description: data[i].description,
			href: data[i].uri,
			image: chooseSmallestImage(data[i].images),
			type: data[i].type
		}
	}

	//console.log(parsedData);
	return parsedData;
}

function parsePlaylistItems(data) {
	//console.log(data);
	var parsedData = [];
	data = data.items;

	for (var i = 0; i < data.length; i++) {
		parsedData[i] = parseTrackItem(data[i].track);
		parsedData[i].id = i + 1;
		parsedData[i].addedDate = data[i].added_at;
	}

	//console.log(parsedData);
	return parsedData;
}

// helper helper functions
function arrToString(array) {
	const arrLen = array.length;
	var newString = '';

	if (arrLen === 0) {
		return ' ';
	}
	
	if (arrLen === 1) {
		return array[0].toString();
	}
	
	for (var i = 0; i < arrLen; i++) {
		newString += array[i];
    
		if ((i + 1) < arrLen) {
			newString += ', ';
		}
	}

  return newString; 
}

function chooseSmallestImage(array) {
	const arrLen = array.length;
	
	if (arrLen === 0) {
		return ' ';
	}
	
	if (arrLen === 1) {
		return array[0].url;
	}
	
	var smallestImg = array[0];
	
	for (var i = 0; i < arrLen; i++) {
		if (smallestImg.height > array[i].height) {
			smallestImg = array[i];
		}
	}
	
	return smallestImg.url;
}

function formatDate(timestamp) {
	const parsedDate = Date.parse(timestamp);
	const dateObj = new Date(parsedDate);

	const day = dateObj.getDate();
	const month = dateObj.getMonth() + 1;
	const year = dateObj.getFullYear();

	const hour = dateObj.getHours();
	const minute = dateObj.getMinutes();
	const second = dateObj.getSeconds();

	const formattedDate = `${month}/${day}/${year} - ${hour}:${minute}:${second}`;

	return formattedDate;
}

export { parseData, parsePlaylistList, parsePlaylistItems };