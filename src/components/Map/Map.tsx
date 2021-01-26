import React, {useEffect, useRef, useState} from "react";
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import {
    DragPan
} from 'ol/interaction';

type MapProps = {
    children: any;
    view: any;
}
const Map = ({children, view}: MapProps) => {
    const mapRef: any = useRef();
    const [map, setMap] = useState<any>(null);

    // on component mount
    useEffect(() => {
        let options = {
            view: view,
            layers: [],
            controls: [],
            overlays: [],
            interactions: [new DragPan()]
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
        </MapContext.Provider>
    )
}

export default Map;
