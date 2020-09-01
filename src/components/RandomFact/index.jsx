import React, { Component } from 'react'

export default class index extends Component {
  state = {
    fact: "",
  }
  componentDidMount(){
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(res => res.json())
      .then(json =>{
        this.setState({
          fact: json.text
        })
      });
  }
  render() {
    return (
      <blockquote class="blockquote text-center border rounded border-info shadow">
        <p class="mb-0">{this.state.fact}</p>
        <footer class="blockquote-footer">{this.state.author}</footer>
      </blockquote>
    )
  }
}

