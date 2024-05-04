![Create-HTML-1](images/react.jpg) 

# RS126 Formik

React Formik là một thư viện trong ReactJS được sử dụng để quản lý các biểu mẫu (forms) trong ứng dụng. Nó cung cấp các thành phần và hàm để giúp quản lý các trường, xác nhận, xử lý nhập liệu và validation của biểu mẫu một cách thuận tiện.

### Quản lý trạng thái của biểu mẫu

React Formik giúp quản lý trạng thái của biểu mẫu bằng cách sử dụng các hooks như useState của React. Nó tự động theo dõi các giá trị của các trường và xử lý các sự kiện nhập liệu.

### Hỗ trợ validation

Thư viện này cung cấp các cơ chế để xác thực dữ liệu đầu vào của biểu mẫu, giúp bạn đảm bảo dữ liệu được nhập đúng định dạng và điều kiện mong muốn.

### Xử lý submit

React Formik hỗ trợ xử lý việc gửi dữ liệu khi biểu mẫu được submit. Nó cung cấp các hàm và sự kiện để xử lý hành động này một cách dễ dàng.

### Tích hợp với Yup để validation schema

Bạn có thể kết hợp React Formik với Yup (một thư viện xác thực dữ liệu) để định nghĩa các quy tắc validation phức tạp hơn và áp dụng chúng vào biểu mẫu.

### Hỗ trợ cho các trường đặc biệt

Formik cung cấp các thành phần cho các loại trường đặc biệt như checkbox, radio button, select box và nhiều hơn nữa, giúp quản lý các loại trường khác nhau một cách dễ dàng và nhất quán.

### Cách sử dụng

#### Bước 1: Cài đặt React Formik

Trước tiên, bạn cần cài đặt React Formik và Yup (nếu bạn muốn sử dụng validation schema) bằng cách sử dụng npm hoặc yarn:

```
npm install formik
```
hoặc
```
yarn add formik
```

#### Bước 2: Tạo một biểu mẫu sử dụng React Formik

Sau khi cài đặt, bạn có thể tạo một biểu mẫu sử dụng React Formik bằng cách sử dụng các thành phần và hàm từ thư viện này. Dưới đây là một ví dụ đơn giản về cách sử dụng React Formik để tạo một biểu mẫu đơn giản với một trường nhập liệu và nút Submit:

```
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const App = () => {
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
```

Trong ví dụ này, chúng ta sử dụng các thành phần Formik, Form, Field, và ErrorMessage từ thư viện Formik.

initialValues định nghĩa các giá trị ban đầu cho các trường trong biểu mẫu.

validate là một hàm được sử dụng để xác thực dữ liệu đầu vào của biểu mẫu. Nếu có lỗi, bạn trả về một đối tượng chứa các lỗi tương ứng.

onSubmit là hàm xử lý khi biểu mẫu được submit. Trong ví dụ này, chúng ta đơn giản là hiển thị các giá trị của biểu mẫu trong một cửa sổ cảnh báo.

#### Bước 3: Sử dụng các thành phần Formik

Formik: Là thành phần chính để bao bọc toàn bộ biểu mẫu. Nó nhận các thuộc tính như initialValues, validate, onSubmit và trả về một render prop.
Form: Được sử dụng để đại diện cho một biểu mẫu trong React. Bạn sử dụng nó bên trong render prop của Formik.
Field: Là một thành phần để hiển thị hoặc nhập giá trị của một trường trong biểu mẫu. Bạn sử dụng Field bằng cách chỉ định name của trường.
ErrorMessage: Dùng để hiển thị thông báo lỗi tương ứng với một trường nếu có lỗi xảy ra.

#### Bước 4: Tùy chỉnh và mở rộng

Bạn có thể tùy chỉnh và mở rộng biểu mẫu theo nhu cầu của ứng dụng bằng cách sử dụng các tính năng khác của React Formik như xử lý validation phức tạp, xử lý trạng thái, và tích hợp với các thư viện khác.

Với cách sử dụng cơ bản này, bạn có thể bắt đầu tích hợp React Formik vào ứng dụng React của mình và quản lý các biểu mẫu một cách hiệu quả và linh hoạt.


