import React from 'react';

import styles from './Toast.module.css';
import { usePieChart } from '../Piechart/PiechartContext';

const Toast = ({children}) => {
    const toast = usePieChart();

    if (!toast.visible) return null;

    return (
        <div className={styles.toast}>
            { children }
        </div>
    );
}

export default Toast;
