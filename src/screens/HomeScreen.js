import React, {useState, useCallback, useEffect} from 'react';
import { fetchProducts } from '../actions/productsActions'
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const availableProducts = useSelector(state => state.products.products)
    const dispatch = useDispatch();

    const loadProducts = useCallback(async () => {
        try {
            await dispatch(fetchProducts())
        } catch (err) {
            console.log("Error!")
        }
    }, [dispatch])

    useEffect(() => {
        setIsLoading(true)
        loadProducts().then(() => setIsLoading(false))

    }, [dispatch, loadProducts])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (availableProducts.length === 0) {
        return <div>No products available. Maybe add some?</div>
    }

    return (
        <div>
            {availableProducts.map(item =>
                <div key={item.id}>
                    {item.id}
                </div>)
            }
        </div>
    )
}

export default HomeScreen;