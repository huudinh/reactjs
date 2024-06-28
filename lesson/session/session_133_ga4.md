# RS133 Cài đặt GA4 cho Reactjs

### GA4 là gì

Google Analytics 4 (GA4) là phiên bản mới nhất của công cụ Google Analytics. Nó được phát triển bởi Google và ra mắt vào ngày 14 tháng 10 năm 2020. GA4 có những sự khác biệt so với phiên bản trước đó, Universal Analytics:

GA4 tập trung vào thu thập dữ liệu từ các sự kiện thay vì dựa trên phiên. Điều này giúp bạn hiểu rõ hơn về hành trình của người dùng trên trang web hoặc ứng dụng của bạn.

GA4 có các chế độ kiểm soát quyền riêng tư và tính năng lập mô hình hành vi, giúp bạn hiểu sâu hơn về người dùng mà không cần đến các mô hình phức tạp.

GA4 kết nối trực tiếp với các nền tảng truyền thông để thúc đẩy hành động trên trang web hoặc ứng dụng.

### Đăng ký tài khoản

Đăng ký tài khoản GA4 tại https://analytics.google.com/

Sau khi đăng ký vào Quản trị / Tạo tài khoản

Sau khi tạo tài khoản vào Quản tri / Luồng dữ liệu / Xem hướng dẫn về thẻ / Cài đặt thủ công để lấy mã Tracking

Để tạo sự kiện khi đăng ký thành công bạn gọi Event sau

```
  gtag('event', 'submit', {
      event_category: 'Khách hàng khảo sát',
      event_label: 'ok' 
  });

```

### Cài đặt trên ReactJS

Cài đặt thư viện react-ga4 https://www.npmjs.com/package/react-ga4

```
npm i react-ga4
```

Thêm thư viện vào component

```
// Thêm GA4
import ReactGA from "react-ga4";  

// Khai báo GA
ReactGA.initialize('G-xxx');  
```

Gọi Event

```
//Call Gtag
ReactGA.event({
    category: 'Button',
    action: 'Dang_ky_thanh_cong',
    label: 'Khách hàng khảo sát'
});
```

<!-- *Bài tiếp theo [RS133 Cài đặt GA4 cho Reactjs](/lesson/session/session_133_ga4.md)* -->