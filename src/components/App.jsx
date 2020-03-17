import React from 'react'
import axios from 'axios'

import SearchBar from './SeacrhBar'

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unspash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID wCO6suYv-CBZawFHgp-hZq1xr-0sLVyZAx67HimMCjo'
      }
    })
  }

  render() {
    return (
      <div className='ui container' style={ {marginTop: '10px'} }>
        <SearchBar onSubmit={ this.onSearchSubmit }/>
      </div>
    )
  }
}

export default App