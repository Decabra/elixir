import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = (props) => (
    <div className={styles.box}>
        <p className="is-size-3 has-text-centered py-5 has-text-weight-bold">{props.text}</p>
    </div>
)


Heading.propTypes = {};

Heading.defaultProps = {};

export default Heading;
