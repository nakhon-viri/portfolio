import React, { useEffect } from 'react'
import Nav from './nav'
import Theme from '../theme'
import Text from '../textCurrent'
import { useAppSelector } from '../../app/hooks'
import { themes } from '../../features/theme/themeSlice'

type Props = {
  children: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {
  // const theme = useAppSelector((state) => state.theme.theme)

  // useEffect(() => {
  //   let body = document.getElementsByTagName('BODY')[0]
  //   if (theme == 'DEFAULT') {
  //     console.log(`theme`, theme)
  //     // body.style.backgroundColor = '#e4ebf5'
  //   } else if (theme == '3D') {
  //     console.log(`theme`, theme)
  //     // body.style.backgroundColor = 'red'
  //   }
  // }, [theme])

  return (
    <>
      <Nav />
      {children}
      {/* {theme} */}
      <Theme />
      <Text />
    </>
  )
}

export default layout
