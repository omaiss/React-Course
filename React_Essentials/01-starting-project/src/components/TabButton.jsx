export default function TabButton(props) {
    return (
        // props.children the children will have the text between
        // componenets <Component> TEXT </Component> "TEXT" is children
        <li><button>{props.children}</button></li>
        // or use object destructuring {variablename}
    );
}
