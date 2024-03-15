![Create-HTML-1](images/custom-hooks.png) 

# RS96 Custom Hooks

Chúng ta đã tìm hiểu về những hook được cung cấp bởi React `useState`, `useEffect`. Ngoài ra, React còn cung cấp một số hook khác. Tuy nhiên, điều thú vị là bạn có thể xây dựng các hook tùy chỉnh (custom hook) của riêng mình.

### Lợi ích

Xây dựng các hook riêng cho phép bạn:

- dễ dàng tái sử dụng code trong nhiều component, giúp việc chia sẻ chức năng chung trở nên dễ dàng hơn.
- xây dựng các trừu tượng làm cho một số logic phức tạp dễ đọc hơn.

### Cách thức hoạt động

Hook tùy chỉnh là một hàm JavaScript có tên bắt đầu bằng use. Hàm này có thể gọi các hook khác (ví dụ: useEffect, useState, v.v.).

### Tạo hook tùy chỉnh đầu tiên

Hãy bắt đầu với một hook làm công việc đơn giản là in ra: Hello World!.

Đầu tiên, chúng ta định nghĩa hook tùy chỉnh (hãy nhớ tên bắt đầu bằng use):

```
function useHelloWorld() {
    console.log("Hello World!");
}
```

và sau đó bạn có thể sử dụng nó trong bất kỳ component nào 

```
function App() {
    useHelloWorld();
}
```

Mỗi khi component App được hiển thị, bạn sẽ thấy Hello World! được in ra trên console.

### Tóm lại

- Xây dựng các hook riêng cho phép bạn:
  - dễ dàng tái sử dụng code trong nhiều component, giúp cho việc chia sẻ chức năng chung trở nên dễ dàng hơn.
  - xây dựng các trừu tượng làm cho một số logic phức tạp dễ đọc hơn.
- Hook tùy chỉnh là một hàm JavaScript có tên bắt đầu bằng use.
- Hook tùy chỉnh có thể gọi các hook khác (ví dụ: useEffect, useState, v.v.).

*Bài tiếp theo [RS97 Custom Hooks useEffect](/lesson/session/session_097_custom_hooks_use_effect.md)*