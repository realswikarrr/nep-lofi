import Image from "next/image";
import { useEffect } from "react";
import Layout from "./layout/article";
import { useRef } from "react";

const Chats = ({ chats }: any) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <Layout delay="0.7">
      <div className="flex flex-col flex-grow p-4 scrollbar-hide  overflow-y-scroll h-screen max-w-xl mx-auto w-full mb-2 mt-2">
        {chats?.map((chat: any) => (
          <div
            key={chat.id}
            className="flex items-center gap-2 border-2 border-[#674AB3]  rounded-lg p-2 mb-2"
          >
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
              <Image
                src={chat.image_url}
                alt="user picture"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>
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
        <div ref={messagesEndRef} />
      </div>
    </Layout>
  );
};

export default Chats;
