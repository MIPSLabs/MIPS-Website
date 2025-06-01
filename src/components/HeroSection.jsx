// HeroSection.jsx
import demo from '../assets/demo1.jpg';
const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${demo})` }}
    >

      {/* Overlay */}
      <div class="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      
      <div className="relative flex flex-col items-center text-center py-50 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">I'M MIPPING IT</h1>
        <p className="text-lg md:text-xl mb-6">
          This robot will save you
        </p>
        <a href="#product" className="bg-sky-600 hover:bg-sky-800 text-white text-lg font-semibold py-3 px-6 rounded shadow">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
