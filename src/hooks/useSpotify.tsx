import React from 'react';
import { useCookies } from 'react-cookie';
import { cameleonTokenKey } from '../contants';

export interface SpotifyFetchOptions {
    url: string, 
    saveData: (data: any) => void
}

const useSpotify = () => {
    
    const [cookies] = useCookies([cameleonTokenKey]);

    const fetchsOptions = React.useRef<SpotifyFetchOptions[]>([]);
    const token = React.useMemo(() => {
        return cookies[cameleonTokenKey];
    }, [cookies])
    
    React.useEffect(() => {
        let headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`)
        fetchsOptions.current.forEach(async (fetchOptions) => {
            await fetch(fetchOptions.url, { 
                method: 'GET',
                headers,
            })
            .then(response => response.json())
            .then(data => fetchOptions.saveData(data))
        });

    }, [token])

    const fetchSpotify = (
        url: string, 
        saveData: (data: any) => void
    ) => {
        fetchsOptions.current.push({url, saveData})
    }

    return {
        fetchSpotify
    }
}

export default useSpotify;

