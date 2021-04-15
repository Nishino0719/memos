import { useEffect, useState } from 'react'

export default function Home() {
  const [displayCount, setDisplayCount] = useState(0)
  function customValue(str: string) {
    let replacedString = str.replace(/\s+/g, '')
    setDisplayCount(replacedString.length)
  }
  return (
    <>
      <div className="w-screen h-screen bg-gray-100 ">
        <div className="m-2 text-center lg:m-10 md:m-5">
          <textarea
            name="dada"
            id=""
            placeholder={'メモ'}
            className={
              'p-2 text-md border rounded-lg resize w-10/12 h-40 shadow-lg'
            }
            onChange={(e) => customValue(e.target.value)}
            autoFocus={true}
          ></textarea>
          <p className={'ml-10 text-lg font-semibold'}>count: {displayCount}</p>
        </div>
      </div>
    </>
  )
}
