import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './Admin.css';

function Admin({props, addProductHandler}) {
    const history = useHistory();
    const [products, setProducts] = useState(
        {
            mobileName: '',
            brandName: '',
            price: '',
            colour: '',
            ram: '',
            rom: ''
        }
    );

    const addProduct = (e) => {
        e.preventDefault();
        if (products.mobileName === "" || products.brandName === "" || products.price === "" || products.colour === "" || products.ram === "" || products.rom === "") {
            alert("All fields are important");
            return;
        }
        addProductHandler(products);
        setProducts(
            {
                mobileName: '',
                brandName: '',
                price: '',
                colour: '',
                ram: '',
                rom: ''
            }
        );
        history.push("/products");

    }

    return (
        <div>
            <form className="addProduct" onSubmit={e => addProduct(e)}>
                <div>
                    <label>Mobile Name </label>
                    <input type="text" name="mobileName" value={products.mobileName} className="mobileName" placeholder="Mobile name" onChange={e => setProducts({ ...products, mobileName: e.target.value })} />
                </div>
                <div>
                    <label>Brand Name </label>
                    <input type="text" name="brandName" value={products.brandName} className="brandName" placeholder="Brand name" onChange={e => setProducts({ ...products, brandName: e.target.value })} />
                </div>
                <div>
                    <label>Price </label>
                    <input type="text" name="price" value={products.price} className="price" placeholder="Price" onChange={e => setProducts({ ...products, price: e.target.value })} />
                </div>
                <div>
                    <label>Colour </label>
                    <input type="text" name="colour" value={products.colour} className="colour" placeholder="Colour" onChange={e => setProducts({ ...products, colour: e.target.value })} />
                </div>
                <div>
                    <label>RAM </label>
                    <input type="text" name="ram" value={products.ram} className="RAM" placeholder="RAM" onChange={e => setProducts({ ...products, ram: e.target.value })} />
                </div>
                <div>
                    <label>ROM </label>
                    <input type="text" name="rom" value={products.rom} className="ROM" placeholder="ROM" onChange={e => setProducts({ ...products, rom: e.target.value })} />
                </div>
                <button type="submit" className="submit">Add</button>
            </form>
        </div>
    )
}

export default Admin
