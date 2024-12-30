import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Stats = (props) => {
  const { good, neutral, bad } = props;

  const all = good + neutral + bad;

  let average; 
  if (all ==0) {
    average = 0
  }
  else {
    average = (good-bad)/all;
  }

  let positive;
  if (all ==0) {
    positive = 0
  }
  else {
    positive = good/all;
  }
  
  if (all == 0) {
    return (
      <div>No feedback given</div>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={`${positive.toFixed(2)}%`} />
        </tbody>
      </table>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => {setGood(good +1)}} text='Good' />
      <Button onClick={() => {setNeutral(neutral +1)}} text='Neutral' />
      <Button onClick={() => {setBad(bad +1)}} text='Bad' />
      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad}/>

    </>
  )
}

export default App