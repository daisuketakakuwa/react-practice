import { DataStoreContextProvider } from "./context/DataStoreContext";
import { AccountListSection } from "./accounts/AccountListSection";
import { MailListSection } from "./mails/MailListSection";
import { MessageListSection } from "./messages/MessageListSection";

const App = (): JSX.Element => {
  return (
    <div>
      <DataStoreContextProvider>
        <AccountListSection />
        <MailListSection />
        <MessageListSection />
      </DataStoreContextProvider>
    </div>
  );
};

export default App;
