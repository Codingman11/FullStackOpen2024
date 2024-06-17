import { useState } from 'react'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
    return (
       <div>
        <Part part={props.parts[0].name} exercise = {props.parts[0].exercise}/>
        <Part part={props.parts[1].name} exercise = {props.parts[1].exercise}/>
        <Part part={props.parts[2].name} exercise = {props.parts[2].exercise}/>
      </div>
    )
}

const Total = (props) => {
    const total = props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise;
    return (
        <p>Number of exercise {total} </p>
    )
}



function App() {
  const course = 'Half Stack application development'
  
  const parts = [{
    name: 'Fundementals of React',
    exercise: 10
  },
  {
    name: 'Using props to pass data',
    exercise: 7
  },
  {
    name: 'State of a component',
    exercise: 14
  }
  
]

  

  return (
    <>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App
