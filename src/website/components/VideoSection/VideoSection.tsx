import { VideoSectionWrapper } from './VideoSection.styles'

export default function Component() {
  return (
    <VideoSectionWrapper>
      <iframe width="100vh" height="315" src="https://www.youtube.com/embed/jr47YisIsz8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </VideoSectionWrapper>
  )
}
