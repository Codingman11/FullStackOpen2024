import { useState, useEffect } from 'react'

const Button = (props) => {

  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Title = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}


const App = () => {
  const [selected, setSelected] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))


  const getRandomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
    
  }

  const addValue = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    //const indexOfLargestValue = copy.reduce((maxIndex, currentValue, currentIndex, array) => currentValue > array[maxIndex] ? currentIndex : maxIndex, 0);
    //setMaxIndex(indexOfLargestValue)
    findMaxIndex(copy)
  }
  const findMaxIndex = (pointsArray) => {
    let maxIndex = 0
    let maxValue = pointsArray[0]
    for (let i = 1; i < pointsArray.length; i++) {
      if (pointsArray[i] > maxValue) {
        maxValue = pointsArray[i]
        maxIndex = i
      }
    }
    setMaxIndex(maxIndex)
  }



  return (
    <>
      <Title text={"Anecdote of the day"} />
      <div>{anecdotes[selected]} </div>
      <div>has {points[selected]} votes</div>

      <Button onClick={addValue} text="vote" />
      <Button onClick={getRandomAnecdote} text="next anacdote" />
      <div>
        <Title text={"Anecdote with most votes"} />
      </div>
      <div> {anecdotes[maxIndex]} </div>
      <div>has {points[maxIndex]} </div>
      


    </>
  )
}

export default App