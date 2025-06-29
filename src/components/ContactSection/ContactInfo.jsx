import whatsApp from "../ContactSection/WhatsApp.png";

export function ContactInfo() {
  return (
    <div>
      <div className="text-[17px] md:text-[20px] lg:text-[25px]">
        <p>Address: </p>
        <p>AstraGrove School</p>
        <p>329, Sterling Center Camp, </p>
        <p>Pune, Maharashtra 411001, India</p>
      </div>
      <div className="mt-4 text-[17px] md:text-[20px] lg:text-[25px]">
        <p>Email</p>
        <p>astragroveinfo@gmail.com</p>
      </div>
      <div className="mt-4 text-[17px] md:text-[20px] lg:text-[25px]">
        <p>Phone Number</p>
        <p>+91 12345 69874</p>
      </div>
      <div className="mt-6 text-[17px] md:text-[20px] lg:text-[25px]">
        <button className="border-[1px] px-3 py-1 flex items-center justify-center rounded-lg">
          <span className="truncate">Connect on Whatsapp</span>
          <img
            src={whatsApp}
            className="ml-3 size-6 md:size-[30px]"
            alt="WhatsApp"
          />
        </button>
      </div>
    </div>
  );
}
