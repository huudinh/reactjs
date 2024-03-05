![Create-HTML-1](images/react-dom.png) 

# RS5 React DOM

ReactDOM là sự kết hợp giữa React và DOM.

React tạo ra phiên bản ảo (Virtual DOM) của Giao diện người dùng (User Interface - UI). ReactDOM là thư viện giúp cập nhật DOM một cách hiệu quả dựa trên Virtual DOM.

Virtual DOM được sử dụng để xác định các phần của UI cần được cập nhật và sau đó tập hợp những thay đổi này lại. ReactDOM nhận các hướng dẫn đó từ React và sau đó cập nhật DOM một cách hiệu quả.

### Tại sao ReactDOM là một thư viện độc lập?

Vài năm trước đây, React và ReactDOM là hai phần của cùng một thư viện tên là React. Sau đó, chúng đã được tách ra thành hai thư viện độc lập là React và ReactDOM để tạo điều kiện cho việc phát triển React Native.

React Native là sự kết hợp giữa React và ứng dụng native. React là thư viện cho phép bạn viết UI có thể tái sử dụng và:
    
- ReactDOM làm cho UI đó hiển thị trên trình duyệt.

- React Native làm cho UI đó hiển thị trên ứng dụng native.

Điều quan trọng cần ghi nhớ là thư viện React không liên quan gì đến trình duyệt web:

- ReactDOM làm cho React có thể hoạt động và tương tác với trình duyệt web (ví dụ: Firefox, Chrome, Safari, Edge, v.v.).

- React Native làm cho React có thể hoạt động và tương tác với ứng dụng native (ví dụ: native android, native iOS).

### Reconciliation

React tạo ra phiên bản ảo của UI trong bộ nhớ, sau đó ReactDOM nhận và đồng bộ hóa UI (và các thay đổi trong đó) vào DOM. Quá trình này được gọi là reconciliation.

Điều này giúp bạn làm việc với React một cách thuận tiện và tự động.

### Tóm lại

- ReactDOM là sự kết hợp giữa React và DOM.

- ReactDOM khác biệt với React vì bạn có thể viết React cho các ứng dụng native.

- Reconciliation là quá trình đồng bộ hóa DOM ảo với DOM thực.

*Bài tiếp theo [Use ReactDOM](/lesson/session/session_06_use_react_dom.md)*
