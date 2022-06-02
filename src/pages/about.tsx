import React from 'react'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import Btn from '../components/button'

function About() {
  return <div>About!!!</div>
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
