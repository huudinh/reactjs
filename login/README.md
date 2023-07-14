## Login & Regist Component

### I. Phân tích chức năng

**1 Yêu cầu**

-   Tạo 2 From đăng ký và đăng nhập

-   Dưới mỗi Form sẽ có nút chuyển màn hình, nếu đang ở Login có thể chuyển sang đăng ký, nếu đang ở đăng ký có thể chuyển sang login

-   Sau khi đăng nhập gửi lời chào đến tài khoản
  
**2 Giao diện Login**

  => Khi click vào nút submit:

  - Ứng dụng yêu cầu nhập đúng định dạng Email và Password
  
  - Khi nhập đúng định dạng thì kiểm tra thông tin có trùng với API trả về hay không
  
  - Trường hợp đúng thông tin trả về thì chuyển sang màn hình chính

### II. Các hook sẽ sử dụng

**1 Cài đặt Router**
  
```
npm install react-router-dom@6
```

- Xử lý vấn đề điều hướng người dùng ở phía trình duyệt, giúp ta có để chuyển đổi qua lại giữa các màn hình của ứng dụng

**2 Cài đặt Formik**

  ```
  npm install formik --save
 
  //hoăc
   
  yarn add formik
  ```
  + Nhận giá trị trong và ngoài state form
  + Validate giá trị và đưa ra lổi
  + Xử lý việc submit form

**3 Cài đặt Yup**

```
npm i yup@0.28.5
```

  + Yup giúp chung ta xây dựng được một lược đồ để chúng ta có thể kiểm tra các giá trị cho phù hợp với các điều kiện mà chúng ta đã định nghĩa
   
**4 Cài đặt sass**

  ```
  npm i sass
  ```
- SASS/SCSS là một chương trình tiền xử lý CSS (CSS preprocessor). Nó giúp bạn viết CSS theo cách của một ngôn ngữ lập trình, có cấu trúc rõ ràng, rành mạch, dễ phát triển và bảo trì code hơn. Ngoài ra nó có rất nhiều các thư viện hỗ trợ kèm theo giúp bạn viết code CSS một cách dễ dàng vào đơn giản hơn. Có rất nhiều loại CSS Preprocessor trong đó bao gồm SASS, Stylus hay LESS.
  
- CSS Preprocessors là ngôn ngữ tiền xử lý CSS. Là một ngôn ngữ kịch bản mở rộng của CSS và được biên dịch thành cú pháp CSS giúp bạn viết CSS nhanh hơn và có cấu trúc rõ ràng hơn. CSS Preprocessor có thể giúp bạn tiết kiệm thời gian viết CSS, dễ dàng bảo trì và phát triển CSS.

**5 Cài đặt clsx**
```
npm i clsx hoặc yarn clsx
```
- Giúp chúng ta thay đổi className một cách linh động và hỗ trợ rất nhiều trường hợp

**6 Cài đặt json-server**
```
npm i -g json-server
npx json-server --watch db.json --port 3100
```
- Json server là một server trả về các dữ liệu dưới dạng json.
- Thông tin tài khoản được tạo sẽ lưu trữ vào file db.json

**7 Cài đặt axios**
```
npm install axios
```
- Axios là một thư viện máy khách HTTP dựa trên các Promise. Nó làm cho việc gửi các yêu cầu HTTP không đồng bộ đến các điểm cuối REST dễ dàng hơn và giúp bạn thực hiện các hoạt động CRUD.
```reactjs
// Read API

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
