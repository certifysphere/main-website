import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Consulting',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
         Contact us for all your IT needs related to modern microservices-based architecture, cloud migration, and other consulting needs.
      </>
    ),
  },
  {
    title: 'Internship & Bootcamp',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Unlock your potential with our internship and bootcamp programs. Join now and gain hands-on experience from our team of expert IT professionals.
    
      </>
    ),
  },
  {
    title: 'Tutorials & Interview Preparation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
         Learn and improve your skills with real-world code samples, tutorials, and interview preparation materials.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
