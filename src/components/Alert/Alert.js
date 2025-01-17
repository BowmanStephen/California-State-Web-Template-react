import React from 'react';
import PropTypes from 'prop-types';

import infoImage from './alert-info.svg';
import dangerImage from './alert-warning-diamond.svg';
import resolutionImage from './alert-success.svg';


const Alert = ({ alertLevel, alertText, boldText, href = '', linkText }) => {
  const setAlertLevel = (propAlertLevel) => {
    switch (propAlertLevel) {
      case 'info':
        return infoImage;
      case 'danger':
        return dangerImage;
      case 'resolution':
        return resolutionImage
      default:
        return infoImage
    }
  }

  const setContent = () => {
    if (alertLevel !== 'warning') {
      return (
        <div class="alert alert-dismissible alert-banner" role="alert">
          <div class="container">
            <img src={setAlertLevel(alertLevel)} alt="alert info icon" />
            <span class="alert-text">
              <span class="text-bold">{boldText} </span>
              {alertText}
              <span class="ca-gov-icon-pipe" aria-hidden="true"></span>
              <a href={href}>{linkText}</a>
            </span>
            <button type="button" class="close ms-lg-auto" data-bs-dismiss="alert" aria-label="Close"><span class="ca-gov-icon-close-mark" aria-hidden="true"></span></button>
          </div>
        </div>
      )
    }

    return (
      <div class="alert alert-dismissible alert-banner" role="alert">
        <div class="container">
          <span class="alert-icon ca-gov-icon-warning-triangle text-warning" aria-hidden="true"></span>
          <span class="alert-text">
            <span class="text-bold">{boldText} </span>
            {alertText}
            <span class="ca-gov-icon-pipe" aria-hidden="true"></span>
            <a href={href}>{linkText}</a>
          </span>
          <button type="button" class="close ms-lg-auto" data-bs-dismiss="alert" aria-label="Close"><span class="ca-gov-icon-close-mark" aria-hidden="true"></span></button>
        </div>
      </div>
    )
  }

  return setContent()
}

Alert.propTypes = {
  alertLevel: PropTypes.string.isRequired,
  alertText: PropTypes.string.isRequired,
  href: PropTypes.string,
  linkText: PropTypes.string
}

export default Alert