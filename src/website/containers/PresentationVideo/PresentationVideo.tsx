import { useState } from 'react'
import VideoSection from 'website/components/VideoSection'
import { 
  VideoSectionWrapper, 
  VideoFrame, 
  VideoDisclaimer, 
  VideoContainer, 
  VideoDescription 
} from './PresentationVideo.styles'


export default function PresentationVideo() {
  const [requestVideo, setRequestVideo] = useState(false)
  const onDisclaimerClick = () => setRequestVideo(true)
  return (
    <VideoSectionWrapper>
      {!requestVideo && <VideoFrame>
        <VideoContainer>
          <VideoDisclaimer className="VideoDisclaimer" onClick={onDisclaimerClick}>Lorem ipsum dolor sit amet</VideoDisclaimer>
          <VideoDescription>
            <p>_eve montalvão</p>
            <span>software developer & <br />fundadora do mentoria.tech</span>
          </VideoDescription>
        </VideoContainer>
      </VideoFrame>}
      {requestVideo && <iframe width="100%" height="600px" src="https://www.youtube.com/embed/jr47YisIsz8?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
    </VideoSectionWrapper>
  )
}
