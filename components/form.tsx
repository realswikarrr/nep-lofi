import { useSession, getSession } from "next-auth/react";

const FormLayout = () => {
  const { status }: any = useSession();
  return (
    <div className="max-w-xl mx-3 mb-2 mt-2 flex items-center rounded-lg bg-[#674AB3] justify-center p-2">
      <input
        className="flex items-center justify-center mx-auto h-10 w-full rounded px-3 text-sm bg-gray-300 text-black placeholder-black"
        placeholder={
          status == "authenticated"
            ? "Type Your Message ....."
            : "Sign In To Start Messaging ....."
        }
        disabled={status == "authenticated" ? false : true}
      />
      <button className="" disabled={status == "authenticated" ? false : true}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-10 w-10  fill-current text-indigo-200 mx-1"
        >
          <path d="m20.447 11.105-16-8A1 1 0 0 0 3.152 4.53L7.82 12l-4.668 7.47a1 1 0 0 0 1.3 1.425l16-8a1 1 0 0 0 0-1.79zM6.731 17.517 9.554 13H12a1 1 0 0 0 0-2H9.554L6.731 6.483 17.764 12z" />
        </svg>
      </button>
    </div>
  );
};

export default FormLayout;

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
};
