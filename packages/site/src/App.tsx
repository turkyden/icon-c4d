import React, { useState } from 'react'
import { render } from 'react-dom'
import { Transition } from '@headlessui/react'
import Slider, { SliderProps } from 'rc-slider'
import 'rc-slider/assets/index.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Icon from 'icon-c4d'
import Images from './utils/index'
import avatar_gaoyu from './avatars/gaoyu.png'
import avatar_turkyden from './avatars/turkyden.jpg'

const MySlider: React.FunctionComponent<SliderProps> = props => {
  return (
    <Slider
      {...props}
      trackStyle={{ backgroundColor: '#ff6a00' }}
      handleStyle={{ border: 'solid 2px #ff6a00' }}
    />
  )
}

const Stage: React.FunctionComponent<{
  url: string
  filename: string
  children: React.ReactElement
}> = ({ url, filename, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const codeInstallString = `npm install iconC4D`

  const codeUsageString = `import Icon from 'icon-c4d';
import icon from '../assets/icon.png';

function App() {
  return (
    <Icon size={64} interval={10} src={icon} />
  )
}`

  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/6 my-2 flex justify-center">
      <div
        className="w-48 h-48 bg-gray-50 shadow-inner flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </div>

      <div
        className={`fixed z-10 inset-0 overflow-y-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
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
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
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
              <div className="flex justify-center ">{children}</div>
              <div className="mt-3">
                <div className="mt-2">
                  <p className="text-base text-gray-500 pt-6 pb-4">
                    📦 Install the package:
                  </p>
                  <SyntaxHighlighter
                    className="text-base"
                    language="shell"
                    style={github}
                  >
                    {codeInstallString}
                  </SyntaxHighlighter>
                  <p className="text-base text-gray-500 pt-6 pb-4">🚀 Usage:</p>
                  <SyntaxHighlighter
                    className="text-base"
                    language="javascript"
                    style={github}
                  >
                    {codeUsageString}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <a
                href={url}
                download={filename}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Download PNG
              </a>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={e => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [size, setSize] = useState(64)

  const [interval, setInterval] = useState(20)

  return (
    <>
      <header className="container m-auto flex items-center py-4">
        {/* <a className="text-gray-500 text-lg" href="https://github/Turkyden/icon-c4d/doc" target="_blank" rel="noreferrer">Docs</a> */}
      </header>
      <section className="w-full flex flex-col justify-center items-center py-10">
        <h1 className="text-6xl font-black">
          Icon<span className="text-orange-500">C4D</span>
        </h1>
        <h2 className="text-2xl font-mono text-gray-500 py-4 flex items-center">
          An C4D style icon developed by React
          <a
            className="text-gray-500 pl-4"
            href="https://github.com/Turkyden/icon-c4d"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="GitHub Repo stars"
              src="https://img.shields.io/github/stars/Turkyden/icon-c4d?style=social"
            />
          </a>
        </h2>
      </section>
      <section className="container m-auto flex flex-wrap justify-start">
        {Object.keys(Images).map(filename => (
          <Stage url={Images[filename]} filename={filename}>
            <Icon size={size} interval={interval} url={Images[filename]} />
          </Stage>
        ))}
      </section>
      <section className="fixed top-0 right-0 p-4">
        <div className="w-64 h-64 p-4">
          <h3 className="text-lg pb-4">Customize</h3>
          <p className="py-2 flex justify-between items-center">
            <span className="text-gray-500">Size</span>
            <span className="text-gray-800">{size} px</span>
          </p>
          <MySlider
            min={24}
            max={128}
            value={size}
            onChange={value => setSize(value)}
          />
          <p className="py-2 flex justify-between items-center">
            <span className="text-gray-500">Interval</span>
            <span className="text-gray-800">{interval} ms</span>
          </p>
          <MySlider
            min={0}
            max={60}
            value={interval}
            onChange={value => setInterval(value)}
          />
        </div>
      </section>
      <section className="container m-auto py-10">
        <h3 className="text-center text-2xl">Contributor</h3>
        <div className="flex justify-center -space-x-2 overflow-hidden pt-6">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={avatar_turkyden}
            alt="Turkyden"
            title="Turkyden"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={avatar_gaoyu}
            alt="gaoyu"
            title="gaoyu"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://jdc.jd.com/img/64x64?color=F3F4F6&text=..."
            alt="comming"
            title="comming"
          />
        </div>
      </section>
      <footer className="container m-auto flex justify-center py-10">
        <p className="text-gray-600">
          Designed by{' '}
          <a
            className="text-orange-500 hover:underline"
            href="https://github.com/Gaoyu"
            target="_blank"
            rel="noreferrer"
          >
            Gaoyu
          </a>
          <span className="px-2">🧡</span>
          Developed by{' '}
          <a
            className="text-orange-500 hover:underline"
            href="https://github.com/Turkyden"
            target="_blank"
            rel="noreferrer"
          >
            Turkyden
          </a>
        </p>
      </footer>
    </>
  )
}

render(<App />, document.getElementById('root'))

export default App
