import axios from 'axios';
const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch(error){
        throw error; // throw error to the caller
    }
};

export const getProductDetails = async (id) => {
    // implenment same logic as fetchProducts
};

export const removeProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch(error){
        throw error; // throw error to the caller
    }
};

// Adds new product to the database
export const addProduct = (product) => {
    return axios.post(`${BASE_URL}/add`, JSON.stringify(product));
};

// Edits existing product by ID
export const editProduct = (id, product) => {
    // implement it using similar logic as addProduct function but use axios.put method
};