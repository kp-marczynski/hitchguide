import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {business, earth, language} from 'ionicons/icons';
import MapTab from './pages/MapTab';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
    <IonApp>
        <MapTab/>
        {/*<IonReactRouter>*/}
        {/*    <IonTabs>*/}
        {/*        <IonRouterOutlet>*/}
        {/*            <Route path="/map" component={MapTab} exact={true}/>*/}
        {/*            /!*<Route path="/countries" component={CountriesTab} exact={true}/>*!/*/}
        {/*            /!*<Route path="/phrasebook" component={PhrasebookTab}/>*!/*/}
        {/*            <Route path="/" render={() => <Redirect to="/map"/>} exact={true}/>*/}
        {/*        </IonRouterOutlet>*/}
        {/*        <IonTabBar slot="bottom">*/}
        {/*            <IonTabButton tab="map" href="/map">*/}
        {/*                <IonIcon icon={earth}/>*/}
        {/*                <IonLabel>Map</IonLabel>*/}
        {/*            </IonTabButton>*/}
        {/*            <IonTabButton tab="countries" href="/countries">*/}
        {/*                <IonIcon icon={business}/>*/}
        {/*                <IonLabel>Countries</IonLabel>*/}
        {/*            </IonTabButton>*/}
        {/*            <IonTabButton tab="phrasebook" href="/phrasebook">*/}
        {/*                <IonIcon icon={language}/>*/}
        {/*                <IonLabel>Phrasebook</IonLabel>*/}
        {/*            </IonTabButton>*/}
        {/*        </IonTabBar>*/}
        {/*    </IonTabs>*/}
        {/*</IonReactRouter>*/}
    </IonApp>
);

export default App;
