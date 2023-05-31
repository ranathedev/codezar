import React from "react";
import Image from "next/image";

import EmailSub from "components/email-sub";

import stl from "./CustomEl.module.scss";

const CustomEl = () => (
  <div className={stl.customEl}>
    <EmailSub />
    <div className={stl.sponsor}>
      <span className={stl.text}>Sponsored by:</span>
      <Image src="/paypal.png" width={100} height={30} alt="paypal-img" />
      <Image src="/google.png" width={100} height={30} alt="google-img" />
      <Image src="dropbox.png" width={100} height={30} alt="dropbox-img" />
    </div>
  </div>
);

export default CustomEl;
