import React from 'react';
import styles from './profilePicture.module.css';

export function ProfilePicture({ src, size = 'sm' }) {
    const classes = styles.profilePicture + ' ' + styles[size];

    return <img className={classes} src={src} />;
}
