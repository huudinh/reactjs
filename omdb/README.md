### III. Các hook sẽ sử dụng

<a name="sass"></a>
**1 Cài đặt sass**

  ```
  npm i sass
  ```
- SASS/SCSS là một chương trình tiền xử lý CSS (CSS preprocessor). Nó giúp bạn viết CSS theo cách của một ngôn ngữ lập trình, có cấu trúc rõ ràng, rành mạch, dễ phát triển và bảo trì code hơn. Ngoài ra nó có rất nhiều các thư viện hỗ trợ kèm theo giúp bạn viết code CSS một cách dễ dàng vào đơn giản hơn. Có rất nhiều loại CSS Preprocessor trong đó bao gồm SASS, Stylus hay LESS.
  
- CSS Preprocessors là ngôn ngữ tiền xử lý CSS. Là một ngôn ngữ kịch bản mở rộng của CSS và được biên dịch thành cú pháp CSS giúp bạn viết CSS nhanh hơn và có cấu trúc rõ ràng hơn. CSS Preprocessor có thể giúp bạn tiết kiệm thời gian viết CSS, dễ dàng bảo trì và phát triển CSS.

<a name="clsx"></a>
**2 Cài đặt clsx**
```
npm i clsx hoặc yarn clsx
```
- Giúp chúng ta thay đổi className một cách linh động và hỗ trợ rất nhiều trường hợp

<a name="axios"></a>
**3 Cài đặt axios**
```
npm install axios
```
- Axios là một thư viện máy khách HTTP dựa trên các Promise. Nó làm cho việc gửi các yêu cầu HTTP không đồng bộ đến các điểm cuối REST dễ dàng hơn và giúp bạn thực hiện các hoạt động CRUD.

- Read API
```
axios
  .get(`${API_BASE_URL}/users`)
  .then(response => {
      return response.data;
  })
  .then(data => {
      console.log(data)
  })
  .catch(error => {
      // console.log(error.response.data.error)
  })
```

// Delete API
```
export const handleDelete = async (id) => {
    // const id = 2;
    await axios.delete(`${API_BASE_URL}/users/${id}`)
        .then(response => {
            console.log(`Deleted post with ID ${id}`);
        })
        .catch(error => {
            console.error(error);
        });
};
```

react-js-pagination
**4 Cài đặt react-js-pagination**
```
npm install react-js-pagination
```