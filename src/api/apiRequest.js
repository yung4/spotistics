import $ from 'jquery';
import { parseData } from '../api/parseData';

async function spotifyRequest(accessToken, url) {
	const baseURL = 'https://api.spotify.com/v1/me';
	var songData = [];
	
	//console.log(baseURL + url);
	
	await $.ajax({
		url: baseURL + url,
		headers: {
			'Authorization': 'Bearer ' + accessToken
		},
		success: function(response) {
			console.log(response);
			songData = parseData(response);
		}
	});
	
	return songData;
}

function getTop(accessToken, type = 'tracks', timeRange = 'medium_term') {
	const limit = 50;
	const offset = 0;
	
	const url = ('/top/' + type +
				'?time_range='+ timeRange + 
				'&limit=' + limit +
				'&offset=' + offset);
	//console.log(url);	
	return spotifyRequest(accessToken, url);
}

function getTopArtists(accessToken, timeRange = 'medium_term') {
	const type = 'artists';
	return getTop(accessToken, type, timeRange);
}

function getTopTracks(accessToken, timeRange = 'medium_term') {
	const type = 'tracks';
	return getTop(accessToken, type, timeRange);
}

function getUser(accessToken) {
	return spotifyRequest(accessToken, '');
}

export { getTopArtists, getTopTracks, getUser };