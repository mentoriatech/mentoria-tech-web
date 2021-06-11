import { FC, useState, BaseSyntheticEvent } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'shared/components/Form'
import { formFields, updateUser } from './MentorshipService'
import { UserType } from 'types'
import Loading from 'shared/components/Loading'

import {
  MentorshipContainer,
  MentorshipTitle,
  CustomCard,
  MentorshipDescription,
  CustomButton,
} from './Mentorship.styles'

const { GeneratedForm } = Form

export interface MentorshipProps {
  content: {
    title: string,
    description?: string,
  };
  user?: UserType;
}

export const Mentorship: FC<MentorshipProps> = ({ content, user }) => {
  const initialState = {
    mentor: false,
    mentored: false,
  }
  const [formRequestError, setFormRequestError] = useState(initialState)
  const [formRequestSuccess, setFormRequestSuccess] = useState(initialState)
  const [formRequestLoading, setFormRequestLoading] = useState(initialState)
  const [mentor, setMentor] = useState(false)
  const [mentored, setMentored] = useState(false)

  const { register, getValues, formState } = useForm({
    mode: 'onChange',
  })

  const { isDirty } = formState

  const onSubmit = async (event: BaseSyntheticEvent, isMentor: boolean) => {
    const userType = isMentor ? 'mentor' : 'mentored'
    setFormRequestLoading((prev) => ({ ...prev, [userType]: true }))
    event.preventDefault()

    const values = getValues()

    try {
      const { successful, data } = await updateUser(
        user.email,
        values,
        isMentor,
      )
      if (!status) {
        setTimeout(() => {
          setFormRequestLoading((prev) => ({ ...prev, [userType]: false }))
          setFormRequestSuccess((prev) => ({ ...prev, [userType]: true }))
        }, 1000)
      }
    } catch (error: unknown) {
      setFormRequestLoading((prev) => ({ ...prev, [userType]: false }))
      setFormRequestError((prev) => ({ ...prev, [userType]: true }))
    }
  }

  const handleMentorClick = () => setMentor(true)

  return (
    <MentorshipContainer>
      <CustomCard>
        {formRequestLoading.mentor && <Loading label="Salvando alterações" />}
        <MentorshipTitle>Quero mentorar</MentorshipTitle>
        {!mentor ? (
          <>
            <MentorshipDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              scelerisque neque at orci imperdiet finibus. Sed pretium elit
              dolor, id laoreet massa faucibus malesuada. Ut maximus tellus at
              sollicitudin convallis. Fusce nec venenatis tellus, a cursus eros.
              Nulla maximus efficitur iaculis.
            </MentorshipDescription>
            <CustomButton
              onClick={handleMentorClick}
              variant="primary"
              size="normal"
            >
              Começar a mentoriar
            </CustomButton>
          </>
        ) : (
          <GeneratedForm
            onSubmit={(e) => onSubmit(e, true)}
            register={register}
            submitDisabled={!isDirty}
            {...formFields}
          />
        )}
      </CustomCard>
      <CustomCard>
        <MentorshipTitle>Quero mentoria</MentorshipTitle>
        <MentorshipDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          scelerisque neque at orci imperdiet finibus. Sed pretium elit dolor,
          id laoreet massa faucibus malesuada. Ut maximus tellus at sollicitudin
          convallis. Fusce nec venenatis tellus, a cursus eros. Nulla maximus
          efficitur iaculis.
        </MentorshipDescription>
        <CustomButton variant="primary" size="normal">
          Pedir mentoria
        </CustomButton>
      </CustomCard>
    </MentorshipContainer>
  )
}
