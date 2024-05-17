# React + Vite

Create React App (hoặc CRA) từng là một công cụ tiêu chuẩn để tạo ứng dụng React trang đơn. Tuy nhiên, dự án này đã dừng phát triển và đã trở nên lỗi thời. Do đó, một giải pháp hiện đại hơn là Vite.

### Template React của Vite

Vitejs.dev được coi một lựa chọn thay thế tuyệt vời cho CRA. Bạn nên sử dụng Vite vì đây là giải pháp hiện đại và nhanh chóng hơn.

### Cài đặt

Để bắt đầu với Vite, bạn cần đảm bảo rằng NodeJS đã được cài đặt trên máy tính.

Sau đó, mở cửa sổ terminal và chạy lệnh sau:

```
npm create vite@latest
```

Lệnh này sẽ mở một câu hỏi tương tác yêu cầu bạn chọn react (hoặc react-ts nếu bạn muốn có hỗ trợ TypeScript).

### npm run dev

Đây là câu lệnh chính mà bạn sẽ sử dụng khi bắt đầu làm việc trên ứng dụng.

`npm run dev` sẽ khởi chạy một máy chủ web phát triển, bạn có thể truy cập vào đó bằng cách truy cập localhost:5173. Tuy nhiên, cổng có thể khác nên hãy kiểm tra trong terminal của bạn.

### npm run build

Khi bạn đã sẵn sàng triển khai dự án, hãy chạy lệnh npm run build, lệnh này sẽ tạo ra phiên bản tối ưu hóa của ứng dụng.

Lệnh này sẽ thu gọn tất cả các tập lệnh và thực hiện một số tối ưu hóa trước khi triển khai ứng dụng. Các file tối ưu hóa sẽ được đặt trong một thư mục mới có tên là dist.

### npm run preview

Lệnh này cho phép bạn xem trước phiên bản sản xuất đã triển khai trên máy tính. Lệnh này thường được dùng để kiểm tra cách phiên bản sản xuất hoạt động mà không chạy code.

### npm run lint

Lệnh `lint` sẽ kiểm tra chất lượng code để phát hiện những lỗi thông thường và đề xuất cải thiện.

### Cấu trúc file

Theo mặc định, Vite tạo ra cấu trúc thư mục sau:

```
.
├── src
└── public
```

Thư mục `src/` chứa component `<App />`, nơi chứa tất cả các tập lệnh và câu lệnh định kiểu.

Thư mục `public/` chứa file `index.html` và là nơi chứa tất cả hình ảnh và phông chữ (nếu có).

### Component `<App />`

Điểm khởi đầu của ứng dụng là file `src/main.jsx`. File này thêm component `App` từ `App.jsx`.

File main.jsx chứa đoạn code sau:

```
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

Từ đoạn code trên, chúng ta có thể suy luận rằng `index.html` chứa `<div id="root"></div>`, bạn có thể kiểm tra bằng cách xem file `public/index.html`. Nó cũng kích hoạt chế độ nghiêm ngặt của React

### Bạn nên thêm các component mới vào đâu?

Việc chọn cấu trúc thư mục phù hợp là một chủ đề được tranh luận khá nhiều, nó phụ thuộc vào một số yếu tố như sở thích cá nhân, độ phức tạp của dự án cũng như loại dự án.

#### Dự án kích thước siêu nhỏ

Đề cập đến các dự án có ít hơn khoảng 5 component.

Trong những trường hợp này, bạn không cần tạo bất kỳ thư mục nào.

Bạn có thể tạo các component mới trong thư mục `src/`; ví dụ, thư mục `src/` sẽ như sau:

```
.
└── src
    ├── App.js
    ├── Navbar.js
    └── Footer.js
```

Bạn có thể bắt đầu với cấu trúc thư mục này và sau đó chuyển đổi thành các thư mục khi dự án dần lớn hơn.

#### Dự án kích thước nhỏ

Giả sử bạn đang làm việc trên một dự án nhỏ, các dự án chứa ít hơn khoảng 20 component. Khi đó, bạn có thể nhóm component theo tính năng, ví dụ:

```
.
└── src
    ├── products
    │   ├── Product.js
    │   ├── ProductDetails.js
    │   └── ProductQuantity.js
    ├── store
    │   ├── StoreFront.js
    │   └── Checkout.js
    └── user
        ├── User.js
        └── Profile.js
```

Dự án kích thước trung bình

Với dự án kích thước trung bình, độ phức tạp ngày càng tăng bên cạnh component; ví dụ, bạn có thể cần nhiều file helper, file classes, v.v.

Trong trường hợp đó, việc tuân theo khuyến nghị từ các dự án kích thước nhỏ và di chuyển tất cả các component vào thư mục components/ là hợp lý. Bạn sẽ có không gian cho các thư mục khác như helpers/ hoặc classes/. Ví dụ:

```
.
└── src
    ├── components
    │   ├── products
    │   │   ├── Product.js
    │   │   ├── ProductDetails.js
    │   │   └── ProductQuantity.js
    │   └── store
    │       ├── StoreFront.js
    │       └── Checkout.js
    ├── helpers
    │   ├── date.js
    │   └── currency.js
    └── classes
        └── backend.js
```

#### Dự án kích thước lớn

Hầu như không có cấu trúc thư mục nào là tiêu chuẩn để áp dụng cho phần lớn các dự án kích thước lớn.

Các dự án lớn thường sẽ có yêu cầu cụ thể, do đó, việc quyết định cấu trúc thư mục sẽ do lập trình viên quyết định.

Lưu ý rằng cấu trúc thư mục trên có thể phù hợp cho các dự án lớn. Nhưng với dự án lớn quản lý nhiều nội dung, trong đó trọng tâm là phần `admin/` và `client/`; bạn có thể xem xét chia thư mục components thành hai thư mục, một phần cho quản trị viên và một phần cho khách hàng. Đây chỉ là một đề xuất vì thực tế việc phân chia phụ thuộc vào điểm tương đồng và khác biệt giữa hai phần.

#### Những khuyến nghị chung

- Tránh viết nhiều câu lệnh lồng nhau vì nó khiến việc tái cấu trúc và thêm file trở nên khó khăn hơn.
- Không dành quá nhiều thời gian để lựa chọn cấu trúc thư mục. Bạn có thể bắt đầu ngay và tái cấu trúc sau khi cần thiết.

### Tóm tắt

- Bắt đầu dự án mới với Vite bằng cách chạy lệnh: npm create vite@latest
- `npm run dev` sẽ khởi chạy máy chủ phát triển. Nó sử dụng phiên bản phát triển của React.
- `npm run build` sẽ xây dựng ứng dụng để triển khai. Nó sử dụng phiên bản sản xuất của React.
- `npm run lint` sẽ kiểm tra chất lượng code để phát hiện những lỗi thông thường và đề xuất cải thiện.
- Điểm khởi đầu của ứng dụng là file src/main.jsx và sau đó là file src/App.jsx.


*Bài tiếp theo [RS128 Quản lý phiên bản Nodejs](/lesson/session/session_128_nodejs.md)*