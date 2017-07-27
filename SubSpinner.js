import React from 'react';
import './SubSpinner.scss';

 export default ({size}) => {
    return (
        <div className={`rss-container ${size ? `rss-${size}` : ''}`}>
            <div className="rss-center-point">
                <div className="rss-inner-point"></div>
            </div>
            <div className="rss-blade-container">
                <div className="rss-blade"></div>
                <div className="rss-blade rss-blade-2"></div>
                <div className="rss-blade rss-blade-3"></div>
                <div className="rss-blade rss-blade-4"></div>
                <div className="rss-blade rss-blade-5"></div>
                <div className="rss-blade rss-blade-6"></div>
                <div className="rss-blade rss-blade-7"></div>
            </div>
        </div>
            
    )
 }