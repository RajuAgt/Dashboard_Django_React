import React, { Component } from 'react'
import Board from 'react-trello'

import './Kanban.css'
const data = require('./data.json')


class Kanban extends Component {
  state = { boardData: { lanes: [] } }

  setEventBus = (eventBus) => {
    this.setState({ eventBus })
  }

  async componentWillMount() {
    const response = await this.getBoard()
    this.setState({ boardData: response })
  }

  getBoard() {
    return new Promise((resolve) => {
      resolve(data)
    })
  }


  shouldReceiveNewData = (nextData) => {
    console.log('New card has been added')
    console.log(nextData)
  }

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`)
    console.dir(card)
  }

  render() {
    return (
      <div className="App">

        <div className="App-intro">

          <Board style={{backgroundColor: 'white', height: 'auto'}}
            data={this.state.boardData}
            cardDraggable = {false}
            hideCardDeleteIcon = {true}
          />
        </div>
      </div>
    )
  }
}

export default Kanban
