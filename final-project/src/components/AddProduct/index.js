import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertProducts } from '../../store/FetchActions';

import './index.css'

function AddProduct() {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: '',
        model: '',
        color: '',
        buyPrice: '',
        sellPrice: '',
        amount: 0,
    });

    function formChange(e) {
        setForm({
            ...form, [e.target.name]: e.target.value,
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(insertProducts(form));
        setForm({
            name: '',
            model: '',
            color: '',
            buyPrice: '',
            sellPrice: '',
            amount: 0, 
        })

        alert('Seu produto foi adicionado com sucesso!')
    }

    return (
        <div className="" id="container-add-product">
            <form action="" id="record-form" onSubmit={onSubmit} className="container mt-4">
                <div className="text"><h4>Adicionar Novo Produto</h4>
                    <div className="row mt-4">
                        <div className="col-md-4 mt-4">
                            <label htmlFor="name">Nome do Produto</label>
                            <input type="text" onChange={formChange} value={form.name} name="name" className="form-control" />
                        </div>
                        <div className="col-md-4 mt-4">
                            <label htmlFor="model">Modelo do Produto</label>
                            <input type="text" onChange={formChange} value={form.model} name="model" className="form-control" />
                        </div>
                        <div className="col-md-4 mt-4">
                            <label htmlFor="color">Cor do Produto</label>
                            <input type="text" onChange={formChange} value={form.color} name="color" className="form-control" />
                        </div>
                        <div className="col-md-4 mt-4">
                            <label htmlFor="sellPrice">Preço de Venda(R$)</label>
                            <input type="text" onChange={formChange} value={form.sellPrice} name="sellPrice" className="form-control" />
                        </div>
                        <div className="col-md-4 mt-4">
                            <label htmlFor="buyPrice">Preço de Compra(R$)</label>
                            <input type="text" onChange={formChange} value={form.buyPrice} name="buyPrice" className="form-control" />
                        </div>
                        <div className="col-md-4 mt-4">
                            <label htmlFor="amount">Quantidade à Adicionar</label>
                            <input type="number" onChange={formChange} value={form.amount} name="amount" className="form-control" />
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-success" type="submit">Adicionar</button>
                            <button className="ml-2 btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default AddProduct;
