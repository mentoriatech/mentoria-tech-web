import { 
  FooterContent, 
  FooterBottom, 
  FooterDescription, 
  FooterNavigation,
  FooterContainer,
  FooterText
} from './Footer.styles'
import Link from 'next/link'
import Logo from 'shared/components/Logo'

const footerNavigation = [
  {
    label: 'Seja nosso parceiro',
    destination: '/'
  },
  {
    label: 'Fale com a gente',
    destination: '/'
  },
  {
    label: 'Slack',
    destination: '/'
  },
  {
    label: 'Blog',
    destination: '/'
  }
]

export default function Footer() {
  return (
    <>
      <FooterContent>
        <FooterContainer>
          <FooterDescription>
            <Logo size="small" />
            <FooterText>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            </FooterText>
          </FooterDescription>
          <FooterNavigation>
            {footerNavigation.map((item) => (
              <li>
                <Link href={item.destination}>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
          </FooterNavigation>
        </FooterContainer>
      </FooterContent>
      <FooterBottom>
        <FooterDescription>
            @mentoria.tech 2021
        </FooterDescription>
      </FooterBottom>
    </>
  )
}
