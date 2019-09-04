import React, { createContext, Component } from 'react'

export const ToggleFormContext = createContext();
   
class ToggleFormContextProvider extends Component {
    state = {
        collapse: false
    }
    toggleForm = () => {
        this.setState({ collapse: !this.state.collapse});
    }

    render() {
        return (
            <ToggleFormContext.Provider value={{...this.state, toggleForm: this.toggleForm}}>
                {this.props.children}
            </ToggleFormContext.Provider>
        )
    }
}

export default ToggleFormContextProvider

