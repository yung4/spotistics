import $ from 'jquery';
import { parseData } from './parseData';

async function spotifyRequestMe(accessToken, url) {
	const baseURL = 'https://api.spotify.com/v1/me/';
	var songData = [];
	
	//console.log(baseURL + url);
	
	await $.ajax({
		url: baseURL + url,
		headers: {
			'Authorization': 'Bearer ' + accessToken
		},
		success: (response) => {
			//console.log(response);
			songData = parseData(response);
		},
		error: (error) => {
			console.log(error);
			handleError(error.status);
		}
	});
	
	return songData;
}

async function spotifyRequestPlaylist(accessToken, url) {
	var playlistObj = {};
	//console.log('requesting: ' + url);

	playlistObj = await $.ajax({
		url: url,
		headers: {
			'Authorization': 'Bearer ' + accessToken
		},
		success: (response) => {
			//console.log(response);
			playlistObj = response;
		}
	});

	return playlistObj;
}

function getTop(accessToken, type = 'tracks', timeRange = 'medium_term') {
	const limit = 50;
	const offset = 0;
	
	const url = ('top/' + type +
				'?time_range='+ timeRange + 
				'&limit=' + limit +
				'&offset=' + offset);
	return spotifyRequestMe(accessToken, url);
}

function getTopArtists(accessToken, timeRange = 'medium_term') {
	const type = 'artists';
	return getTop(accessToken, type, timeRange);
}

function getTopTracks(accessToken, timeRange = 'medium_term') {
	const type = 'tracks';
	return getTop(accessToken, type, timeRange);
}

function getRecentlyPlayed(accessToken, limit = 50) {
	const params = ('player/recently-played' + 
					'?limit=' + limit);
	return spotifyRequestMe(accessToken, params);
}

function getUser(accessToken) {
	return spotifyRequestMe(accessToken, '');
}

function getPlaylistList(accessToken, limit = 50, offset = 0) {
	const baseURL = 'https://api.spotify.com/v1/me/';
	const type = 'playlists';
	const params = ('?limit=' + limit +
					'&offset=' + offset)

	const url = baseURL + type + params;

	return spotifyRequestPlaylist(accessToken, url);
}

function getNext(accessToken, url) {
	return spotifyRequestPlaylist(accessToken, url);
}

function getPlaylistItems(accessToken, playlistID, limit = 100, offset = 0) {
	const baseURL = 'https://api.spotify.com/v1/playlists/'
	const url = (baseURL + playlistID + '/tracks' + 
				'?limit=' + limit +
				'&offset=' + offset
				);

	return spotifyRequestPlaylist(accessToken, url);
}

function handleError(status) {
	switch (status) {
		case 400: {
			console.log('400: Bad Request');
			break;
		}
		case 401: {
			console.log('401: Unauthorized');
			break;
		}
		case 403: {
			console.log('403: Server refusing to fulfill request');
			break;
		}
		case 404: {
			console.log('404: Resource could not be found');
			break;
		}
		case 429: {
			console.log('429: Too many requests; Rate limiting applied');
			break;
		}
		case 502: {
			console.log('502: Bad Gateway');
			break;
		}
		case 503: {
			console.log('503: Service Unavailable');
			break;
		}
		default: {
			console.log(status);
			break;
		}
	}

	window.location.replace(process.env.REACT_APP_REDIRECT_URI);
}

export { getTopArtists, getTopTracks, getUser, getRecentlyPlayed,
	getNext, getPlaylistList, getPlaylistItems
};