# RS136 Git cơ bản

### Git là gì?

Git là một hệ thống kiểm soát phiên bản phân tán (DVCS - Distributed Version Control System) được sử dụng để theo dõi và quản lý thay đổi trong mã nguồn của dự án. Nó cho phép các nhà phát triển làm việc song song trên cùng một dự án, theo dõi các thay đổi được thực hiện, hợp nhất các thay đổi từ các nhánh khác nhau và quay lại các phiên bản trước đó nếu cần thiết.

### Git SCM là gì

Git SCM là viết tắt của Git Source Code Management, ám chỉ việc sử dụng hệ thống kiểm soát phiên bản Git để quản lý mã nguồn trong các dự án phát triển phần mềm.

### GitHub là gì?

GitHub là một dịch vụ lưu trữ kho lưu trữ đám mây được xây dựng trên nền tảng hệ thống kiểm soát phiên bản Git. Nó cung cấp cho các nhà phát triển phần mềm một nền tảng để lưu trữ, quản lý và chia sẻ mã nguồn của họ.

### Tính năng chính của GitHub

GitHub cho phép bạn lưu trữ kho lưu trữ mã nguồn của bạn một cách an toàn và miễn phí cho các dự án mã nguồn mở.

GitHub cung cấp giao diện web và giao diện dòng lệnh (CLI) để quản lý kho lưu trữ của bạn, bao gồm theo dõi thay đổi, tạo nhánh, hợp nhất và quay lại các phiên bản trước đó

GitHub cho phép nhiều nhà phát triển làm việc trên cùng một dự án đồng thời. Bạn có thể tạo pull request để đề xuất thay đổi cho kho lưu trữ và cộng tác viên khác có thể xem xét và hợp nhất thay đổi của bạn.

GitHub cho phép bạn chia sẻ mã nguồn của bạn với cộng đồng. Bạn có thể đặt kho lưu trữ của bạn ở chế độ công khai để mọi người có thể xem, tải xuống và đóng góp

GitHub cung cấp các tính năng để theo dõi tiến trình dự án, bao gồm theo dõi vấn đề, quản lý bảng Kanban và tạo wiki.

GitHub là một nền tảng tuyệt vời để phát triển cộng đồng xung quanh dự án của bạn. Bạn có thể thu hút người đóng góp mới, nhận phản hồi về mã của bạn và tìm kiếm sự giúp đỡ khi cần thiết.

### Để sử dụng github chúng ta cần gì

Cài đặt git scm https://git-scm.com/

Cài đặt VS-Code https://code.visualstudio.com/

Cài đặt Extension cho VS-Code: git Autoconfig

Đăng ký tài khoản github: https://github.com/

### Tạo Repository trên github

Chọn New repository

Đặt tên cho Project (Repository name)

Xác nhận (Create respository)

### Khai báo / thư mục code lên Repository

Chột phải thư mục chứa code chọn Open In Integrated Terminal

Gõ các lệnh sau :

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/huudinh/addbook.git
git push -u origin main 
```

Trong đó https://github.com/huudinh/addbook.git là link đến Repository của bạn

### Tạo git Page

Vào repo chứa project chọn setting

Chọn Pages bên menu trái

Source chọn Branch: main / click save

Your site is ready to be published at https://huudinh.github.io/addbook/

Chờ 5 phút để hệ thống update 

### Lệnh tạo nhánh

Tạo nhánh

```
git branch <branch>
```

Tạo nhánh và chuyển nhánh: 

```
git checkout -b <branch> 
```

### Up code lên git trong nhóm nhiều người

Chuyển sang nhánh của mình

```
git checkout <branch>
```

Commit code

```
git add .
git commit - m 'message'
```

Merge code from main / Push 

```
git fetch origin
git merge --no-ff origin/main
git push origin <branch>
```

Trong đó <branch> là tên nhánh của bạn

### Lấy code mới nhất về nhánh của mình

Lấy code về Branch

```
git fetch origin
git merge --no-ff origin/main
```

### Đồng bộ nhánh từ Repo về local

```
git pull origin dev-dinh
```

### Khôi phục liệu khi chưa push

```
git restore .
```

### Xóa nhánh local & server

Hiển thị danh sách cách nhánh

```
git branch
```

Nếu bạn muốn xóa một nhánh, đầu tiên cần checkout sang nhánh khác nhánh cần xóa

```
git checkout main
```

Cú pháp xóa nhánh ở local (giả sử bạn muốn xóa nhánh dev-dinh)

```
git branch -D dev-dinh
```

Cú pháp xóa nhánh ở server

```
git push origin --delete dev-dinh
```

*Bài tiếp theo [RS137 Yup](/lesson/session/session_137_yup.md)*