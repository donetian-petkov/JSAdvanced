import {useEffect, useState} from "react";
import fetchPermissions from "../services/fetchPermissions";

export default function  UpdateButton({
                                          setCurrentProduct, editHandler, id
                                      }) {

    let [canUpdate, setCanUpdate] = useState(true);

    useEffect(() => {
        fetchPermissions()
            .then(result => {
                setCanUpdate(result.some(x => x === "UPDATE"));
            })
    }, []);

    let [isClicked , setIsClicked] = useState(true);

    function editProduct(e) {

        const row = e.currentTarget.parentElement.parentElement;

        if (isClicked) {
            let newId = row.getAttribute("id");
            setCurrentProduct(newId);
            setIsClicked(false);
        } else {
            let newId = id;
            setCurrentProduct(row.getAttribute("id"));

            if(newId !== id){
                setIsClicked(true);
                editProduct(e);
            } else {

                let name = row.children[0].children[0].value;
                let price = Number(row.children[1].children[0].value);
                let currency = row.children[2].children[0].value;


                fetch('https://parseapi.back4app.com/classes/Product/' + id, {
                    method: "PUT",
                    headers: {
                        "X-Parse-Application-Id": "NTQV9iE7S45PGxM3hL3Zf5s3G9TDrFpc6hYV8CeV",
                        "X-Parse-REST-API-Key": "wiCJvsTuvvTlIBpEOpc4Yqp5QQd5U5XXBFNA6GIv",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({name, price, currency})
                })
                    .then (res => res.text())
                    .then (res => {
                        console.log(res);
                    })

                editHandler(id, name, price, currency);


                setCurrentProduct('');
                setIsClicked(true);
            }
        }

    }



    return (
        <button name="editButton" id="editButton" onClick={editProduct}> Update </button>
    )
}