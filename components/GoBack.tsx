"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      onClick={goBack}
      className="max-container leading-[25px] opacity-80 flex items-center gap-2 hover:opacity-100"
    >
      <ArrowLeftIcon className="w-[15px] h-[15px]" />
      Go Back
    </button>
  );
};

export default GoBack;
