import { FC } from 'react'
import { Card, CardTitle, CardContent } from './SquareCard.styles'

interface CardsProps {
  data: {
    title: string,
    description: string,
  };
  direction: string;
  color: string;
  order: number;
}

export const SquareCard: FC<CardsProps> = ({
  data,
  color,
  direction,
  order,
}) => {
  return (
    <Card direction={direction}>
      <CardTitle order={order} color={color}>
        {data.title}
      </CardTitle>
      <CardContent>{data.description}</CardContent>
    </Card>
  )
}
