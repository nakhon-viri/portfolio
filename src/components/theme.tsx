import React, { useState } from 'react'
import { GoSettings } from 'react-icons/go'
import { Button1, Button2, Button3, Button4 } from './button'
import { useAppDispatch } from '../app/hooks'
import { upDateTheme } from '../features/theme/themeSlice'
const Theme = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={`z-20  duration-75 ease-linear w-72 fixed top-0 right-0 bottom-0  p-4    ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className=" bg-gray-50/100 w-full h-full rounded-2xl backdrop-blur-sm child:p-4">
          <div className=" border-b border-dashed ">
            <span className=" text-xl">Setting</span>
          </div>
          <div className=" first:mb-4">
            <h1>Theme</h1>
            <div className=" grid grid-cols-2 gap-4 child:m-auto">
              <div className=" scale-110">
                <Button1
                  onClick={() => dispatch(upDateTheme('DEFAULT'))}
                  className="px-4 py-1 text-sm"
                >
                  CLick
                </Button1>
              </div>
              <div>
                <Button2 className="px-4 py-1 text-sm">CLick</Button2>
              </div>
              <div>
                <Button3 className="px-4 py-1 text-sm">CLick</Button3>
              </div>
              <div>
                <Button4
                  onClick={() => dispatch(upDateTheme('3D'))}
                  className="px-4 py-1 text-sm"
                >
                  CLick
                </Button4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div
          onClick={() => setOpen(false)}
          className="z-10 absolute top-0 bottom-0 right-0 left-0 "
        />
      ) : (
        <div
          onClick={() => setOpen(true)}
          className=" bg-white rounded-l-full absolute  right-0 w-12 h-12 overflow-hidden top-1/2 bottom-1/2"
        >
          <div className="hover:text-purple-400 text-gray-600 cursor-pointer h-12 w-12 border-2 border-white  rounded-full text-2xl flex items-center justify-center">
            <GoSettings />
          </div>
        </div>
      )}
    </>
  )
}

export default Theme
