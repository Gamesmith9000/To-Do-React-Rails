import React from 'react'
import Tasks from './Tasks'
import MenuBar from './MenuBar'


class App extends React.Component {
    render () {
        return (
            <div className="app">
                <Tasks />
            </div>
        )
    }
}

export default App