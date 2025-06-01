// Testimonials.jsx
const Testimonials = () => {
  // Sample testimonials data
  const reviews = [

  ];

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-2xl font-bold text-center mb-8"></h2>
      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-3">“{rev.quote}”</p>
            <p className="text-sm font-semibold text-gray-700">- {rev.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
