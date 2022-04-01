import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { Toast } from 'react-hot-toast'
import toast from 'react-hot-toast'

type Props = {
  t: Toast
}

export const Notification = ({ t }: Props) => {
  return (
    <>
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } flex items-end w-full px-4 pointer-events-none`}
      >
        <div className="flex flex-col items-center w-full sm:items-end">
          <div className="flex-1 w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircleIcon
                    className="w-6 h-6 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">
                    コピーされました！
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    アプリは閉じてもテキストエリアの内容はLocal
                    Storageに保存されます。
                  </p>
                </div>
                <div className="flex flex-shrink-0 ml-4">
                  <button
                    className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
