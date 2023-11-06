import { useState } from 'react'


const Button = ({onClick, text}) => 
  <button onClick={onClick}>{text}</button>

  const StatisticsLine = ({text, value}) => {
    return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }

const Statistics = (props) => {
  if (props.all === 0){
    return (<p>no feedback given</p>)
  }
  return (
  <table>
    <tbody>
      <StatisticsLine text='good: ' value={props.good}></StatisticsLine>
      <StatisticsLine text='neutral: ' value={props.neutral}></StatisticsLine>
      <StatisticsLine text='bad: ' value={props.bad}></StatisticsLine>
      <StatisticsLine text='all: ' value={props.all}></StatisticsLine>
      <StatisticsLine text='average:' value={props.average}></StatisticsLine>
      <StatisticsLine text='positive:' value={props.positive}></StatisticsLine>
    </tbody>
  </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)

  const addGood = () => {
    const newGood = good+1
    setGood(newGood)
    setTotal(neutral + newGood + bad)
  }

  const addBad = () => {
    const newBad = bad+1
    setBad(newBad)
    setTotal(neutral + good + newBad)
  }
  
  const addNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setTotal(newNeutral + good + bad)
  }

  const average = () => (good + bad + neutral)/3

  const positivePercent = () => (good/total) * 100
    

  return (
  <>

  <h1>
    Give feedback
  </h1>

    <Button onClick={addGood} text='good'></Button>
    <Button onClick={addNeutral} text='neutral'></Button>
    <Button onClick={addBad} text='bad'></Button>

    <h1>
      statistics
    </h1>

    <Statistics good={good} bad={bad} neutral={neutral} all={total} average={average()} positive={positivePercent()}>
    </Statistics>
  </>
  )
}

export default App
