import { useContext } from "react";
import { DataStoreContext } from "../context/DataStoreContext";

export const MessageListSection = (): JSX.Element => {
  const { state, dispatch } = useContext(DataStoreContext);
  const getMessages = () => {
    // useEffect関数内でAPIコール -> dispatchのpayloadに渡す。
    // (動作検証用なので今回はbuttonクリックをトリガーにする)
    dispatch({ type: "FETCH_MESSAGES", payload: ["NEW MESSAGES"] });
  };
  return (
    <div>
      <h1>MessageListSection</h1>
      <p>{state.messages.join(", ")}</p>
      <button onClick={getMessages}>GET NEW MESSAGES</button>
    </div>
  );
};
