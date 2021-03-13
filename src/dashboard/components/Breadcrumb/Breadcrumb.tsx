import { FC } from 'react'
import { Breadcrumbs } from 'nextjs-breadcrumbs'
import { BreadcrumbStyled } from './Breadcrumb.styles'

export const Breadcrumb = () => {
  const breadcrumbs = Breadcrumbs()
  console.log('🚀 ~ file: Breadcrumb.tsx ~ line 7 ~ Breadcrumb ~ breadcrumbs', breadcrumbs);
  
  return (
    <BreadcrumbStyled className="Breadcrumb">{breadcrumbs}</BreadcrumbStyled>
  )
}
