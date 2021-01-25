import {Vector as VectorSource} from 'ol/source';

const vector = ({features}: any) => {
    return new VectorSource({
        features
    });
}

export default vector;
