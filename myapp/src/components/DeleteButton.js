import {useContext, useEffect, useState} from "react";
import fetchPermissions from "../services/fetchPermissions";
import {ProductContext} from "../App";

export default function DeleteButton() {


    let [canDelete, setCanDelete] = useState(true);
    let {value1} = useContext(ProductContext);
    let [products , setProducts] = value1;

    useEffect(() => {
        fetchPermissions()
            .then(result => {
                setCanDelete(result.some(x => x === "DELETE"));
            })
    }, []);


    function deleteHandler(id){

        const newProducts = products.filter(x => x.objectId !== id)
        setProducts(newProducts);

    }

    function deleteProduct(e) {
        const row = e.currentTarget.parentElement.parentElement;
        const id = row.getAttribute("id");
        const name = row.children[0].textContent;

        console.log(name);

        fetch("https://parseapi.back4app.com/classes/Product/" + id, {
            method: "DELETE",
            headers: {
                "X-Parse-Application-Id" : "NTQV9iE7S45PGxM3hL3Zf5s3G9TDrFpc6hYV8CeV",
                "X-Parse-REST-API-Key" : "wiCJvsTuvvTlIBpEOpc4Yqp5QQd5U5XXBFNA6GIv"
            }
        })
            .then(response => response.json())
            .then(() => {
                deleteHandler(id);
                console.log("Successfully Deleted Product " + name);
            })

    }

    return (
        canDelete ?
            <button name="deleteButton" id="deleteButton" onClick={deleteProduct}>Delete </button>
            : null

    )
}