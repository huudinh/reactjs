# RS139 CRA To Vite

### Tại sao cần chuyển CRA sang Vite

Chuyển từ Create React App (CRA) sang Vite đang trở thành một xu hướng phổ biến trong cộng đồng phát triển web, đặc biệt khi làm việc với React. Dưới đây là một số lý do chính khiến việc chuyển từ CRA sang Vite được khuyến khích

### Tốc độ build và tải nhanh hơn

Vite: Vite sử dụng ES Modules và chỉ tải các module cần thiết trong quá trình phát triển, giúp tăng tốc độ khởi động dự án và làm cho trải nghiệm phát triển trở nên mượt mà hơn.

CRA: CRA sử dụng Webpack, một công cụ build mạnh mẽ nhưng đôi khi chậm khi dự án trở nên lớn hơn, đặc biệt là trong quá trình khởi động và reload.

Ví dụ: Một dự án React lớn với hàng trăm component và nhiều package phụ thuộc. Với CRA, việc khởi động có thể mất vài giây hoặc thậm chí vài phút. Trong khi đó, Vite có thể khởi động ngay lập tức hoặc chỉ sau vài giây.

### Hot Module Replacement (HMR) nhanh hơn

Vite: HMR của Vite được tối ưu hóa, chỉ tải lại các module thực sự thay đổi mà không cần phải reload toàn bộ trang.

CRA: HMR của CRA có thể chậm và không ổn định, đặc biệt khi làm việc với các dự án lớn.

Ví dụ: Khi chỉnh sửa một file CSS hoặc một component nhỏ trong ứng dụng, Vite chỉ tải lại đúng phần đã thay đổi, giúp phản hồi nhanh hơn và không làm gián đoạn luồng làm việc của bạn.

### Cấu hình đơn giản và linh hoạt

Vite: Cung cấp cấu hình đơn giản hơn so với CRA. Bạn có thể dễ dàng điều chỉnh và mở rộng cấu hình dự án của mình mà không cần tạo cấu trúc phức tạp.

CRA: Việc tuỳ chỉnh cấu hình trong CRA thường yêu cầu phải "eject" (tức là giải phóng cấu hình mặc định), dẫn đến việc quản lý cấu hình phức tạp hơn.

### Hỗ trợ tốt hơn cho TypeScript

Vite: Tích hợp TypeScript một cách hiệu quả hơn, với thời gian build nhanh hơn và trải nghiệm phát triển mượt mà hơn.

CRA: Mặc dù cũng hỗ trợ TypeScript, nhưng quá trình build có thể chậm hơn và đôi khi gặp lỗi không mong muốn.

Ví dụ: Khi làm việc với một dự án React sử dụng TypeScript, Vite cho phép build nhanh và cung cấp thông tin lỗi TypeScript một cách rõ ràng hơn.

### Các bước chuyển đổi

**1. Cài đặt Vite với lệnh**

```
npm install vite @vitejs/plugin-react --save-dev
```

**2. Gỡ CRA bằng câu lệnh**

```
npm uninstall react-scripts
```

**3. Sửa lại file package.json**

```
"scripts": {
    "start": "vite",
    "build": "vite build",
    "serve": "vite preview"
    },
```

**4. Đổi tên các file .js  => .jsx hoặc .tsx**

**5. Tạo tệp vite.config.js trong thư mục gốc của dự án Vite + React của bạn:**

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});
```

**6. Di chuyển file public/index.html vào thư mục gốc của dự án**

Sau khi di chuyển file index.html ra ngoài thư mục public ta xóa tất cả `%PUBLIC_URL% `

Nhúng src/index.js vào file index.html

```
<script type="module" src="/src/index.jsx"></script>
```

**7. Mọi việc chuyển đổi đã hoàn thành**

Bạn gõ câu lệnh chạy dự án

```
npm start
```

### Chú ý

Do bạn thay đổi đuôi js => jsx hoặc ts => tsx nên bạn cần sửa lại trong các file code.

Vite không sử dụng require để thêm các file media, bạn có thể thay thế bằng import

CRA => const imageHappy = require('../../assets/happy-react.svg').default;

Vite => import imageHappy from '../../assets/happy-react.svg';


<!-- *Bài tiếp theo [RS139 CRA To Vite](/lesson/session/session_139_CRA_to_Vite.md)* -->