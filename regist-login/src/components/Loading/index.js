import React from 'react';
import ReactLoading from 'react-loading';
import clsx from 'clsx';
import styles from './Loading.module.scss';

const loading = clsx(styles.loading);
 
const Loading = ({ type, color }) => {
    return (
        <div className={loading}>
            <ReactLoading type={type} color={color} height={100} width={100} />
        </div>
    )
};
 
export default Loading;

// Type:
// blank
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes
