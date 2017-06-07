/* @flow */
import React from 'react';
import R from 'ramda';

import RawButton from './RawButton';
import IconButton from './IconButton';

import type { Breed, Size } from '../../lib/types';

export type DefaultButtonProps = {
  accent?: boolean,
  circular?: false,
  compact?: false,
  inverted?: boolean,
  iconLeft?: string,
  iconRight?: string,
  onClick?: Function,
  pop?: 'active' | 'focus' | 'hover',
  size?: Size,
  breed?: Breed,
};

export type CircularButtonProps = {
  accent?: boolean,
  circular: true,
  compact?: false,
  inverted?: boolean,
  onClick?: Function,
  pop?: 'active' | 'focus' | 'hover',
  radius: Size,
  size?: Size,
  breed?: Breed,
};

export type Props = DefaultButtonProps | CircularButtonProps;

export default (props: Props) =>
  R.cond([
    [
      R.prop('iconLeft'),
      R.always(<IconButton {...R.omit(['iconRight'], props)} />),
    ],
    [
      R.prop('iconRight'),
      R.always(<IconButton {...R.omit(['iconLeft'], props)} />),
    ],
    [
      R.T,
      R.always(
        <RawButton {...props}>
          {R.prop('children', props)}
        </RawButton>,
      ),
    ],
  ])(props);
