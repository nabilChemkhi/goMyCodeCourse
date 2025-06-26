import React from 'react'
import BookForm from './components/BookForm'

const App = () => {
  return (
    <div className="app-main-container">
      <header className="app-header">
        <span className="emoji" role="img" aria-label="books">📖</span>
        Book Manager
        <span className="emoji" role="img" aria-label="sparkles">✨</span>
      </header>
      <BookForm />
    </div>
  )
}

export default App
