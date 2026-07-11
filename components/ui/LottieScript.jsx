'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

export default function LottieIcon({ src, width = 80, height = 80 }) {
    const containerRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || animRef.current) return;

        animRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: src,
        });

        return () => {
            if (animRef.current) {
                animRef.current.destroy();
                animRef.current = null;
            }
        };
    }, [src]);

    return (
        <div
            ref={containerRef}
            style={{ width: `${width}px`, height: `${height}px` }}
            aria-hidden="true"
        />
    );
}
