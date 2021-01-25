import * as olSource from "ol/source";

const xyz = ({url, attributions, maxZoom}: any) => {
    return new olSource.XYZ({url, attributions, maxZoom});
}

export default xyz;
