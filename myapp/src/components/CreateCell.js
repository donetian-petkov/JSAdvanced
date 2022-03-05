import React from 'react';

export default function CreateCell({
                                      type, name, id, product, className, defaultValue
                                  }) {

    return (
        <td>
            <input type={type}
                   name={name}
                   className={className}
                   defaultValue={defaultValue}
                   style={{color: product.objectId !== id ? "gray" : "black"}}
                   readOnly={product.objectId !== id}></input>
        </td>
    )
}