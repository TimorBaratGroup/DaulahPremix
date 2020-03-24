import React from 'react'
import { Wrapper, Details } from './styles'

export const Footer = () => (
  <Wrapper>
    <Details>
      Copyright © {new Date().getFullYear()} Timor Barat Batu Sdn Bhd. All
      rights reserved.
    </Details>
  </Wrapper>
)
