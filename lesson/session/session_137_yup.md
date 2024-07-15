# RS137 Yup

### Yup là gì

Yup là một thư viện kiểm tra schema JavaScript phổ biến thường được sử dụng trong ứng dụng ReactJS để đảm bảo tính toàn vẹn của dữ liệu và áp dụng ràng buộc đầu vào. Nó cung cấp một cách mạnh mẽ và linh hoạt để định nghĩa các quy tắc kiểm tra cho các loại dữ liệu khác nhau, bao gồm chuỗi, số, mảng, đối tượng và kiểu tùy chỉnh.

### Lợi ích khi sử dụng Yup

Yup cung cấp một API có thể nối tiếp, cho phép bạn xây dựng các quy tắc kiểm tra phức tạp bằng cách kết hợp các phương thức kiểm tra khác nhau

Yup hỗ trợ kiểm tra an toàn về kiểu dữ liệu, đảm bảo rằng dữ liệu tuân theo các kiểu dữ liệu đã chỉ định

Yup cho phép bạn định nghĩa logic kiểm tra tùy chỉnh bằng cách sử dụng các hàm JavaScript cho các tình huống kiểm tra phức tạp hơn.

Yup cung cấp cơ chế để tạo ra thông báo lỗi có ý nghĩa, giúp người dùng biết về các lỗi kiểm tra.

### Cài đặt

Cài đặt Yup bằng npm hoặc yarn:

```
npm install yup
```

Thêm thư viện vào project

```
import * as yup from 'yup';
```

Định nghĩa Schema kiểm tra

```
const userSchema = yup.object().shape({
  // ... các quy tắc kiểm tra của bạn
});
```

### Kết hợp Yup với Formik:

**1. Cài đặt Formik và Yup vào dự án React của bạn**

```
npm install formik yup
```

**2. Tạo Schema Validation với Yup**

Sử dụng Yup để tạo schema validation cho các trường dữ liệu trong form.

Định nghĩa các quy tắc kiểm tra, ví dụ: kiểm tra email, số điện thoại, độ dài mật khẩu, v.v.

**3. Sử dụng Formik để Quản lý Form**

Tạo form sử dụng Formik. Định nghĩa các trường và giá trị ban đầu (initialValues).

Sử dụng Formik’s useFormik hook để quản lý trạng thái của form và xử lý sự kiện.

**4. Tự động kiểm tra dữ liệu nhập vào form dựa trên schema validation của Yup**

Thêm schema validation (validationSchema) vào useFormik hook.

### Ví dụ sử dụng Formik và Yup

```
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup.string().min(8, 'Mật khẩu phải ít nhất 8 ký tự').required('Mật khẩu là bắt buộc'),
});

function MyForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Xử lý logic khi người dùng submit form
      console.log('Form submitted:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <div>{formik.errors.email}</div>
      )}

      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <div>{formik.errors.password}</div>
      )}

      <button type="submit">Đăng nhập</button>
    </form>
  );
}

export default MyForm;
```




<!-- *Bài tiếp theo [RS137 Yup](/lesson/session/session_137_yup.md)* -->