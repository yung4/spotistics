var paramObj = {};

function getAuthorization() {
	const urlObj = window.location;
	const url = urlObj.href;
	const origin = urlObj.origin;
	//console.log(url);
	//console.log(origin);
	
	const params = url.slice(origin.length + 1);
	//console.log(params);
	
	if ((params === '?error=access_denied') || (params === '')) {
		return false;
	}
	
	const paramArr = params.split('&');
	//console.log(paramArr);
	
	paramObj.accessToken = paramArr[0].slice(paramArr[0].indexOf('=') + 1);
	paramObj.tokenType = paramArr[1].slice(paramArr[1].indexOf('=') + 1);
	paramObj.expiresIn = paramArr[2].slice(paramArr[2].indexOf('=') + 1);
	
	//console.log(paramObj);
	
	return true;
}

export { getAuthorization, paramObj };
