import { 
  FooterContent, 
  FooterBottom, 
  FooterDescription, 
  FooterNavigation,
  FooterContainer,
  FooterText,
  FooterLink
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

const footerSocialMedia = [
  {
    image: '/icons/slack-logo.svg',
    destination: '/'
  },
  {
    image: '/icons/twitter-logo.svg',
    destination: '/'
  },
  {
    image: '/icons/instagram-logo.svg',
    destination: '/'
  },
  {
    image: '/icons/facebook-logo.svg',
    destination: '/'
  }
]

export default function Footer() {
  return (
    <>
      <FooterContent className="FooterContent">
        <FooterContainer className="Container">
          <FooterDescription className="FooterDescription">
            <Logo size="small" />
            <FooterText className="FooterTex">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            </FooterText>
          </FooterDescription>
          <FooterNavigation className="FooterNavigation" changeDirection={true}>
            {footerNavigation.map((item) => (
              <li>
                <Link href={item.destination}>
                  <FooterLink>{item.label}</FooterLink>
                </Link>
              </li>
            ))}
          </FooterNavigation>
          <FooterNavigation className="FooterNavigation">
            {footerSocialMedia.map((item) => (
              <li>
                <Link href={item.destination}>
                  <img src={item.image} />
                </Link>
              </li>
            ))}
          </FooterNavigation>
        </FooterContainer>
      </FooterContent>
      <FooterBottom>
        <FooterContainer>
          <FooterText>
            © mentoria.tech 2021
          </FooterText>
        </FooterContainer>
      </FooterBottom>
    </>
  )
}
