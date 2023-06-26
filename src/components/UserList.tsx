import {Space, Table, Tag} from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

export type UserType = {
    id: number;
    name: string;
    age: number;
    tags: string[]
  };


export type UserListProp = {
    data: UserType[];
    pagination: TablePaginationConfig | false
};

export type UserListConfig = {
    pagination: object | boolean
}


const columnsConfig: ColumnsType<UserType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    return(
                        <Tag color={color} key={tag}>
                            {tag.toLowerCase()}
                        </Tag>
                    );
                })}
            </>
        )
    }
]

export const UserList = (props : UserListProp) => {
    return (
        <Table columns={columnsConfig} dataSource={props.data} pagination={props.pagination}/>
    );
};