import React from "react";

export default function CheckBox(props) {
  const { color = "bg-black", children, size } = props;
  return (
    <div className="">
      <p>Remember me?</p>

      <input type="checkbox"></input>
    </div>
  );
}
