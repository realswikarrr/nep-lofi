import Chats from "../components/chats";
import Layout from "../components/layout/article";
import SignInLayout from "../components/signin";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

import FormLayout from "../components/form";
import LoadingSvg from "../components/loading-svg";

const Chat = () => {
  const [chats, setChats] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getChats = async () => {
      const { data } = await supabase.from("chats").select();
      setChats(data);
      setLoading(false);
    };
    getChats();
  }, []);

  useEffect(() => {
    const subscription = supabase
      .from("chats")
      .on("INSERT", (payload) => {
        setChats((current: any) => [...current, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  return (
    <Layout delay="0.7">
      <div className="flex container mx-auto flex-col flex-grow w-full max-w-xl shadow-xl rounded-lg overflow-hidden">
        {loading ? (
          <div className="h-screen flex justify-center">
            <LoadingSvg text="Loading Chats.." />{" "}
          </div>
        ) : (
          <Chats chats={chats} />
        )}
        <FormLayout />
      </div>
      <SignInLayout />
    </Layout>
  );
};

export default Chat;
