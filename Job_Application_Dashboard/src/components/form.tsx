interface formProps{
    onSubmit: (e:React.SubmitEvent<HTMLFormElement>) => void;
    children: React.ReactNode
}

export default function Form({ onSubmit, children }: formProps) {
  return (
    <form onSubmit={onSubmit} className="border border-[#ccc] rounded-[10px] flex flex-col gap-1 p-10 w-[clamp(2rem,500px,50rem)]  shadow-lg shadow-black/20">
        {children}
    </form>
  );
};