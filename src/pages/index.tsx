import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="w-screen h-screen bg-gray-100 ">
        <div className="m-2 text-center lg:m-10 md:m-5">
          <textarea
            name="dada"
            id=""
            placeholder={'メモ'}
            className={'p-2 text-md border rounded-lg resize w-10/12 h-40'}
            onChange={(e) => setCount(e.target.value.length)}
            autoFocus={true}
          ></textarea>
          <p className={'ml-10 text-lg font-semibold'}>count: {count}</p>
        </div>
      </div>
    </>
  )
}
