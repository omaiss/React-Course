export default function UserInput({ userLabel, inputFunc, inputName }) {
  return (
    <>
      <p>
        <label>{userLabel}</label>
        <input onChange={inputFunc} type='number' name={inputName} required/>
      </p>
    </>
  );
}
