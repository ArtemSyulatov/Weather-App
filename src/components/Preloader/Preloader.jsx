import React from 'react';
import classes from './Preloader.module.css'


const Preloader = () => {
    return (<div>
        <img className={classes.preloader}
             src={'https://i.pinimg.com/originals/45/12/4d/45124d126d0f0b6d8f5c4d635d466246.gif'}/>
    </div>);
};
export default Preloader;