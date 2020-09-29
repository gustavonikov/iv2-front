import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Table} from 'react-bootstrap';
import Swal from 'sweetalert2';

import './index.css';
import { changeProductAmount, getAllProducts, deleteProduct, withdrawProductAmount } from '../../store/FetchActions';
import { ReactComponent as TrashImg } from '../../assets/lixeira.svg';
 
function ListProducts() {

    const products = useSelector((store) => store.productsReducer)

    const dispatch = useDispatch();

    async function changeProduct(title, actionFunction, product, dispatch) {
        const { value: formValues } = await Swal.fire({
            title: `${title} de Produto`,
            html:
                `<input id="amount" type="number" value="0" class="swal2-input">`,
            focusConfirm: false,
            preConfirm: () => {

                let newAmount;

                if (title === 'Entrada') {
                    newAmount = Number(product.amount) + Number(document.getElementById('amount').value);
                }  else {
                    newAmount = Number(product.amount) - Number(document.getElementById('amount').value);
                }
                
                const productUpdatedAmount = {
                    ...product,
                    amount: newAmount,
                };

                dispatch(actionFunction(productUpdatedAmount));
            },
        });

        if (formValues) {
            Swal.fire(JSON.stringify(formValues))
        }
    }

    function deleteItem(item, dispatch) {
        dispatch(deleteProduct(item));
    }
    
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <div className="" id="list-container">
            <div className="" id="list-title">
                <h3>Lista de Produtos</h3>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Modelo</td>
                        <td>Cor</td>
                        <td>Preço/Compra(R$)</td>
                        <td>Preço/Venda(R$)</td>
                        <td>QTD</td>
                        <td>Ações</td>
                        <td>Remover</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => 
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.model}</td>
                            <td>{product.color}</td>
                            <td>{product.buyPrice}</td>
                            <td>{product.sellPrice}</td>
                            <td>{product.amount}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => changeProduct('Entrada', changeProductAmount, product, dispatch)}>Adicionar</button>
                                <button className="ml-2 btn btn-danger" onClick={() => changeProduct('Retirada', withdrawProductAmount, product, dispatch)}>Retirar</button>
                            </td>
                            <td><TrashImg className="img-svg" onClick={() => deleteItem(product, dispatch)} /></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
    
}

export default ListProducts;
