import React from "react";

export default function Label(props) {
  const { htmlFor, children } = props;
  return (
    <label htlmFor={htmlFor} className="block text-sm font-medium text-violet-700">
      {children}
    </label>
  );
}
