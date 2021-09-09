import React from 'react'
import { Helmet } from 'react-helmet'

const App = () => {
  const test = 'example_string'

  return (
    <div>
      <Helmet>
        <meta property='og:tittle' content={`Test Title ${test}`} />
      </Helmet>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
