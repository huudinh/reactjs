# RS141 SeO và Performance

## Tối ưu hóa SEO và Hiệu suất trong ReactJS

Tối ưu hóa công cụ tìm kiếm (SEO) và hiệu suất là hai yếu tố cực kỳ quan trọng đối với bất kỳ ứng dụng web nào, và ReactJS cũng không ngoại lệ. Mặc dù ReactJS là một thư viện mạnh mẽ để xây dựng giao diện người dùng, nhưng nếu không được tối ưu hóa đúng cách, ứng dụng của bạn có thể gặp khó khăn trong việc xếp hạng trên các công cụ tìm kiếm và mang lại trải nghiệm người dùng không tốt.

Dưới đây là một số chiến lược hiệu quả để tối ưu hóa SEO và hiệu suất trong ReactJS:

### I. Tối ưu hóa SEO trong ReactJS

**1. Sử dụng Server-Side Rendering (SSR) hoặc Static Site Generation (SSG)**

  * **SSR (Next.js, Remix):** Thay vì để trình duyệt render toàn bộ nội dung, SSR sẽ render trang web trên máy chủ và gửi một HTML đầy đủ đến trình duyệt. Điều này giúp các bot của công cụ tìm kiếm dễ dàng thu thập và lập chỉ mục nội dung của bạn hơn.
  * **SSG (Gatsby, Next.js):** SSG tạo ra các tệp HTML tĩnh tại thời điểm build. Phương pháp này cực kỳ hiệu quả cho các trang web có nội dung ít thay đổi, mang lại tốc độ tải trang cực nhanh và khả năng SEO vượt trội.

**2. Sử dụng thư viện `react-helmet` (hoặc `react-helmet-async`)**

  * Cho phép bạn quản lý các thẻ meta, title, description, và các thẻ khác trong `<head>` của tài liệu HTML một cách linh hoạt. Điều này giúp bạn tùy chỉnh các thông tin quan trọng cho SEO trên từng trang.
  * Cung cấp một cách tiếp cận đơn giản và hiệu quả để đảm bảo mỗi trang trong ứng dụng React của bạn có các thẻ meta độc đáo và phù hợp.

**3. Tối ưu hóa cấu trúc URL**

  * Sử dụng các URL có ý nghĩa, dễ đọc và chứa từ khóa liên quan đến nội dung trang.
  * Ví dụ: `/san-pham/dien-thoai-iphone-15` tốt hơn so với `/products?id=123`.
  * Hạn chế sử dụng các tham số không cần thiết trong URL.

**4. Sơ đồ trang web (Sitemap)**

  * Tạo và gửi sơ đồ trang web (`sitemap.xml`) đến Google Search Console và các công cụ tìm kiếm khác.
  * Sơ đồ trang web giúp các bot tìm kiếm dễ dàng khám phá và lập chỉ mục tất cả các trang quan trọng trên trang web của bạn.

**5. Đánh dấu dữ liệu có cấu trúc (Structured Data)**

  * Sử dụng JSON-LD để cung cấp thông tin chi tiết về nội dung trang web của bạn cho các công cụ tìm kiếm.
  * Ví dụ: Đánh dấu các bài đánh giá, sản phẩm, sự kiện, v.v. để hiển thị dưới dạng Rich Snippets trên trang kết quả tìm kiếm.

**6. Xử lý lỗi 404**

  * Tạo một trang lỗi 404 tùy chỉnh và cung cấp các liên kết hữu ích để người dùng có thể quay lại các trang khác trên trang web của bạn.
  * Đảm bảo rằng ứng dụng của bạn trả về mã trạng thái HTTP 404 khi người dùng truy cập một URL không tồn tại.

### II. Tối ưu hóa Hiệu suất trong ReactJS

**1. Tối ưu hóa tải trang (Bundle Splitting & Lazy Loading)**

  * **Code Splitting:** Chia ứng dụng thành các chunk nhỏ hơn và chỉ tải những chunk cần thiết cho trang hiện tại. Điều này giúp giảm kích thước của gói JavaScript ban đầu và cải thiện thời gian tải trang.
  * **Lazy Loading:** Sử dụng `React.lazy` và `Suspense` để tải động các component khi chúng được yêu cầu, thay vì tải tất cả cùng một lúc.
  * **Ví dụ:**
    ```jsx
    import React, { Suspense, lazy } from 'react';

    const OtherComponent = lazy(() => import('./OtherComponent'));

    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        </div>
      );
    }
    ```

**2. Giảm thiểu re-renders không cần thiết**

  * **`React.memo()`:** Bọc các component bằng `React.memo()` để ngăn chúng re-render nếu props không thay đổi.
  * **`useCallback()` và `useMemo()`:**
      * `useCallback()`: Ghi nhớ (memoize) một hàm để nó không được tạo lại ở mỗi lần re-render, hữu ích khi truyền các hàm xuống các component con sử dụng `React.memo()`.
      * `useMemo()`: Ghi nhớ (memoize) một giá trị để nó chỉ được tính toán lại khi các dependency thay đổi.

**3. Tối ưu hóa hình ảnh**

  * **Nén hình ảnh:** Sử dụng các công cụ như `TinyPNG`, `ImageOptim` hoặc các plugin tự động trong quy trình build để giảm kích thước tệp hình ảnh.
  * **Định dạng hình ảnh hiệu quả:** Sử dụng các định dạng hiện đại như WebP.
  * **Tải động hình ảnh (Lazy Loading):** Chỉ tải hình ảnh khi chúng xuất hiện trên màn hình của người dùng.
  * **Sử dụng CDN (Content Delivery Network):** Phân phối hình ảnh từ máy chủ gần với người dùng nhất.

**4. Tối ưu hóa code và bundle**

  * **Loại bỏ các thư viện không sử dụng:** Dùng các công cụ như `Webpack Bundle Analyzer` để kiểm tra các thư viện trong bundle và loại bỏ những thư viện không cần thiết.
  * **Sử dụng tree-shaking:** Đảm bảo rằng các chức năng không được sử dụng từ các thư viện được loại bỏ khỏi bundle cuối cùng.

**5. Sử dụng Web Workers**

  * Di chuyển các tác vụ tính toán phức tạp ra khỏi main thread bằng cách sử dụng Web Workers.
  * Điều này giúp ngăn chặn việc UI bị đóng băng và cải thiện trải nghiệm người dùng, đặc biệt trên các thiết bị di động.

**6. Sử dụng công cụ Performance Profile**

  * **React DevTools:** Sử dụng tab Profiler trong React DevTools để theo dõi hiệu suất của các component, tìm ra các nguyên nhân gây re-render không cần thiết.
  * **Lighthouse (trong Chrome DevTools):** Chạy Lighthouse để phân tích toàn diện về hiệu suất, SEO, accessibility và các yếu tố khác.

### Kết luận

Tối ưu hóa SEO và hiệu suất trong ReactJS là một quá trình liên tục. Bằng cách áp dụng các chiến lược trên, bạn có thể xây dựng các ứng dụng ReactJS không chỉ có giao diện đẹp mắt và tốc độ cao, mà còn được xếp hạng tốt trên các công cụ tìm kiếm.

Hãy bắt đầu bằng việc xác định các vấn đề chính trong ứng dụng của bạn và áp dụng từng bước một để đạt được kết quả tốt nhất.



<!-- *Bài tiếp theo [RS141 SeO và Performance](/lesson/session/session_141_Performance.md)* -->