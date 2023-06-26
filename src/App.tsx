import "./App.css";
import { UserList, UserType } from "./components/UserList";
import { Button } from "./components/Button";
import type { TablePaginationConfig } from 'antd/es/table';


const userData: UserType[] = [
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
];

const pagination : TablePaginationConfig = {
  pageSize: 2
}

export const App = () => {
  return (
    <>
      <UserList data={userData} pagination={pagination}/>
      <Button class="primary" label="Create" isDiabled={false} />
    </>
  );
};
