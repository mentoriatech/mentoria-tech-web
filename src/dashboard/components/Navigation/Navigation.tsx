import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { LinkStyled, NavigationStyled, List, ListItem } from './Navigation.styles';

interface Item {
  icon: string;
  destination: string;
  label: string;
}

export default function Navigation({ items, direction }) {
  const [navState, setNavState] = useState(false)
  const router = useRouter()

  const currentPath = router.pathname

  return (
    <>
      <NavigationStyled>
      <input type="checkbox" id="btnControl"/>
      <label htmlFor="btnControl"></label>
        <List direction={direction}>
          {items.map((item: Item) => (
            <ListItem key={item.destination}>
              <Link href={item.destination}>
                <LinkStyled active={currentPath === item.destination}>
                  <div>
                    {item.icon}
                  </div>
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
