import React, {useState, useCallback, useEffect} from 'react';
import { fetchProducts } from '../../actions/productsActions'
import { useDispatch, useSelector, connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Layout, List, Spin, Divider, Menu } from "antd";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import ProductCard from "../../components/ProductCard";
import { LoadingOutlined }  from "@ant-design/icons";
import './style.css';
import * as productActions from "../../actions/productsActions";

const { Content } = Layout;


const HomePage = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    const availableProducts = useSelector(state => state.products.products)
    const categories = useSelector(state => state.products.categories)
    const dispatch = useDispatch();

    const loadProducts = useCallback(async () => {
        try {
            await dispatch(fetchProducts())
        } catch (err) {
            console.log("Error!")
        }
    }, [dispatch])

    const onDelete = prodId => {
        dispatch(productActions.deleteProduct(prodId))
        loadProducts()
    }

    const onSelectCategory = (categoryId) => {
        setSelectedCategory(categories.filter(c => c.id === categoryId)[0].name)
        if (categoryId === '0')
            setFilteredProducts(availableProducts)
        else {
            setFilteredProducts(availableProducts.filter(item => item.categoryId.toString() === categoryId))
        }
    }

    useEffect(() => {
        setIsLoading(true)
        loadProducts().then(() => {
            setIsLoading(false)
        })

    }, [dispatch, loadProducts])

    useEffect(() => {
        setFilteredProducts(availableProducts)
    }, [availableProducts])

    return (
        <Layout style={{height:"100vh"}}>
            <PageHeader history={props.history}/>
            <Content style={{width: '70vw', margin: 'auto'}}>
                <div style={{height: '50px', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{fontWeight: 900, fontSize: 26, paddingLeft: 10, margin: 'auto', marginTop: 10}}>{selectedCategory}</span>
                    </div>
                    <Menu mode={"horizontal"}
                          defaultSelectedKeys={['0']}
                          style={{height: '100%', backgroundColor: '#f0f2f5'}}
                          onClick={(item ) => onSelectCategory(item.key)}
                    >
                        {categories.map(category =>
                            <Menu.Item style={{width: 60, textAlign: 'center', margin: '0px 10px 0px 10px'}}
                                       key={category.id}
                            >{category.name}</Menu.Item>
                        )}
                    </Menu>
                </div>
                <Divider type="horizontal" style={{width: '100%', margin: 5}}/>
                {isLoading ? (
                    <Spin style={{position: 'absolute', top: '44%', left: '50%'}}
                          indicator={<LoadingOutlined style={{ fontSize: 48, color: '#1f6aac' }} spin />}
                    />
                ) : (
                    <div className={"cardContainer"}>
                        <List style={{overflow: 'auto', height: "calc(100vh - 181px)", minWidth: '70vw'}}
                              dataSource={filteredProducts}
                              rowKey={(item) => item.id}
                              renderItem={(item) =>
                                  <List.Item>
                                    <ProductCard product={item}
                                                 history={props.history}
                                                 onDelete={onDelete}/>
                                  </List.Item>
                              }
                              pagination={{
                                  pageSize: 10,
                                  responsive: true,
                                  style: {
                                      margin: 12,
                                      padding: 0
                                  }
                              }}
                              grid={{
                                  columns: 4
                              }}
                        />
                    </div>
                )}
            </Content>
            <PageFooter/>
        </Layout>
    )
}

export default withRouter(HomePage)
