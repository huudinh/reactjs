![Create-HTML-1](images/context.jpg) 

# RS112 Xuất nhiều component

### Nhiều hơn 1 component từ cùng một file

Bạn có thể xuất nhiều hơn 1 component từ cùng một file. Dưới đây là một ví dụ

```
// Button.js
import clsx from "clsx";

function ButtonPrimary(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("btn-primary", className);
    return <button className={classes} {...rest}>{children}</button>;
}

function ButtonSecondary(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("btn-secondary", className);
    return <button className={classes} {...rest}>{children}</button>;
}

export {ButtonPrimary, ButtonSecondary};
```

### Thêm nhiều component

Ở trên chúng ta đã xuất hai component: `ButtonPrimary` và `ButtonSecondary`.

Đây là named export chứ không phải default export. Dưới đây là cách bạn thêm chúng từ một file khác:

```
import {ButtonPrimary, ButtonSecondary} from "./Button.js";
```

### Tóm lại

- Nhìn chung, bạn thường sẽ xuất một (default) component trong mỗi file. Tuy nhiên, khi một file xuất nhiều component liên quan chặt chẽ đến nhau, việc xuất nhiều (named) component là chấp nhận được.


*Bài tiếp theo [RS113 React Router](/lesson/session/session_113_router.md)*