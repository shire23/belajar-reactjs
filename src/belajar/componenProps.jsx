// nested component= component didalam component
// cara ke-1 menggunakan function biasa

function Button() {
  return <button className="h-10 px-6 font-semibold rounded-md bg-blue-500  text-white">button</button>;
}

// cara ke-2 menggunakan annon function
// props = argumen/parameter yang bisa dikirim ke komponen lainnya
// fungsinya agar kita bisa mengkustominasi/mengubah komponen" yang kita buat

// dibawah ini cara menggunakan props
const Button2 = (props) => {
  // {text = "..." } untuk ngasih nilai default
  const { text = "..." } = props;
  return <button className={`h-10 px-6 font-semibold rounded-md ${props.color}  text-white`}>{text}</button>;
};

const Button3 = (props) => {
  const { color = "bg-black", children } = props;
  return <button className={`h-10 px-6 font-semibold rounded-md ${color}  text-black`}>{children}</button>;
};

const ComponentProps = (props) => {
  const { textColor, text } = props;
  return (
    <>
      <div className="flex justify-center items-center ">
        <h1 className={`text-5xl font-bold text-center ${textColor}`}>{text}</h1>
      </div>
      <div className="flex justify-center items-center mt-8 gap-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">button</button>
        <button className="h-10 px-6 font-semibold rounded-md bg-gray-300  text-black">button</button>
        {/* cara memanggil props menggunakan text */}
        <Button></Button>
        <Button2 color="bg-pink-500" text="button"></Button2>
        <Button2 color="bg-blue-500" text="login"></Button2>
        {/* dibawah ini cara memanggil props yang dikirim dari komponen */}
        {/* button children */}
        <Button3 color="bg-yellow-500">
          Logout <span>Guys</span>
        </Button3>
      </div>
    </>
  );
};

export default ComponentProps;
