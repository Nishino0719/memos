import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
import { Notification } from '../component/Notification'
import useHotkey from '../hooks/useHotkey'

export default function Home() {
  const [value, setValue] = useState<string>('')
  const { key, setKey } = useHotkey()
  if (key === 'c') {
    document.getElementById('copy').click()
    setKey('')
  }
  if (key === 'r') {
    if (value.length != 0) {
      setValue('')
    }
    setKey('')
  }
  return (
    <>
      <div className="w-screen h-screen bg-gray-200 bg-graph-black bg-size-40 ">
        <div className="">
          <p className={'text-4xl font-semibold text-center mt-10 '}>
            現在の文字数: {value.replace(/\s+/g, '').length}文字
          </p>
          <div className="flex justify-center gap-10 mt-4">
            <div className="">
              <kbd className=" kbd">c</kbd>
              でコピー
            </div>
            <div className="">
              <kbd className=" kbd">r</kbd>
              でリセット
            </div>
          </div>
        </div>
        <div className="pt-4 text-center lg:m-10 md:m-5">
          <textarea
            name="dada"
            id=""
            placeholder={'メモ'}
            className={
              'p-5 text-md lg:text-lg border rounded-lg resize-none w-10/12 h-96 lg:h-textarea shadow-lg select-all'
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus={true}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 text-center md:grid-cols-2 ">
          <button id="reset" className="hidden">
            reset
          </button>
          <CopyToClipboard
            onCopy={() => {
              toast.custom((toast) => <Notification value={value} t={toast} />)
            }}
            text={value}
          >
            <button id="copy" className="hidden">
              copy
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  )
}
