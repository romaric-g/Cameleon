
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
<<<<<<< HEAD
=======

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

>>>>>>> 9abaee7fba14b8f926cafba57b2106e58ae0ffa9
}

export default Models;
