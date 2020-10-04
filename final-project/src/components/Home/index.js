import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

import { getAllProducts } from '../../store/FetchActions';

import tiranossauroImg from '../../assets/tiranossauro.jpg';
import triceratopsImg from '../../assets/triceratops.jpg';
import estegossauroImg from '../../assets/estegossauro.jpg';
import pterodactiloImg from '../../assets/pterodactilo.webp';
import velociraptorImg from '../../assets/velociraptor.png';
import mosassauroImg from '../../assets/mosassauro.jpg';

function Home() {
    const products = useSelector((store) => store.productsReducer)
    const dispatch = useDispatch();
    const productsImg = [tiranossauroImg, triceratopsImg, estegossauroImg, pterodactiloImg, velociraptorImg, mosassauroImg];

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
 
    return (
        <div className="text-center p-3 home">
            <h1 className="title">Bem vindo à Loja Fake</h1>
            <h4 className="mt-4">Abaixo estão alguns dos nossos produtos, confira!</h4>
            <div className="row row-cols-1 row-cols-md-3 mx-5 mt-4">
                {
                    products.map((item, index) => 
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src={productsImg[index]} className="card-img-top mt-2 adjust-img" alt={item.name} />
                                <h5 className="card-title mt-2">{item.name} - {item.sellPrice}(R$)</h5>
                            </div>
                        </div> 
                    
                    )
                }
            </div>
        </div>
    );
}

export default Home;
