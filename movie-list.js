function listMovie(inputArray) {
    let condition = true;
    let playlist = {};
    
    while (condition) {
        let string = inputArray.shift();
        if (string === 'STOP') {
            condition = false;
            break;
        }

        let stringAsArray = string.split('|');
        let id = stringAsArray[0];
        let title = stringAsArray[1];
        let artist = stringAsArray[2];
        let rating = Number(stringAsArray[3]);
        playlist[id] = { title, artist, rating };
        console.log(playlist[id]);
    }

    for (const string of inputArray) {
        let stringAsArray = string.split('|');
        let command = stringAsArray.shift();

        if (command === 'Add') {
            addFunction(...stringAsArray);
        } else if (command === 'Change Rating') {
            changeRatingFunction(...stringAsArray);
        } else if (command === 'Remove') {
            removeFunction(...stringAsArray);
        }
    }

    console.log(playlist);

    let totalRating = 0;
    let totalSongs = 0;

    for (const key in playlist) {
        let currentRating = Number(playlist[key].rating);
        totalRating += currentRating;
        totalSongs += 1;
    }

    console.log(totalSongs)

    console.log(`Playlist has an average rating of ${totalRating / totalSongs}`);

    
    function addFunction(id, title, artist, rating) {
        if (playlist.hasOwnProperty(id)) {
            console.log(`ID ${id} already exists in playlist!`);
        } else {
            playlist[id] = { title, artist, rating };
            console.log(`Song added successfully!`);
        }
    }

    function changeRatingFunction(id, newRating) {
        if (!playlist.hasOwnProperty(id)) {
            console.log(`ID ${id} does not exist in playlist!`);
        } else {
            if (playlist[id].rating === Number(newRating)) {
                console.log('Unable to change rating!');
            } else {
                console.log(playlist[id].rating);
                playlist[id].rating = Number(newRating);
                console.log(`${id}'s rating changed to ${newRating}!`)
            }
        } 
    }

    function removeFunction(id) {
        if (!playlist.hasOwnProperty(id)) {
            console.log(`ID ${id} does not exist in playlist!`);
        } else {
            delete playlist[id];
            console.log(`Song removed successfully!`);
        } 
    }
}

listMovie(
    [
        "#134|When I'm Down|Chris Cornell|5",
        "#165|Play|Dave Grohl|4",
        "#541|Band on the Run|Paul McCartney|4",
        "#290|Goldeneye|Tina Turner|5",
        "STOP",
        "Add|#317|My Sweet Lord|George Harrison|3",
        "Add|#165|Run|Foo Fighters|3",
        "Change Rating|#165|3",
        "Change Rating|#134|5",
        "Remove|#317",
        "Remove|#999",
    ]
)