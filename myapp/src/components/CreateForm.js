import styles from './CreateForm.module.css';
import fetchPermissions from '../services/fetchPermissions'
import {useState , useEffect} from "react";

export default function CreateForm({
                                       listProductsHandler
                                   }) {

    let [canRead, setCanRead] = useState(true);

    useEffect(() => {
        fetchPermissions()
            .then(result => {
                setCanRead(result.some(x => x === "CREATE"));
            })
    }, []);




    async function createProduct(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        let {name, price, currency} = Object.fromEntries(formData);

        if (name && price && currency) {

            price = Number(price);

            let response = await fetch('https://parseapi.back4app.com/classes/Product', {
                method: "POST",
                headers: {
                    "X-Parse-Application-Id": "NTQV9iE7S45PGxM3hL3Zf5s3G9TDrFpc6hYV8CeV",
                    "X-Parse-REST-API-Key": "wiCJvsTuvvTlIBpEOpc4Yqp5QQd5U5XXBFNA6GIv",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, price, currency})
            });
            let result = await response.text();

            listProductsHandler();

            console.log(result);

        } else {
            alert("You must fill all of the fields in the create form!");
            return;
        }


    }

    return (

        canRead ?
        <form id="createForm" onSubmit={createProduct}>

            <div className={styles.createDetails}>

                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="The Product's Name"/>

                <label htmlFor="price">Price: </label>
                <input type="number" name="price" id="price" step=".01" placeholder="The Product's Price"/>

                <label htmlFor="currency">Currency: </label>
                <input type="text" name="currency" id="currency" placeholder="The Product's Currency"/>

                <input className={styles.submitButton} id="submitButton" type="submit" value="Create Product"/>

            </div>
        </form>
            : null
    );

}