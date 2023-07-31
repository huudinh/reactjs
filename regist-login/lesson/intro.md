## Login & Regist Component

### Mục lục

[I. Phân tích chức năng](#phan-tich-chuc-nang)
- [1. Yêu cầu](#request)
- [2. Giao diện Login](#login)
- [3. Giao diện Regist](#register)
- [4. Giao diện màn hình chính](#main)

[II. Cấu trúc ứng dụng](#cau-truc-ung-dung)

[III. Các hook sẽ sử dụng](#cac-hook-se-su-dung)
- [1. Cài đặt Router](#router)
- [2. Cài đặt Formik](#formik)
- [3. Cài đặt Yup](#yup)
- [4. Cài đặt sass](#sass)
- [5. Cài đặt clsx](#clsx)
- [6. Cài đặt json-server](#json-server)
- [7. Cài đặt axios](#axios)
- [8. Cài đặt bcryptjs](#bcryptjs)
- [9. Cài đặt react-loading](#loading)
- [10. Cài đặt react-data-table-component-extensions](#data-table-component)
- [11. Cài đặt sweetalert2](#sweetalert2)

<a name="phan-tich-chuc-nang"></a>
### I. Phân tích chức năng

<a name="request"></a>
**1. Yêu cầu**

-   Tạo From đăng ký, đăng nhập màn hình chính, màn hình đầu

-   Dưới mỗi màn hình Login, Regist sẽ có nút chuyển màn hình, nếu đang ở Login có thể chuyển sang đăng ký, nếu đang ở đăng ký có thể chuyển sang login
  
-   Mỗi khi đăng nhập thành công hoặc đăng ký thành công sẽ loading chờ đợi 3s

-   Mỗi Email chỉ được đăng ký 1 lần duy nhất

-   Sau khi đăng nhập thành công thì sẽ vào trang Main hiển thị gửi lời chào đến tài khoản và nút Logout

-   Khi đã logout thì không thể vào trang main / và khi login thì không thể vào trang login và regist

<a name="login"></a>
**2. Giao diện Login**

  => Khi click vào nút submit:

  - Ứng dụng yêu cầu nhập đúng định dạng Email và Password
  
  - Khi nhập đúng định dạng thì kiểm tra thông tin có trùng với API trả về hay không
  
  - Trường hợp đúng thông tin trả về thì chuyển sang màn hình chính (Hiển thị biểu tượng login trong khi chờ chuyển màn hình)


<a name="regist"></a>
**3. Giao diện Regist**

  - Mỗi Email chỉ đăng ký 1 lần

  - Dưới Form đăng ký có link điều hướng san màn Login

  - Validate Email, Password

  - Sau khi đăng ký thành công tự động chuyển sang màn Login

<a name="main"></a>
**4. Giao diện màn hình chính**

  - Hiển thị lời chào đến tên của tài khoản Email đã đăng nhập thành công
    
  - Hiển thị Logout để thoát tài khoàn (Khi đã thoát tài khoản, yêu cầu phải đăng nhập mới vào được màn hình chính)

  - Hiển thị danh sách các user có trong hệ thống

  - Sửa Tên cho tài khoản và có thể xóa tài khoản (không thể xóa tài khoản đã đăng nhập)

<a name="cau-truc-ung-dung"></a>
### II. Cấu trúc ứng dụng

- Tất cả ứng dụng sẽ nằm trong mục `src`, trong thư mục này sẽ có 2 file chính là
  
  + `index.js`: Dùng để thiết lập Router và gọi đến thư mục App

  + `App.js`: Dùng để khai báo các đường dẫn cho Router
    
- `Components`: Đây là mục lữu trữ các components được sử dụng lại nhiều lần. Ví dụ: Input, Button, ...

- `Layout`: Lưu trữ các bố cục giao diện, layout mặc định sẽ là `DefaultLayout`

- `Screen`: Lưu trữ các màn hình của giao diện ứng dụng

- `utils`: Lưu trữ các hook, và các hằng số

<a name="cac-hook-se-su-dung"></a>
### III. Các hook sẽ sử dụng


<a name="router"></a>
**1 Cài đặt Router**
  
```
npm install react-router-dom@6
```

- Xử lý vấn đề điều hướng người dùng ở phía trình duyệt, giúp ta có để chuyển đổi qua lại giữa các màn hình của ứng dụng

<a name="rormik"></a>
**2 Cài đặt Formik**

  ```
  npm install formik --save
 
  //hoăc
   
  yarn add formik
  ```
  + Nhận giá trị trong và ngoài state form
  + Validate giá trị và đưa ra lổi
  + Xử lý việc submit form

<a name="yup"></a>
**3 Cài đặt Yup**

```
npm i yup@0.28.5
```

  + Yup giúp chung ta xây dựng được một lược đồ để chúng ta có thể kiểm tra các giá trị cho phù hợp với các điều kiện mà chúng ta đã định nghĩa

<a name="sass"></a>
**4 Cài đặt sass**

  ```
  npm i sass
  ```
- SASS/SCSS là một chương trình tiền xử lý CSS (CSS preprocessor). Nó giúp bạn viết CSS theo cách của một ngôn ngữ lập trình, có cấu trúc rõ ràng, rành mạch, dễ phát triển và bảo trì code hơn. Ngoài ra nó có rất nhiều các thư viện hỗ trợ kèm theo giúp bạn viết code CSS một cách dễ dàng vào đơn giản hơn. Có rất nhiều loại CSS Preprocessor trong đó bao gồm SASS, Stylus hay LESS.
  
- CSS Preprocessors là ngôn ngữ tiền xử lý CSS. Là một ngôn ngữ kịch bản mở rộng của CSS và được biên dịch thành cú pháp CSS giúp bạn viết CSS nhanh hơn và có cấu trúc rõ ràng hơn. CSS Preprocessor có thể giúp bạn tiết kiệm thời gian viết CSS, dễ dàng bảo trì và phát triển CSS.

<a name="clsx"></a>
**5 Cài đặt clsx**
```
npm i clsx hoặc yarn clsx
```
- Giúp chúng ta thay đổi className một cách linh động và hỗ trợ rất nhiều trường hợp


<a name="json-server"></a>
**6 Cài đặt json-server**
```
npm i -g json-server
npx json-server --watch db.json --port 3100
```
- Json server là một server trả về các dữ liệu dưới dạng json.
- Thông tin tài khoản được tạo sẽ lưu trữ vào file db.json


<a name="axios"></a>
**7 Cài đặt axios**
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

<a name="bcryptjs"></a>
**8 Cài đặt bcryptjs**
```
npm install bcryptjs --save
```
- Bcrypt là một chức năng mã hóa mật khẩu thiết kế bởi Niels Provos và David Mazières, dựa trên các thuật toán mã hóa Blowfish, và trình bày tại USENIX trong năm 1999. Bcrypt là một nền tảng tập tin tiện ích mã hóa chéo

```Reactjs
    // Ma hoa
    const pw = '123'
    const hashedPassword = bcrypt.hashSync(pw, 10)
    console.log(pw);
    console.log(hashedPassword);

    // Add API
    window.localStorage.setItem('login', hashedPassword);

    // Read API
    const getHashedPassword = localStorage.getItem('login');

    // So sanh
    bcrypt.compare(pw, getHashedPassword, function(err, isMatch){
        if(err){
            throw err;
        } else if(!isMatch){
            console.log("Password doesn't matches!")
        } else {
            console.log("Password matches!")
        }
    });
```


<a name="loading"></a>
**9 Cài đặt react-loading**
```
npm i react-loading
```
hoặc
```
yarn add react-loading
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
