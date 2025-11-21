export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-9xl font-bold text-cosmic-accent">404</h1>
        <p className="text-2xl text-gray-300 mt-4">The knowledge you seek is lost in the cosmos.</p>
        <a href="/" className="mt-8 inline-block px-6 py-3 bg-cosmic-accent text-black rounded-xl font-bold">
          Return to the Vault
        </a>
      </div>
    </div>
  );
}
