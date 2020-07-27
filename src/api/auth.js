var paramObj = {};

function getAuthorization() {
	const urlObj = window.location;
	const url = urlObj.href;
	//const origin = urlObj.origin;
	
	if (url.indexOf('?') !== -1) {
		return false;
	}
	
	console.log(url);
	
	const params = url.slice(url.lastIndexOf('/'));
	//console.log(params);
	
	if ((params === '?error=access_denied') || (params === '')) {
		console.log('Sorry, something went wrong. Please try again later.');
		return false;
	}
	
	const paramArr = params.split('&');
	//console.log(paramArr);
	
	try {
		paramObj.accessToken = paramArr[0].slice(paramArr[0].indexOf('=') + 1);
		paramObj.tokenType = paramArr[1].slice(paramArr[1].indexOf('=') + 1);
		paramObj.expiresIn = paramArr[2].slice(paramArr[2].indexOf('=') + 1);
	} catch (e) {
		console.log(e);
		//return false;
	}
	
	//console.log(paramObj);
	
	return true;
}

export { getAuthorization, paramObj };
