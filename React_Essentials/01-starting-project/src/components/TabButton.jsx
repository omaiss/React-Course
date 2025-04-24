export default function TabButton({ children, click, isSelected }) {
    // function handleClick() {
    //     console.log('Salam World!');
    // }

    return (
        // props.children the children will have the text between
        // componenets <Component> TEXT </Component> "TEXT" is children
        <ul>
            <button className={isSelected ? 'active' : undefined} onClick={click}>{children}</button>
        </ul>
        // or use object destructuring {variablename}
    );
}
