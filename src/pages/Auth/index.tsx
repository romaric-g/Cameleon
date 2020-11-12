import { IonButton, IonContent, IonHeader, IonPage, IonText } from '@ionic/react';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useHistory, useLocation, useParams } from "react-router";

function getQueryVariable(search: string, variable: string) {
    var query = search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

const cameleonTokenKey = 'cameleon_token';

const Auth: React.FC = () => {
    
    const history = useHistory()
    const location = useLocation()
    const [cookies, setCookie, removeCookie] = useCookies([cameleonTokenKey]);

    const token = getQueryVariable(location.search, 'token');
    const error = getQueryVariable(location.search, 'error');

    if (token) {
        setCookie(cameleonTokenKey, token)
        history.push('/home')
    }

    return (
        <IonPage>
            <IonHeader>
                {error && (
                    <IonText>Echec de l'autentification</IonText>
                )}
            </IonHeader>
            <IonContent>
                <IonButton href={`https://cameleon.romaricgauzi.com/login?source=${window.location.origin}`}>Connection avec spotify</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Auth;