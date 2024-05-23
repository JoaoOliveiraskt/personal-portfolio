import React, { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { unstable_noStore as noStore } from "next/cache";
import emailjs from "@emailjs/browser";
import HandleOnMouseMove from "@/utils/hoverEffect";

import { BsSend } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import { MdOutlineDownloadDone } from "react-icons/md";
import RadialGradient from "../ui/radial-gradient";
import CardBg from "../ui/card-background";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function EmailForm() {
  noStore();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MY_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_MY_PUBLIC_KEY);
    }
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const numberError = "Nome não pode conter números";
  const formError = "Preencha todos os campos.";
  const [error, setError] = useState<string>("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    try {
      setLoading(true);

      if (nameRef.current && emailRef.current && messageRef.current) {
        const containsNumbers = /\d/.test(nameRef.current.value);

        if (containsNumbers) {
          setError(numberError);
        } else {
          if (
            nameRef.current.value &&
            emailRef.current.value &&
            messageRef.current.value
          ) {
            if (serviceId && templateId) {
              await emailjs.send(serviceId, templateId, {
                from_name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
              });

              nameRef.current.value = "";
              emailRef.current.value = "";
              messageRef.current.value = "";
              setError("");
              setEmailSent(true);
            } else {
              console.log("Service ID ou Template ID não encontradas.");
            }
          } else {
            setError(formError);
          }
        }
      } else {
        setError(formError);
      }
      setTimeout(() => {
        setEmailSent(false);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-fit min-w-[19rem] relative">
      <div className="p-[1px] rounded-xl dark:bg-gradient-to-bl from-zinc-100/20 to-zinc-300/5">
        <div
          className="h-[23rem] relative bg-gradient-to-bl from-card to-background row-span-2 rounded-xl border border-zinc-200 dark:border-none shadow-sm dark:shadow-none"
          onMouseMove={(e) => HandleOnMouseMove(e, setMousePosition)}
        >
          <div className="flex flex-col h-full justify-between gap-5 p-4">
            <div className="flex gap-4 items-center">
              <div className="w-12 z-10 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <BsSend />
              </div>
              <div>
                <span className="text-lg font-medium text-primary">
                  Envie-me um e-mail
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <form onSubmit={sendEmail} className="flex flex-col gap-5 z-20">
                <div className="grid grid-cols-1 gap-5">
                  <div className="w-full">
                    <Input
                      type="text"
                      placeholder="Nome"
                      name="username"
                      autoComplete="name"
                      className="py-5 bg-muted"
                      ref={nameRef}
                    />
                  </div>
                  <div className="">
                    <Input
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      autoComplete="email"
                      className="py-5 bg-muted"
                      ref={emailRef}
                    />
                  </div>
                </div>

                <Textarea
                  placeholder="Mensagem"
                  name="text"
                  className="bg-muted"
                  ref={messageRef}
                ></Textarea>

                {error ? (
                  <p className="text-red-500 text-center text-sm">{error}</p>
                ) : (
                  <></>
                )}

                <div className="flex items-center justify-center">
                  {emailSent ? (
                    <Button size={"sm"} className="bg-green-600 w-full">
                      <MdOutlineDownloadDone />
                    </Button>
                  ) : (
                    <Button
                      disabled={loading}
                      variant={"secondary"}
                      size={"sm"}
                      className="w-full"
                      type="submit"
                    >
                      {loading ? (
                        <BiLoaderAlt className="animate-spin infinite" />
                      ) : (
                        "Enviar"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <RadialGradient className="z-10" mousePosition={mousePosition} />
        </div>
      </div>
    </div>
  );
}
