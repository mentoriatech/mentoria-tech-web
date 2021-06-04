import { FC, SyntheticEvent } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'shared/components/Form'
import { formFields } from './MentorshipService'
import { UserType } from 'types'
import { MentorshipContainer, CustomButton } from './Mentorship.styles'

const { GeneratedForm } = Form

export interface MentorshipProps {
  content: {
    title: string,
    description?: string,
  };
  user?: UserType;
  mentor?: boolean;
  onSubmit: (state: unknown) => void;
}

export const Mentorship: FC<MentorshipProps> = ({ mentor, onSubmit }) => {
  const { register, getValues, formState } = useForm({
    mode: 'onChange',
  })

  const beforeSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const values = getValues()

    onSubmit(values)
  }

  const { isDirty } = formState

  return (
    <MentorshipContainer>
      {mentor && (
        <GeneratedForm
          onSubmit={beforeSubmit}
          register={register}
          submitDisabled={!isDirty}
          {...formFields}
        />
      )}
      {!mentor && (
        <>
          <img src="https://plchldr.co/i/500x400" />
          <CustomButton variant="primary" size="normal">
            Quero mentoria
          </CustomButton>
        </>
      )}
    </MentorshipContainer>
  )
}
