import React from 'react';
import propTypes from 'prop-types';

const Notification = ({ message }) => <div>{message}</div>;

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
