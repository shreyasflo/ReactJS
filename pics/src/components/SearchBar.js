import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        term: '',
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            onChange={(e) => this.setState({
                                term: e.target.value
                            })}
                            type="text"
                            value={this.state.term} />
                    </div>
                </form>
            </div >
        )
    }
}
