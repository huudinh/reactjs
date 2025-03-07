
![Create-HTML-1](images/components.jpg) 

# RS48 Thao tác với mảng bất biến

Trong bài học này, chúng ta sẽ tìm hiểu cách cập nhật và xóa các phần tử từ mảng theo cách bất biến.

### Cập nhật phần tử (bất biến)

Để cập nhật một hoặc nhiều phần tử trong mảng, bạn có thể sử dụng phương thức .map để trả về một bản sao của mảng và đồng thời sửa đổi một hoặc nhiều phần tử. Ví dụ:

```
const grades = [10, 20, 18, 14];
// change 18 to 17
const updatedGrades = grades.map(grade => {
    if (grade === 18){
        return 17;
    }
    // in all other cases, keep it as it was
    return grade;
});
console.log(updatedGrades); //[10, 20, 17, 14]
```

Bạn cũng có thể cập nhật nhiều phần tử, ví dụ: cộng `1` cho tất cả các điểm thi thấp hơn `10`:

```
const grades = [10, 8, 9, 4, 16];
// add 1 to all grades below 10
const updatedGrades = grades.map(grade => {
    if (grade < 10){
        return grade + 1;
    }
    // in all other cases, keep it as it was
    return grade;
});
console.log(updatedGrades); //[10, 9, 10, 5, 16]
```

### Xóa phần tử (bất biến)

Bạn có thể xóa phần tử một cách bất biến bằng cách sử dụng phương thức `slice` (`slice` chứ không phải `splice`). `slice` là phương thức bất biến trong khi splice là phương thức thay đổi mảng.

```
const grades = [10, 8, 9, 4, 16];

// remove the first grade
// think of it as: get all grades except the first one
const subset1 = grades.slice(1); //start from position 1
console.log(subset1); // [8, 9, 4, 16]

// remove the last 2 grades
// think of it as: get all grades except the last 2
// so start from 0 and stop after 5 - 2 = 3 items
const subset2 = grades.slice(0, grades.length - 2); 
console.log(subset2); // [10, 8, 9]
```

Đôi khi việc sử dụng `.filter` sẽ dễ dàng hơn bởi nó trả về một tập con của mảng gốc dựa trên điều kiện, ví dụ:

```
const grades = [10, 8, 9, 4, 16];

// return all grades >= 10
const subset1 = grades.filter(grade => grade >= 10);
console.log(subset1); // [10, 16]

// remove the 2nd grade
const subset2 = grades.filter(grade => grade !== 8);
console.log(subset2); // [10, 9, 4, 16]
```

Lưu ý rằng ví dụ thứ hai sẽ bỏ qua tất cả các điểm thi là `8`. Nếu bạn chỉ muốn bỏ qua phần tử thứ hai, bạn có thể sử dụng đối số thứ hai mà bạn nhận được với `filter`, đó là chỉ số.

```
const grades = [10, 8, 9, 4, 16];

const subset = grades.filter((grade, index) => index !== 1);
console.log(subset); // [10, 9, 4, 16];
```

### Tóm lại

- `.map` được sử dụng để cập nhật mảng theo cách bất biến.
- `.slice` là phương thức bất biến, trong khi `.splice` là phương thức thay đổi mảng.
- `.slice` được sử dụng để xóa các phần tử khỏi mảng theo cách bất biến.
- `.filter` được sử dụng để xóa các phần tử khỏi mảng theo cách bất biến.

### Bài tập

**Câu 1:** Chúng ta sử dụng phương thức nào để cập nhật phần tử cho mảng bất biến. Tại sao?

**Câu 2:** Chúng ta sử dụng phương thức nào xóa phần tử cho mảng bất biến. Tại sao?

*Bài tiếp theo [RS49 Array trong JSX](/lesson/session/session_049_jsx_array.md)*