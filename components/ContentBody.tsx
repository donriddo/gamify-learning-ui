import { motion } from "framer-motion";

const SectionItem = (item: any) => (
  <li className="flex items-center space-x-5 justify-between">
    <div className="flex space-x-4 items-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#50E3C2" />
      </svg>
      <span className="text-white">{item.title}</span>
      <span className="relative top-1 right--7 badge mb-3 bg-red-500 rounded-full px-2 py-1 text-center object-right-top text-white text-tiny mr-1">{item.count || 0}</span>
    </div>
    <div className="flex space-x-4 items-center">
      <div className="flex space-x-4 justify-between">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6667 3.83332V4.33332H14.1667H15.8333C16.3638 4.33332 16.8725 4.54404 17.2475 4.91911C17.6226 5.29418 17.8333 5.80289 17.8333 6.33332V16.3333C17.8333 16.8638 17.6226 17.3725 17.2475 17.7475C16.8725 18.1226 16.3638 18.3333 15.8333 18.3333H4.16666C3.63622 18.3333 3.12752 18.1226 2.75244 17.7475C2.37737 17.3725 2.16666 16.8638 2.16666 16.3333V6.33332C2.16666 5.80289 2.37737 5.29418 2.75244 4.91911C3.12752 4.54404 3.63622 4.33332 4.16666 4.33332H5.83332H6.33332V3.83332V2.99999C6.33332 2.91158 6.36844 2.8268 6.43095 2.76429C6.49347 2.70178 6.57825 2.66666 6.66666 2.66666C6.75506 2.66666 6.83985 2.70178 6.90236 2.76429C6.96487 2.8268 6.99999 2.91158 6.99999 2.99999V3.83332V4.33332H7.49999H12.5H13V3.83332V2.99999C13 2.91158 13.0351 2.8268 13.0976 2.76429C13.1601 2.70178 13.2449 2.66666 13.3333 2.66666C13.4217 2.66666 13.5065 2.70178 13.569 2.76429C13.6315 2.8268 13.6667 2.91158 13.6667 2.99999V3.83332ZM3.33332 9.99999H2.83332V10.5V16.3333C2.83332 16.6869 2.9738 17.0261 3.22385 17.2761C3.4739 17.5262 3.81303 17.6667 4.16666 17.6667H15.8333C16.1869 17.6667 16.5261 17.5262 16.7761 17.2761C17.0262 17.0261 17.1667 16.6869 17.1667 16.3333V10.5V9.99999H16.6667H3.33332ZM16.6667 9.33332H17.1667V8.83332V6.33332C17.1667 5.9797 17.0262 5.64056 16.7761 5.39052C16.5261 5.14047 16.1869 4.99999 15.8333 4.99999H14.1667H13.6667V5.49999V6.33332C13.6667 6.42173 13.6315 6.50651 13.569 6.56903C13.5065 6.63154 13.4217 6.66666 13.3333 6.66666C13.2449 6.66666 13.1601 6.63154 13.0976 6.56903C13.0351 6.50651 13 6.42173 13 6.33332V5.49999V4.99999H12.5H7.49999H6.99999V5.49999V6.33332C6.99999 6.42173 6.96487 6.50651 6.90236 6.56903C6.83985 6.63154 6.75506 6.66666 6.66666 6.66666C6.57825 6.66666 6.49347 6.63154 6.43095 6.56903C6.36844 6.50651 6.33332 6.42173 6.33332 6.33332V5.49999V4.99999H5.83332H4.16666C3.81303 4.99999 3.4739 5.14047 3.22385 5.39051C2.9738 5.64056 2.83332 5.9797 2.83332 6.33332V8.83332V9.33332H3.33332H16.6667Z" fill="black" stroke="#80878D" />
        </svg>

        <span className="text-gray-600">{item.date}</span>
      </div>
      <div className="flex items-center px-6 py-5 font-semibold">
        <button
          type="button"
          className="rounded-md mr-1 bg-blue-500 text-sm leading-5 font-medium text-white hover:text-gray-300 p-2"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Join Now
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md px-1 -mr-1 bg-gray-800 text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <svg
            className="mr-1 ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </li>
);

const Section = (section: any) => (
  <section className="">
    <div className="bg-gray-800 text-white">
      <div className="flex items-center px-6 py-5 font-semibold border-b border-gray-700">
        <button
          type="button"
          className="inline-flex justify-center rounded-md px-1 -mr-1 bg-gray-800 text-sm leading-5 font-medium text-white hover:text-gray-600"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <svg
            className="mr-1 ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          {section.name} <span className="text-gray-400 px-3">({section.data?.length || 0})</span>
        </button>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
        <ul className="p-6 space-y-6">
          {section.data?.map((item: any) => SectionItem(item))}
        </ul>
      </div>
    </div>
  </section>
)

export default function ContentBody({ data }: any) {
  console.log('here: ', data)
  return (
    <motion.main

      transition={{ duration: 0.3, delay: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 15, opacity: 0 }}
      className="p-1 space-y-6">

      {data.map((section: any) => Section(section))}
    </motion.main>
  );
}
