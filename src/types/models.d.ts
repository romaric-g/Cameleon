
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

  interface ArtisteProfil {
    name: string,
    image: string,
    moods: Mood[],
  }

  interface Mood {
    name: string,
    image: string,
  }

  interface Track {
    title: string,
    image: string,
    artist: string,
  }

}

export default Models;
