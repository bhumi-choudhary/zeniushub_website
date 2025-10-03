import React from 'react'
import Button from '@mui/material/Button'
const App = () => {
  return (
    <div>
      <Button style={{ color: 'black', backgroundColor: 'pink', margin: 10 }} variant="contained">Hello world</Button>
      <div className='text-red-500 m-6'>talwind downloaded successfully</div>
    </div>
  )
}

export default App