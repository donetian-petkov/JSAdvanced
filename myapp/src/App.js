import './App.css';
import CreateForm from "./components/CreateForm.js";
import ListProducts from "./components/ListProducts";
import {useEffect , useState} from "react";

function App() {

    let [products, setProducts] = useState([]);

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

    function deleteHandler(id){

        const newProducts = products.filter(x => x.objectId !== id)
        setProducts(newProducts);

    }

    function editHandler(id, name, price, currency) {

        const index = products.findIndex(x => x.objectId === id);

        const startProducts = products.slice(0,index);

        const endProducts = products.slice(index+1);

        const editedProduct = products.find(x => x.objectId === id);

        editedProduct.name = name;
        editedProduct.price = price;
        editedProduct.currency = currency;

        const newProducts = [...startProducts, editedProduct, ...endProducts];

        setProducts(newProducts);

    }

    return (
        <div className="App">

            <CreateForm listProductsHandler={listProductsHandler}/>
            <ListProducts products={products} deleteHandler={deleteHandler} editHandler={editHandler}/>

        </div>
    );
}

export default App;
