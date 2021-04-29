import { FC, useEffect, useState } from 'react'
import { ProgressWrapper, ProgressNumber , ProgressAnimation, ProgressCard } from './Progress.styles'

interface ProgressProps {
  num: number;
}

export const Progress : FC<ProgressProps> = ({ num }) => {
  const [percentage, setPercentage] = useState(0)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (percentage < num) {
     setTimeout(() => {
        setPercentage((prev) => prev + 1);
      }, 1000*percentage/num/7);
    }

    if (percentage === num) {
      setAnimate(true)
    }
  }, [num, percentage])

  useEffect(() => {
    setAnimate(percentage === num)
  }, [percentage])

  return (
    <ProgressWrapper> 
      <ProgressCard>
        Você já concluiu <ProgressNumber>{percentage}%</ProgressNumber> da sua jornada!
      </ProgressCard>
      <ProgressAnimation animate={animate}/>
    </ProgressWrapper>
  )
}
