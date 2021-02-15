import { 
  CardStyled, 
  CardContent,
  CardTitle, 
  CardSubtitle, 
  CardQuote, 
  CardText, 
  CardImage,
 } from './Card.styles'

interface Card {
  title: string;
  subtitle?: string;
  text: string;
  image?: string;
  alignEnd: boolean;
  direction: string;
  quote?: string;
}
export default function Card(props : Card) {
  const { 
    title, 
    subtitle,
    text, 
    image, 
    alignEnd,
    direction, 
    quote 
  } = props;

  return (
    <CardStyled className="Card" direction={direction} align={alignEnd ? 'end' : 'start'}>
      {!alignEnd && image && <CardImage src={image} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        {quote && <CardQuote>{quote}</CardQuote>}
        {text && <CardText>{text}</CardText>}
      </CardContent>
      {alignEnd && image && <CardImage src={image} />}
    </CardStyled>
  )
}
