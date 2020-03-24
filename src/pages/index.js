import React from 'react'
import {
  About,
  Services,
  Products,
  Clients,
  Location,
} from '../components/landing/index.js'
import { Layout, SEO } from '../components/common/index.js'

export default () => (
  <Layout>
    <SEO />
    <About />
    <Services />
    <Products />
    <Clients />
    <Location />
  </Layout>
)
