import { useSession } from "next-auth/react";

export default function HomeHeader() {
  const { data: session } = useSession();
  return (
    <div className="text-blue-900 flex justify-between">
      <div className="text-xl">
        <div className="flex gap-2 items-center">
          <img
            src={session?.user?.image}
            alt=""
            className="w-8 h-8 rounded-md sm:hidden"
          />
          <div>
            Olá, <b>{session?.user?.name}</b>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex gap-[1px] text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-8 h-8" />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </div>
  );
}
