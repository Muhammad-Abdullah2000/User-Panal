// DropdownPage.js
import React, { Component } from 'react';
import './Dropdown.css';


export default class DropdownPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownVisible: false
        }
    }

    toggleDropdown = (e) => {
        this.setState(prevState => ({ dropdownVisible: !prevState.dropdownVisible }))
    }

    renderDropdownMenu() {
        return (
            <div className='dropdown-body'>
                <div>
                    <span>All Categories</span>
                </div>
                <div>
                    <span>Air Conditioner</span>
                </div>
                <div>
                    <span>Home Appliances</span>
                </div>
                <div>
                    <span>Others</span>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='dropdown-container'>
                <div className='dropdown-trigger'>
                    <button onClick={this.toggleDropdown}>
                        Select Category
                    </button>
                </div>
                {
                    this.state.dropdownVisible &&
                    this.renderDropdownMenu()
                }
            </div>
        )
    }
}