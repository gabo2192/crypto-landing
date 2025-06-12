export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <video width="100%" height="auto" autoPlay muted loop playsInline>
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
