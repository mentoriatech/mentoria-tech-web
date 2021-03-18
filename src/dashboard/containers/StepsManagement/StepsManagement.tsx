import { FC } from 'react'
import { CustomStepsManagement } from './StepsManagement.styles'
import Card from 'dashboard/components/Card'

interface StepsManagementProps {
  title: string;
  icon?: object;
}

export const StepsManagement: FC<StepsManagementProps> = ({ title, icon }) => {
  return (
    <CustomStepsManagement className="StepsManagement">
      <Card>teste</Card>
    </CustomStepsManagement>
  )
}
