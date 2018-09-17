import React from 'react';

class CardForm extends React.Component {
  state = { front: '', back: '' }

  handleChange = (e) => {
    debugger
    //this.setState({ e.target.props.name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.front, this.state.back);
    this.setState({ front: '', back: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Front Side"
          required
          name={this.state.front}
          onChange={this.handleChange}
        />
        <input
          placeholder="Back Side"
          required
          back={this.state.back}
          onChange={this.handleChange}
        />
        <button type="submit"/>
      </form>
    )
  }
}

export default CardForm;