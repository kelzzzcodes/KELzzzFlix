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
      <MainRow RowID={3} title="UpComing" fetchURL={requests.requestUpcoming}/>
      <MainRow RowID={4} title="Horror" fetchURL={requests.requestHorror} />
      <MainRow RowID={5} title="Trending" fetchURL={requests.requestTrending} />
    </div>
  )
}

export default Main
