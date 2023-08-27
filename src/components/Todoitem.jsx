import React from "react";

export default function Todoitem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.name}</li>;
    </div>
  );
}
