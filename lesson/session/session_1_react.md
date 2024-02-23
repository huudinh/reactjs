## React là gì

### Giới thiệu về React

React là một thư viện JavaScript được xây dựng và chủ yếu được duy trì bởi Facebook (Meta).

### Định nghĩa ngắn gọn

React là một thư viện JavaScript được sử dụng để xây dựng Giao diện người dùng.

### Định nghĩa chi tiết 

React là một thư viện JavaScript tập trung vào việc xây dựng lớp giao diện của ứng dụng. Điều này có nghĩa là React chỉ chịu trách nhiệm cho việc hiển thị Giao diện Người dùng (văn bản, hộp văn bản, nút, v.v.) cũng như cập nhật giao diện người dùng mỗi khi có thay đổi.

Giả sử bạn đang xây dựng một trang web thương mại điện tử và muốn theo dõi số lượng sản phẩm trong giỏ hàng khi người dùng thêm và xóa sản phẩm. React giúp bạn dễ dàng chỉ định việc hiển thị số lượng sản phẩm trong giỏ hàng: `{items.length}`.

React sẽ hiển thị số lượng sản phẩm trong giỏ hàng và cập nhật số lượng mỗi khi có thay đổi.

React cũng cho phép tái sử dụng logic này trong phần khác của giao diện người dùng. Ví dụ, trên trang thanh toán, bạn có thể sử dụng lại logic tương tự mà không cần viết lại code.

Khi học React (hoặc bất kỳ thư viện frontend nào khác), mọi thứ có thể trở nên rất phức tạp hoặc yêu cầu tính kỹ thuật cao. Điều này hoàn toàn bình thường vì những thư viện đó chỉ phát huy vai trò hữu ích khi bạn xây dựng ứng dụng web kích thước trung bình hoặc lớn cùng với một số thành viên trong nhóm. Vì vậy, hãy ghi nhớ điều đó trong quá trình học và nhớ rằng mục tiêu cuối cùng là viết code dễ bảo trì và hiệu quả.

### React KHÔNG phải là framework

React là thư viện, không phải là framework.

Sự khác biệt giữa thư viện và framework là thư viện chỉ hỗ trợ trong một khía cạnh cụ thể. Trong khi đó, framework hỗ trợ trong nhiều khía cạnh. Hãy xem một ví dụ:

React là thư viện vì nó chỉ tập trung vào phần giao diện người dùng.
Angular, ngược lại, là framework vì nó quản lý các khía cạnh khác của ứng dụng bên cạnh giao diện người dùng (xử lý Dependency Injection, đóng gói CSS, v.v.)

### React không tập trung vào việc thiết kế giao diện người dùng 

Bản thân React không phải là một Thư viện Giao diện người dùng vì React không cung cấp các nút hoặc thẻ được thiết kế đẹp mắt.

React giúp bạn quản lý giao diện người dùng phức tạp nhưng không đi kèm với hệ thống thiết kế.

Việc làm cho giao diện trở nên đẹp mắt và thân thiện với người dùng là nhiệm vụ của bạn, bạn có thể lựa chọn sử dụng thư viện thiết kế hoặc CSS cho mục đích đó.

### Vậy còn Web Components thì sao?
Bạn có thể sử dụng Web Components để phát triển Ứng dụng Web; bạn không nhất thiết phải sử dụng React.

Bạn cũng có thể sử dụng React để bổ sung cho Web Components và ngược lại.

Ưu điểm chính của Web Components là khả năng hoạt động trên mọi nền tảng. Và ưu điểm của React là thời gian phát triển nhanh hơn Web Components. Điều này là do Web Components là công nghệ web tiêu chuẩn (được định nghĩa và triển khai bởi trình duyệt), trong khi React là một thư viện không được chuẩn hóa.

### Tóm lại

- React là một thư viện JavaScript được sử dụng để xây dựng Giao diện người dùng.

- React chỉ chịu trách nhiệm cho lớp Giao diện.

- React không phải là framework.


*Bài tiếp theo [Màn hình Regist](/chat/lesson/regist.md)*
