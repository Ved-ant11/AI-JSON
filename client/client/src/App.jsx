import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [res, setRes] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/teste")
            .then((response) => {
                setRes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <h1>{res}</h1>
        </>
    );
}

export default App;
