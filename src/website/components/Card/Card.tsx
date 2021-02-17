import {
  CardStyled, 
  CardContent,
  CardTitle, 
  CardSubtitle,
  CardText, 
  CardImage,
 } from './Card.styles'

interface CardProps {
  title: string;
  subtitle?: string;
  text: string;
  image?: string;
  order: number;
  quote?: string;
  alignEnd?: boolean;
}

interface CardsProps {
  data: Array<CardProps>;
  direction: string;
}
export default function Card(props : CardsProps) {
  return (
    <>
    {props.data.map((card : CardProps, index : number) => (
      <CardStyled className="Card" direction={props.direction} align={card.alignEnd ? 'end' : 'start'}>
        <CardImage src={card.image} order={card.order}/>
        <CardContent align={card.alignEnd ? 'end' : 'start'} className="CardContent">
          <CardTitle>{card.title}</CardTitle>
          <CardSubtitle>{card.subtitle}</CardSubtitle>
          {card.text && <CardText>{card.text}</CardText>}
        </CardContent>
      </CardStyled>
    ))}
    </>
  )
}
