import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
import { Notification } from '../component/Notification'

export default function Home() {
  const [value, setValue] = useState<string>('')
  const [displayCount, setDisplayCount] = useState<number>(0)
  const [canReset, setCanReset] = useState<boolean>(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
  }

  function customValue(str: string) {
    setCanReset(true)
    setValue(str)
    let replacedString = str.replace(/\s+/g, '')
    setDisplayCount(replacedString.length)
  }
  return (
    <>
      <div className="w-screen h-screen bg-gray-100 ">
        <p className={'text-2xl font-semibold text-center mt-10 '}>
          現在の文字数: {displayCount}文字
        </p>
        <div className="pt-4 text-center lg:m-10 md:m-5">
          <textarea
            name="dada"
            id=""
            placeholder={'メモ'}
            className={
              'p-5 text-md lg:text-lg border rounded-lg resize w-10/12 h-96 lg:h-textarea shadow-lg select-all'
            }
            value={value}
            onChange={(e) => customValue(e.target.value)}
            autoFocus={true}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 text-center md:grid-cols-2 ">
          <button
            className={`font-nomal mx-20 my-5 rounded-md p-4 bg-white ${
              displayCount == 0
                ? ' shadow-inner cursor-not-allowed'
                : ' shadow-md transform hover:scale-110 duration-300'
            }`}
            onClick={() => {
              if (displayCount != 0) {
                setValue('')
                setDisplayCount(0)
                setCanReset(false)
              }
            }}
            disabled={canReset}
          >
            RESET
          </button>
          <CopyToClipboard
            onCopy={() => {
              toast.custom((toast) => <Notification t={toast} />)
            }}
            text={value}
          >
            <button
              className={`font-nomal mx-20 my-5 rounded-md p-4 bg-white ${
                displayCount == 0
                  ? ' shadow-inner cursor-not-allowed'
                  : ' shadow-md transform hover:scale-110 duration-300'
              }`}
              disabled={!canReset}
            >
              COPY
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  )
}
