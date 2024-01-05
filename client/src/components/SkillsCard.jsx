function SkillsCard({ src, title }) {
  return (
    <div className="m-2 bg-zinc-900 flex items-center justify-center">
      <div className="block border-2 border-sky-500 hover:border-sky-600 transform hover:scale-110 duration-300 p-2 text-center size-full rounded-md">
        <header className="m-auto">
          <img className="m-auto" src={src} alt="" width={64} height={64} />
        </header>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
