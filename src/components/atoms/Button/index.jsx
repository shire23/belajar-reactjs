import React from "react";

export default function Button(props) {
  const { color = "bg-black", children, size } = props;
  return (
    <button className={`w-full px-6 py-2 mt-8 font-semibold rounded-md ${color} ${size}  text-white`}>
      {children}
    </button>
  );
}

//   const { data, className = "" } = props;
//   return (
//     <div>
//       <button className={className}>{data}button</button>
//     </div>
//   );
// }
