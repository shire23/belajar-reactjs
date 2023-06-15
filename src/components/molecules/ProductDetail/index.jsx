import logoOne from "../../../../public/images/bg2.jpg";

export default function ProductDetail() {
  return (
    <div className="grid p-10 grid-cols-2 gap-3">
      <div>
        <img src={logoOne} alt="Img" />
        <div className="grid grid-cols-12 mt-2 gap-2">
          <button className="bg-green-500 w-10 h-10">+</button>
          <div className="relative h-32 w-32 ...">
            <div className="absolute h-14 w-14 left-4 top-2 ...">2</div>
          </div>
          <button className="bg-green-500 w-10 h-10">-</button>
        </div>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit blanditiis placeat architecto dolor
        soluta ea veritatis, ab nobis voluptates voluptate? Veniam debitis rerum dicta ut saepe recusandae et temporibus
        obcaecati. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quis molestias, necessitatibus sed,
        iure consequatur non ut maxime labore, accusamus minima suscipit magnam debitis quasi id! Totam laborum vero
        suscipit sint magnam reprehenderit culpa tempora veritatis minus nihil excepturi ratione esse pariatur veniam
        perferendis quod, ipsum corrupti sed molestias eveniet. lorem1000
      </div>
    </div>
  );
}
