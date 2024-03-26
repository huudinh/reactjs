export default function Navbar(props) {
    const {children, ...rest} = props;
    console.log({ ...rest });
}

{/* <Navbar tabIndex="2" className="navbar" /> */}