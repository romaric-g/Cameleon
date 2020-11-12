import * as types from '../constants'

export const setSpotifyToken = (spotifyToken: string) => ({
	type: types.SET_SPOTIFY_TOKEN,
    spotifyToken
})
