import React, {useState, useEffect} from 'react'

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState('');
   
  useEffect(() => {
    generateEmoji(entries)
  }, [])

const generateEmoji = entries => {
  fetch(`https://cuw6sgc7p0.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
  .then(response => response.json())
  .then(data => setEmoji(data.input))
  .catch(console.log)
}

  return (
    <div className='ma4 mt0'>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
        <div className='white f1'>{entries}</div>
      <div className='white f3'>
        {`Rank Badge: ${emoji}`}
        </div>
    </div>
  )
}

export default Rank
