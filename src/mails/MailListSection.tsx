import { useContext } from "react";
import { DataStoreContext } from "../context/DataStoreContext";

export const MailListSection = (): JSX.Element => {
  const { state, dispatch } = useContext(DataStoreContext);

  const getMails = () => {
    // useEffect関数内でAPIコール -> dispatchのpayloadに渡す。
    // (動作検証用なので今回はbuttonクリックをトリガーにする)
    dispatch({ type: "FETCH_MAILS", payload: ["NEW MAILS"] });
  };

  return (
    <div>
      <h1>MailListSection</h1>
      <p>{state.mails.join(", ")}</p>
      <button onClick={getMails}>GET NEW MAIL</button>
    </div>
  );
};
