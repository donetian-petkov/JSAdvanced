import './App.css';
import CreateForm from "./components/CreateForm.js";
import ListProducts from "./components/ListProducts";
import React, {useEffect , useState} from "react";
export const ProductContext = React.createContext();


function App() {

    let [products, setProducts] = useState([]);
    let [currentId, setCurrentId] = useState('');

    function listProductsHandler() {
        fetch("https://parseapi.back4app.com/classes/Product", {
            headers: {
                "X-Parse-Application-Id": "NTQV9iE7S45PGxM3hL3Zf5s3G9TDrFpc6hYV8CeV",
                "X-Parse-REST-API-Key": "wiCJvsTuvvTlIBpEOpc4Yqp5QQd5U5XXBFNA6GIv"
            }
        })
            .then(response => response.json())
            .then(result => {
                setProducts(Object.values(result)[0]);
            });
    }

    useEffect(() => {
        listProductsHandler()
    },[]);


    return (
        <div className="App">

            <ProductContext.Provider value={{value1:[products , setProducts],value2:listProductsHandler, value3:[currentId, setCurrentId]}}>
            <CreateForm listProductsHandler={listProductsHandler}/>
            <ListProducts/>
            </ProductContext.Provider>

        </div>
    );
}

export default App;
