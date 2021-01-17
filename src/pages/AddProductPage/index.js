import React, { useState, useCallback } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { withRouter } from 'react-router-dom';
import {Button, Form, Input, Layout, Select, Upload} from 'antd';
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import * as productActions from '../../actions/productsActions';
import {formatDate} from "../../utils/utility";

const { Content } = Layout;
const { Option } = Select;

const AddProductPage = props => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productCategoryId, setProductCategoryId] = useState(undefined);
    const [productCategoryName, setProductCategoryName] = useState(undefined);
    const [isLoadingForm, setIsLoadingForm] = useState(false);
    const categories = useSelector(state => state.products.categories.sort((a, b) => a.id - b.id))

    const dispatch = useDispatch();

    const onSubmit = useCallback(async () => {
        setIsLoadingForm(true)
        await dispatch(productActions.addProduct(productName, productDescription, productImage, productCategoryName, productCategoryId, formatDate(new Date())))
        setIsLoadingForm(false);
    }, [productName, productDescription, productImage, productCategoryId, productCategoryName])

    return (
        <Layout style={{height: '100vh'}}>
            <PageHeader history={props.history}/>
            <Content style={{width: '70vw', margin: 'auto', justifyContent: 'center', display: 'flex'}}>
                <div style={{paddingTop: 100, width: 600 }}>
                    <h1 style={{marginBottom: 30}}>New Product</h1>
                    <Form name={"addProduct"}
                          initialValues={{}}
                          onFinish={onSubmit}
                    >
                        <label>Product Name:</label>
                        <Form.Item name={"productName"}
                                   rules={[{ required: true, message: 'Product name required' }]}
                                   validateTrigger={'onSubmit'}
                        >
                            <Input onChange={e => setProductName(e.target.value)}/>
                        </Form.Item>

                        <label>Product Description:</label>
                        <Form.Item name={"productDescription"}
                                   rules={[{ required: true, message: 'Product description required' }]}
                                   validateTrigger={'onSubmit'}
                        >
                            <Input onChange={e => setProductDescription(e.target.value)}/>
                        </Form.Item>

                        <label>Category:</label>
                        <Form.Item name={"productCategory"}
                                   rules={[{ required: true, message: 'Product select a category' }]}
                                   validateTrigger={'onSubmit'}
                        >
                            <Select placeholder="Select a category"
                                    onChange={value => {
                                        setProductCategoryId(value)
                                        setProductCategoryName(categories.filter(item => item.id === value)[0].name)
                                    }}
                            >
                                {categories.slice(1).map(pair =>
                                    <Option value={pair.id} key={pair.id}>
                                        {pair.name}
                                    </Option>)}
                            </Select>
                        </Form.Item>

                        <label>Product Image:</label>
                        <Form.Item name={"productImage"}
                                   validateTrigger={'onSubmit'}
                        >
                            <Input onChange={e => setProductImage(e.target.value)}
                                   placeholder={"Enter an image URL"}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type={"primary"} htmlType={"submit"} loading={isLoadingForm}>Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
            <PageFooter/>
        </Layout>
    )
}

export default withRouter(AddProductPage)