import Cookies from 'js-cookie'

const useToken = ({ clientId, redirectUri }: {clientId: String, redirectUri: String}) => {
  if (!clientId || !redirectUri) {
    return null;
  }

  // récupère notre token depuis les cookies
  let returnToken = Cookies.get('spotify_token')

  // si aucun token n'est enregistré
  if (!returnToken) {

    // récupère le token depuis l'url s'il y a 
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function (initial: any, item: any) {
          if (item) {
              var parts = item.split('=')
              initial[parts[0]] = decodeURIComponent(parts[1])
          }
          return initial
      }, {})

    if (!hash.access_token) {

      // url de spotify
      const authEndpoint = 'https://accounts.spotify.com/authorize'
      const scopes = [
        'streaming',
        'app-remote-control',
        'user-read-playback-state',
        'user-read-recently-played',
        'user-read-currently-playing',
        'user-read-playback-position',
        'user-modify-playback-state',
        'playlist-read-private',
        'user-library-read',
        'user-read-email',
        'user-read-private',
        'user-library-read',
        'user-library-modify'
      ]


      // redirige vers spotify si aucun token n'est enregistré
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token` as any
    } else {

      // temps d'enregistrement du token
      const hour = 1 / 24
      Cookies.set('spotify_token', hash.access_token, { expires: hour })
      window.location.hash = ''
    }
  }

  return returnToken
}

export default useToken