import React from 'react'
import MainButton from './MainButton'
import MainRow from './MainRow'
import requests from '../Request'
const Main = () => {
  return (
    <div className="p-16">
      <MainButton />

      <MainRow RowID={1} title="TopRated" fetchURL={requests.requestTopRated} />
      <MainRow RowID={2} title="Popular" fetchURL={requests.requestPopular} />
    </div>
  )
}

export default Main
