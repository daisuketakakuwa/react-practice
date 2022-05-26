import { useContext } from "react";
import { DataStoreContext } from "../context/DataStoreContext";

export const AccountListSection = (): JSX.Element => {
  const { state, dispatch } = useContext(DataStoreContext);
  const getAccounts = () => {
    // useEffect関数内でAPIコール -> dispatchのpayloadに渡す。
    // (動作検証用なので今回はbuttonクリックをトリガーにする)
    dispatch({ type: "FETCH_ACCOUNTS", payload: ["NEW ACCOUNTS"] });
  };
  return (
    <div>
      <h1>AccountListSection</h1>
      <p>{state.accounts.join(", ")}</p>
      <button onClick={getAccounts}>GET NEW ACCOUNTS</button>
    </div>
  );
};
