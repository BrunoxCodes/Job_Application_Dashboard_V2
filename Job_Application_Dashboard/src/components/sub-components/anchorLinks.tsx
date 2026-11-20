interface anchorProps {
  children: React.ReactNode,
  onClick?: () => void
}

export default function AnchorLinks({ children, onClick }: anchorProps) {
  return (
    <a className="flex gap-2 my-4 p-2 cursor-pointer transition duration-100 delay-75 hover:bg-(--surface-secondary)" 
    onClick={onClick}>
      {children}
    </a>
  );
}
