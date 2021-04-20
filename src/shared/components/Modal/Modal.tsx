import { ModalBackground } from './Modal.styles'
import Card from 'dashboard/components/Card'
import parse from 'html-react-parser'

export default function Modal({ children }) {
  return (
    <ModalBackground>
      <Card>
        {parse(children)}
      </Card>
    </ModalBackground>
  )
}
