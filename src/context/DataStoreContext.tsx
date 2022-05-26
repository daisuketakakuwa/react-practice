/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { useReducer, createContext } from "react";

// useReducerで生成する「参照用のstate」の型
type DataStore = {
  isLoading: boolean;
  isError: boolean;
  accounts: string[];
  mails: string[];
  messages: string[];
};
// dispatch関数の第2引数に渡す「action」の型
type ReducerAction = {
  type: string;
  payload: any;
};
// createContext()のデフォルト値オブジェクトにasで割り当てる。
type DataStoreContext = {
  state: DataStore;
  // dispatchの引数オブジェクトの型を、React.Dispatch<XXXXX> に定義する。
  dispatch: React.Dispatch<ReducerAction>;
};

// reducer関数：更新用dispatchトリガーで、stateを更新する処理。
// 引数:   1.state 2.action(dispatch関数の引数)
// 戻り値: 更新後の新しいstate
const reducerFunc = (state: DataStore, action: ReducerAction) => {
  // action.typeの値で更新内容を切り替える。
  switch (action.type) {
    case "FETCH_ACCOUNTS":
      return {
        ...state,
        isLoading: true,
        accounts: action.payload,
      };
    case "FETCH_MAILS":
      return {
        ...state,
        isLoading: true,
        mails: action.payload,
      };
    case "FETCH_MESSAGES":
      return {
        ...state,
        isLoading: true,
        messages: action.payload,
      };
    // 更新前のstateをそのまま返す。
    default:
      return state;
  }
};
const initialState: DataStore = {
  isLoading: false,
  isError: false,
  accounts: ["INITIAL ACCOUNT"],
  mails: ["INITIAL_MAIL"],
  messages: ["INITIAL_MESSAGE"],
};

// createContextはReactフックではないため、コンポーネント外で使用可能
// as でオブジェクトの型チェックをクリアする。
export const DataStoreContext = createContext({} as DataStoreContext);

export const DataStoreContextProvider = (props): JSX.Element => {
  // useReducerで生成した「参照用state」と「更新用dispatch」を、contextに渡す。
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <DataStoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </DataStoreContext.Provider>
  );
};
