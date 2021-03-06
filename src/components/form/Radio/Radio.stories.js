/* @flow */
import React from 'react';
import R from 'ramda';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import { Radio, RadioGroup } from '.';
import { BreedEnum } from '../../../lib/constants';

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Radio', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    breed: select('breed', breedOptions, 'undefined'),
    inverted: boolean('inverted', false),
    vertical: boolean('vertical', true),
  });

  return (
    <div>
      <RadioGroup {...props} name="difficulty">
        <Radio value="all">All</Radio>
        <Radio value="easy">Easy</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="hard">Hard</Radio>
        <Radio value="nightmare">Nightmare</Radio>
        <Radio value="disabled" disabled>
          Disabled
        </Radio>
      </RadioGroup>
    </div>
  );
});
