# RS129 SCSS modules

SCSS modules trong ReactJS là một phương pháp để quản lý và sử dụng CSS trong các dự án React bằng cách sử dụng các module SCSS (Sass). Điều này giúp tránh xung đột tên lớp (class name) và tạo ra các stylesheet được scoped cục bộ cho từng component, đảm bảo rằng các style chỉ áp dụng cho component mà chúng được định nghĩa.

### Cài đặt SCSS Modules

Trước tiên, bạn cần cài đặt các gói cần thiết:

```
npm install sass
```

### Tạo Component với SCSS Modules

- Tạo file SCSS module: Tạo một file SCSS với đuôi .module.scss. Ví dụ, tạo file Button.module.scss.

```
// Button.module.scss
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
```

Button.module.scss chứa các style cho component Button. Các class định nghĩa ở đây sẽ được tự động scoped cục bộ cho component.

- Tạo component và import SCSS module: Tạo một component React và import file SCSS module vào component đó. Ví dụ, tạo file Button.js.

```
// Button.js
import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
```

Trong Button.js, bạn import các style từ Button.module.scss và áp dụng chúng bằng cách sử dụng cú pháp {styles.button}. Điều này đảm bảo rằng các class name sẽ không bị xung đột với các class khác trong dự án.

### Sử dụng component trong ứng dụng

Giờ bạn có thể sử dụng component Button trong ứng dụng React của mình:

```
// App.js
import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default App;
```

Trong App.js, bạn sử dụng component Button như bất kỳ component React nào khác.

### Lợi ích của SCSS Modules

Sử dụng SCSS modules trong ReactJS là một cách hiệu quả để quản lý style, đặc biệt khi dự án có nhiều component và style phức tạp.

- Scoped styles: Mỗi module SCSS được scoped cục bộ cho component tương ứng, tránh xung đột tên class
- Modularization: Giúp tổ chức và quản lý style tốt hơn trong các dự án lớn.
- Sử dụng SCSS: Tận dụng sức mạnh của SCSS như biến, mixin, nested styles