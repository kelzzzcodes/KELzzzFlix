import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../Request'
import BannerRow from '../components/BannerRow'
import Main from '../components/Main'

const Home = () => {
  return (
    <>
      <Banner />
      <BannerRow />
      <Main />
    </>
  )
}

export default Home
