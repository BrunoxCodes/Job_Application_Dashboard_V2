import { useState } from "react"

export default function useToggle() {
  const [isToggled,setToggle] = useState<boolean>(false)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

    return {isToggled, handleToggle}
};