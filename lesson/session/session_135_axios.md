# RS135 Thư viện Axios

### Axios là gì

Axios là một thư viện JavaScript phổ biến được sử dụng để thực hiện các yêu cầu HTTP trong các ứng dụng web, bao gồm cả ReactJS. Nó cung cấp một cú pháp đơn giản và gọn nhẹ để thực hiện các thao tác CRUD (Create, Read, Update, Delete) với API và xử lý các phản hồi.

### Ưu điểm của Axios:

Dễ sử dụng: Axios có cú pháp đơn giản và dễ hiểu, giúp bạn dễ dàng bắt đầu sử dụng.

Hỗ trợ Promise: Axios hỗ trợ Promise, giúp bạn dễ dàng xử lý các yêu cầu không đồng bộ và quản lý trạng thái ứng dụng.

Mã hóa dữ liệu: Axios tự động mã hóa dữ liệu JSON cho các yêu cầu POST và PUT, giúp bạn tiết kiệm thời gian và công sức.

Hủy yêu cầu: Axios cho phép bạn hủy các yêu cầu HTTP đang được thực hiện, điều này có thể hữu ích trong một số trường hợp.

Chặn Interceptor: Axios cung cấp tính năng Interceptor, cho phép bạn chặn và sửa đổi các yêu cầu và phản hồi HTTP trước khi chúng được gửi hoặc nhận.

### Cách sử dụng 

Để sử dụng Axios trong ReactJS, bạn cần cài đặt nó bằng lệnh sau:

```
npm install axios
```

Trong component bạn cần import thư viện Axios

```
import axios from 'axios';
```

### Lấy dữ liệu từ API

```
const [data, setData] = useState([]);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}, []);
```

### Gửi dữ liệu đến API

```
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const data = {
  name,
  email,
};

axios.post('https://jsonplaceholder.typicode.com/posts', data)
  .then(response => {
    console.log('Data sent successfully:', response.data);
    setName('');
    setEmail('');
  })
  .catch(error => {
    console.error(error);
  });  
```

### Sửa dữ liệu 

```
const [post, setPost] = useState({
  id: 1, // ID của bài viết
  title: 'Tiêu đề mới',
  body: 'Nội dung mới',
});

axios.put('https://your-api-endpoint/posts/' + post.id, post) // Thay thế bằng endpoint API của bạn
.then(response => {
  console.log('Bài viết được cập nhật thành công:', response.data);
})
.catch(error => {
  console.error(error);
});
```

### Xóa dữ liệu

```
const [postId, setPostId] = useState(1); // ID của bài viết

axios.delete('https://your-api-endpoint/posts/' + postId) // Thay thế bằng endpoint API của bạn
.then(response => {
  console.log('Bài viết được xóa thành công:', response.data);
  // Cập nhật giao diện sau khi xóa
})
.catch(error => {
  console.error(error);
});
```

<!-- *Bài tiếp theo [RS134 Thư viện Axios](/lesson/session/session_133_axios.md)* -->