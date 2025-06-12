export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-xl mx-auto mt-20">
        <video width="100%" height="auto" autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
