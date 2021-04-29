import { FC } from 'react'
import { CustomStepsManagement, ColumnTitle, CustomCard, CustomAnchor } from './StepsManagement.styles'

type StepsManagementType = {
  listName: string;
  cards: [{
    id: string,
    name: string,
    url: string,
  }]
}

export const StepsManagement: FC<StepsManagementType> = ({ listName, cards }) => {
  return (
    <CustomStepsManagement className="StepsManagement">
      <ColumnTitle>{listName}</ColumnTitle>
      {cards.map((card, index) => (
        <CustomCard key={index}>
          {card.name}
          <a href={card.url} target="_blank"><CustomAnchor /></a>
        </CustomCard>
      ))}
    </CustomStepsManagement>
  )
}
