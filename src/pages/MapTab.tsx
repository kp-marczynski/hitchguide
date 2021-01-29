import React, {useEffect, useState} from 'react';
import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import Map from "../components/Map/Map";
import {Layers, TileLayer, VectorLayer} from "../components/Layers";

import {fromLonLat} from 'ol/proj';
import {Controls, FullScreenControl} from "../components/Controls";
import {KML} from 'ol/format';
import {TileWMS, Vector as VectorSource} from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import Geolocation from 'ol/Geolocation';
import View from 'ol/View';
import './MapTab.css';
import {locate} from "ionicons/icons";

const zoom = 10;
const MapTab: React.FC = () => {
    const [loadMap, setLoadMap] = useState(false)
    useEffect(() => {
        setTimeout(() => setLoadMap(true), 1000)
    }, [])

    const viewFromLonLat = new View({
        center: fromLonLat([17, 51]),
        zoom: zoom,
        maxZoom: 14
    });

    const geolocation = new Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
            enableHighAccuracy: true
        },
        projection: viewFromLonLat.getProjection()
    });
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
        if (!positionChanged && coordinates) {
            positionChanged = true;
        viewFromLonLat.setCenter(coordinates);
        viewFromLonLat.setZoom(zoom);
        viewFromLonLat.setRotation(0);
        }
    }

    return (
        <IonPage>
            <IonContent>
                {loadMap &&
                <div style={{width: "100%", height: "100%", position: "static"}} id="map-container">
                    <Map view={viewFromLonLat}>
                        <Layers>
                            <TileLayer
                                source={
                                    new TileWMS({
                                        url: 'http://ows.mundialis.de/services/service?',
                                        params: {layers: 'OSM-Overlay-WMS'}
                                    })
                                }
                                zIndex={0}
                            />
                            <VectorLayer
                                source={new VectorSource({
                                    url: process.env.PUBLIC_URL + '/assets/kml/countries/Poland.kml',
                                    format: new KML({showPointNames: false})
                                })}
                            />
                            <VectorLayer
                                source={new VectorSource({
                                    features: [accuracyFeature, positionFeature]
                                })}
                            />
                        </Layers>
                        <Controls>
                            <FullScreenControl/>
                        </Controls>
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
