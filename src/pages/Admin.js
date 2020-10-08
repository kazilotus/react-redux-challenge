import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Button, Tabs } from 'antd';
import { CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';

import { approveOrder, declineOrder, removeOrder } from '../redux/actions/orders'
import { showProduct } from '../redux/actions/common'

import './Admin.css'

const ButtonGroup = Button.Group;
const { TabPane } = Tabs;
export class Admin extends Component {

    columns = [
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: src => <img src={src} alt="product thumbnail" width="50px"/>
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        render: (name, record) => <a onClick={() => this.props.showProduct(record.id)}>{name}</a>
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          render: price => `$${price}`
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity'
        },
        {
          title: 'Subtotal',
          key: 'subtotal',
          render: (x, record) => `$${record.price*record.quantity}`
        }
    ];

    render() {

        const { items } = this.props;

        const columns = this.props.user === 1 ? [ ...this.columns , {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <ButtonGroup>
                  <Button onClick={() => this.props.approve(record.id)}>
                      {/* Approve */}
                      <CheckOutlined />
                  </Button>
                  <Button onClick={() => this.props.decline(record.id)}>
                      {/* Decline */}
                      <CloseOutlined />
                  </Button>
                  <Button onClick={() => this.props.remove(record.id)}>
                      {/* Remove */}
                      <DeleteOutlined />
                  </Button>
              </ButtonGroup>
            ),
        }] : this.columns

        return (
            <section id="admin">

                <Tabs defaultActiveKey="0">
                    {
                        [
                            { title: 'Pending Orders', status: 'pending' },
                            { title: 'Approved Orders', status: 'approved' },
                            { title: 'Declined Orders', status: 'declined' }
                        ].map((tab, i) => {

                            const data = items.filter(item => item.status === tab.status).map(item => ({
                                key: i,
                                ...item
                            }))

                            return items.length &&
                            <TabPane tab={tab.title} key={i}>
                                <Table columns={columns} dataSource={data} />
                            </TabPane>

                        })
                    }
                </Tabs>
                
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.orders?.items,
    user: state.auth?.user
})

const mapDispatchToProps = dispatch => ({
    approve: (id) => dispatch(approveOrder(id)),
    decline: (id) => dispatch(declineOrder(id)),
    remove: (id) => dispatch(removeOrder(id)),
    showProduct: (id) => dispatch(showProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
