function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();

    for (i = 0; i < numberOfSongs; i++) {
        let [ typeList, name, time ] = input[i].split('_');
        songs.push(new Song(typeList, name, time));
    }

    if (typeSong === 'all') {
        songs.forEach((s) => console.log(s.name));
    } else {
        let filteredSongs = songs.filter((s) => s.typeList === typeSong);
        filteredSongs.forEach((s) => console.log(s.name))
    }
}

solve(
    [
        4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater'
    ]
)