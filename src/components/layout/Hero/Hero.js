/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color, Font, SizeSubsetEnum } from '../../../lib/constants';
import type { Breed, SizeSubset } from '../../../lib/types';

type Props = {
  breed?: Breed,
  size?: SizeSubset,
  sticky?: boolean,
};

const getBackgroundColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('breed', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.White.STRONG)],
]);

const getHeight = R.cond([
  [R.propEq('size', SizeSubsetEnum.SMALL), R.always('7.5rem')],
  [R.propEq('size', SizeSubsetEnum.LARGE), R.always('15rem')],
  [R.T, R.always('11.25rem')],
]);

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-color: ${getBackgroundColor};
  z-index: -1;
  position: ${props => props.sticky ? 'fixed' : 'inherit'};
  height: ${getHeight};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  left: 0;
  right: 0;
  top: 0;
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};

  + * {
    position: relative;
    margin-top: ${props => props.sticky ? getHeight(props) : 'inherit'};
  }
`;

const Hero = (props: Props) => <Wrapper {...props} />;

Hero.defaultProps = {};

export default Hero;