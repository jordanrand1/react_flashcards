import React from 'react';

class CardForm extends React.Component {
  state = { front: '', back: '' }

  handleFrontChange = (e) => {
    this.setState({ front: e.target.value });
  }

  handleBackChange = (e) => {
    this.setState({ back: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.front, this.state.back);
    this.setState({ front: '', back: '' })
    e.target.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Front Side"
          required
          front={this.state.front}
          onChange={this.handleFrontChange}
        />
        <input
          placeholder="Back Side"
          required
          back={this.state.back}
          onChange={this.handleBackChange}
        />
        <button type="submit"/>
      </form>
    )
  }
}

export default CardForm;