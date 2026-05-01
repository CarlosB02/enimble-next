import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({
    end,
    duration = 2000,
    prefix = '',
    suffix = '',
    decimals = 0,
    separator = ',',
    delay = 0
}) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (countRef.current) {
            observer.observe(countRef.current);
        }
        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTime = null;
        let animationFrameId;
        const startAnimation = setTimeout(() => {
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const percentage = Math.min(progress / duration, 1);
                // Easing function (easeOutExpo)
                const ease = (t) => {
                    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
                };
                const currentCount = ease(percentage) * end;
                setCount(currentCount);
                if (progress < duration) {
                    animationFrameId = requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            animationFrameId = requestAnimationFrame(animate);
        }, delay * 1000);
        return () => {
            clearTimeout(startAnimation);
            cancelAnimationFrame(animationFrameId);
        };
    }, [end, duration, isVisible, delay]);

    const formatNumber = (num) => {
        const fixed = num.toFixed(decimals);
        const [intPart, decimalPart] = fixed.split('.');
        const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
    };

    return (
        <span ref={countRef}>
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
};

export default CountUp;
