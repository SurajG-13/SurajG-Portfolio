import React from "react";
import HandleMail from "./HandleMail.jsx";
import HandleIntro from "./HandleIntro.jsx";

export default function ContactPage() {
  return (
    <main className="bg-darkBackground grid md:grid-cols-12 mx-4 md:mx-10">
      <div className="col-span-12 md:col-span-7 p-4">
        <HandleIntro />
      </div>

      <div className="col-span-12 md:col-span-5 p-4">
        <HandleMail />
      </div>
    </main>
  );
}
