import React from "react";
import Link from "next/link";

export interface Attraction {
  id: number;
  name: string;
  detail: string;
  coverimage: string;
}

async function getData() {
  const res = await fetch("https://www.melivecode.com/api/attractions");
  return res.json();
}

async function page() {
  const items = await getData();
  console.log(items);

  return (
    <div className="grid-container">
      {items.map((item: Attraction) => (
        <div className="card" key={item.id}>
          <img
            src={item.coverimage}
            alt={item.name}
            style={{ width: "100%" }}
          />
          <div className="container">
            <h4>
              <b>{item.name}</b>
            </h4>
            <p>{item.detail}</p>
            <Link href={"/attractions/" + item.id}>Read more </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
