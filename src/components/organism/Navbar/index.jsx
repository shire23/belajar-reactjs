import logo from "../../../../public/images/axis_logo.png";
export default function Navbar() {
  return (
    <div>
      <div className="container">
        <ul className="flex gap-5 pt-7 px-8 space-x-4">
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Promo">Promo</a>
          </li>
          <li>
            <a href="Produk">Produk</a>
          </li>
          <li>
            <a href="#AxisNetApp">AxisNetApp</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Bantuan">Bantuan</a>
          </li>
        </ul>
        <div className="flex justify-end  mt-[-20px] me-5">
          <div>
            <button className="bg-white text-black border[3px]  text-violet-900   ">
              <p className="">Beli Kartu Perdana</p>
            </button>
          </div>
          <div className="mt-[-10px]">
            <img className="w-[100px] h-12" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className=" mt-5 border-[1px] border-black"></div>
    </div>
  );
}
