export const dynamic = "force-dynamic";
import React from "react";
import EventPlanner from "./EventPlanner";

const page = async () => {
  try {
    const Response = await fetch(
      "https://store-admin-uat.actifyzone.com/store-uat/api/dynamic-template",
      {
        method: "GET",
        headers: {
          "X-Tenant-ID": "20",
        },
      },
    );

    if (!Response.ok) {
      console.error("Server not connected! - Status:", Response.status);
      return (
        <div>
          <EventPlanner data={{}} />
        </div>
      );
    }

    const Data = await Response.json();

    return (
      <div>
        <EventPlanner data={Data.formJson?.[0] || {}} />
      </div>
    );
  } catch (error) {
    console.error("Server not connected!", error);
    
    return (
      <div>
        <EventPlanner data={{}} />
      </div>
    );
  }
};

export default page;