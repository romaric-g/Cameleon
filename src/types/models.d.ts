
declare namespace Models {

  interface Theme {
    title: string,
    image: string,
    uri: string,
  }

  interface Playlist {
    title: string,
    image: string,
    titleAmount: number,
    tracks?: Track[],
    id: string,
    uri: string,
  }

  interface Artist {
    id: number;
    name: string,
    image: string,
    moods?: Mood[],
    tracks?: Track[],
  }

  interface Mood {
    name: string,
    image: string,
  }

  interface Track {
    title: string,
    image: string,
    artist_name: string,
    artist_id: number,
  }

}

export default Models;
