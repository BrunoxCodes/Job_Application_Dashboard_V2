interface numbersProps{
    value?: string | number,
    title?: string,
    className?: string
}
export default function ({ value, title, className}: numbersProps) {
  return (
    <div className={className}>
        <span>{title}</span>
        <p>{value}</p>
    </div>
  );
};