import Link from 'next/link'
import Section, { SectionLink } from 'website/components/Section'
import Container from 'shared/components/Container'
import Card from 'website/components/Card'

const howItWorksContent = [
  {
    title: 'Diversos conteúdos e formatos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/media.svg',
    alignEnd: false
  },
  {
    title: 'Diferentes mentores',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/mentors.svg',
    alignEnd: true
  },
  {
    title: 'Liberdade para escolher o que e quando estudar',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/calendar.svg',
    alignEnd: false
  },
  {
    title: 'Reconhecimento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/reward.svg',
    alignEnd: true
  },
  {
    title: 'Curadoria de conteúdo para estudar offline',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/offline.svg',
    alignEnd: false
  }
]

export default function HowIrWorks() {
  return (
    <Section 
      title="como funciona"
      direction="column">
      <Container>
        {
          howItWorksContent.map((content) => (
            <Card
              direction="row"
              {...content}
            />
          ))
        }
        <SectionLink href="/" label="mapa de conhecimento" />
      </Container>
    </Section>
  )
}
