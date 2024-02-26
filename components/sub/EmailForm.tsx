import React, { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import {unstable_noStore as noStore} from "next/cache"
import emailjs from "@emailjs/browser";
import HandleOnMouseMove from "@/utils/hoverEffect";

import { BsSend } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import { MdOutlineDownloadDone } from "react-icons/md";

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
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid h-max ">
      <div className="relative z-[999] bg-card row-span-2 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-md"
      onMouseMove={(e) => HandleOnMouseMove(e, setMousePosition)}>
        <div className="flex flex-col h-full justify-between gap-5">
          <div className="flex flex-col space-y-5 p-8 ">
            <div className="w-12 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
              <BsSend />
            </div>
            <div>
              <span>Envie-me um e-mail</span>
            </div>
          </div>

          <div className="flex flex-col p-8 med:p-3 ">
            <form onSubmit={sendEmail} className="flex flex-col gap-8 z-[999]">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Nome"
                    name="username"
                    autoComplete="name"
                    className="w-full rounded-2xl p-4 focus:outline-none bg-card border border-zinc-200 dark:border-zinc-800"
                    ref={nameRef}
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    autoComplete="email"
                    className="w-full rounded-2xl p-4 focus:outline-none bg-card border border-zinc-200 dark:border-zinc-800"
                    ref={emailRef}
                  />
                </div>
              </div>
              <textarea
                placeholder="Mensagem"
                name="text"
                className="rounded-2xl p-4 h-60 sm:h-40 focus:outline-none bg-card border border-zinc-200 dark:border-zinc-800"
                ref={messageRef}
              ></textarea>
              <div className="text-center">
                {error ? <p className="text-red-500">{error}</p> : <></>}
              </div>
              {emailSent ? (
                <Button disabled={true} className="bg-green-600">
                  <MdOutlineDownloadDone />
                </Button>
              ) : (
                <Button disabled={loading}>
                  {loading ? (
                    <BiLoaderAlt className="animate-spin infinite" />
                  ) : (
                    "Enviar"
                  )}
                </Button>
              )}
            </form>
          </div>
        </div>
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",

          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent)`,
        }}
      ></div>
      </div>
    </div>
  );
}
