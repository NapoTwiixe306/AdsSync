import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Sidebar from "@/src/components/Sidebar";
import Overview from "./Components/Overview";
import GestionCampagnes from "./Components/Campagnes";

export default function Dash() {
  const { data: session, status } = useSession();
  const [activePage, setActivePage] = useState<string>("Vue d'ensemble");

  if (status === "loading") {
    return <p>Chargement...</p>;
  }

  if (!session) {
    return <p>Utilisateur non connecté</p>;
  }

  return (
    <div className="w-full h-screen bg-stone-100 dark:bg-black text-black flex">
      <Sidebar setActivePage={setActivePage} />
      <div className="flex-1 p-6 dark:bg-black"> 
        <main className="w-full">{renderContent(activePage)}</main>
      </div>
    </div>
  );
}

const renderContent = (activePage: string) => {
  switch (activePage) {
    case "Vue d'ensemble":
      return <Overview />;
    case "Campagnes":
      return <GestionCampagnes/>;
    case "Automatisation":
      return <div>Automatisation Panel</div>;
    case "Analytics":
      return <div>Analytics Panel</div>;
    case "Facturation":
      return <div>Facturation Panel</div>;
    case "Settings":
      return <div>Settings Panel</div>;
    default:
      return <Overview />;
  }
};
