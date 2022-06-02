import { useAppDispatch, useAppSelector } from '../app/hooks'

import { themes } from '../features/theme/themeSlice'

// interface Btn {
//   title: string
//   className?: string
// }

export interface Btn
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}
    

export const Button1: React.FC<Btn> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`flex items-center cursor-pointer  rounded-2xl transition-all delay-100 ease-in-out  shadow-btn w-fit  hover:opacity-60 active:opacity-100 active:shadow-btnActive active:child:opacity-60  ${className}`}
    >
      <span className="font-thin ">{children}</span>
    </button>
  )
}

export const Button2: React.FC<Btn> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`flex items-center cursor-pointer border-3  border-black bg-green-500 rounded-full  w-fit hover:bg-green-500/90 active:bg-green-500 ${className}`}
    >
      <span className="font-semibold ">{children}</span>
    </button>
  )
}

export const Button3: React.FC<Btn> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`flex items-center cursor-pointer border-2 border-black  w-fit transition-all 300ms ease-linear bg-black text-white hover:bg-transparent hover:text-black hover:border-black active:bg-black active:text-white ${className}`}
    >
      <span className=" ">{children}</span>
    </button>
  )
}
export const Button4: React.FC<Btn> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`flex items-center cursor-pointer p-[3px] w-fit translate-y-[-8px] relative after:absolute after:-bottom-[6px] after:left-0 after:bg-black after:h-full after:w-full after:-z-10 after:content-[''] after:rounded `}
    >
      <span
        style={{ textShadow: '0px 1px 1px  rgb(0,0,0,0.3)' }}
        className={`font-semibold  relative text-white  bg-rose-300  shadow-btn3d shadow-rose-400 rounded active:top-[3px] active:shadow-btn3dActive active:shadow-rose-700 ${className}`}
      >
        {children}
      </span>
    </button>
  )
}

const Button: React.FC<Btn> = (props) => {
  const theme = useAppSelector(themes)

  if (theme == 'DEFAULT') return <Button1 {...props} />
  else if (theme == '3D')
    return <Button4 {...props} className="px-4 py-1 text-sm" />
  else return <></>
}

export default Button
