import { Background, Wave, Girl, Path } from './HeaderBackground.styles'

export default function HeaderBackground() {
  const amountOfStars = 300;

  return (
    <Background className="Background">
      <Wave className="Wave" />

      <Girl src="/girl.svg" className="girl" />
      <Path src="/path.svg" className="path" />
      {/* <div className="galaxy">
        <div className="planet"></div>
        <div className="planet2"></div> */}
            {/* {Array.from(Array(amountOfStars), (e, i) => (
              <div className="star"></div>
            ))}; */}
      {/* </div> */}
    </Background>
  )
}
