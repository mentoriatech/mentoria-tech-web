import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from 'dashboard/containers/Layout'
import Form from 'shared/components/Form'
import { formFields } from './MentorshipService'

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
}

export const Mentorship: FC<MentorshipProps> = ({ content }) => {
  const [mentor, setMentor] = useState(false)
  const [mentored, setMentored] = useState(false)

  const { register, getValues, watch, formState } = useForm({
    mode: 'onChange',
  })

  const { isDirty } = formState

  const onSubmit = () => {}

  const handleMentorClick = () => setMentor(true)

  return (
    <Layout content={content} direction="column">
      <MentorshipContainer>
        <CustomCard>
          <MentorshipTitle>Quero mentorar</MentorshipTitle>
          {!mentor ? (
            <>
              <MentorshipDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas scelerisque neque at orci imperdiet finibus. Sed
                pretium elit dolor, id laoreet massa faucibus malesuada. Ut
                maximus tellus at sollicitudin convallis. Fusce nec venenatis
                tellus, a cursus eros. Nulla maximus efficitur iaculis.
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
              onSubmit={onSubmit}
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
            id laoreet massa faucibus malesuada. Ut maximus tellus at
            sollicitudin convallis. Fusce nec venenatis tellus, a cursus eros.
            Nulla maximus efficitur iaculis.
          </MentorshipDescription>
          <CustomButton variant="primary" size="normal">
            Pedir mentoria
          </CustomButton>
        </CustomCard>
      </MentorshipContainer>
    </Layout>
  )
}
