import React from "react";
import ScreenFitText from "../../utilities/ScreenFitText";

export default function HandleIntro() {
  return (
    <main className="bg-darkBackground mt-20 overflow-hidden">
      <section>
        <div className="w-full h-96 pt-32 flex flex-col items-center justify-center">
          <ScreenFitText name="Work" />
          <ScreenFitText name="With Me" />
        </div>
      </section>

      <section className="font-sans pt-8 m-24 text-xl text-primaryWhite flex flex-col flex-wrap gap-4">
        <p>Are you ready to bring your ideas into reality?</p>
        <p>
          If you would rather just send an email, you can reach me at {""}
          <a
            href="mailto:suraj.coder13@gmail.com"
            className="underline hover:text-green-500"
          >
            suraj.coder13@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
