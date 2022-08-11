import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Chats = () => {
  const [chats, setChats] = useState<any>([]);

  useEffect(() => {
    const getChats = async () => {
      const { data } = await supabase.from("messages").select();
      setChats(data);
    };
    getChats();
  }, []);

  useEffect(() => {
    const subscription = supabase
      .from("messages")
      .on("INSERT", (payload) => {
        setChats((current: any) => [...current, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  return (
    <div className="flex flex-col flex-grow p-4 scrollbar scrollbar-thumb-purple-500 scrollbar-track-transparent overflow-y-scroll h-auto max-w-xl mx-auto w-full mb-2 mt-2">
      {chats?.map((chat: any) => (
        <div
          key={chat.id}
          className="flex items-center gap-2 border-2 border-[#674AB3]  rounded-lg p-2 mb-2"
        >
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          <div>
            <h1 className="text-white">{chat.content}</h1>
            <span className="text-xs text-gray-300 leading-none mr-2">
              {chat.name}
            </span>
            <span className="text-xs text-gray-300 leading-none">
              {chat.created_at}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
