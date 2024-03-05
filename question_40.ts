function make_album(artist_name:string, album_title:string, track?:number): Record <string,  string | number>{
    const album: Record<string,string|number> = {
    artist_name: artist_name,
    album_title: album_title

    

    };

    if (track !== undefined) {
        album['track'] = track;
    }

    return album;

    }

    let album_1 = make_album("Artist_1", "Great album");
    let album_2 = make_album("Artist_2", "best album");
    let album_3 = make_album("Artist_3", "good album");
    console.log(album_1);
    console.log(album_2);
    console.log(album_3);

    let album_4 = make_album('artist_4', 'nice album', 11);
    console.log(album_4);