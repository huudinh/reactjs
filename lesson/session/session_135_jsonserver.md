# RS135 Json-Server

### json-server là gì?

json-server là một công cụ giả lập máy chủ API REST nhẹ được viết bằng JavaScript. Nó cho phép bạn tạo ra một máy chủ ảo để phục vụ dữ liệu JSON giả mạo cho các ứng dụng web của bạn.

### Ưu điểm

Dễ sử dụng: json-server có cú pháp đơn giản và dễ cài đặt.

Nhanh chóng: Nó khởi động và chạy nhanh chóng, giúp bạn nhanh chóng bắt đầu phát triển ứng dụng của mình.

Linh hoạt: Bạn có thể tùy chỉnh dữ liệu JSON được phục vụ và cấu hình các tùy chọn máy chủ khác nhau.

Tốt cho quá trình phát triển: json-server là một công cụ hữu ích để thử nghiệm và phát triển các ứng dụng web của bạn trước khi kết nối với API thực tế

### Cài đặt 

Để cài đặt json-server, bạn có thể sử dụng lệnh sau:

```
npm install -g json-server
npx json-server --watch db.json --port 3100
```

data.json là file chứa dữ liệu ví dụ:
```
[
  { "id": 1, "name": "Product 1", "price": 100 },
  { "id": 2, "name": "Product 2", "price": 200 },
  { "id": 3, "name": "Product 3", "price": 300 }
]
```

### Cách sử dụng

```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products') // Cổng mặc định của json-server là 3000
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;

```

### Đọc API

```
const fetchApi = async () => {
    const response = await axios.get('http://localhost:3100/posts')
    return response.data
  }
```  

###  Thêm mới post

```
const fetchCreateApi = async () => {
  const response = await axios.post(`http://localhost:3100/posts`, {
    "title": "json-server",
    "author": "typicode"
  });
  return response.data;
}
```

### Xóa post

```
const fetchDeleteApi = async () => {
    const response = await axios.delete(`http://localhost:3100/posts/${postId}`);
    return response.data;
  }
```  

### Update post

```
const fetchUpdateApi = async () => {
  const response = await axios.put(`http://localhost:3100/posts/${post.id}`, post);
  return response.data;
}
```

*Bài tiếp theo [RS136 Git](/lesson/session/session_136_git.md)*