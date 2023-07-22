import DefaultLayout from "../../layouts/DefaultLayout";
import { Link } from 'react-router-dom';
import { useLogout } from "../../utils/hook";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./data.js";
const Main = () => {
    const exit = useLogout('name');

    const tableData = {
        columns,
        data
    };

    return (
        <DefaultLayout>
            <h1>Xin chào bạn {localStorage.getItem('name')}</h1>
            <p>Click to <Link onClick={exit.logout} to="/login">Logout</Link></p>
            
            <DataTableExtensions {...tableData}>
                <DataTable
                columns={columns}
                data={data}
                noHeader
                defaultSortAsc={false}
                pagination
                highlightOnHover
                />
            </DataTableExtensions>
        </DefaultLayout>
    )
}

export default Main;