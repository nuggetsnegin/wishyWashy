/* DISPLAYWISHES.JS */
import React, { Component } from 'react'
import SubmittedWish from './SubmittedWish'
import firebase from './firebase.js'

class DisplayWishes extends Component {
  constructor () {
    super()
    this.state = {
      wishes: [] /* empty because we're loading from db */
    }
  }

  /* connecting to db */
  componentDidMount () {
    const dbRef = firebase.database().ref()

    dbRef.on('value', snapshot => {
      const dbWishes = snapshot.val()
      const displayWishes = [] /* using thsi to display shit */

      /* for in loop to grab db info and put it into an object */
      for (let key in dbWishes) {
        const wishObject = {
          wishId: key,
          wish: dbWishes[key].wish,
          support: dbWishes[key].support
        }
        displayWishes.push(wishObject)
      }

      const mostRecentWish = displayWishes
        .reverse()
        .shift() /* needed to show the users first wish on screen and not have it randomized */
      const randomWishes = this.shuffleArray(displayWishes)

      /* grabs the most recent wish and 9 random ones using destructuring so we dont return an object */
      const combinedWishes = [mostRecentWish, ...randomWishes.slice(0, 9)]

      this.setState({
        wishes: combinedWishes /* recent users wish and 9 random */
      })
    })
  }

  shuffleArray = wishesArray => {
    for (let i = wishesArray.length - 1; i > 0; i--) {
      const randomized = Math.floor(Math.random() * i + 1)
      ;[wishesArray[i], wishesArray[randomized]] = [
        wishesArray[randomized],
        wishesArray[i]
      ]
    }
    return wishesArray
  }

  render () {
    /* for assigning random x1-x10 class for bubble animations on user wishes */
    const bubbleClasses = [
      'x1',
      'x2',
      'x3',
      'x4',
      'x5',
      'x6',
      'x7',
      'x8',
      'x9',
      'x10'
    ]
    const wishes = this.state.wishes

    return (
      <div className='wishDisplay'>
        <ul>
          {/* map through object so we can render it */}
          {wishes.map((wish, i) => {
            return (
              /* passing props to submittedWish component from wishObject */
              <SubmittedWish
                animationClass={bubbleClasses[i]}
                key={i}
                wishId={wish.wishId}
                wish={wish.wish}
                support={wish.support}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default DisplayWishes
