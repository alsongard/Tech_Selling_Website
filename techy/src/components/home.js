function Home()
{
    return (
        <div>
            {/* Featured Laptops */}
            <img src="https://wallpaper.dog/large/10855443.jpg" alt="laptop" />
            <section className="container mx-auto py-12 px-6">
                    <h2 className="text-3xl font-semibold text-center mb-8">Featured Laptops</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold">MacBook Pro</h3>
                        <p className="text-gray-600">Apple M2 Chip, 16GB RAM, 512GB SSD</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Details</button>
                    </div>
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold">Dell XPS 13</h3>
                        <p className="text-gray-600">Intel Core i7, 8GB RAM, 256GB SSD</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Details</button>
                    </div>
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold">Asus ROG Zephyrus G14</h3>
                        <p className="text-gray-600">AMD Ryzen 9, 32GB RAM, 1TB SSD</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Details</button>
                    </div>
                    </div>
                </section>
                {/* Services Section */}
                <section className="container mx-auto py-12 px-6 bg-white">
                    <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">Laptop Customization</h3>
                        <p className="text-gray-600">Customize your laptop to fit your needs with upgraded RAM, storage, and more.</p>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">Repair & Maintenance</h3>
                        <p className="text-gray-600">Expert repair services to keep your laptop running at its best.</p>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">Customer Support</h3>
                        <p className="text-gray-600">24/7 customer support to assist with any queries or technical issues.</p>
                    </div>
                    </div>
                </section>
        </div>
    )
}
export default Home;