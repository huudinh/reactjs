# RS139 React Plugin WP với Vite

Bạn có thể sử dụng Vite để tạo một plugin WordPress với ReactJS. Vite là một công cụ build nhanh và hiệu quả cho các dự án JavaScript hiện đại.

### Bước 1: Tạo Plugin WordPress
Tạo thư mục cho plugin trong thư mục `wp-content/plugins` của trang WordPress của bạn. Giả sử bạn đặt tên plugin là `vite-react-plugin`.

### Bước 2: Tạo các tệp cần thiết
Trong thư mục plugin, tạo các tệp sau:
1. `vite-react-plugin.php`
2. `package.json`
3. `index.html`
4. `src/main.jsx`

#### 1. Nội dung của `vite-react-plugin.php`:
```php
<?php
/*
Plugin Name: Vite React Plugin
Description: A WordPress plugin using Vite and ReactJS
Version: 1.0
Author: Your Name
*/

function vite_react_plugin_render() {
    return '<div id="root"></div>';
}

function vite_react_plugin_enqueue_scripts() {
    // Enqueue the CSS file
    wp_enqueue_style(
        'vite-react-plugin-style',
        plugins_url('/style.css', __FILE__)
    );

    // Enqueue the JavaScript file
    wp_enqueue_script(
        'vite-react-plugin-script',
        plugins_url('/dist/assets/index.acbcc5ea.js', __FILE__),
        array(),
        '1.0',
        true
    );
}

add_shortcode('vite_react', 'vite_react_plugin_render');
add_action('wp_enqueue_scripts', 'vite_react_plugin_enqueue_scripts');
```

#### 2. Nội dung của `package.json`:
```json
{
  "name": "vite-react-plugin",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "vite": "^2.0.0",
    "@vitejs/plugin-react-refresh": "^1.0.0"
  }
}
```

#### 3. Nội dung của `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite React Plugin</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

#### 4. Nội dung của `src/main.jsx`:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Hello, Vite React Plugin!</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

### Bước 3: Cài đặt và cấu hình Vite
Chạy lệnh sau trong thư mục plugin của bạn để cài đặt các dependencies:
```
npm install
```

### Bước 4: Cấu hình Vite
Trong thư mục plugin, tạo một tệp `vite.config.js` với nội dung sau:
```js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist'
  }
});
```

### Bước 5: Xây dựng và chạy plugin
Chạy lệnh sau để khởi động dự án ở chế độ phát triển:
```
npm run dev
```
Để xây dựng dự án cho sản xuất, chạy lệnh:
```
npm run build
```

### Bước 6: Sử dụng Shortcode
Kích hoạt plugin từ bảng điều khiển WordPress của bạn. Sau đó, bạn có thể sử dụng shortcode `[vite_react]` trong các bài viết hoặc trang của mình. Bạn sẽ thấy thông báo "Hello, Vite React Plugin!" xuất hiện.

Nếu bạn gặp khó khăn hoặc có câu hỏi, hãy cho mình biết để hỗ trợ thêm!

*Bài tiếp theo [RS141 SeO và Performance](/lesson/session/session_141_Performance.md)*