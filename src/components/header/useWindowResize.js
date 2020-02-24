import { useState, useEffect } from 'react';

export function useWindowResize() {
    const [width, setWidth] = useState(window.innerWidth);

    const listener = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);

    return {
        width,
    };
}