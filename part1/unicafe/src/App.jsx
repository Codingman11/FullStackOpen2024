import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Statistic = ({ values, stats }) => {


  const total = values.reduce((acc, cur) => acc + cur.amount, 0);
  const average = total === 0
    ? 0
    : values.reduce((acc, cur) => acc + cur.amount * cur.value, 0) / total;
  const positive = total === 0
    ? 0
    : (values[0].amount * values[0].value) / total * 100;

  stats[0].total = total;
  stats[1].average = average;
  stats[2].positive = positive;
  return (
    <div>
      <Title text="statistic" />
      {stats[0].total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <table>
            <tbody>
              <StatisticLine text="good" value={values[0].amount} />
              <StatisticLine text="neutral" value={values[1].amount} />
              <StatisticLine text="bad" value={values[2].amount} />
              <StatisticLine text="all" value={stats[0].total} />
              <StatisticLine text="average" value={stats[1].average} />
              <StatisticLine text="positive" value={`${stats[2].positive} %`} />
            </tbody>
          </table>
        </div>)}
    </div>
  )
}





const StatisticLine = ({ text, value }) => (
  <tr> 
    <td>{text}</td> 
    <td>{value} </td> 
  </tr>
)
const Title = props => <h1>{props.text}</h1>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)


  let values = [{ text: "good", amount: good, value: 1 }, { text: "neutral", amount: neutral, value: 0 }, { text: "bad", amount: bad, value: -1 }]
  let stats = [{ text: 'all', total: 0 }, { text: 'average', average: 0 }, { text: 'positive', positive: 0, perc: '%' }]
  // for (let i = 0; i < stats.length; i++) {
  //     console.log(stats[i].text, stats[i].amount, stats[i].value)
  // }
  return (
    <>
      <div>
        <Title text={'give feedback'} />
        <div>
          <Button onClick={() => setGood(good + 1)} text='good' />
          <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
          <Button onClick={() => setBad(bad + 1)} text='bad' />
          <Statistic values={values} stats={stats} />
        </div>
      </div>
    </>
  )
}

export default App
