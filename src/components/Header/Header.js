import React from 'react';
import { NavLink } from 'react-router-dom';

import { book } from '../../book';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><NavLink to={ book.chart }>Chart</NavLink></li>
                <li><NavLink to={ book.form }>Form</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;
