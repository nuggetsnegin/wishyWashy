/* CREATEWISH.JS COMPONENT */
/* Create a single 'wish' and loading it to the database. Rendering the text input field. */
import React, { Component } from 'react'
import firebase from '../firebase.js'

const filter = require('leo-profanity') /* for filtering bad words */

class CreateWish extends Component {
  constructor () {
    super()
    this.state = {
      wishInput: '',
      support: 0,
      characterRemaining: 120
    }
  }

  handleInput = event => {
    this.setState({
      wishInput: event.target.value
    })
  }

  checkBadWords = () => {
    const wishInput = this.state.wishInput
    let cleanedUp = filter.clean(wishInput, '💢')

    return cleanedUp
  }

  validateInput = wishInput => {
    const trimmedWishInput = wishInput.trim() /* avoid white space ~ user inputting empty wish */
    /* check if input not empty and *check if wish under char length */
    if (trimmedWishInput !== '' && wishInput.length > 0) {
      return trimmedWishInput
    } else {
      /* disable button */
      console.log('failed to validate input')
      alert('facka you')
    }
  }

  handleSubmit = event => {
    /* stop refresh on button click */
    event.preventDefault()

    /* grabbing the current state of wish and calling checkBadwords and setting it to a new variable called wishToBeAdded also setting current state of support to support to push to db */

    this.validateInput(this.state.wishInput)
    const cleanedText = this.checkBadWords()

    /* support is always 0 on creation so maybe not necessary */
    const support = this.state.support

    const dbRef = firebase.database().ref() /* db reference */
    dbRef.push({
      wish: cleanedText,
      support: support
    })
    this.setState({
      wishInput: '' /* making input field empty on submit */
    })
  }

  render () {
    return (
      <div className='input'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='wishInput' />

          <textarea
            rows='6'
            maxLength={120}
            type='text'
            value={this.state.wishInput}
            onChange={this.handleInput}
            placeholder='I wish I could own 3 cats someday!'
          />
          <div className='buttonWrapper'>
            <p>Wish Words Remaining: {this.state.wishInput.length}/120</p>

            <button
              className='wishButton'
              type='submit'
              disabled={!this.state.wishInput}
            >
              Submit Wish
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateWish
