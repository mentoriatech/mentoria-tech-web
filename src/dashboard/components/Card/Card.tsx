import { FC } from 'react'
import { CardStyled, CardTitle } from './Card.styles'

interface CardProps {
  title?: string;
  direction?: string;
}
 
export const Card: FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <div>
      {title && <CardTitle>{title}</CardTitle>}
      <CardStyled {...props}>
        {children}
      </CardStyled>
    </div>
  )
}
