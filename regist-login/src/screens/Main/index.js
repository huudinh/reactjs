import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import DefaultLayout from "../../layouts/DefaultLayout";
import { useLogout } from "../../utils/hook";
import { columns } from "./data.js";
import "react-data-table-component-extensions/dist/index.css";
import { getUser } from '../../api/user';

const Main = () => {
    const exit = useLogout('name');
    const [checkUsers, setCheckUsers] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        getUser() 
            .then(db => {
                setData(db.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }) 

    const tableData = {
        columns,
        data
    };

    useEffect(() => {
        if (localStorage.getItem('name')) {
            setCheckUsers(true)
        }
     
    }, [checkUsers]);

    return (
        <DefaultLayout>
            <h1>Xin chào bạn {localStorage.getItem('name')}</h1>
            <p>Click to <Link onClick={exit.logout} to="/login">Logout</Link></p>
            {checkUsers && (
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
            )}
        </DefaultLayout>
    )
}

export default Main;