import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';

export default function useSlideIn(ref) {
    const [height, setHeight] = useState();
    const [scroll, setScroll] = useState();
    const [width, setWidth] = useState();
    const { scrollY } = useScroll();

    scrollY.onChange(() => setScroll(scrollY.current))

    function resizeHandler() {
        setHeight(ref.current.offsetTop);
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        resizeHandler()
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler)
    }, [])

    return { height, scroll, width }
}