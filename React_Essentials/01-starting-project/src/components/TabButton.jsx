export default function TabButton({children, click}) {
    // function handleClick() {
    //     console.log('Salam World!');
    // }

     return (
        // props.children the children will have the text between
        // componenets <Component> TEXT </Component> "TEXT" is children
        <li>
            <button onClick={click}>{children}</button>
        </li>
        // or use object destructuring {variablename}
    );
}
