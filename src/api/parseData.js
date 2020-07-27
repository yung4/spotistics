function parseData(songData) {
	var parsedData = [];
	//.log(songData);
	
	if (songData.type === 'user') {
		return songData;
	}
	
	songData = songData.items;
	
	if (songData[0].type === 'artist') {
		parsedData = parseArtists(songData);
	} else if (songData[0].type === 'track') {
		parsedData = parseTracks(songData);
	} else {
		console.log('error');
		//throw error
	}
	
	return parsedData;
}

function parseTracks(songData) {
	var parsedData = [];
	
	for (var i = 0; i < songData.length; i++) {
		//console.log(songData[i]);
		parsedData[i] = {
			id: i + 1,
			title: songData[i].name,
			artistName: songData[i].artists[0].name,
			albumTitle: songData[i].album.name,
			href: songData[i].uri,
			images: songData[i].album.images,
			releaseDate: songData[i].album.release_date,
			rank: i,
			type: songData[i].type
		}
	}
	
	//console.log(parsedData);
	
	return parsedData;
}

function parseArtists(songData) {
	var parsedData = [];
	
	for (var i = 0; i < songData.length; i++) {
		//console.log(songData[i]);
		parsedData[i] = {
			id: i + 1,
			title: songData[i].name,
			href: songData[i].uri,
			images: songData[i].images,
			genres: arrToString(songData[i].genres),
			type: songData[i].type
		}
	}
	
	//console.log(parsedData);
	
	return parsedData;
}

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

export { parseData };