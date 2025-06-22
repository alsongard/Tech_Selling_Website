import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
function ProductComponent(props)
{
    return (
        <div className="shadow-lg rounded-md w-[33%]">
            <Link to={`/product/${props.item.id}` }>
                <h1>{props.item.name}</h1>
                <p>{props.item.model}</p> 
                <img className="w-[80%] h-auto rounded-md" src={props.item.img} alt={props.item.name} />           
            </Link>
        </div>
    )
}
export default ProductComponent;