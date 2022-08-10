import Chats from "../components/chats";
import Layout from "../components/layout/article";
import SignInLayout from "../components/signin";

import FormLayout from "../components/form";

const Chat = () => {
  return (
    <Layout>
      <div className="flex container mx-auto flex-col flex-grow w-full max-w-xl shadow-xl rounded-lg overflow-hidden">
        <Chats />
        <FormLayout />
      </div>
      <SignInLayout />
    </Layout>
  );
};

export default Chat;
