import { Spin, Table } from "antd";
import { DeleteOutlined, ExclamationCircleFilled} from "@ant-design/icons"
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Modal } from 'antd'
// import EditForm from "../DrawerEditProduct";
const { confirm } = Modal;
const TableOrder = ({data , setdata}) => {
    const [dataTable , setDataTable] = useState([]);
    const [loading, setLoading] = useState(false)
    const [visible , setVisible] = useState(false)
    const [selectedProduct , setSelectedProduct] = useState(null);

    useEffect(() => {
      
         
        
    }, [data]);
    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm này??',
            icon: <ExclamationCircleFilled />,
            content: 'Hành động này không thể hoàn tác',
            onOk: async () => {
                // callapi xóa
                try {
                    const response = await fetch(`http://localhost:8080/BE_PRINTER/api/v1/orders/${id}`, {
                        method: "DELETE"
                    })
                    if (!response.ok) {
                        throw new Error("không thể xóa sản phẩm")
                    }
                    const result = await response.json();
                    setdata((preProducts) => preProducts.filter((product) => product.id !== id))
                    Modal.success({
                        content: "Xóa sản phẩm thành công!",
                    });

                } catch (error) {
                    console.error("Lỗi khi xóa sản phẩm : ", error)
                    Modal.error({
                        
                        title: "Xóa thất bại",
                        content: "Không thể xóa sản phẩm. Vui lòng thử lại!",
                    });
                }

            },
            onCancel() {
              
            },
        
        });
    };
    const handleEdit = (id)=>{
        const product = data.find(product => product.id === id);
        setSelectedProduct(product)
        setVisible(true)
        
    }
    const handleOnClose = ()=>{
         setVisible(false)
    
    }
    const columns = [
        {
            title: 'Order Id',
            dataIndex: 'id',
            key: 'name',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Địa chỉ nhận hàng',
            dataIndex: 'shippingAddress',
            key: 'shippingAddress',
        },
        {
            title: 'Ngày Tạo',
            dataIndex: 'createAt',
            key: 'createAt',
        },
        {
            title: 'Phương thức thanh toán',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
        },
        // {
        //     title: "Actions",
        //     key: "actions",
        //     render: (_, record) => (
        //         <div style={{ display: 'flex', alignItems: 'center' }}>
        //             <FaEdit onClick={()=>{handleEdit(record.id)}} />
        //             <DeleteOutlined onClick={() => {showDeleteConfirm(record.id) }} />
        //         </div>
        //     ),
        // },

    ]
    return (
        <>
            {loading ? (<Spin size="large"></Spin>)
                : (
                    <div className="table-product">
                        <Table columns={columns} dataSource={data}
                            className="table"
                            pagination={{
                                position: ["center"]
                            }}
                            scroll={{ y: 400 }}
                            rowKey="id"
                        >
                        </Table>
                      
                    </div>

                  
                )}
                
      {/* <EditForm product={selectedProduct} onClose={handleOnClose} visible={visible}  /> */}
        </>
    )
}
export default TableOrder;