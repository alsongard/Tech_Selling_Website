function Footer()
{
    return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
            <p className="text-lg font-semibold">TechGear - Your Ultimate Laptop Destination</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} TechGear. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
            </div>
        </div>
    </footer>
    );
}
export default Footer;