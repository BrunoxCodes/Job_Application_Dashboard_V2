interface inputProps{
    name: string;
    type: string;
    value: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function Inputs({ name, type, value, onChange}: inputProps) {
  return (
    <input type={type} value={value} onChange={onChange} name={name} className="w-full border border-[#ccc] rounded-lg p-1 mb-4 outline-none"/>
  );
};