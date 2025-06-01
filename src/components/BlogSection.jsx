// BlogSection.jsx
const BlogSection = () => {
  const posts = [

  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8"></h2>
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
        {posts.map(post => (
          <div key={post.title} className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a href={post.url} className="text-blue-600 font-semibold">
                Read more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
