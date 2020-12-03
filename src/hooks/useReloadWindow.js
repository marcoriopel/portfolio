import { useEffect } from 'react';

// Code inspired from https://reedbarger.com/how-to-create-a-usewindowsize-react-hook/
export default function useReloadWindow() {
    function changeWindowSize() {
        window.dispatchEvent(new Event('resize'));
    }

    useEffect(() => {
        changeWindowSize();

        window.addEventListener('scroll', changeWindowSize);

        return () => {
            window.removeEventListener('scroll', changeWindowSize);
        };
    }, []);
}
