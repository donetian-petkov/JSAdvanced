import {useContext, useEffect, useState} from "react";
import fetchPermissions from "../services/fetchPermissions";
import {ProductContext} from "../App";

export default function  UpdateButton() {

    let [canUpdate, setCanUpdate] = useState(true);
    let value = useContext(ProductContext);
    let {value1 , value2, value3} = value;
    let [products , setProducts] = value1;
    let [currentId , setCurrentId] = value3;

    useEffect(() => {
        fetchPermissions()
            .then(result => {
                setCanUpdate(result.some(x => x === "UPDATE"));
            })
    }, []);

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

    function editProduct(e) {

        const row = e.currentTarget.parentElement.parentElement;
        let newId = row.getAttribute('id');

        if (newId === currentId) {

            console.log("submitted ", currentId);

            let name = row.children[0].children[0].value;
            let price = Number(row.children[1].children[0].value);
            let currency = row.children[2].children[0].value;

            fetch('https://parseapi.back4app.com/classes/Product/' + currentId, {
                method: "PUT",
                headers: {
                    "X-Parse-Application-Id": "NTQV9iE7S45PGxM3hL3Zf5s3G9TDrFpc6hYV8CeV",
                    "X-Parse-REST-API-Key": "wiCJvsTuvvTlIBpEOpc4Yqp5QQd5U5XXBFNA6GIv",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, price, currency})
            })
                .then(res => res.text())
                .then(res => {
                    console.log(res);
                })

            editHandler(currentId, name, price, currency);
        } else {
            newId = currentId;
            setCurrentId(row.getAttribute("id"));
            console.log("Different id's ", newId, currentId);
        }
    }



    return (
        canUpdate ?
        <button name="editButton" id="editButton" onClick={editProduct}> Update </button>
            : null
    )
}