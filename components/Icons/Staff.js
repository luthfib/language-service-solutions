'use client';

import styles from '@/styles/modules/Staff.module.css';

const StaffIcon = ({ path, staffName }) => {
    return (
        <img
            width={225}
            height={225}
            src={path}
            alt={staffName}
            className={styles.staffImg}
        />
    );
};

export default StaffIcon;
