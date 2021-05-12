import { FC, useState } from 'react'
import Link from 'next/link'
import {
  LinkStyled,
  NavigationStyled,
  List,
  ListItem,
} from './Navigation.styles'

interface Item {
  icon?: string;
  destination: string;
  label: string;
  background?: boolean;
}

interface NavigationProps {
  items: Item[];
  dark?: boolean;
}

export const Navigation: FC<NavigationProps> = ({ items }) => {
  return (
    <>
      <NavigationStyled>
        <input type="checkbox" id="btnControl" />
        <label htmlFor="btnControl"></label>
        <List>
          {items.map((item: Item) => (
            <ListItem key={item.destination}>
              <Link href={item.destination}>
                <LinkStyled background={item.background}>
                  {item.icon && <img src={item.icon} width="12" height="12" />}
                  {item.label}
                </LinkStyled>
              </Link>
            </ListItem>
          ))}
        </List>
      </NavigationStyled>
    </>
  )
}
