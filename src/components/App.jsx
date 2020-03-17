import React from 'react'
import axios from 'axios'

import SearchBar from './SeacrhBar'

class App extends React.Component {
  async onSearchSubmit(term) {
    const resposne = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${ process.env.REACT_APP_UNSPLASH_CLIENT_KEY }`
      }
    })

    console.log(resposne.data.results)
  }

  render() {
    return (
      <div className='ui container' style={ { marginTop: '10px' } }>
        <SearchBar onSubmit={ this.onSearchSubmit }/>
      </div>
    )
  }
}

export default App