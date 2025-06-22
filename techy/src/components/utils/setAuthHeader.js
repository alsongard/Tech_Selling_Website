import axios from "axios";

function setAuthHeader(token)
{
    if (token) // if token avialable set Authorization header
    {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log(`Authorization Header setup done`);
    }
    else
    {
        console.log("No token given, no authorization header setup");
    }
}

export default setAuthHeader;