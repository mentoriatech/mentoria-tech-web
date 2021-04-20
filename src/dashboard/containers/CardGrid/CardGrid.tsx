import { FC } from 'react'
import { 
  CardsContainer,
  CustomCard,
  IconWrapper
 } from './CardGrid.styles'
import { PrimaryButton } from 'shared/components/Button'

type CardProps = {
  color?: string;
  icon?: string;
  description?: string;
  action?: string;
}

interface CardGridProps {
  cards?: CardProps[];
}

export const CardGrid: FC<CardGridProps> = ({ cards }) => {
  return (
    <CardsContainer>
      {cards.map((cards) => (
        <CustomCard direction="column">
          <IconWrapper color={cards.color}>
            <img src={`/icons/${cards.icon}.svg`} />
          </IconWrapper>
          {cards.description}
          <PrimaryButton variant="tertiary" size="small">{cards.action}</PrimaryButton >
        </CustomCard>
      ))}
      </CardsContainer>
  )
}
