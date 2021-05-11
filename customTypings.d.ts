declare module '@emotion/styled' {
  import { CreateStyled } from '@emotion/styled/types/index'
  import { Theme } from 'shared/styles/theme/types';

  export * from '@emotion/styled/types/index'
  const customStyled: CreateStyled<Theme>
  export default customStyled
}
