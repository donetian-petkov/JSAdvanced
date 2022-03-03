import styles from './ListProducts.module.css'
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import {useState, useEffect} from "react";
import fetchPermissions from "../services/fetchPermissions";

export default function ListProducts({
    products, deleteHandler, editHandler
                                     }) {

    let [canRead, setCanRead] = useState(true);
    let [id , setId] = useState('');

    useEffect(() => {
        fetchPermissions()
            .then(result => {
                setCanRead(result.some(x => x === "READ"));
            })
    }, []);

    function setCurrentProduct(id) {
        setId(id);
    }


    return (
        canRead ?
        <table className={styles.listProducts}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Currency</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {products.map((val) => {
                return (
                    <tr key={val.objectId} id={val.objectId}>
                        <td>
                            <input type="text" name="name" className={styles.inputFields} defaultValue={val.name} readOnly={val.objectId !== id}></input>
                        </td>
                        <td>
                            <input type="number" name="price" step=".01" className={styles.inputFields} defaultValue={val.price} readOnly={val.objectId !== id}></input>
                        </td>
                        <td>
                            <input type="text" name="currency" className={styles.inputFields} defaultValue={val.currency} readOnly={val.objectId !== id}></input>
                        </td>
                        <td className={styles.buttons}>
                            <UpdateButton setCurrentProduct={setCurrentProduct} editHandler={editHandler} id={id}/>
                            <DeleteButton deleteHandler={deleteHandler}/>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
            : null
    )

}