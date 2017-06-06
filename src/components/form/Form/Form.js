/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Form = styled.form`
  flex-grow: 1;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;

  .fields {
    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }
`;

export default (props: Props) => <Form {...props} />;
