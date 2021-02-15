export type Colors = {
  white: string;
  black: string;
  grey: { 
    light: string,
    normal: string,
    dark: string,
  };
  background: {
    light: string;
    normal: string;
  }
  brandPrimary: { 
    light: string,
    normal: string,
    dark: string,
  };
  brandSecondary: { 
    light: string,
    normal: string,
    dark: string,
  };
  brandSupport: { 
    light: string,
    normal: string,
    dark: string,
  };
}

export type FontStack = {
  default: string;
  brand: string;
};

export type Spacings = {
  bit: string;
  byte: string;
  kilo: string;
  mega: string;
  giga: string;
  tera: string;
  peta: string;
  exa: string;
  zetta: string;
};

export type IconSizes = {
  kilo: string;
  mega: string;
  giga: string;
};

export type BorderRadius = {
  kilo: string;
  mega: string;
  giga: string;
  tera: string;
  circle: string;
  half: string,
  pill: string;
};

export type BorderWidth = {
  kilo: string;
  mega: string;
};

export type FontWeight = {
  regular: string;
  bold: string;
};

export enum Breakpoint {
  byte = 'byte',
  untilKilo = 'untilKilo',
  kilo = 'kilo',
  kiloToMega = 'kiloToMega',
  mega = 'mega',
  untilMega = 'untilMega',
  megaToGiga = 'megaToGiga',
  giga = 'giga',
  gigaToTera = 'gigaToTera',
  tera = 'tera',
}

export type Typography = {
  fontSize: string;
  lineHeight: string;
};

export type MediaQueries = {
  [key in Breakpoint]: string;
};

export type Breakpoints = {
  [key in Breakpoint]: string | number;
};

export interface Theme {
  colors: Colors;
  spacings: Spacings;
  iconSizes: IconSizes;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  typography: {
    headings: {
      kilo: Typography;
      mega: Typography;
      giga: Typography;
      tera: Typography;
      peta: Typography;
      exa: Typography;
      zetta: Typography;
    };
    subHeadings: {
      kilo: Typography;
      mega: Typography;
    };
    text: {
      kilo: Typography;
      mega: Typography;
      giga: Typography;
    };
  };
  fontWeight: FontWeight;
  breakpoints: Breakpoints;
  mq: MediaQueries;
}
