/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../lib/constants';
import type { Size, Breed } from '../../../lib/types';

type Props = {
  children: any,
  gap?: Size,
  marginLeft?: string,
  type?: Breed,
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  margin-left: ${R.propOr('75px', 'marginLeft')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border: 1px dashed ${Color.Gray.STRONG};
  }
`;

const Timeline = (props: Props) =>
  <Wrapper {...props}>
    {props.children.map(child =>
      React.cloneElement(child, {
        type: props.type,
        gap: props.gap,
        marginLeft: props.marginLeft,
        key: child.props.labelTop || child.props.labelBottom,
      }),
    )}
  </Wrapper>;

export default Timeline;
