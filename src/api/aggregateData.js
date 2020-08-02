function aggregateDates(songList, dateAdded = true) {
    //console.log(songList);

    var datesArray = [];

    for (var i = 0; i < songList.length; i++) {
        //console.log(songList[i]);
        var duplicateDate = -1;

        //if releaseDate = true, parses release year and if not parses date added
        var date = dateAdded ? getDateAdded(songList[i]) : getReleaseDate(songList[i]);

        for (var j = 0; j < datesArray.length; j++) {
            if (date === datesArray[j].date) {
                //console.log('duplicate date)');

                duplicateDate = j;
                break;
            }
        }

        if (duplicateDate !== -1) {
            //console.log(duplicateDate);
            datesArray[j].tracksAdded++;
        } else {
            var newDate = {
                date: date,
                tracksAdded: 1
            }

            datesArray.push(newDate);
        }
    }

    //console.log(datesArray)

    return cleanArray(datesArray);
}

function getDateAdded(song) {
    //console.log(song);

    if (song.hasOwnProperty('addedDate')) {
        return getDateObject(song.addedDate);
    } else {
        return null;
    }
}

function getReleaseDate(song) {
    if (song.hasOwnProperty('releaseDate')) {
        const year = getYear(song.releaseDate);
        //console.log(year);
        return year;
    } else {
        return null;
    }
}

function getDateObject(timestamp) {
    const parsedDate = Date.parse(timestamp);
    const dateObj = new Date(parsedDate);

	const day = dateObj.getDate();
	const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    const dateString = `${year}-${month}-${day}`;
    
    return dateString;
}

function getYear(timestamp) {
    const parsedDate = Date.parse(timestamp);
    const dateObj = new Date(parsedDate);

    const year = dateObj.getFullYear();
    //console.log(year);
    return year;
}

function cleanArray(datesArray) {
    var newDatesArray = [];

    for (var i = 0; i < datesArray.length; i++) {
        if (datesArray[i].date) {
            newDatesArray.push(datesArray[i]);
        }
    }

    return newDatesArray;
}

export { aggregateDates };