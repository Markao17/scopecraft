import "../css/header.scss";
import "../css/buttons.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import ColorSchemeToggle from "./colorScheme";
import AudioPlayer from "./AudioPlayer";
import audioFile from "../assets/mp3-example-file-download-3min.mp3";
import { Button } from "@headlessui/react";

function Header() {
  return (
    <header className="site-header flex justify-between items-center p-4 transition-colors duration-300">
      <h1>
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="ScopeCraft"
            className="site-header__logo w-auto"
          />
        </Link>
      </h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/wizard">Wizard</Link>
          </li>
          <li>
            <Link to="/scope-builder">Scope Builder</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        {/* <AudioPlayer src={audioFile} /> */}
        <Link to="/wizard" className="button">
          Create Proposal
        </Link>
        <ColorSchemeToggle />
      </div>
    </header>
  );
}

export default Header;
