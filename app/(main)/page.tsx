import SectionsShortcut from './(components)/(sectionsShortcut)/sectionsShortcut';

export default function Home() {
  return (
    <>
      <main
        className="flex min-h-[calc(100vh-72px)] pt-[72px] bg-[url('../public/images/bridge.jpg')] opacity-70
      bg-cover bg-center bg-fixed flex-col items-center justify-between p-4"
      >
        <div className="opacity-100 max-w-lg">
          all the information here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit
          magni nemo maxime placeat adipisci, cumque, blanditiis perferendis rem quisquam eveniet eos dolores architecto
          mollitia esse fugit maiores tenetur rerum!
        </div>
      </main>
      <section>
        <SectionsShortcut />
      </section>
    </>
  );
}
