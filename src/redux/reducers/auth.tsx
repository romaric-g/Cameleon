import { SET_SPOTIFY_TOKEN } from '../constants'

const auth = (state: any, action: any) => {
	switch (action.type) {
		case SET_SPOTIFY_TOKEN:
			return {
                ...state,
                spotifyToken: action.spotifyToken
            }
		default:
			return state
	}
}

export default auth