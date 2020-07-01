import React from 'react'
import Tasks from './Tasks'

class App extends React.Component {
    render () {
        return (
            <div className="app">
                App component
                <Tasks />
            </div>
        )
    }
}

export default App