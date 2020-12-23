import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

type IconProps = {
  url: string,
  size?: number, 
  interval?: number
}

function Icon({ url, size = 96, interval = 20 }: IconProps) {

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

function App() {
  return (
    <div className="bg-white">
      <div className="w-full flex flex-col justify-center items-center py-20">
        <h1 className="text-6xl font-black">Icon<span className="text-orange-500">C4D</span></h1>
        <p className="text-2xl font-mono text-gray-500 py-4">An C4D style icon developed by React.</p>
      </div>
      <div className="container m-auto grid grid-cols-6 gap-2">
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/tfs/TB1qolSVhz1gK0jSZSgXXavwpXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/tfs/TB1SwmqiODsXe8jSZR0XXXK6FXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/tfs/TB1C7fPidTfau8jSZFwXXX1mVXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/imgextra/i1/19999999999999/O1CN01kEo6502NjasxGsHnS_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/imgextra/i1/19999999999999/O1CN01wTY5Zt2Njasyydqim_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/tfs/TB1u12whCslXu8jSZFuXXXg7FXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/imgextra/i4/19999999999999/O1CN019FqNuv2NjaswQicY2_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/tfs/TB111c4mz39YK4jSZPcXXXrUFXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/tfs/TB1.6kUU4v1gK0jSZFFXXb0sXXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/imgextra/i2/19999999999999/O1CN01lNd4Q42Njasz4EGUD_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/tfs/TB1cHirmP39YK4jSZPcXXXrUFXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/imgextra/i4/19999999999999/O1CN01S0iMLP2Njasz4Fk1Q_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/tfs/TB1gnuZiipE_u4jSZKbXXbCUVXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
          <Icon url="https://img.alicdn.com/imgextra/i2/19999999999999/O1CN01ZViOh72NjasxGvRSV_!!19999999999999-2-tps.png" />
        </div>
      </div>
    </div>
  )
}

render(
  <App />,
  document.getElementById('root')
);

export default App;
