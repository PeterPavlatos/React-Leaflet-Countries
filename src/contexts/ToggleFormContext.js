import React, { createContext, Component } from 'react'

export const ToggleFormContext = createContext();
   
class ToggleFormContextProvider extends Component {
    state = {
        collapse: false,
        tooltip: false,
        tooltipGeo: false
    }
    toggleForm = () => {
        this.setState({ collapse: !this.state.collapse});
    }
    toggleTooltip = () => {
        this.setState({ tooltip: !this.state.tooltip});
    }
    toggleTooltipGeo = () => {
        this.setState({ tooltipGeo: !this.state.tooltipGeo});
    }
    render() {
        return (
            <ToggleFormContext.Provider 
                value={{...this.state, 
                        toggleForm: this.toggleForm, 
                        toggleTooltip: this.toggleTooltip,
                        toggleTooltipGeo: this.toggleTooltipGeo
                    }}>
                {this.props.children}
            </ToggleFormContext.Provider>
        )
    }
}

export default ToggleFormContextProvider

