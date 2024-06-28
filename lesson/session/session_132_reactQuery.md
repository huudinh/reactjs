# RS132 React Query là gì

### Tanstack Query

React Query (hay còn gọi là Tanstack Query) là một thư viện quản lý trạng thái (state management library) dành cho React, giúp bạn dễ dàng tải dữ liệu từ API, lưu trữ dữ liệu được tải về một cách hiệu quả và cập nhật giao diện người dùng khi dữ liệu thay đổi.

### Tính năng

React Query giúp bạn giải quyết các vấn đề sau khi làm việc với dữ liệu trong ứng dụng React

React Query tự động thực hiện các cuộc gọi API và lưu trữ kết quả trong bộ nhớ cache.

React Query chỉ thực hiện một cuộc gọi API cho một dữ liệu nhất định trong một khoảng thời gian nhất định, giúp tránh việc gọi API nhiều lần không cần thiết.

Khi dữ liệu được cập nhật, React Query sẽ tự động cập nhật giao diện người dùng tương ứng.

React Query cung cấp nhiều tùy chọn để bạn có thể tùy chỉnh cách lưu trữ và quản lý dữ liệu trong cache.

React Query có cú pháp đơn giản và dễ học, giúp bạn dễ dàng tích hợp vào ứng dụng React hiện có của mình.

### Lợi ích sử dụng React Query

React Query giúp bạn giảm thiểu lượng mã cần viết để quản lý dữ liệu, giúp bạn tập trung vào việc viết code logic cho ứng dụng

React Query giúp tối ưu hóa việc lấy dữ liệu và lưu trữ cache, giúp ứng dụng của bạn chạy nhanh hơn và mượt mà hơn

React Query giúp bạn quản lý trạng thái dữ liệu một cách dễ dàng và hiệu quả, giúp code của bạn dễ bảo trì hơn

### Cài đặt React Query

Để cài đặt React Query, bạn có thể sử dụng lệnh sau:

```
npm install react-query
```
hoặc

```
yarn add react-query
```

### Ví dụ

```
import React from 'react';
import { useQuery } from 'react-query';

const MyComponent = () => {
  const { data, isLoading, error } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
```

useQuery hook: Hook useQuery là hook chính của React Query. Nó nhận hai tham số (queryKey, queryFn)

queryKey: Một khóa duy nhất để xác định truy vấn.

queryFn: Một hàm trả về dữ liệu cho truy vấn.

data: Biến chứa dữ liệu được trả về bởi truy vấn.

isLoading: Biến cho biết liệu truy vấn đang được thực hiện hay không.

error: Biến chứa lỗi xảy ra trong quá trình thực hiện truy vấn.

fetchPosts: Hàm này giả lập việc lấy dữ liệu từ API. Bạn có thể thay thế hàm này bằng hàm thực tế để lấy dữ liệu từ API của bạn.

### Kết luận

React Query là một thư viện quản lý trạng thái mạnh mẽ và dễ sử dụng, giúp bạn giải quyết các vấn đề về dữ liệu một cách hiệu quả trong ứng dụng React. Nếu bạn đang tìm kiếm một thư viện quản lý trạng thái cho ứng dụng React của mình, React Query là một lựa chọn tuyệt vời


*Bài tiếp theo [RS133 Cài đặt GA4 cho Reactjs](/lesson/session/session_133_ga4.md)*