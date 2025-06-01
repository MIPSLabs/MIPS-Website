// HowToPlaySection.jsx
const HowToPlaySection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">easy fun</h2>
      <p className="text-lg text-gray-700 mb-6">Simple to set up and play anywhere.</p>
      <a 
        href="/how-to-play" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
      >
        Learn How to Play
      </a>
    </section>
  );
};

export default HowToPlaySection;
