"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "/assets/Screenshot_2024-08-28_at_11.34.38_AM-removebg-preview.png";

export function NavbarComponent() {
  return (
    <Navbar fluid className="!bg-[#39289F]">
      <Navbar.Brand>
      <a href="/#">  <img src={Logo} className="h-20" alt="Baymax" /></a>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">email@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="/team">Team</Navbar.Link>
        <Navbar.Link href="/contact_us">Contact Us</Navbar.Link>
        <Navbar.Link href="#">Profile</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
