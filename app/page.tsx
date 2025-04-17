import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
   return (
      <section>
         <a href={socialLinks.twitter} target="_blank" className="block text-center">
            <Image
               src="/pp.png"
               alt="Profile photo"
               className="rounded-full bg-gray-100 block mx-auto lg:mt-5 mt-0 lg:mb-5 mb-10"
               unoptimized
               width={160}
               height={160}
               priority
            />
         </a>
         <h1 className="mb-8 text-2xl font-medium text-center">Hey! I'm Navin</h1>

         <div className="prose prose-neutral dark:prose-invert clear-both">
            <p>
               I'm a self-taught developer and designer with a background in Information Technology.
            </p>
            <p>
               I’m passionate about building intuitive digital experiences and actively explore areas like Web
               Development, UI/UX, and interactive 3D with Three.js.
            </p>
            <p>
               With hands-on experience in Spring Boot, MySQL, and Linux, I’m driven by curiosity and deeply value
               open-source software and collaborative learning.
            </p>
         </div>

         <section className="mt-16 clear-both">
            <h2 className="text-xl font-semibold mb-6">Achievements</h2>
            <div className="space-y-6">
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                  <div className="flex items-center gap-4">
                     <Image
                        src="/image.png"
                        alt="fossee"
                        width={48}
                        height={48}
                        className="rounded-full border border-gray-700 shrink-0"
                     />
                     <div>
                        <h3 className="font-semibold text-white">Fossee - IIT-Bombay</h3>
                        <p className="text-sm text-gray-400">Summer Fellowship</p>
                     </div>
                  </div>
                  <p className="text-sm text-gray-400 sm:text-right">2025</p>
               </div>
            </div>
         </section>
      </section>
   );
}
