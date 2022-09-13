// Write your code here
import {Component} from 'react'

const imageList = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
]

class CoinToss extends Component {
  state = {
    current: imageList[1],
    total: 0,
    heads: 0,
    tails: 0,
  }

  tossCoin = () => {
    const randomNo = Math.floor(Math.random() * 2)
    console.log(typeof randomNo)
    this.setState(prev => {
      const newHeads = prev.heads + randomNo
      const newTotal = prev.total + 1
      const newTails = newTotal - newHeads
      const newCurrent = imageList[randomNo]
      return {
        current: newCurrent,
        total: newTotal,
        heads: newHeads,
        tails: newTails,
      }
    })
  }

  render() {
    const {current, total, heads, tails} = this.state
    const {imageUrl} = current

    return (
      <div className="container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" />
          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div>
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
