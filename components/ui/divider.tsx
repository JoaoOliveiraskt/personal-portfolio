export default function Divider({className}: {className?: string}) {
  return (
    <div className={`h-[0.8px] w-full dark:bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 ${className}`}></div>
  );
}
