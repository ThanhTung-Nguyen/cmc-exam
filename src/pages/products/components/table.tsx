import { Button, Table } from 'antd'
import  { ColumnType } from 'antd/es/table'
// import {Table} from 'antd'
import { IProductsData } from '../../../type/product'


interface IPropsProductsTable {
    onRedirectDetailPage: (id?: string) => void
}
const ProductsTable = ({onRedirectDetailPage}:IPropsProductsTable) => {
    const fakeData = [
        {
            id:'dsfsdg-dfgfdfd-12787-fdgdf',
            name: 'Bim Bim',
            price: '100000',
            description:'BimBim tao chế'
        },
        {
            id:'dsfsdg-dfgfdfd-12577-fdgdf',
            name: 'Nước lọc',
            price: '100000',
            description:'Nước uống đóng chai tinh khiết'
        },
    ]
    const columns: ColumnType<IProductsData> = [
        {
            title:'STT',
            dataIndex:'',
            render: (_, record, index) => index + 1,
            align:'center'
        },

        {
            title:"Tên sản phẩm",
            dataIndex:'name',
        },
        {
            title:'Giá',
            dataIndex:'price',
            align:'right'
        },
        {
            title:"Mô tả",
            dataIndex:'description'
        },
        {
            title:'Hành động',
            render: (value) => {
                console.log(value);
                
                return <Button type='primary' onClick={()=>onRedirectDetailPage?.(value?.id)}>Xem chi tiết</Button>
            }
        }
    ]
  return (
    <Table
    dataSource={fakeData ??[]}
    columns={columns}
    onRow={record => ({
        onDoubleClick: () => {
            onRedirectDetailPage?.(record.id ?? "");
          },
    })}
    />
  )
}

export default ProductsTable