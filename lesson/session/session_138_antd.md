# RS138 Ant Design

### Ant Design là gì

Ant Design là một bộ công cụ UI (User Interface) được phát triển bởi Ant Financial, một công ty con của Alibaba Group. Ant Design được thiết kế để cung cấp một hệ thống thiết kế nhất quán cho các ứng dụng web. Nó bao gồm một bộ các component UI phong phú và dễ sử dụng, giúp việc phát triển giao diện người dùng trở nên nhanh chóng và hiệu quả hơn.

### Cài đặt Ant Design

Để sử dụng Ant Design trong dự án React, bạn cần cài đặt nó thông qua npm hoặc yarn.

Sử dụng npm:

```
npm install antd
```

Sử dụng yarn:

```
yarn add antd
```

### Cài đặt các phụ thuộc cần thiết

Ant Design yêu cầu một số phụ thuộc như React và React-DOM. Đảm bảo rằng chúng đã được cài đặt trong dự án của bạn. Nếu chưa, bạn có thể cài đặt chúng:

Sử dụng npm:

```
npm install react react-dom
```

Sử dụng yarn:

```
yarn add react react-dom
```

### Import các component từ Ant Design

Bạn có thể import các component từ Ant Design vào file JavaScript hoặc TypeScript của mình. Dưới đây là một ví dụ cơ bản về cách sử dụng một component từ Ant Design:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // Import CSS của Ant Design

const App = () => (
  <div>
    <Button type="primary">Primary Button</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

### Sử dụng các component và layout của Ant Design

Ant Design cung cấp nhiều component và layout khác nhau, từ các button, form, table đến các component layout như grid và layout. Bạn có thể tham khảo tài liệu chính thức của Ant Design để tìm hiểu chi tiết về cách sử dụng từng component.

```
import React from 'react';
import { Row, Col } from 'antd';

const App = () => (
  <div>
    <Row>
      <Col span={12}>Column 1</Col>
      <Col span={12}>Column 2</Col>
    </Row>
  </div>
);

export default App;
```

*Bài tiếp theo [RS139 CRA To Vite](/lesson/session/session_139_CRA_to_Vite.md)*