import Link from "next/link";
import React from "react";

async function getData(id: number) {
  const res = await fetch("https://www.melivecode.com/api/attractions/" + id);

  return res.json();
}

async function page({ params }: any) {
  const { id } = params;
  const item = await getData(id);
  return (
    <div className="card" key={item.attraction.id}>
      <img
        src={item.attraction.coverimage}
        alt={item.attraction.name}
        style={{ width: "100%" }}
      />
      <div className="container">
        <h4>
          <b>{item.attraction.name}</b>
        </h4>
        <p>{item.attraction.detail}</p>
      </div>
    </div>
  );
}

export default page;
