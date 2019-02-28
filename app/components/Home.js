import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className='home-container' style={{backgroundImage: "url('app/utils/bg.svg')"}}>
        <h1 className='header'>Enter a City and State</h1>
        <form className='form-container'>
          <input className='form-input'
            id='city'
            placeholder='Irvine, CA'
            type='text'
            
            autoComplete='off'
          />
          <button
            className='btn'
            type='submit'
            style={{margin: 10}}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Home;