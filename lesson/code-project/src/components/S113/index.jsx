import React, { useCallback } from 'react';

function MyComponent() {
  const memoizedCallback = useCallback(
    () => {
      // Đây là hàm callback bạn muốn ghi nhớ
      doSomethingExpensive();
    },
    [], // Đây là mảng các phụ thuộc
  );

  return (
    <div>
      <button onClick={memoizedCallback}>Click me</button>
    </div>
  );
}

