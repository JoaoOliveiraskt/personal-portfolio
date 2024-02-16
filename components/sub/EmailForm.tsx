import { BsSend } from "react-icons/bs";
import { Button } from "../ui/button";

export default function EmailForm() {
    return (
        <div className=" grid h-max ">
        <div className="bg-card row-span-2 rounded-xl border border-zinc-200 dark:border-zinc-800 ">
          <div className="flex flex-col h-full justify-between gap-5">
            <div className="flex flex-col space-y-5 p-8 ">
              <div className="w-12 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <BsSend />
              </div>
              <div>
                <span>Send an e-mail</span>
              </div>
            </div>

            <div className="flex flex-col p-8 med:p-3 ">
              <form className="flex flex-col gap-4 ">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-2xl p-4 focus:outline-none bg-background"
                  />
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="rounded-2xl p-4 focus:outline-none bg-background"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  className="rounded-2xl p-4 h-60 sm:h-40 focus:outline-none bg-background"
                ></textarea>
                <Button>Send</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}