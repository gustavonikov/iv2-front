import api from '../../services/api';
import { actions } from '../products';

export function getAllProducts() {
    return (dispatch) => {
        api.get('/products')
            .then(res => dispatch(actions.getAllProducts(res.data)))
            .catch(console.log);
    }
}

export function insertProducts(product) {
    return (dispatch) => {
        api.post('/products', product)
            .then(res => dispatch(actions.add(res.data)))
            .catch(console.log);
    }
}

export function changeProductAmount(product) {
    return dispatch => {
        api.put(`/products/${product.id}`, product)
            .then(res => dispatch(actions.edit(res.data)))
            .catch(console.log);
    }
}

export function withdrawProductAmount(product) {
    return dispatch => {
        api.put(`/products/${product.id}`, product)
            .then(res => dispatch(actions.withdraw(res.data)))
            .catch(console.log);
    }
    /* app.put('/vouchers/:id' , function(req,res){
        const id = req.params.id;
        res.status(200).send({
            id: id
        });
    }); */
}

export function deleteProduct(product) {
    return dispatch => {
        api.delete(`/products/${product.id}`)
            .then(() => dispatch(actions.delete(product)))
            .catch(console.log);
    }
}