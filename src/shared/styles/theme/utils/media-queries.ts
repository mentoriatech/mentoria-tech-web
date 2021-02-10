import { Breakpoint, Breakpoints, MediaQueries } from '../types';

export function createMediaQueries(breakpoints: Breakpoints): MediaQueries {
  return Object.keys(breakpoints).reduce((allMediaQueries, breakpoint) => {
    const typedBreakpoint = breakpoint as Breakpoint;
    const value = breakpoints[typedBreakpoint];
    const { prefix = '', suffix = '' } =
      typeof value === 'string'
        ? {}
        : { prefix: '(min-width: ', suffix: 'px)' };

    // eslint-disable-next-line no-param-reassign
    allMediaQueries[typedBreakpoint] = `@media ${prefix}${value}${suffix}`;

    return allMediaQueries;
  }, {} as MediaQueries);
}
