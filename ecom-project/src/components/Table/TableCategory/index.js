import { DeleteOutlined, FileSearchOutlined } from "@ant-design/icons";
import { Table } from "antd"
const dataSource = [
    {
        key: '1',
        id : 1 , 
        name : "máy in 3d",
        description : "máy in siêu đẹp",
        actions: (<> 
            <div className="icon">
                <FileSearchOutlined style={{marginRight: "20px"}}/>
                <DeleteOutlined />
            </div>
        </>)
    },
    {
        key: '2',
        id : 2 ,
        name: 'Máy in truyền thống',
        description : "máy in lâu vl",
        actions: (<> 
            <div className="icon">
                <FileSearchOutlined style={{marginRight: "20px"}}/>
                <DeleteOutlined />
            </div>
        </>)
    }
   
];
const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
    },

    {
        title: 'ACTIONS',
        dataIndex: 'actions',
        key: 'actions',
    },
    
]
const TableCategory = ()=>{
    return (
        <>
           <div className= "table-category">
                <Table columns={columns} dataSource={dataSource}
                 className="table" 
                pagination={{
                position: ["topRight"]
                }}
                // scroll={{y : 500}}
                >
                </Table>
            </div>
        </>
    )
}
export default TableCategory