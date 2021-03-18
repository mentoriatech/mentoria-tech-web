import { FC } from 'react'
import { Breadcrumbs } from 'nextjs-breadcrumbs'
import { BreadcrumbStyled } from './Breadcrumb.styles'

export const Breadcrumb = () => {
  const breadcrumbs = Breadcrumbs()

  return (
    <BreadcrumbStyled className="Breadcrumb">{breadcrumbs}</BreadcrumbStyled>
  )
}
