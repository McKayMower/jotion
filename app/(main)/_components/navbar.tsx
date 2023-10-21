"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import Title from "./title";
import Banner from "./banner";

type Props = {
  isCollapsed: boolean;
  onResetWidth: () => void;
};

const Navbar = ({ isCollapsed, onResetWidth }: Props) => {
  const params = useParams();

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined)
    return (
      <nav className="bg-background bg-[#1f1f1f] px-3 py-2 w-full flex items-center">
        <Title.Skeleton />
      </nav>
    );

  if (document === null) return null;

  return (
    <>
      <nav className="bg-background bg-[#1f1f1f] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <Title initialData={document} />
        </div>
      </nav>
      {document.isArchived ? (
        <Banner documentId={document._id} />
      ) : null}
    </>
  );
};

export default Navbar;