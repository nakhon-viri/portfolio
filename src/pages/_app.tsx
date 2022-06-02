import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { Children, ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from '../app/store'
import { useEffect } from 'react'
import { useAppSelector } from '../app/hooks'
import { themes } from '../features/theme/themeSlice'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

type Props = {
  children: React.ReactNode
}

const ThemeSetting: React.FC<Props> = ({ children }) => {
  const theme = useAppSelector(themes)
  useEffect(() => {
    let body = document.getElementsByTagName('BODY')[0] as HTMLBodyElement
    if (theme == 'DEFAULT') body.style.backgroundColor = '#e4ebf5'
    else if (theme == '3D') body.style.backgroundColor = 'red'
  }, [theme])
  return <div>{children}</div>
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      <ThemeSetting>{getLayout(<Component {...pageProps} />)}</ThemeSetting>
    </Provider>
  )
}
