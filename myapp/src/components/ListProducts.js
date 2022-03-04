import styles from './ListProducts.module.css'
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import {useState, useEffect, useContext} from "react";
import fetchPermissions from "../services/fetchPermissions";
import CreateRow from "./CreateRow";
import {ProductContext} from "../App";

export default function ListProducts() {

    let value = useContext(ProductContext);
    let {value1 , value2, value3} = value;
    let [products, setProducts] = value1;
    let [currentId, setCurrentId] = value3;
    let [canRead, setCanRead] = useState(true);

    useEffect(() => {
        fetchPermissions()
            .then(result => {
                setCanRead(result.some(x => x === "READ"));
            })
    }, []);



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

                        <CreateRow type="text" name="name" id={currentId} product={val} className={styles.inputFields} defaultValue={val.name}/>

                        <CreateRow type="number" name="price" id={currentId}  product={val} className={styles.inputFields} defaultValue={val.price}/>

                        <CreateRow type="text" name="currency" id={currentId}  product={val} className={styles.inputFields} defaultValue={val.currency}/>

                        <td className={styles.buttons}>
                            <UpdateButton/>
                            <DeleteButton/>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
            : null
    )

}