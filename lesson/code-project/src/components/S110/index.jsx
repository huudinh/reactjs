const Buttons = {
  Default: function (props) {
    return <button
      className="btn-default">
      {props.children}
    </button>;
  },
  Outline: function (props) {
    return <button
      className="btn-outline">
      {props.children}
    </button>;
  }
}

// Sau đó, bạn có thể sử dụng các 
// component trên như sau
{
  <>

    <Buttons.Default>Login</Buttons.Default>
    <Buttons.Outline>Register</Buttons.Outline>

  </>
}

// Lý do tại sao điều này hoạt động là vì 
// chúng sẽ được chuyển đổi thành các 
// cuộc gọi React.createElement như sau:

React.createElement(Buttons.Default, {}, "Login");
React.createElement(Buttons.Outline, {}, "Register");

