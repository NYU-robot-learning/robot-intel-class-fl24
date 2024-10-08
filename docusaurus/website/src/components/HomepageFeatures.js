import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: (<a href="https://www.lerrelpinto.com/"> Lerrel Pinto </a>),
    image_path: './img/lerrel.jpeg',
    description: ('Instructor'),
  },
  {
    title: (<a href="https://jeffcui.com"> Jeff Cui </a>),
    image_path: './img/jeff.jpeg',
    description: ('Teaching Assistant'),
  },
  {
    title: (<a href=""> Mohit Warke </a>),
    image_path: './img/mohit.jpg',
    description: ('Teaching Assistant'),
  },
];

function Feature({title,image_path, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <img src={image_path}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row profile-photos">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
