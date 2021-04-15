import { useEffect, useState } from 'react'

export default function Home() {
  const [value, setValue] = useState('')
  const [displayCount, setDisplayCount] = useState(0)
  function customValue(str: string) {
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
        <div className="m-2 text-center lg:m-10 md:m-5">
          <textarea
            name="dada"
            id=""
            placeholder={'メモ'}
            className={
              'p-2  text-md lg:text-lg xl:text-2ddddddxl border rounded-lg resize w-10/12 h-40 shadow-lg select-all'
            }
            value={value}
            onChange={(e) => customValue(e.target.value)}
            autoFocus={true}
          ></textarea>
        </div>
        <div className="text-center ">
          <button
            className={`font-nomal rounded-md p-4 bg-white ${
              displayCount == 0
                ? ' shadow-inner cursor-not-allowed'
                : ' shadow-md transform hover:scale-110 duration-300'
            }`}
            onClick={() => {
              if (displayCount != 0) {
                setValue('')
                setDisplayCount(0)
              }
            }}
          >
            リセット
          </button>
        </div>
      </div>
    </>
  )
}
