import { useState } from 'react'
import { MdOutlineTextFields } from 'react-icons/md'
const textCurrent: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={`fixed left-0 duration-75 ease-linear top-[25%]  backdrop-blur bg-white/80 rounded-r-3xl z-20 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="text-3xl font-bold not-last:border-b child:border-dashed child:p-4">
          <p className="font-DancingScript">Hello world!!!</p>
          <p className="font-Caveat">Hello world!!!</p>
          <p className="font-DMSans">Hello world!!!</p>
          <p className="font-IndieFlower">Hello world!!!</p>
          <p className="font-Pacifico">Hello world!!!</p>
          <p className="font-PatrickHand">Hello world!!!</p>
          <p className="font-Satisfy">Hello world!!!</p>
          <p className="font-ShadowsIntoLight">Hello world!!!</p>
        </div>
      </div>

      {open ? (
        <div
          onClick={() => setOpen(false)}
          className=" absolute top-0 bottom-0 right-0 left-0 z-10"
        />
      ) : (
        <>
          <div
            onClick={() => setOpen(true)}
            className=" rounded-r-full text-3xl bg-white absolute left-0 top-1/2 p-3 hover:text-amber-600 cursor-pointer"
          >
            <MdOutlineTextFields />
          </div>
        </>
      )}
    </>
  )
}

export default textCurrent
