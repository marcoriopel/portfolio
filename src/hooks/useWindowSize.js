import React from 'react';
import { useState } from 'react';

// Code inspired from https://reedbarger.com/how-to-create-a-usewindowsize-react-hook/
export default function useWindowSize() {
    const [hasRan, setHasRan] = useState(false);
    const [windowSize, setWindowSize] = React.useState({
        height: 0,
        width: 0,
    });

    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    React.useEffect(() => {
        if (!hasRan) {
            setHasRan(true);
            changeWindowSize();
        }

        window.addEventListener('resize', changeWindowSize);

        return () => {
            window.removeEventListener('resize', changeWindowSize);
        };
    }, []);

    return windowSize;
}
