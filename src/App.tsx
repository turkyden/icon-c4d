import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Slider, { SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';

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

function MySlider(props: SliderProps) {
  return <Slider {...props} trackStyle={{ backgroundColor: '#ff6a00' }} handleStyle={{ border: 'solid 2px #ff6a00' }} />
}

function App() {

  const [ size, setSize ] = useState(64);

  const [ interval, setInterval ] = useState(30);

  return (
    <>
      <header className="w-full flex flex-col justify-center items-center py-20">
        <h1 className="text-6xl font-black">Icon<span className="text-orange-500">C4D</span></h1>
        <h2 className="text-2xl font-mono text-gray-500 py-4">An C4D style icon developed by React.</h2>
      </header>
      <section className="container m-auto grid grid-cols-6 gap-2">
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1qolSVhz1gK0jSZSgXXavwpXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1SwmqiODsXe8jSZR0XXXK6FXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1C7fPidTfau8jSZFwXXX1mVXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i1/19999999999999/O1CN01kEo6502NjasxGsHnS_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i1/19999999999999/O1CN01wTY5Zt2Njasyydqim_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1u12whCslXu8jSZFuXXXg7FXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i4/19999999999999/O1CN019FqNuv2NjaswQicY2_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB111c4mz39YK4jSZPcXXXrUFXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1.6kUU4v1gK0jSZFFXXb0sXXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i2/19999999999999/O1CN01lNd4Q42Njasz4EGUD_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1cHirmP39YK4jSZPcXXXrUFXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i4/19999999999999/O1CN01S0iMLP2Njasz4Fk1Q_!!19999999999999-2-tps.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1gnuZiipE_u4jSZKbXXbCUVXa-128-2688.png" />
        </div>
        <div className="h-48 flex flex-col justify-center items-center">
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i2/19999999999999/O1CN01ZViOh72NjasxGvRSV_!!19999999999999-2-tps.png" />
        </div>
      </section>  
      <section className="fixed top-0 right-0 p-4">
        <div className="w-64 h-64 p-4">
          <h3 className="text-lg pb-4">Customize</h3>
          <p className="py-2 flex justify-between items-center">
            <span className="text-gray-500">Size</span>
            <span className="text-gray-800">{size} px</span>
          </p>
          <MySlider min={24} max={128} value={size} onChange={value => setSize(value)} />
          <p className="py-2 flex justify-between items-center">
            <span className="text-gray-500">Interval</span>
            <span className="text-gray-800">{interval} ms</span>
          </p>
          <MySlider min={0} max={60} value={interval} onChange={value => setInterval(value)} />
        </div>
      </section>
      <footer className="container m-auto flex justify-center">
        <p className="text-gray-600">Inspired by Aliyun 🧡 Created by <a className="text-orange-500 hover:underline" href="https://github.com/Turkyden" target="_blank" rel="noreferrer">Turkyden</a></p>
      </footer>
    </>
  )
}

render(
  <App />,
  document.getElementById('root')
);

export default App;
