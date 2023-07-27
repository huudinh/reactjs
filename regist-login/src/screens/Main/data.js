import Button from "../../components/Button";
import { deleteUser, editUser, getUser } from '../../api/user';
import Swal from 'sweetalert2'

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
      }
    })
};
const editUserChose = (id, name) => {
    getUser() 
    .then(db => {
        const users = db.data;
        const user = users.find(item => item.id === id);
        editUser(id, {
            "id":user.id,
            "name": name,
            "email": user.email,
            "password": user.password
        });

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

export const columns = [
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