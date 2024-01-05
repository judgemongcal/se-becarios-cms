import { useClickAway } from 'react-use';
import { useRef, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';

function NavBarMobile() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
      />
    </div>
  );
}

export default NavBarMobile;
