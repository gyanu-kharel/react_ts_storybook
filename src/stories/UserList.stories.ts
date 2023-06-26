import { Meta, StoryObj } from "@storybook/react";
import { UserList, UserListProp, UserType } from "../components/UserList";

const userList: UserListProp = {
    data: [
        {
            id: 1,
            name: 'Gyan',
            age: 25,
            tags: ['developer', 'backend', 'c#']
        },
        {
            id: 2,
            name: 'Mani',
            age: 22,
            tags: ['designer', 'UI/UX', 'Figma']
        },
        {
            id: 3,
            name: 'Kharel',
            age: 23,
            tags: ['QA Tester', 'Quality', 'Automated']
        }
    ],
    pagination: false
}

const meta = {
    component: UserList,
    tags: ['autodocs'],
    title: 'UserList',
    args: userList
} satisfies Meta<typeof UserList>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        ...userList
    }
};

export const Pagination: Story = {
    args: {
        ...userList,
        pagination: {
            disabled: false,
            pageSize: 2
        }
    }
};

export const NoPagination: Story = {
    args: {
        ...userList,
        pagination: false
    }
};