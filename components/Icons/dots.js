'use client';

import styles from '@/styles/modules/Dots.module.css';

// The dots can go in all 4 directions and its size can also be dinamically set through props
const Dots = ({ direction, size, color = 'var(--yellow)' }) => {
    return (
        <div className={`${styles.dots} ${styles[direction]}`}>
            <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34.59 86.37"
                height={size * 3}
            >
                <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                        <circle
                            className="cls-1"
                            cx="17.3"
                            cy="17.3"
                            r="17.3"
                            fill={color}
                        />
                        <circle
                            className="cls-1"
                            cx="17.3"
                            cy="52.51"
                            r="12.74"
                            fill={color}
                        />
                        <circle
                            className="cls-1"
                            cx="17.3"
                            cy="78.12"
                            r="8.26"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Dots;
