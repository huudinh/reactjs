# RS142 Hook use() trong React 19

### 🧠 Mục tiêu bài học
- Hiểu khái niệm và cách hoạt động của hook `use()`
- Biết cách sử dụng `use()` để gọi API hoặc xử lý Promise
- So sánh `use()` với `useEffect` và `useState`
- Biết khi nào nên dùng `use()` trong thực tế

---

### 1. `use()` là gì?

`use()` là một hook mới trong React 19 cho phép bạn sử dụng giá trị từ Promise trực tiếp trong component mà không cần `useEffect` hay `useState`.

> Nó hoạt động tốt trong môi trường hỗ trợ **React Server Components** và **Suspense**.

---

### 2. Cách sử dụng `use()`

#### Ví dụ: Gọi API để lấy thông tin người dùng

```jsx
import { use } from 'react';

const getUser = () => fetch('/api/user').then(res => res.json());

export default function UserComponent() {
  const user = use(getUser());
  return <p>Xin chào, {user.name}</p>;
}
```

- Không cần `useEffect` để gọi API
- Không cần `useState` để lưu dữ liệu
- Không cần xử lý trạng thái tải (`loading`) thủ công

---

### 3. So sánh với `useEffect`

| Tiêu chí | `useEffect` | `use()` |
|----------|-------------|---------|
| Gọi API | Phải dùng thêm `useState`, `loading`, `error` | Gọn gàng, tự động |
| Dọn dẹp tài nguyên | Có thể dùng `return () => {}` | Không hỗ trợ |
| Tương tác DOM | Có thể dùng | Không hỗ trợ |
| Phù hợp với Server Components | Không | Có |

---

### 4. Lưu ý khi dùng `use()`

- Chỉ hoạt động trong **React Server Components** hoặc component được bao bởi `Suspense`.
- Không dùng cho các hiệu ứng phụ như DOM manipulation, event listeners.
- Không thay thế hoàn toàn `useEffect`.

---

### 6. Kết luận

Hook `use()` là một bước tiến lớn trong React 19, giúp đơn giản hóa việc xử lý dữ liệu bất đồng bộ. Tuy nhiên, bạn vẫn cần `useEffect` cho các tác vụ liên quan đến DOM hoặc tài nguyên bên ngoài.

---

<!-- 
## Các Câu Hỏi Thường Gặp Khi Phỏng Vấn (FAQ)

### Câu 1: ReactJS có những chiến lược nào để tối ưu hóa SEO? -->





<!-- *Bài tiếp theo [RS141 SeO và Performance](/lesson/session/session_141_Performance.md)* -->