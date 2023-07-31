### III. Các hook sẽ sử dụng

<a name="sass"></a>
**1 Cài đặt sass**

  ```
  npm i sass
  ```
- SASS/SCSS là một chương trình tiền xử lý CSS (CSS preprocessor). Nó giúp bạn viết CSS theo cách của một ngôn ngữ lập trình, có cấu trúc rõ ràng, rành mạch, dễ phát triển và bảo trì code hơn. Ngoài ra nó có rất nhiều các thư viện hỗ trợ kèm theo giúp bạn viết code CSS một cách dễ dàng vào đơn giản hơn. Có rất nhiều loại CSS Preprocessor trong đó bao gồm SASS, Stylus hay LESS.
  
- CSS Preprocessors là ngôn ngữ tiền xử lý CSS. Là một ngôn ngữ kịch bản mở rộng của CSS và được biên dịch thành cú pháp CSS giúp bạn viết CSS nhanh hơn và có cấu trúc rõ ràng hơn. CSS Preprocessor có thể giúp bạn tiết kiệm thời gian viết CSS, dễ dàng bảo trì và phát triển CSS.

<a name="clsx"></a>
**2 Cài đặt clsx**
```
npm i clsx hoặc yarn clsx
```
- Giúp chúng ta thay đổi className một cách linh động và hỗ trợ rất nhiều trường hợp

<a name="axios"></a>
**3 Cài đặt axios**
```
npm install axios
```
- Axios là một thư viện máy khách HTTP dựa trên các Promise. Nó làm cho việc gửi các yêu cầu HTTP không đồng bộ đến các điểm cuối REST dễ dàng hơn và giúp bạn thực hiện các hoạt động CRUD.

- Read API
```
axios
  .get(`${API_BASE_URL}/users`)
  .then(response => {
      return response.data;
  })
  .then(data => {
      console.log(data)
  })
  .catch(error => {
      // console.log(error.response.data.error)
  })
```

// Delete API
```
export const handleDelete = async (id) => {
    // const id = 2;
    await axios.delete(`${API_BASE_URL}/users/${id}`)
        .then(response => {
            console.log(`Deleted post with ID ${id}`);
        })
        .catch(error => {
            console.error(error);
        });
};
```

<a name="data-table-component"></a>
**10 Cài đặt react-data-table-component-extensions**
```
$ npm install react-data-table-component styled-components
```
và
```
$ npm install react-data-table-component-extensions

```

- Xuất tệp ở định dạng *.csv và *.xls.
  
- In dữ liệu bảng.
  
- Lọc dữ liệu bảng theo tất cả các cột.

- Lọc bảng theo độ dài chữ số. Giá trị mặc định là 2.
  
*Link demo (https://codesandbox.io/s/data-table-extensions-qxpv4?fontsize=14)*


<a name="sweetalert2"></a>
**11 Cài đặt sweetalert2**
```
npm install --save sweetalert2 sweetalert2-react-content
```
- Ví dụ code
```
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
```
* Link doc https://sweetalert2.github.io/

*Bài tiếp theo [Khởi tạo app](/regist-login/lesson/init.md)*
