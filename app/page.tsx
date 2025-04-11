import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
   return (
      <section>
         <a href={socialLinks.twitter} target="_blank">
            <Image
               src="/pp.png"
               alt="Profile photo"
               className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
               unoptimized
               width={160}
               height={160}
               priority
            />
         </a>
         <h1 className="mb-8 text-2xl font-medium">
         Hey! I'm Navin
         </h1>
         <div className="prose prose-neutral dark:prose-invert">
            <p>
            I'm a self-taught developer and designer with a background in Information Technology.
            </p>
            <p>
            I’m passionate about building intuitive digital experiences and actively explore areas like Web Development, UI/UX, and interactive 3D with Three.js.
            </p>
            <p>
            With hands-on experience in Spring Boot, MySQL, and Linux, I’m driven by curiosity and deeply value open-source software and collaborative learning.
            </p>


         </div>
      </section>
   );
}
