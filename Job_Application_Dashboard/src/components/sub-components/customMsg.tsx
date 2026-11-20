interface msgProps{
    className: string,
    children: React.ReactNode
}
export default function CustomMsg({ className, children }: msgProps) {
  return <div className={className}>{children}</div>
};