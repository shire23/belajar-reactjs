import React from "react";

export default function CheckBox(props) {
  const { color = "bg-black", children, size } = props;
  return (
    <div className="flex gap-2">
      <input type="checkbox" />
      <p>Lihat Nomor Saya</p>
    </div>
  );
}
