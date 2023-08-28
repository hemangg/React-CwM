import { useState } from "react";
import { TbHeartFilled, TbHeartBroken } from "react-icons/tb";

const Like = () => {
  const [status, setStatus] = useState(false);
  if (status)
    return (
      <TbHeartFilled
        color="#ff6b81"
        size={100}
        onClick={() => setStatus(false)}
      />
    );
  return (
    <TbHeartBroken color="#ff6b81" size={100} onClick={() => setStatus(true)} />
  );
};
export default Like;
