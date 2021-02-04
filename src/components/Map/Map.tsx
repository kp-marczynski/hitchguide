import React, {useEffect, useRef, useState} from "react";
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import {DoubleClickZoom, DragPan, MouseWheelZoom, PinchZoom, Select} from 'ol/interaction';
import {createGesture, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import classNames from "classnames";
import Feature from "ol/Feature";
import {Circle as CircleStyle, Fill, Style} from "ol/style";
import {Vector as VectorSource} from "ol/source";
import {Layers, VectorLayer} from "../Layers";

type MapProps = {
    children: any;
    view: any;
}

const selectedFeature = new Feature();
selectedFeature.setStyle(new Style({
    image: new CircleStyle({
        radius: 20,
        fill: new Fill({
            color: 'rgba(51,153,204,0.75)'
        })
    })
}));
const Map = ({children, view}: MapProps) => {
    const mapRef: any = useRef();
    const [map, setMap] = useState<any>(null);
    const [alert, setAlert] = useState<any>(null)

    useEffect(() => {
        document.addEventListener('visibilitychange', () => {
            map?.updateSize()
        })

    }, [map])

    useEffect(() => {
        const select = new Select()
        select.on("select", evt => {
            if (evt.selected[0].getProperties()?.name || evt.selected[0].getProperties()?.description) {
                console.log(evt.selected[0].getProperties())
                selectedFeature.setGeometry(evt.selected[0].getProperties().geometry);
                setAlert(evt.selected[0].getProperties());
            }
            select.getFeatures().clear()
        })

        let options = {
            view: view,
            layers: [],
            controls: [],
            overlays: [],
            interactions: [
                new DragPan(),
                new MouseWheelZoom(),
                new PinchZoom(),
                new DoubleClickZoom(),
                select
            ],
            tilePixelRatio: 1
        };

        let mapObject: any = new ol.Map(options);
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, []);

    const drawerRef: any = useRef();
    const drawerContentRef: any = useRef();

    useEffect(() => {
        if (alert) {
            openDrawer()
        } else {
            drawerRef.current.style.transition = ".5s ease-out";
            drawerRef.current.style.transform = `translateY(${25}px) `;
        }
    }, [alert])

    useEffect(() => {
        let currentDrawer = drawerRef.current;
        createGesture({
            el: currentDrawer,
            gestureName: "my-swipe",
            direction: "y",

            onEnd: event => {
                if (event.deltaY > 20) {
                    if (currentDrawer.dataset.open === "false") {
                        setAlert(false)
                        selectedFeature.setGeometry(undefined)
                    } else {
                        closeDrawer()
                    }
                } else if (event.deltaY < -20) {
                    openDrawer()
                }
            },
        }).enable(true);

        createGesture({
            el: drawerContentRef.current,
            gestureName: "my-swipe2",
            direction: "y",
            onMove: event => {
                event.event.preventDefault()
            }
        }).enable(true);
    }, []);
    const toggleDrawer = () => {
        let c: any = drawerRef.current;
        if (c.dataset.open === "true") {
            openDrawer()
        } else {
            closeDrawer()
        }
    };

    const openDrawer = () => {
        let c: any = drawerRef.current;
        if (c) {
            c.style.transition = ".5s ease-in";
            c.style.transform = `translateY(${-350}px) `;
            c.dataset.open = "true";
        }
    }

    const closeDrawer = () => {
        let c: any = drawerRef.current;
        if (c) {
            c.style.transition = ".5s ease-out";
            c.style.transform = `translateY(${-60}px) `;
            c.dataset.open = "false";
        }
    }
    return (
        <MapContext.Provider value={{map}}>
            <div ref={mapRef} className="ol-map">
                {children}
                <Layers>
                    <VectorLayer
                        source={new VectorSource({
                            features: [selectedFeature]
                        })}
                    />
                </Layers>
            </div>
            <IonCard ref={drawerRef} className={classNames({
                bottomDrawer: true,
                hiddenCard: !alert
            })}>
                <div style={{textAlign: "center"}}>
                    <IonButton
                        size="large"
                        color="dark"
                        style={{height: 10, width: 100}}
                        onClick={toggleDrawer}
                    />
                </div>
                <IonCardHeader>
                    <IonCardTitle>{alert?.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent ref={drawerContentRef}>
                    <div dangerouslySetInnerHTML={{__html: alert?.description ?? "No description"}}
                         style={{overflowY: "scroll", height: 275}}/>
                </IonCardContent>
            </IonCard>
        </MapContext.Provider>
    )
}

export default Map;
