import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};


const variantItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const menuItems = [
  {
    name: 'Dashboard',
    svg: (<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45667 1.37625C3.47364 1.26258 4.52637 1.26258 5.54334 1.37625C5.79045 1.40386 5.98533 1.59954 6.01313 1.83718C6.13457 2.87554 6.13457 3.9245 6.01313 4.96286C5.98533 5.2005 5.79045 5.39618 5.54334 5.42379C4.52637 5.53746 3.47364 5.53746 2.45667 5.42379C2.20955 5.39618 2.01467 5.2005 1.98688 4.96286C1.86543 3.9245 1.86543 2.87554 1.98688 1.83718C2.01467 1.59954 2.20955 1.40386 2.45667 1.37625ZM5.67663 0.183673C4.57107 0.0601134 3.42894 0.0601134 2.32338 0.183673C1.53071 0.272265 0.888755 0.896257 0.795011 1.69779C0.662731 2.82875 0.662731 3.97129 0.795011 5.10226C0.888755 5.90383 1.53071 6.52775 2.32338 6.61639C3.42894 6.73991 4.57107 6.73991 5.67663 6.61639C6.46929 6.52775 7.11129 5.90383 7.20497 5.10226C7.33729 3.97129 7.33729 2.82875 7.20497 1.69779C7.11129 0.896257 6.46929 0.272265 5.67663 0.183673ZM2.45667 9.37623C3.47364 9.26255 4.52637 9.26255 5.54334 9.37623C5.79045 9.40391 5.98533 9.59951 6.01313 9.83719C6.13457 10.8755 6.13457 11.9245 6.01313 12.9629C5.98533 13.2005 5.79045 13.3961 5.54334 13.4238C4.52637 13.5374 3.47364 13.5374 2.45667 13.4238C2.20955 13.3961 2.01467 13.2005 1.98688 12.9629C1.86543 11.9245 1.86543 10.8755 1.98688 9.83719C2.01467 9.59951 2.20955 9.40391 2.45667 9.37623ZM5.67663 8.18367C4.57107 8.06015 3.42894 8.06015 2.32338 8.18367C1.53071 8.27231 0.888755 8.89623 0.795011 9.69775C0.662731 10.8288 0.662731 11.9713 0.795011 13.1022C0.888755 13.9038 1.53071 14.5278 2.32338 14.6164C3.42894 14.7399 4.57107 14.7399 5.67663 14.6164C6.46929 14.5278 7.11129 13.9038 7.20497 13.1022C7.33729 11.9713 7.33729 10.8288 7.20497 9.69775C7.11129 8.89623 6.46929 8.27231 5.67663 8.18367ZM13.5434 1.37625C12.5263 1.26258 11.4736 1.26258 10.4567 1.37625C10.2095 1.40386 10.0147 1.59954 9.98689 1.83718C9.86545 2.87554 9.86545 3.9245 9.98689 4.96286C10.0147 5.2005 10.2095 5.39618 10.4567 5.42379C11.4736 5.53746 12.5263 5.53746 13.5434 5.42379C13.7905 5.39618 13.9854 5.2005 14.0131 4.96286C14.1346 3.9245 14.1346 2.87554 14.0131 1.83718C13.9854 1.59954 13.7905 1.40386 13.5434 1.37625ZM10.3234 0.183673C11.429 0.0601134 12.571 0.0601134 13.6766 0.183673C14.4693 0.272265 15.1113 0.896257 15.205 1.69779C15.3373 2.82875 15.3373 3.97129 15.205 5.10226C15.1113 5.90383 14.4693 6.52775 13.6766 6.61639C12.571 6.73991 11.429 6.73991 10.3234 6.61639C9.53073 6.52775 8.88873 5.90383 8.79497 5.10226C8.66273 3.97129 8.66273 2.82875 8.79497 1.69779C8.88873 0.896257 9.53073 0.272265 10.3234 0.183673ZM10.4567 9.37623C11.4736 9.26255 12.5263 9.26255 13.5434 9.37623C13.7905 9.40391 13.9854 9.59951 14.0131 9.83719C14.1346 10.8755 14.1346 11.9245 14.0131 12.9629C13.9854 13.2005 13.7905 13.3961 13.5434 13.4238C12.5263 13.5374 11.4736 13.5374 10.4567 13.4238C10.2095 13.3961 10.0147 13.2005 9.98689 12.9629C9.86545 11.9245 9.86545 10.8755 9.98689 9.83719C10.0147 9.59951 10.2095 9.40391 10.4567 9.37623ZM13.6766 8.18367C12.571 8.06015 11.429 8.06015 10.3234 8.18367C9.53073 8.27231 8.88873 8.89623 8.79497 9.69775C8.66273 10.8288 8.66273 11.9713 8.79497 13.1022C8.88873 13.9038 9.53073 14.5278 10.3234 14.6164C11.429 14.7399 12.571 14.7399 13.6766 14.6164C14.4693 14.5278 15.1113 13.9038 15.205 13.1022C15.3373 11.9713 15.3373 10.8288 15.205 9.69775C15.1113 8.89623 14.4693 8.27231 13.6766 8.18367Z" fill="white" />
    </svg>
    )
  },
  {
    name: 'Classes',
    badgeCount: 3,
    svg: (<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.84614 0.691455C7.2429 0.510807 9.65019 0.522664 12.045 0.726895L13.4884 0.84998C14.5786 0.942958 15.4634 1.77034 15.6292 2.8519L15.7202 3.44597C16.0292 5.46188 16.0004 7.51519 15.6348 9.52159C15.4544 10.5116 14.5921 11.2311 13.5857 11.2311H5.60669C5.42312 11.2311 5.2424 11.2765 5.08071 11.3635L1.60445 13.2316C1.39785 13.3427 1.14809 13.337 0.94677 13.2166C0.745455 13.0963 0.622192 12.879 0.622192 12.6444V5.07349C0.622192 2.7814 2.38878 0.876664 4.67438 0.704398L4.84614 0.691455ZM11.9318 2.0554C9.60798 1.85723 7.27198 1.84573 4.94636 2.02101L4.77459 2.03396C3.18453 2.1538 1.95553 3.4789 1.95553 5.07349V11.5293L4.44953 10.189C4.80528 9.99776 5.20284 9.89776 5.6067 9.89776H13.5858C13.9478 9.89776 14.2581 9.63883 14.3231 9.28265C14.6621 7.42185 14.6889 5.51757 14.4023 3.64798L14.3113 3.05391C14.2387 2.58095 13.8519 2.21914 13.3751 2.17848L11.9318 2.0554ZM3.7333 6.19999C3.7333 5.5863 4.23076 5.08886 4.84441 5.08886C5.45806 5.08886 5.95552 5.5863 5.95552 6.19999C5.95552 6.81359 5.45806 7.3111 4.84441 7.3111C4.23076 7.3111 3.7333 6.81359 3.7333 6.19999ZM7.28885 6.19999C7.28885 5.5863 7.78627 5.08886 8.39996 5.08886C9.01365 5.08886 9.51107 5.5863 9.51107 6.19999C9.51107 6.81359 9.01365 7.3111 8.39996 7.3111C7.78627 7.3111 7.28885 6.81359 7.28885 6.19999ZM10.8444 6.19999C10.8444 5.5863 11.3418 5.08886 11.9555 5.08886C12.5692 5.08886 13.0666 5.5863 13.0666 6.19999C13.0666 6.81359 12.5692 7.3111 11.9555 7.3111C11.3418 7.3111 10.8444 6.81359 10.8444 6.19999Z" fill="#80878D" />
    </svg>
    )
  },
  {
    name: 'Schedule',
    svg: (<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.93589 0.399994C4.30571 0.399994 4.60551 0.699799 4.60551 1.06962V2.55854C7.13018 2.33369 9.66993 2.33369 12.1946 2.55854V1.06962C12.1946 0.699799 12.4944 0.399994 12.8642 0.399994C13.234 0.399994 13.5339 0.699799 13.5339 1.06962V2.6914C14.8669 2.87988 15.92 3.93425 16.0982 5.27919L16.1756 5.86216C16.5006 8.31416 16.4725 10.8001 16.0922 13.2442C15.9038 14.4549 14.9202 15.3849 13.7008 15.505L12.6357 15.6101C9.81877 15.8879 6.98134 15.8879 4.16439 15.6101L3.09923 15.505C1.87985 15.3849 0.896251 14.4549 0.707854 13.2442C0.327543 10.8001 0.299472 8.31416 0.624499 5.86216L0.701774 5.27919C0.880055 3.93423 1.9332 2.87985 3.26626 2.69139V1.06962C3.26626 0.699799 3.56607 0.399994 3.93589 0.399994ZM4.33334 3.92918C7.03795 3.66248 9.76217 3.66248 12.4667 3.92918L13.2751 4.00891C14.049 4.08523 14.6685 4.68429 14.7706 5.45516L14.8479 6.03814C14.8749 6.2418 14.8994 6.44573 14.9212 6.64983H1.87885C1.90072 6.44573 1.92514 6.24181 1.95214 6.03815L2.02941 5.45516C2.1316 4.68429 2.75106 4.08523 3.52493 4.00891L4.33334 3.92918ZM1.7724 7.98908C1.68474 9.67484 1.7711 11.3668 2.03118 13.0382C2.12567 13.6455 2.61904 14.112 3.23066 14.1723L4.29582 14.2773C7.02536 14.5465 9.77475 14.5465 12.5042 14.2773L13.5694 14.1723C14.181 14.112 14.6744 13.6455 14.7689 13.0382C15.029 11.3668 15.1153 9.67484 15.0276 7.98908H1.7724Z" fill="#80878D" />
    </svg>
    )
  },
  {
    name: 'Inbox',
    badgeCount: 15,
    svg: (<svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>)
  },
  {
    name: 'Creator',
    svg: (<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14 15.2H3.59998C1.94312 15.2 0.599976 13.8568 0.599976 12.2V1.75451C0.599976 0.615794 1.8871 -0.0465824 2.81371 0.61529L2.95374 0.715314C3.57814 1.16131 4.42391 1.15981 5.05123 0.711722C6.09433 -0.0333424 7.50566 -0.0333424 8.5487 0.711722C9.17606 1.15981 10.0218 1.16131 10.6462 0.715314L10.7862 0.61529C11.7129 -0.0465824 13 0.615794 13 1.75451V7.99999H15.6C15.9313 7.99999 16.2 8.26855 16.2 8.59999V13C16.2 14.215 15.215 15.2 14 15.2ZM7.85126 1.6882C7.22542 1.24116 6.37458 1.24116 5.74872 1.6882C4.7071 2.43222 3.30082 2.43791 2.25626 1.69179L2.11622 1.59177C1.98385 1.49722 1.79998 1.59184 1.79998 1.75451V12.2C1.79998 13.1941 2.60586 14 3.59998 14H12.0399C11.8865 13.6999 11.8 13.3601 11.8 13V1.75451C11.8 1.59184 11.6161 1.49722 11.4837 1.59177L11.3437 1.69179C10.2991 2.43791 8.89286 2.43222 7.85126 1.6882ZM13 9.19999V13C13 13.5522 13.4477 14 14 14C14.5523 14 15 13.5522 15 13V9.19999H13ZM8.99998 4.99996C9.33134 4.99996 9.59998 5.26859 9.59998 5.59996C9.59998 5.93136 9.33134 6.2 8.99998 6.2H4.19998C3.86861 6.2 3.59998 5.93136 3.59998 5.59996C3.59998 5.26859 3.86861 4.99996 4.19998 4.99996H8.99998ZM8.19998 7.39999C8.53133 7.39999 8.79997 7.66855 8.79997 7.99999C8.79997 8.33135 8.53133 8.59999 8.19998 8.59999H4.19998C3.86861 8.59999 3.59998 8.33135 3.59998 7.99999C3.59998 7.66855 3.86861 7.39999 4.19998 7.39999H8.19998ZM8.99998 9.79999C9.33134 9.79999 9.59998 10.0686 9.59998 10.4C9.59998 10.7314 9.33134 11 8.99998 11H4.19998C3.86861 11 3.59998 10.7314 3.59998 10.4C3.59998 10.0686 3.86861 9.79999 4.19998 9.79999H8.99998Z" fill="#80878D" />
    </svg>
    )
  },
  {
    name: 'Account Settings',
    svg: (<svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>)
  }
]

const MenuItem = (item: any, active?: any) => (
  <motion.a
    variants={variantItem}
    key={item.name}
    href="#"
    className="inline-flex items-center space-x-4 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
  >
    {item.svg}
    <span>{item.name}</span>
    {item.badgeCount && <span className="relative top-0 right--7 badge mb-3 bg-red-500 rounded-full px-2 py-1 text-center object-right-top text-white text-tiny mr-1">{item.badgeCount}</span>}
  </motion.a>
)

function AvatarImage() {
  return (
    <div id="avatar-image">
      <img src="./images/avatar-image.svg" alt="avatar image" />
    </div>
  );
}

function AvatarUser() {
  return (
    <div id="avatar-user">
      <span className="text-gray-300">Sophia</span>
    </div>
  );
}

function AvatarLink() {
  return (
    <div id="avatar-link">
      <a href="http://google.com">
        <div className="flex space-x-4 items-center text-blue-500">
          <span className="text-blue-500">
            Avatar Shop
        </span>
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.51841 1.42429C6.29386 1.18997 6.29386 0.81007 6.51841 0.575758C6.74297 0.341446 7.10698 0.341446 7.33154 0.575758L10.3982 3.77578C10.6228 4.0101 10.6228 4.38994 10.3982 4.62426L7.33154 7.82426C7.10698 8.05858 6.74297 8.05858 6.51841 7.82426C6.29386 7.58994 6.29386 7.2101 6.51841 6.97578L8.60344 4.80002H1.17498C0.857415 4.80002 0.599976 4.53138 0.599976 4.20002C0.599976 3.86866 0.857415 3.60002 1.17498 3.60002H8.60344L6.51841 1.42429Z" fill="#32A2FF" />
          </svg>
        </div>
      </a>
    </div>
  );
}

function AvatarUserLink() {
  return (
    <div id="avatar-user-link">
      <AvatarUser />
      <AvatarLink />
    </div>
  );
}

function ProfileMedal() {
  return (
    <div id="profile-medal">
      <img src="./images/profile-medal.svg" alt="profile medal" />
    </div>
  );
}

function ProfileScore() {
  return (
    <div id="profile-score">
      <span className="text-white">123,000 <span className="text-gray-600">points</span></span>
    </div>
  );
}

export default function SideBar({ data }: any) {
  return (
    <motion.aside
      transition={{ duration: 0.2 }}
      initial={{ x: -88 }}
      animate={{ x: 0 }}

      className="hidden sm:flex sm:flex-col">
      <div
        className="inline-flex items-center justify-center h-20 w-60 space-x-4 bg-gray-900 hover:bg-gray-900 focus:bg-gray-900 border-0 border-b border-solid border-gray-700"
      >
        <AvatarImage />
        <AvatarUserLink />
      </div>
      <div
        className="inline-flex items-center justify-center h-20 w-60 space-x-4 bg-gray-900 hover:bg-gray-500 focus:bg-gray-500"
      >
        <ProfileMedal />
        <ProfileScore />
      </div>

      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-900">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col mx-4 my-6 space-y-4">

          {menuItems.map(item => MenuItem(item))}

        </motion.nav>
      </div>
    </motion.aside>
  );
}
