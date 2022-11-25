import React from 'react'
import styled from 'styled-components'
import Kartu from '../components/HomePage/Card'
import BadgeTag from '../components/HomePage/BadgeTag'

const Wrapper = styled.div`
  margin: 10px 125px;
`
function Home() {
  return (
    <Wrapper>
    <BadgeTag/>
    <Kartu/>
    </Wrapper>
  )
}

export default Home