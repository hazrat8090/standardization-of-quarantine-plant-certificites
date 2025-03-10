import Image from "next/image";
import React from "react";

const Stamp = () => {
  return (
    <div className="grid justify-center">
      <Image
        src="/assets/logo.png"
        alt="Logo of the MAIL"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Stamp;
