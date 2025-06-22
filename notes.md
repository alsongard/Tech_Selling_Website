after confirming that the user has logged in we can send the user to another page using 
``useNavigate()``

```javascript
import { useNavigate } from "react-router-dom";

function Login()
{
    const navigate = useNavigate()'
    const res = axios.post("https://localhost:5001/login");
    // the ``https://localhost:5001/login`` is post url|route that is set at the server|server.js file

    //perform login
    try 
    {

        console.log(res);
        const token = res.data.token;
        const exactToken =token.split(" ")[1];
        console.log(exactToken); //confirm ifit's the token
        localStorage.setItem("token", exactToken);
        navigate("/products");
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
    }
}

```



2. Setting up an authorization header : server side
We setup the authorization header in the front-end:
create folder: utils
within the folder create file setAuthHeader.js
```javascript
import axios from "axios"
export default function setAuthHeader(token)
{
    if (token)
    {
        axios.defaults.headers.common["authorization"] = `Bearer ${token}`; // setting up request header == authorization|Authorization is not case sensitive
        //HTTP headers are case-insensitive, so whether you use 'authorization' or 'Authorization' doesn't matter.
        console.log("Authorization header setup")
    }
    else
    {
        console.log("No token was supplied")
    }
}
```


3. setting up Reducer

4. setting up NavLinks depending on login state

5. setting up Protected Routes