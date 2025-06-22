import { laptops } from "./lappy";
import { useParams } from "react-router-dom";
// import 'intasend-inlinejs-sdk';
function ProductsInformation()
{
    const { id } = useParams();

    const laptop = laptops.find((laptop) => laptop.id === parseInt(id));
    if(!laptop)
    {
        return <h1>Product not found</h1>
    }
    const {processor, ram, storage, display} = laptop.specs;

    new window.IntaSend({
        publicAPIKey: "ISPubKey_test_bd5803d9-755f-4df7-96a2-41343a52d85c",
        live: false
    })
        .on("COMPLETE", (response) => {console.log("COMPLETE: ", response)})
        .on("FAILED", (response) => {console.log("FAILED: ", response)})
        .on("IN-PROGRESS", () => {console.log("IN-PROGRESS...")})
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-bold text-gray-800 text-center">{laptop.name}</h1>
                <h2 className="text-lg text-gray-600 text-center mb-4">Model: {laptop.model}</h2>
                <ul className="text-gray-700 space-y-2">
                    <li><strong>Processor:</strong> {processor}</li>
                    <li><strong>RAM:</strong> {ram}</li>
                    <li><strong>Storage:</strong> {storage}</li>
                    <li><strong>Display:</strong> {display}</li>
                </ul>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300" data-amount="28" data-currency="KES">
                    Buy Product
                </button>
            </div>
        </div>
    );
}
export default ProductsInformation;