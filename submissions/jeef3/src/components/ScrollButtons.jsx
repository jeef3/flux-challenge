import React from 'react';
import classNames from 'classnames';

export const ScrollButtons = ({
    upEnabled,
    downEnabled,
    onMoveUp,
    onMoveDown}) => (
  <div className="css-scroll-buttons">
    <button
      className={classNames(
        'css-button-up',
        {'css-button-disabled': !upEnabled})}
      onClick={onMoveUp}></button>
    <button
      className={classNames(
        'css-button-down',
        {'css-button-disabled': !downEnabled})}
      onClick={onMoveDown}></button>
  </div>
);
