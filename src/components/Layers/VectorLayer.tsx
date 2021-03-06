import {useContext, useEffect} from "react";
import MapContext from "../Map/MapContext";
import OLVectorLayer from "ol/layer/Vector";

const VectorLayer = ({source, style = undefined, zIndex = 0, minZoom = 0, maxZoom = 14}: any) => {
    const {map} = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let vectorLayer = new OLVectorLayer({
            source,
            style,
            minZoom,
            maxZoom
        });

        vectorLayer.on("featureclick", evt => console.log(evt))

        map.addLayer(vectorLayer);
        vectorLayer.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(vectorLayer);
            }
        };
    }, [map]);

    return null;
};

export default VectorLayer;
