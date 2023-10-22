"use client";

import Image from "next/image";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import React from "react";

type Props = {};

const Error = (props: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        height={300}
        width={300}
        alt="error"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        height={300}
        width={300}
        alt="error"
        className="dark:block hidden"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href={"/documents"}>Go Back</Link>
      </Button>
    </div>
  );
};

export default Error;
