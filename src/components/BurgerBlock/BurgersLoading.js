import React from 'react';
import ContentLoader from "react-content-loader";


const BurgersLoading = () => {
    return (
        <ContentLoader
            className='burger-block'
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#d1d1d1"
            foregroundColor="#ffffff"
        >
            <circle cx="139" cy="176" r="137"/>
            <rect x="0" y="335" rx="0" ry="0" width="280" height="81"/>
            <rect x="20" y="430" rx="0" ry="0" width="240" height="26"/>
        </ContentLoader>
    )
};

export default BurgersLoading;