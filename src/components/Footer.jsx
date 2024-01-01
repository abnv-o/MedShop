import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            MEDSHOP
          </a>
          <p class="my-6 text-gray-500 dark:text-gray-400">
            Medicine shop running on the cloud
          </p>
          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Premium
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Campaigns
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2022{" "}
            <a href="#" class="hover:underline">
              Medshop™
            </a>
            . All Rights Reserved.
          </span>
          <Link to="/adminpage">
            <button className="border border-2 border-blue-400 text-2xl rounded-sm text-white py-2 px-3">
              Admin Login
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
