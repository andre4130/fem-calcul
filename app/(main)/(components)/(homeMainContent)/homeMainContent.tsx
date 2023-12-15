export default function HomeMainContent() {
  return (
    <div className="flex flex-col justify-between px-5">
      <div className={`animate-moveAndFade duration-1000  flex justify-end text-right`}>
        <h4 className="w-[50%]">
          FEM Calcul is an engineering consultancy built on decades of experience on computer-aided structural analysis
          covering a broad range of engineering challenges.
        </h4>
      </div>
      <div className={`max-w-2xl animate-moveAndFade duration-1000 `}>
        <h4>
          It is a company that offers services related with advanced nonlinear finite element analysis of civil
          engineering structures in different sectors such as, bridges, tunnels, energy, historical buildings, etc.
        </h4>
      </div>
    </div>
  );
}
