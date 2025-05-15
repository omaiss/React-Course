
export default function UserInput({userLabel, inputFunc}){
    return(
        <>
            <label>{userLabel}</label>
            <input onChange={inputFunc} type="number"/>
        </>
    );
}