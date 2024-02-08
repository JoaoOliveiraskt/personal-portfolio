import Image from "next/image";
import Avatar from "../sub/Avatar";

const BentoLayout = () => {
  return (
    <div className="min-h-screen p-5 sm:p-0">
      <div className="grid grid-auto-fit-xl max-w-[70rem] m-auto auto-rows-[192px] gap-5">
        <div className="col-span-2 row-span-2 sm:col-span-2 border border-zinc-800  p-4 rounded-2xl overflow-hidden bg-gradient-to-r from-slate-500 to-slate-800">
          <div className=" w-full h-full">
            <Avatar className=""/>
          </div>
        </div>
        <div className="col-span-1 row-span-2">
          <div className="bg-gradient-to-r from-slate-500 to-slate-800 rounded-2xl w-full h-full">
            Card 2
          </div>
        </div>
        <div className="row-span-1 col-span-1 sm:col-span-2">
          <div className="bg-gradient-to-r from-slate-500 to-slate-800 border border-zinc-800 rounded-2xl p-4 w-full h-full">
            Card 3
          </div>
        </div>
        <div className="row-span-1 col-span-2 sm:col-span-2">
          <div className="bg-gradient-to-r from-slate-500 to-slate-800 border border-zinc-800 rounded-2xl p-4 w-full h-full">
            Card 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
