/* @flow */
import React from 'react';
import R from 'ramda';
import { storiesOf } from '@kadira/storybook';
import {
  withKnobs,
  boolean,
  select,
} from '@kadira/storybook-addon-knobs';

import { Icon } from '.';
import { IconSVGPath, MagnitudeEnum, BreedEnum } from '../../lib/constants';

const stories = storiesOf('Icon', module);
const iconOptions = R.invertObj(IconSVGPath);
const sizeOptions = R.invertObj(MagnitudeEnum);
const typeOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    svgPath: select('icon', iconOptions, IconSVGPath.TWITTER),
    size: select('size', sizeOptions, MagnitudeEnum.MEDIUM),
    type: select('type', typeOptions, undefined),
    inverted: boolean('inverted', false),
  });

  return <Icon {...props} />;
});
