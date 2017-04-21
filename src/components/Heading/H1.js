/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Font } from '../../assets/constants';

type Props = {
  accent?: boolean,
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  decoration?: 'none' | 'underline' | 'overline' | 'line-through',
};

const H1 = styled.h1`
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};
  text-transform: ${props => (props.transform ? props.transform : 'inherit')};
  text-decoration: ${props => (props.decoration ? props.decoration : 'inherit')};
`;

export default (props: Props) => <H1 {...props} />;
