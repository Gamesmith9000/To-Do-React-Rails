import React from 'react'
import Tasks from './Tasks'
import MenuBar from './MenuBar'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hideCompletedItems: true
        }
    }
    
    setHideCompletedItems = (event) => {
        this.setState({
            hideCompletedItems: event.target.checked
        });
    }

    render () {
        return (
            <div className="app">
                <MenuBar 
                    hideCompletedItems={this.state.hideCompletedItems}
                    setHideCompletedItems={this.setHideCompletedItems} 
                    />
                <Tasks hideCompletedItems={this.state.hideCompletedItems} />
            </div>
        )
    }
}

export default App