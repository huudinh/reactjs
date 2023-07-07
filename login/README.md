## Login & Regist Component

### I. Ý tưởng

**1. Phân tích chức năng**

-   Tạo 2 From đăng ký và đăng nhập

-   Dưới mỗi Form sẽ có nút chuyển màn hình, nếu đang ở Login có thể chuyển sang đăng ký, nếu đang ở đăng ký có thể chuyển sang login

-   Sau khi đăng nhập gửi lời chào đến tài khoản 

**2. Các hook sẽ sử dụng**

**2.1 Cài đặt sass**

  ```
  npm i sass
  ```

**2.2 Cài đặt Formik**

  ```
  npm install formik --save
 
  //hoăc
   
  yarn add formik
  ```
  + Nhận giá trị trong và ngoài state form
  + Validate giá trị và đưa ra lổi
  + Xử lý việc submit form
