
function Presentation({ data }) {
  const { name, email, ocupation } = data;

  return (
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
      <div className=""> 
        <h1 className=" text-5xl  uppercase font-bold">{name}</h1>
        <p className="text-2xl">{ocupation}</p>
      </div>
    </div>
  );
}

export default Presentation;
