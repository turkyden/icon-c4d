import React, { useState, useEffect, useLayoutEffect } from 'react';
import { render } from 'react-dom';
import { Transition } from '@headlessui/react'
import Slider, { SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import weaver_icon_weixin from './assets/@weaver/weixin.png';

type IconProps = {
  url: string,
  size?: number, 
  interval?: number
}

function Icon({ url, size = 64, interval = 20 }: IconProps) {

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

const MySlider: React.FunctionComponent<SliderProps> = (props) => {
  return <Slider {...props} trackStyle={{ backgroundColor: '#ff6a00' }} handleStyle={{ border: 'solid 2px #ff6a00' }} />
}

const Stage: React.FunctionComponent<{ children: React.ReactElement }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const codeInstallString = `npm install iconC4D`;

  const codeUsageString = `import IconC4D from 'iconC4D';
import icon_cloud_computing from '../assets/icon/cloud_computing.png';

function App() {
  return (
    <IconC4D size={64} interval={10} src={icon_cloud_computing} />
  )
}`

  return (
    <>
      <div className="w-48 h-48 bg-gray-50 shadow-inner flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </div>

      <div className={`fixed z-10 inset-0 overflow-y-auto ${ isOpen ? 'block' : 'hidden' }`}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition
            show={isOpen}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0 transition-opacity"
            as="div"
            onClick={e => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </Transition>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <Transition
            show={isOpen}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
            as="div"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex justify-center ">
                {children}
              </div>
              <div className="mt-3">
                <div className="mt-2">
                  <p className="text-base text-gray-500 pt-6 pb-4">
                    📦 Install the package:
                  </p>
                  <SyntaxHighlighter className="text-base" language="shell" style={github}>
                    {codeInstallString}
                  </SyntaxHighlighter>
                  <p className="text-base text-gray-500 pt-6 pb-4">
                    🚀 Customize the icon component:
                  </p>
                  <SyntaxHighlighter className="text-base" language="javascript" style={github}>
                    {codeUsageString}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <a href={weaver_icon_weixin} download="iconc4d_weaver_weixin.png" target="_blank" rel="noreferrer" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Download PNG
              </a>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={e => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

function App() {

  const [ size, setSize ] = useState(64);

  const [ interval, setInterval ] = useState(20);

  return (
    <>
      <header className="w-full flex flex-col justify-center items-center py-20">
        <h1 className="text-6xl font-black">Icon<span className="text-orange-500">C4D</span></h1>
        <h2 className="text-2xl font-mono text-gray-500 py-4">An C4D style icon developed by React.</h2>
      </header>
      <section className="container m-auto grid grid-cols-6 gap-2">
        <Stage>
          <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1qolSVhz1gK0jSZSgXXavwpXa-128-2688.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1SwmqiODsXe8jSZR0XXXK6FXa-128-2688.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1C7fPidTfau8jSZFwXXX1mVXa-128-2688.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i1/19999999999999/O1CN01kEo6502NjasxGsHnS_!!19999999999999-2-tps.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i1/19999999999999/O1CN01wTY5Zt2Njasyydqim_!!19999999999999-2-tps.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1u12whCslXu8jSZFuXXXg7FXa-128-2688.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i4/19999999999999/O1CN019FqNuv2NjaswQicY2_!!19999999999999-2-tps.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB111c4mz39YK4jSZPcXXXrUFXa-128-2688.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1.6kUU4v1gK0jSZFFXXb0sXXa-128-2688.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i2/19999999999999/O1CN01lNd4Q42Njasz4EGUD_!!19999999999999-2-tps.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1cHirmP39YK4jSZPcXXXrUFXa-128-2688.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i4/19999999999999/O1CN01S0iMLP2Njasz4Fk1Q_!!19999999999999-2-tps.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/tfs/TB1gnuZiipE_u4jSZKbXXbCUVXa-128-2688.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url="https://img.alicdn.com/imgextra/i2/19999999999999/O1CN01ZViOh72NjasxGvRSV_!!19999999999999-2-tps.png" />
        </Stage>
        <Stage>
           <Icon size={size} interval={interval} url={weaver_icon_weixin} />
        </Stage>
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
      <footer className="container m-auto flex justify-center py-10">
        <p className="text-gray-600">
          Designed by <a className="text-orange-500 hover:underline" href="https://github.com/Gaoyu" target="_blank" rel="noreferrer">Gaoyu</a>
          <span className="px-2">🧡</span> 
          Developed by <a className="text-orange-500 hover:underline" href="https://github.com/Turkyden" target="_blank" rel="noreferrer">Turkyden</a>
        </p>
      </footer>
    </>
  )
}

render(
  <App />,
  document.getElementById('root')
);

export default App;
