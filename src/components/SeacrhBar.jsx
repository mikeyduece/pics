import React from 'react'

class SeacrhBar extends React.Component {
  onInputChange(e) {
    let input = e.target.value
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input type='text' onChange={ this.onInputChange }/>
          </div>
        </form>
      </div>
    )
  }
}

export default SeacrhBar