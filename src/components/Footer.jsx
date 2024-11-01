import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className="py-5 px-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-xs text-gray">
            More ways to shop{" "}
            <span className="text-blue underline">Find an Apple store</span> or{" "}
            <span className="text-blue underline">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-xs text-gray">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 h-[1px] w-full my-5" />

        <div className="flex justify-between flex-col md:items-center md:flex-row">
          <p className="font-semibold text-gray text-xs">
          Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
          {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
