export default function Home() {
  return (
    <div className="min-h-[calc(100vh-48px)] grid place-items-center">
      <div className="max-w-xl mx-auto">
        <video width="100%" height="auto" autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
