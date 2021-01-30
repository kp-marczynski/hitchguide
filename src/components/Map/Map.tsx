import React, {useEffect, useRef, useState} from "react";
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import {DoubleClickZoom, DragPan, MouseWheelZoom, PinchZoom, Select} from 'ol/interaction';
import {IonAlert} from "@ionic/react";

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
        select.on("select", evt=>{
            setAlert(evt.selected[0].getProperties());
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

    return (
        <MapContext.Provider value={{map}}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
            <IonAlert
                isOpen={!!alert}
                onDidDismiss={() => setAlert(null)}
                cssClass='my-custom-class'
                header={alert?.name}
                message={alert?.description}
            />
        </MapContext.Provider>
    )
}

export default Map;
