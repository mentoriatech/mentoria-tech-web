import Link from 'next/link'
import Image from 'next/image'
import { List, Item, LinkStyled } from './Navigation.styles';

interface Item {
  icon: string;
  destination: string;
  label: string;
}

export default function Navigation({ items }) {
  return (
    <List>
      {items.map((item: Item) => (
        <Item key={item.destination}>
          <Link href={item.destination}>
            <LinkStyled>
              {item.icon && <Image src={item.icon} width="12" height="12" />}
              {item.label}
              </LinkStyled>
          </Link>
        </Item>
      ))}
    </List>
  )
}
