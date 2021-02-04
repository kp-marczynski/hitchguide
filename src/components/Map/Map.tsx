import React, {useEffect, useRef, useState} from "react";
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import {DoubleClickZoom, DragPan, MouseWheelZoom, PinchZoom, Select} from 'ol/interaction';
import {createGesture, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";
import classNames from "classnames";

type MapProps = {
    children: any;
    view: any;
}
const Map = ({children, view}: MapProps) => {
    const mapRef: any = useRef();
    const [map, setMap] = useState<any>(null);
    const [alert, setAlert] = useState<any>(null)

    // on component mount
    useEffect(() => {
        const select = new Select()
        select.on("select", evt => {
            if (evt.selected[0].getProperties()?.name || evt.selected[0].getProperties()?.description) {
                console.log(evt.selected[0].getProperties())
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

    // zoom change handler
    // useEffect(() => {
    // 	if (!map) return;
    //
    // 	map.getView().setZoom(zoom);
    // }, [zoom]);

    // center change handler
    // useEffect(() => {
    // 	if (!map) return;
    //
    // 	map.getView().setCenter(center)
    // }, [center])

    const drawerRef: any = useRef();

    useEffect(() => {
        alert ? openDrawer() : closeDrawer()
    }, [alert])

    // when the page is loaded, we find the element that is the drawer
    // and attach the gesture to it's reference using react `useRef` hook
    useEffect(() => {
        let c = drawerRef.current;
        const gesture = createGesture({
            el: c,
            gestureName: "my-swipe",
            direction: "y",
            /**
             * when moving, we start to show more of the drawer
             */
            onMove: event => {
                if (event.deltaY < -300) return;

                // closing with a downward swipe
                if (event.deltaY > 20) {
                    c.style.transform = "";
                    c.dataset.open = "false";
                    return;
                }

                c.style.transform = `translateY(${event.deltaY}px)`;
            },
            /**
             * when the moving is done, based on a specific delta in the movement; in this
             * case that value is -150, we determing the user wants to open the drawer.
             *
             * if not we just reset the drawer state to closed
             */
            onEnd: event => {
                c.style.transition = ".5s ease-out";

                if (event.deltaY < -30 && c.dataset.open !== "true") {
                    c.style.transform = `translateY(${-350}px) `;
                    c.dataset.open = "true";
                    console.log("in on end");
                }
            }
        });

        // enable the gesture for the item
        gesture.enable(true);
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
            c.style.transform = "";
            c.dataset.open = "false";
        }
    }
    return (
        <MapContext.Provider value={{map}}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
            {/*<IonAlert*/}
            {/*    isOpen={!!alert}*/}
            {/*    onDidDismiss={() => setAlert(null)}*/}
            {/*    cssClass='my-custom-class'*/}
            {/*    header={alert?.name}*/}
            {/*    message={alert?.description}*/}
            {/*/>*/}
            <IonCard ref={drawerRef} className={classNames({
                bottomDrawer: true,
                hiddenCard: !alert
            })}>
                <div style={{textAlign: "center"}}>
                    <IonButton
                        size="large"
                        style={{height: 10, width: 100}}
                        onClick={toggleDrawer}
                    />
                </div>
                <IonCardHeader>
                    <IonCardTitle>{alert?.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div dangerouslySetInnerHTML={{__html: alert?.description}}
                         style={{overflowY: "scroll", height: 275}}/>
                </IonCardContent>
            </IonCard>
        </MapContext.Provider>
    )
}

export default Map;
