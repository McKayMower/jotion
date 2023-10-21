"use client";

import React, { useEffect, useState } from "react";
import SettingsModal from "@/components/modals/settings-modal";

type Props = {};

const ModalProvider = ({}: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <SettingsModal />
    </>
  );
};

export default ModalProvider;
