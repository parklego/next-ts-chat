import Image from "next/image";
import SideBar from "../../component/SideBar";
import { IoChatbubblesOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="grid w-full grid-cols-8">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-6 flex justify-center h-screen">
        <div className="flex flex-col items-center justify-center space-y-4">
          <IoChatbubblesOutline className="w-24 h-24 text-gray-300" />
          <p className="text-2xl text-gray-300">대화를 시작합니다. </p>
        </div>
      </div>
    </main>
  );
}
