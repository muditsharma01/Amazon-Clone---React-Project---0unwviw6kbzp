import axios from 'axios';

export async function productsData() {
    const products = await axios.get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
    return products
}

