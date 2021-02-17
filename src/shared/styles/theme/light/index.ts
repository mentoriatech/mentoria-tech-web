import { createMediaQueries } from '../utils/media-queries';

import {
  Colors,
  Spacings,
  IconSizes,
  BorderRadius,
  BorderWidth,
  FontStack,
  FontWeight,
  Breakpoints,
  MediaQueries,
} from '../types';

export const breakpoints: Breakpoints = {
  byte: 320,
  untilKilo: '(max-width: 479px)',
  kilo: 425,
  kiloToMega: '(min-width: 480px) and (max-width: 767px)',
  mega: 768,
  untilMega: '(max-width: 767px)',
  megaToGiga: '(min-width: 768px) and (max-width: 959px)',
  giga: 960,
  gigaToTera: '(min-width: 960px) and (max-width: 1279px)',
  tera: 1280,
};

export const mq: MediaQueries = createMediaQueries(breakpoints);

export const spacings: Spacings = {
  bit: '4px',
  byte: '8px',
  kilo: '12px',
  mega: '16px',
  giga: '24px',
  tera: '32px',
  peta: '40px',
  exa: '48px',
  zetta: '56px',
};

export const iconSizes: IconSizes = {
  kilo: '16px',
  mega: '24px',
  giga: '32px',
};

export const borderRadius: BorderRadius = {
  kilo: '1px',
  mega: '4px',
  giga: '6px',
  tera: '32px',
  circle: '100%',
  half: '50%',
  pill: '999999px', 
};

export const borderWidth: BorderWidth = {
  kilo: '1px',
  mega: '2px',
};

export const typography = {
  headings: {
    kilo: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    mega: {
      fontSize: '24px',
      lineHeight: '24px',
    },
    giga: {
      fontSize: '36px',
      lineHeight: '24px',
    },
    tera: {
      fontSize: '48px',
      lineHeight: '32px',
    },
    peta: {
      fontSize: '56px',
      lineHeight: '32px',
    },
    exa: {
      fontSize: '64px',
      lineHeight: '44px',
    },
    zetta: {
      fontSize: '72px',
      lineHeight: '48px',
    },
  },
  subHeadings: {
    kilo: {
      fontSize: '12px',
      lineHeight: '20px',
    },
    mega: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },
  text: {
    kilo: {
      fontSize: '13px',
      lineHeight: '20px',
    },
    mega: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    giga: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
};

export const fontStack: FontStack = {
  default:
    'Nunito, sans-serif',
  brand: 'Anonymous Pro, monospace',
};

export const fontWeight: FontWeight = {
  regular: '400',
  bold: '700',
};

export const colors: Colors = {
  white: '#fff',
  black: '#000',
  grey: {
    light: '#f1edf4',
    normal: '#e4deea',
    dark: ''
  },
  background: {
    light: '#514f68',
    normal: '#484662',
  },
  brandPrimary: {
    light: '#ffdde7',
    normal: '#f61067',
    dark: '#dd0456'
  },
  brandSecondary: {
    light: '#f0ddff',
    normal: '#400578',
    dark: ''
  },
  brandSupport: {
    light: '',
    normal: '#F5A600',
    dark: ''
  },
}

