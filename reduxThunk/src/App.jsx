import React from 'react'
import store from './components/Store'
import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
  )
}

export default App