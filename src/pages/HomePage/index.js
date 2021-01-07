import React, {useState, useCallback, useEffect} from 'react';
import { fetchProducts } from '../../actions/productsActions'
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';
import {Layout} from "antd";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";

const { Content } = Layout;


const HomePage = props => {
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

    return (
        <Layout style={{height:"100vh"}}>
            <PageHeader/>
            <Content style={{marginLeft: '20%', marginRight: '20%'}}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : availableProducts.length === 0 ? (
                    <div>No products available. Maybe add some?</div>
                ) :availableProducts.map(item =>
                    <div key={item.id}>
                        {item.id}
                    </div>)
                }
            </Content>
            <PageFooter/>
        </Layout>
    )
}

export default withRouter(HomePage);