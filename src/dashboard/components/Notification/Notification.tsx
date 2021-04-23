import { FC } from 'react'
import { NotificationWrapper, Title, Text } from './Notification.styles'

interface NotificationProps {
  title?: string;
  text?: string;
  autoClose?: boolean;
  timeToClose?: number;
  icon?: string;
}

export const Notification : FC<NotificationProps> = ({ title, text, autoClose, timeToClose, icon }) => {

  return (
    <NotificationWrapper className="Breadcrumb">
      <Title>{title}</Title>
      <Text>{text}</Text>
    </NotificationWrapper>
  )
}
