import React from 'react';
import {VectorLayer} from "./index";
import {Vector as VectorSource} from "ol/source";
import {KML} from "ol/format";

const KmlLayer = ({url}:any) => {
    return (
        <VectorLayer
            source={new VectorSource({
                url: url,
                format: new KML({showPointNames: false})
            })}
        />
    );
};

export default KmlLayer;
