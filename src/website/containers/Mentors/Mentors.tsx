import Section, { SectionLink } from 'website/components/Section'
import Container from 'shared/components/Container'
import CardQuote from 'website/components/CardQuote'

const mentors = [
  {
    index: 'mentor1',
    title: 'gracinha',
    subtitle: 'front-end developer',
    image: 'https://plchldr.co/i/250x200',
    quote: 'Lorem ipsum dolor sit amet',
  },
  {
    index: 'mentor2',
    title: 'mario junior',
    subtitle: 'product manager',
    image: 'https://plchldr.co/i/250x200',
    quote: 'Sed tristique nibh lorem',
  },
  {
    index: 'mentor3',
    title: 'lurdinha',
    subtitle: ' back-end developer',
    image: 'https://plchldr.co/i/250x200',
    quote: 'Consectetur adipiscing elit et',
  },
]

export default function Mentors() {
  return (
    <Container>
      <Section
        title="mentores"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget."
        direction="row"
      >
        <CardQuote data={mentors} />
      </Section>
      <SectionLink href="/" label="como atuam os mentores?" />
    </Container>
  )
}
