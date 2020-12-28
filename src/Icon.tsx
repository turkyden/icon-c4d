import { useState, useEffect, useLayoutEffect } from 'react';

type IconProps = {
  url: string,
  size?: number, 
  interval?: number
}

export default function Icon({ url, size = 64, interval = 20 }: IconProps) {

  const [y, setY] = useState(0);

  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setY(preState => {
        const nextState = preState + size * direction;
        if(nextState >= -size*20 && nextState <= 0){
          return nextState
        } else{
          return preState
        }
      })
    }, interval)
    return () => window.clearInterval(timer)
  }, [size, interval, direction])

  useLayoutEffect(() => {
    setDirection(-1);
    const timer = window.setTimeout(() => {
      setDirection(1);
    }, 2000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div 
      className="cursor-pointer bg-no-repeat bg-cover" 
      onMouseOver={e => setDirection(-1)} 
      onMouseOut={e => setDirection(1)} 
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${url})`,
        backgroundPosition: '0 0',
        backgroundPositionY: y
      }}
    />
  )
}