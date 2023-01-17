import React from 'react';

const Contact = (props) => {
  return (
    <div>
      <div className="friend-item">
        <h3 className="item">{props.name}</h3>
        <h4 className="item">{props.email}</h4>
        <h4 className="item">{props.phone}</h4>
      </div>
      {props.isDeletable ? (
        <button className="friend-button ">Delete</button>
      ) : null}
    </div>
  );
};

export default Contact;
