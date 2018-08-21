import classes from './MountainImage.css';
import React from 'react';
import MountainImage from '../../assets/mountain.jpg';

const mountainImage = (props) => (
  <div className={classes.MoutainImage}>
    <img src={MountainImage} alt="" className={classes.MountainImg}/>
  </div>
);

export default mountainImage;