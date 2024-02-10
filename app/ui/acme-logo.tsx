import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BeakerIcon className="h-6 w w-6 text-blue-500" />

      <GlobeAltIcon className="h-4 w-4 rotate-[15deg]" />
      <p className="text-[44px] ">Acme</p>
    </div>
  );
}
