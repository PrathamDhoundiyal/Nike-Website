import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

// “Hero is behind navbar”
// Layer 2 (top):   NAVBAR (absolute + z-10)
// Layer 1 (below): HERO (min-h-screen)

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 hidden md:flex justify-center items-center gap-16 ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-grey "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
