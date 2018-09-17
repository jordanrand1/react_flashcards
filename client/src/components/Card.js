import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Card = ({ id, complete, front, back, updateCard, deleteCard }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ complete ? styles.complete : {} } className="center">
        {front},{back}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateCard(id)}
      />
      <label htmlFor={`item-${id}`}>Complete?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteCard(id)}>
      X
    </div>
  </div>
)

export default Card;