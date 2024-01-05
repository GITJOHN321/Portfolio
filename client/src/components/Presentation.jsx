
function Presentation({ data }) {
  const { name, email, ocupation } = data;

  return (
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center" id="presentation-image">
      <div className="p-5 nav"> 
        <h1 className="text-4xl md:text-6xl lg:text-7xl  uppercase font-bold drop-shadow-2xl transition-all duration-300 ">{name}</h1>
        <p className="text-2xl md:text-4xl drop-shadow-2xl">{ocupation}</p>
      </div>
    </div>
  );
}

export default Presentation;
