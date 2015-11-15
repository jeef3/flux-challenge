import React from 'react';
import classNames from 'classnames';

export const ScrollButtons = ({
    hasMasters,
    hasApprentices,
    onMoveUp,
    onMoveDown}) => (
  <div className="css-scroll-buttons">
    <button
      className={classNames(
        'css-button-up',
        {'css-button-disabled': !hasMasters})}
      onClick={onMoveUp}></button>
    <button
      className={classNames(
        'css-button-down',
        {'css-button-disabled': !hasApprentices})}
      onClick={onMoveDown}></button>
  </div>
);
