import ComponentProps from "./belajar/componenProps";

function App() {
  return (
    // <> simbol fragment sebagai parent dari suatu komponen
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* cara menambahkan style yang tidak ada di tailwind menggunakan arbitari atau kurung siku seperti contoh textColor dibawah ini */}
        <ComponentProps textColor="text[#111827]" text="hello guys" />
        {/* cara menambahkan style */}
        {/* <ComponentProps textColor="text[#111827]" text="hello guys" /> */}
      </div>
    </>
  );
}

export default App;
