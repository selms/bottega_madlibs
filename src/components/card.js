import React, { Component } from 'react';

import Input from './input';
import content from './content';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: '', 
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '', 
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebTwo: '', 
            celebThree: '',
            adjectiveFour: '', 
            nounThree: '', 
            celebFour: '',
            adjectiveFive: '',
            contentVisible: false 
        }

            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleFormChange = this.handleFormSubmit.bind(this);
    } 

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleFormSubmit(event) {
        event.preventDefault()
        this.setState({ contentVisible: !this.state.contentvisible })
    }
    
        render() {

        const inputData = [

            {title: 'color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.color, name: 'pluralNoun'},
            {title: 'Adjective', state: this.state.color, name: 'adjectiveOne'},
            {title: 'Celebrity', state: this.state.color, name: 'celebOne'},

            {title: 'Adjective', state: this.state.AdjectiveTwo, name: 'AdjectiveTwo'},
            {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Number', state: this.state.numberOne, name: 'numberOne'},
            {title: 'Number', state: this.state.numberTwo, name: 'numberTwo'},

            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
            {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},
            {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},

            {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Celebrity', state: this.state.celebFour, name: 'celebFour'},
            {title: 'Adjevtive', state: this.state.adjectiveFive, name: 'adjectiveFive'},
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
            {
                inputData.map(data => Input( (data), this.handleInputChange ))
            }
            </div>
                <button type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;