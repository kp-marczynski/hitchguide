import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const height = Math.min(window.innerHeight, window.screen.availHeight)
    const width = Math.min(window.innerWidth, window.screen.availWidth)
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}