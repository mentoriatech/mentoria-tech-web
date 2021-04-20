import { FC } from 'react'
import { CustomStepsManagement } from './StepsManagement.styles'
import Card from 'dashboard/components/Card'

interface StepsManagementProps {
  title?: string;
  steps?: object[];
}

export const StepsManagement: FC<StepsManagementProps> = ({ steps }) => {
  return (
    <CustomStepsManagement className="StepsManagement">
      {steps?.map((step) => (
        <Card title="Próximos passos">teste</Card>
      ))}
    </CustomStepsManagement>
  )
}
