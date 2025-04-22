export default function TabButton({children, click}) {
    // function handleClick() {
    //     console.log('Salam World!');
    // }

     return (
        // props.children the children will have the text between
        // componenets <Component> TEXT </Component> "TEXT" is children
        <ul>
            <button onClick={click}>{children}</button>
        </ul>
        // or use object destructuring {variablename}
    );
}
