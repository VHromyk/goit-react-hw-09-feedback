import React from 'react';
import styles from './Title.module.css';
import propTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default Section;
