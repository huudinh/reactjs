# RS128 Quản lý phiên bản Nodejs

### NVM là gì

NVM, viết tắt của Node Version Manager, là một công cụ giúp quản lý các phiên bản của Node.js trên máy tính của bạn. Nó cho phép bạn dễ dàng cài đặt, chuyển đổi và quản lý các phiên bản khác nhau của Node.js trên cùng một hệ thống. Điều này rất hữu ích khi bạn làm việc trên các dự án khác nhau yêu cầu các phiên bản Node.js khác nhau.

Ví dụ, nếu bạn đang làm việc trên một dự án yêu cầu Node.js phiên bản 8, nhưng máy của bạn đang chạy Node.js phiên bản 14, bạn có thể sử dụng NVM để chuyển đổi giữa hai phiên bản này một cách dễ dàng.

### Cài đặt NVM trên Windows:

- Truy cập vào trang web chính thức của NVM. https://github.com/coreybutler/nvm-windows

- Tải xuống phiên bản mới nhất của NVM từ trang Releases.

- Sau khi tải xuống, chạy tệp cài đặt .exe và làm theo hướng dẫn trên màn hình.

- Khi cài đặt hoàn tất, mở Command Prompt hoặc PowerShell để sử dụng NVM.


### Cài đặt NVM trên MacOS và Linux

- Mở Terminal.

- Sử dụng trình quản lý gói của hệ điều hành để cài đặt cURL (nếu chưa có). Trên macOS (sử dụng Homebrew): brew install curl. Trên Ubuntu/Debian: sudo apt-get install curl. Trên CentOS/Fedora: sudo yum install curl.

- Sử dụng cURL để tải xuống script cài đặt NVM: curl -o- [link](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh) | bash. Lưu ý: Phiên bản “v0.39.0” có thể được thay đổi bằng phiên bản mới nhất.

### Các lệnh sau để quản lý phiên bản Node.js

- nvm install `<version>`: Cài đặt Node.js với phiên bản chỉ định.

- nvm use `<version>`: Chọn phiên bản Node.js để sử dụng.

- nvm list: Liệt kê các phiên bản Node.js đã được cài và phiên bản Node.js đang được sử dụng.