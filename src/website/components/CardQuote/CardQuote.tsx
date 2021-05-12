import {
  CardQuoteWrapper,
  CardQuoteItem,
  CardQuoteImage,
  CardQuoteTitle,
  CardQuoteSubtitle,
  CardBlockQuote,
} from './CardQuote.styles'

interface CardItem {
  index: string;
  image: string;
  title: string;
  subtitle: string;
  quote: string;
}

export default function CardQuote({ data }) {
  return (
    <CardQuoteWrapper>
      {data.map((item: CardItem) => (
        <CardQuoteItem className="CardQuoteItem" key={item.index}>
          <CardQuoteImage src={item.image} />
          <CardQuoteTitle>{item.title}</CardQuoteTitle>
          <CardQuoteSubtitle>{item.subtitle}</CardQuoteSubtitle>
          <CardBlockQuote>{item.quote}</CardBlockQuote>
        </CardQuoteItem>
      ))}
    </CardQuoteWrapper>
  )
}
