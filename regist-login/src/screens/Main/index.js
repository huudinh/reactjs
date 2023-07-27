import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

import DefaultLayout from "../../layouts/DefaultLayout";
import { useLogout } from "../../utils/hook";
import "react-data-table-component-extensions/dist/index.css";
import Button from "../../components/Button";
import { deleteUser, editUser, getUser } from '../../api/user';

const Main = () => {
    const exit = useLogout('name');
    const [checkUsers, setCheckUsers] = useState(false);
    const [checkUpdate, setCheckupdate] = useState(false);
    const [data, setData] = useState([]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                deleteUser(id).catch(error => {
                    console.error(error);
                });
                setCheckupdate(true);
            }
        })
    };
    const editUserChose = (id, name) => {
        getUser()
            .then(db => {
                const users = db.data;
                const user = users.find(item => item.id === id);
                editUser(id, {
                    "id": user.id,
                    "name": name,
                    "email": user.email,
                    "password": user.password
                });
                setCheckupdate(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleEdit = (id) => {
        Swal.fire({
            title: 'Nhập tên cần đổi',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Đồng ý',
            showLoaderOnConfirm: true,
            preConfirm: (name) => {
                editUserChose(id, name);
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }

    const columns = [
        {
            name: "Name",
            selector: (row, i) => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: (row, i) => row.email,
            sortable: true
        },
        {
            name: "Action",
            sortable: false,
            selector: (row, i) => row.null,
            right: true,
            cell: (d) => [
                <Button
                    key={1}
                    warning
                    edit
                    handleClick={handleEdit.bind(this, d.id)}
                >
                    <i className="icon-edit-1"></i>
                </Button>,
                <Button
                    key={2}
                    danger
                    edit
                    handleClick={handleDelete.bind(this, d.id)}
                >
                    <i className="icon-trash"></i>
                </Button>,

            ]
        }
    ];

    useEffect(() => {
        getUser()
            .then(db => {
                setData(db.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [checkUsers, checkUpdate])

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