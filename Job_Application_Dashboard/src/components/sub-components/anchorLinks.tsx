interface anchorProps {
  children: React.ReactNode;
}

export default function AnchorLinks({ children }: anchorProps) {
  return (
    <a className="flex gap-2 my-4 p-2 cursor-pointer transition duration-100 delay-75 hover:bg-(--surface-secondary)">
      {children}
    </a>
  );
}
