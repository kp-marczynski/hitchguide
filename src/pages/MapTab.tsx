import React, {useEffect, useState} from 'react';
import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import Map from "../components/Map/Map";
import {Layers, TileLayer, VectorLayer} from "../components/Layers";

import {fromLonLat} from 'ol/proj';
import {Controls, FullScreenControl} from "../components/Controls";
import {KML, MVT} from 'ol/format';
import {Vector as VectorSource, VectorTile as VectorTileSource} from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Circle as CircleStyle, Fill, Stroke, Style, Icon, Text} from 'ol/style';
import Geolocation from 'ol/Geolocation';
import View from 'ol/View';
import './MapTab.css';
import osm from "../components/Source/osm";
import {locate} from "ionicons/icons";
import {createMapboxStreetsV6Style} from "../components/Layers/mapbox-streets-v6-style";

const zoom = 10;
const MapTab: React.FC = () => {
    const [loadMap, setLoadMap] = useState(false)
    useEffect(() => {
        setTimeout(() => setLoadMap(true), 1000)
    }, [])

    const viewFromLonLat = new View({
        center: fromLonLat([20, 41]),
        zoom: zoom
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
        // if (!positionChanged) {
        //     positionChanged = true;
        // viewFromLonLat.setCenter(coordinates);
        // viewFromLonLat.setZoom(zoom);
        // viewFromLonLat.setRotation(0);
        // }
    }

    var country = new Style({
        stroke: new Stroke({
            color: 'gray',
            width: 1,
        }),
        fill: new Fill({
            color: 'rgba(20,20,20,0.9)',
        }),
    });

    var roadStyleCache: any = {};
    var roadColor = {
        'major_road': '#776',
        'minor_road': '#ccb',
        'highway': '#f39',
    };
    var buildingStyle = new Style({
        fill: new Fill({
            color: '#666',
            // opacity: 0.4,
        }),
        stroke: new Stroke({
            color: '#444',
            width: 1,
        }),
    });
    var waterStyle = new Style({
        fill: new Fill({
            color: '#9db9e8',
        }),
    });
    var roadStyle = function (feature: any) {
        var kind = feature.get('kind');
        var railway = feature.get('railway');
        var sort_key = feature.get('sort_key');
        var styleKey = kind + '/' + railway + '/' + sort_key;
        var style = roadStyleCache[styleKey];
        if (!style) {
            var color, width;
            if (railway) {
                color = '#7de';
                width = 1;
            } else {
                color = (roadColor as any)[kind];
                width = kind == 'highway' ? 1.5 : 1;
            }
            style = new Style({
                stroke: new Stroke({
                    color: color,
                    width: width,
                }),
                zIndex: sort_key,
            });
            roadStyleCache[styleKey] = style;
        }
        return style;
    };

    return (
        <IonPage>
            <IonContent>
                {loadMap &&
                <div style={{width: "100%", height: "100%", position: "static"}} id="map-container">
                    <Map view={viewFromLonLat}>
                        <Layers>
                            <TileLayer
                                source={
                                    new VectorTileSource({
                                        url: 'http://localhost:8080/data/v3/{z}/{x}/{y}.pbf',
                                        format: new MVT()
                                    })
                                }
                                // style={function (feature: any, resolution: any) {
                                //     console.log("feature", feature.get('layer'))
                                //     switch (feature.get('layer')) {
                                //         case 'water':
                                //             return waterStyle;
                                //         case 'roads':
                                //             return roadStyle(feature);
                                //         case 'buildings':
                                //             return resolution < 10 ? buildingStyle : null;
                                //         default:
                                //             console.log("default")
                                //             return country;
                                //     }
                                // }}
                                // style={country}
                                // style={createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)}
                            />
                            {/*<VectorLayer*/}
                            {/*    source={new VectorSource({*/}
                            {/*        url: process.env.PUBLIC_URL + '/assets/kml/countries/Poland.kml',*/}
                            {/*        format: new KML({showPointNames: false})*/}
                            {/*    })}*/}
                            {/*/>*/}
                            {/*<VectorLayer*/}
                            {/*    source={*/}
                            {/*        new VectorSource({*/}
                            {/*            url: process.env.PUBLIC_URL + '/assets/pbf/{z}/{x}/{y}.pbf',*/}
                            {/*            format: new MVT()*/}
                            {/*        })*/}
                            {/*    }*/}
                            {/*    style={createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)}*/}
                            {/*/>*/}
                            {/*<VectorLayer*/}
                            {/*    source={new VectorSource({*/}
                            {/*        features: [accuracyFeature, positionFeature]*/}
                            {/*    })}*/}
                            {/*/>*/}
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
