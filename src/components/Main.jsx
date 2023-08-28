import React from 'react'
import MainRow from './MainRow'
import requests from '../Request'
const Main = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16">
      <MainRow RowID={1} cardID='toprated' title="Top Rated" fetchURL={requests.requestTopRated} />
      <MainRow RowID={2} cardID='popular' title="Popular" fetchURL={requests.requestPopular} />
      <MainRow RowID={3} cardID='upcoming' title="Up Coming" fetchURL={requests.requestUpcoming}/>
      <MainRow RowID={4} cardID='horror' title="Horror" fetchURL={requests.requestHorror} />
      <MainRow RowID={5} cardID='trending' title="Trending" fetchURL={requests.requestTrending} />
    </div>
  )
}

export default Main
