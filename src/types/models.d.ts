
declare namespace Models {

  interface Theme {
    title: string,
    image: string,
  }

  interface PlaylistPreview {
    title: string,
    image: string,
    titleAmount: number,
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
