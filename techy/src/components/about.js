function About()
{
    return (
        <div>
            <div className="bg-gray-100 min-h-screen py-12 px-6">
      <section className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600">About TechGear</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          At TechGear, we are passionate about providing high-performance laptops for all your needs. 
          Whether you are a professional, gamer, or student, we offer top-quality products that blend power, style, and reliability.
        </p>
      </section>
      
      {/* Our Mission */}
      <section className="container mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Our mission is to deliver cutting-edge laptops that empower individuals and businesses to achieve their goals. 
          We prioritize innovation, customer satisfaction, and affordability, ensuring that every user gets the best computing experience.
        </p>
      </section>
      
      {/* Why Choose Us */}
      <section className="container mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose TechGear?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 shadow-lg rounded-lg bg-white text-center">
            <h3 className="text-xl font-bold">Top-Quality Products</h3>
            <p className="text-gray-600">We offer only the best laptops from top brands, ensuring performance and durability.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white text-center">
            <h3 className="text-xl font-bold">Affordable Pricing</h3>
            <p className="text-gray-600">We provide competitive prices and great deals to make technology accessible to everyone.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white text-center">
            <h3 className="text-xl font-bold">Customer Satisfaction</h3>
            <p className="text-gray-600">Our dedicated support team ensures a seamless shopping experience from start to finish.</p>
          </div>
        </div>
      </section>
      </div>
        </div>
    )
}
export default About;