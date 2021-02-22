import Section, { SectionLink } from 'website/components/Section'
import Container from 'shared/components/Container'
import Card from 'website/components/Card'

const howItWorksContent = [
  {
    title: 'Diversos conteúdos e formatos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/media.svg',
    alignEnd: false,
    order: 1,
  },
  {
    title: 'Diferentes mentores',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/mentors.svg',
    alignEnd: true,
    order: 3,
  },
  {
    title: 'Liberdade para escolher o que e quando estudar',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/calendar.svg',
    alignEnd: false,
    order: 1,
  },
  {
    title: 'Reconhecimento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/reward.svg',
    alignEnd: true,
    order: 3,
  },
  {
    title: 'Curadoria de conteúdo para estudar offline',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/offline.svg',
    alignEnd: false,
    order: 1,
  }
]

export default function HowIrWorks() {
  return (
    <Section 
      title="como funciona"
      direction="column">
      <Container>
        <Card
          data={howItWorksContent}
          direction="row"
        />
        <SectionLink href="/" label="mapa de conhecimento" />
      </Container>
    </Section>
  )
}
