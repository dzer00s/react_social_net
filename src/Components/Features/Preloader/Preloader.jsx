import React from 'react';
import preloader from '../../../assets/images/Gear_preloader.svg';

let Preloader = (props) => {
    return <div>
        <img src={preloader}  alt='preloader' style={{ width: '75px', height: '75px' }} />
    </div>
}

export default Preloader;