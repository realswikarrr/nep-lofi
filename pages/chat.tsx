import Layout from "../components/layout/article";
import SignInLayout from "../components/signin";
import { useSession, signOut, getSession } from "next-auth/react";

const Chat = () => {
  const { data: session, status }: any = useSession();

  if (status === "unauthenticated") {
    return (
      <Layout>
        <SignInLayout />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1 className="text-white">Welcome {session.user.name}</h1>
        <button
          onClick={() => signOut()}
          className="flex items-center border-2 border-[#674AB3] px-8 py-3 text-sm font-medium text-white transition rounded hover:scale-110 hover:shadow-xl active:bg-[#674AB3] focus:outline-none "
        >
          Sign Out
        </button>
      </Layout>
    );
  }
};

export default Chat;

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
};
