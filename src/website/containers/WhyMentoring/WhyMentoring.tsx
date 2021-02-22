import Card from 'website/components/Card'
import Section, { SectionLink } from 'website/components/Section'
import Container from 'shared/components/Container'

const mentoringReasons = [
  {
    title: 'consolidar o próprio conhecimento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/knowledge.svg',
    order: 1,
    alignEnd: false,
  },
  {
    title: 'melhorar soft skills',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/soft-skills.svg',
    order: 3,
    alignEnd: true,
  },
  {
    title: 'ajudar alguém a crescer profissionalmente',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/grow.svg',
    order: 1,
    alignEnd: false,
  },
  {
    title: 'trocar conhecimento com outros mentores',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/soft-skills.svg',
    order: 3,
    alignEnd: true,
  },
  {
    title: 'ganhar visibilidade',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem.',
    image: '/icons/visibility.svg',
    order: 1,
    alignEnd: false,
  },
]

export const WhyMentoring = () => {
  return (
    <>
      <Section 
      title="por que mentorar?"
      direction="column">
        <Container>
          <Card
            data={mentoringReasons}
            direction="row"
          />
        </Container>
      </Section>
    </>
  )
}
