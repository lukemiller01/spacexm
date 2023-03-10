import React from "react";
import Link from "next/link";

const Menu = () => (
  <>
    <h3>
      <Link href={"/"}>Launches</Link>
    </h3>
    <h3>
      <Link href={"/"}>Locations</Link>
    </h3>
    <h3>
      <Link href={"/"}>Customize</Link>
    </h3>
  </>
);

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-light-grey h-10 px-4 flex items-center justify-between">
      <div>SpaceXM</div>
      <div className="flex flex-row gap-4">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
