import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../redux/actions/categoryActions'
import { saveProduct } from '../../redux/actions/productActions'
import ProductDetail from './ProductDetail'
import { useNavigate } from 'react-router-dom'

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    ...props //'...' operatörü, bir dizi veya nesne içindeki öğeleri ayıklamak için kullanılır. Bu, bir dizi veya nesne içindeki öğeleri başka bir diziye veya nesneye kopyalamak için kullanılabilir.
}) {
    // destructuring
    const [product, setProduct] = useState({ ...props.product })
    //statedeki productı setProduct ile güncelleyebiliriz demek

    const navigate = useNavigate(); //useNavigate hookunu kullanarak navigate fonksiyonunu çağırı


    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product });
    }, [props.product]);

    function handleChange(event) {
        //event.target.name ve event.target.value değerlerini alıyoruz
        const { name, value } = event.target;

        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            navigate("/");
        });
    }
    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
        />
    )
}

export function getProductById(products, productId) {
    let product = products.find(product => product.id === productId) || null;
    return product;
}

//ownProps: componentin kendi propsları
function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.productId;
    const product = productId && state.productListReducer.length > 0 ?
        getProductById(state.productListReducer, productId) : {};
    return {
        product,//product:product
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories,
    saveProduct
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);


