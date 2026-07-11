import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        // Use IntersectionObserver for reliable mobile detection
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target); // Stop observing once revealed
                        }
                    });
                },
                {
                    threshold: 0.05, // Trigger when just 5% is visible (much better for mobile)
                    rootMargin: '0px 0px -50px 0px', // Small bottom margin
                }
            );

            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        } else {
            // Fallback for very old browsers: just show everything
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach((el) => el.classList.add('active'));
        }
    }, []);
};

export default useScrollReveal;
