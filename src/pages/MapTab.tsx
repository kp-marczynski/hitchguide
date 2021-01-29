import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonToolbar
} from '@ionic/react';
import Map from "../components/Map/Map";
import {Layers, TileLayer, VectorLayer} from "../components/Layers";

import {fromLonLat} from 'ol/proj';
import {TileWMS, Vector as VectorSource} from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import Geolocation from 'ol/Geolocation';
import View from 'ol/View';
import './MapTab.css';
import {locate} from "ionicons/icons";
import KmlLayer from "../components/Layers/KmlLayer";

const zoom = 12;
const MapTab: React.FC = () => {
    const [loadMap, setLoadMap] = useState(false)
    const [country, setCountry] = useState<string | null>("Poland")
    useEffect(() => {
        setTimeout(() => setLoadMap(true), 1000)
    }, [])

    const viewFromLonLat = new View({
        center: fromLonLat([17, 51]),
        zoom: zoom,
        maxZoom: 14,
        minZoom: 8
    });

    const [geolocation] = useState(new Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
            enableHighAccuracy: true
        },
        projection: viewFromLonLat.getProjection()
    }))
    geolocation.setTracking(true);

    const accuracyFeature = new Feature();
    geolocation.on('change:accuracyGeometry', () => {
        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    const positionFeature = new Feature();
    positionFeature.setStyle(new Style({
        image: new CircleStyle({
            radius: 6,
            fill: new Fill({
                color: '#3399CC'
            }),
            stroke: new Stroke({
                color: '#fff',
                width: 2
            })
        })
    }));
    let positionChanged = false;
    // geolocation.on('change:position', () => navigateToCurrentPosition());

    const navigateToCurrentPosition = () => {
        const coordinates = geolocation.getPosition();
        positionFeature.setGeometry(coordinates ?
            new Point(coordinates) : undefined);
        if (coordinates) {
            positionChanged = true;
            viewFromLonLat.setCenter(coordinates);
            viewFromLonLat.setZoom(zoom);
            viewFromLonLat.setRotation(0);
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonItem>
                        <IonLabel>Country</IonLabel>
                        <IonSelect value={country} onIonChange={e => setCountry(e.detail.value)}
                                   placeholder="Select Country">
                            <IonSelectOption value={null}/>
                            <IonSelectOption value="Poland">Poland</IonSelectOption>
                            <IonSelectOption value="Germany">Germany</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {loadMap &&
                <div style={{width: "100%", height: "100%", position: "static"}} id="map-container">
                    <Map view={viewFromLonLat}>
                        <Layers>
                            <TileLayer
                                source={
                                    new TileWMS({
                                        url: 'https://ows.terrestris.de/osm/service?',
                                        params: {
                                            LAYERS: 'OSM-Overlay-WMS',
                                            TILED: true,
                                            FORMAT: 'image/png',
                                            TRANSPARENT: true
                                        },
                                        transition: 0,
                                    })
                                }
                                zIndex={0}
                            />
                            {country &&
                            <KmlLayer url={process.env.PUBLIC_URL + '/assets/kml/countries/' + country + '.kml'}
                                      key={country}/>}
                            <VectorLayer
                                source={new VectorSource({
                                    features: [accuracyFeature, positionFeature]
                                })}
                            />
                        </Layers>
                        {/*<Controls>*/}
                        {/*    <FullScreenControl/>*/}
                        {/*</Controls>*/}
                    </Map>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton onClick={navigateToCurrentPosition}>
                            <IonIcon icon={locate}/>
                        </IonFabButton>
                    </IonFab>
                </div>}
            </IonContent>
        </IonPage>
    );
};

export default MapTab;
