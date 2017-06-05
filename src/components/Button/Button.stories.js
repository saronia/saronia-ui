/* @flow */
import R from 'ramda';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import { Button, LinkButton, PulseButton, RawButton } from '.';
import { Icon } from '../Icon';
import {
  MagnitudeEnum,
  BreedEnum,
  IconSVGPath,
} from '../../lib/constants';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs).addDecorator(centered);

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const iconOptions = R.invertObj(IconSVGPath);
const popOptions = R.invertObj({
  ACTIVE: 'active',
  FOCUS: 'focus',
  HOVER: 'hover',
  NONE: undefined,
});
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories
  .add('default', () => {
    const circular = boolean('circular', false);
    const children = text('children', 'Register');
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
      circular,
      radius: circular
        ? select('radius', R.invertObj(MagnitudeEnum), 'large')
        : undefined,
      pop: select('pop', popOptions, undefined),
      breed: select('breed', breedOptions, 'primary'),
    });

    return (
      <Button {...props} onClick={action('clicked')}>
        {children}
      </Button>
    );
  })
  .add('link', () => {
    const children = text('children', 'Click me!');
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
      pop: select('pop', popOptions, undefined),
      breed: select('breed', breedOptions, 'primary'),
    });

    return (
      <LinkButton {...props} href="https://saronia.com">
        {children}
      </LinkButton>
    );
  })
  .add('icon', () => {
    const children = text('children', 'Add word');
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      iconLeft: boolean('iconLeft', true) ? IconSVGPath.ADD : 'undefined',
      iconRight: boolean('iconRight', true) ? IconSVGPath.TRASH : 'undefined',
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
      pop: select('pop', popOptions, undefined),
      breed: select('breed', breedOptions, 'primary'),
    });

    return (
      <Button {...props} onClick={action('button-click')}>
        {children}
      </Button>
    );
  })
  .add('circular', () => {
    const props = R.pickBy(isNotNil, {
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
      pop: select('pop', popOptions, undefined),
      breed: select('breed', breedOptions, 'primary'),
    });

    return (
      <Button {...props} circular radius="small">
        <Icon svgPath={IconSVGPath.CLOSE} />
      </Button>
    );
  })
  .add('pulse', () => {
    const children = text('children', 'Register');
    const circular = boolean('circular', true);
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      icon: select('icon', iconOptions, IconSVGPath.ADD),
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), MagnitudeEnum.MEDIUM),
      circular,
      radius: circular
        ? select('radius', R.invertObj(MagnitudeEnum), MagnitudeEnum.BIG)
        : undefined,
      pop: select('pop', popOptions, undefined),
      breed: select('breed', breedOptions, 'secondary'),
    });

    return (
      <PulseButton {...props} onClick={action('clicked')}>
        {children}
      </PulseButton>
    );
  });
