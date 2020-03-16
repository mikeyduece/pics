import React from 'react'

class SeacrhBar extends React.Component {
  state = {term: ''}

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input type='text'
                   onChange={ e => this.setState({term: e.target.value}) }
                   value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SeacrhBar