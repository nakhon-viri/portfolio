import React, { useEffect } from 'react'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { themes, upDateTheme } from '../features/theme/themeSlice'
import Btn from '../components/button'

function Home() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(themes)

  useEffect(() => {
    if (!theme) return
    console.log('theme', theme)
  }, [theme])

  return (
    <div>
      Home!!!
      <Btn className="px-4 py-1 text-sm " onClick={() => console.log('first')}>
        CLick {theme}
      </Btn>
      <Btn
        onClick={() => dispatch(upDateTheme('3D'))}
        className="px-4 py-1 text-sm "
      >
        3D
      </Btn>
      <Btn
        onClick={() => dispatch(upDateTheme('DEFAULT'))}
        className="px-4 py-1 text-sm "
      >
        DEFAULT
      </Btn>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
