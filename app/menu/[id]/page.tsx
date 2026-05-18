import Breadcrumb from "@/app/components/Breadcrumb";
import { menu2 } from "@/app/menu2/[id2]/route";
import Image from "next/image";
import { menu } from "@/app/data/data"; // أو حسب مسار ملف data.ts الجديد بتاعك
import React from "react";
export const dynamicParams = true; // 2. إجبار السيرفر على قبول أطباق جديدة


async function getFoodData(id: string) {
  const food = menu2.find(
    (item:any) => item.id === Number(id)
  );

  return food;
}

export default async function MenuSingle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const food = await getFoodData(id);

  if (!food) {
    return (
      <main className="container py-5">
        <h1>Food Not Found</h1>
      </main>
    );
  }

  return (
    <main id="main">
      <Breadcrumb page="Menu" />

      <section className="inner-page">
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <Image
                src={food.preview}
                alt={food.title}
                height={500}
                width={500}
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="mt-3">
                {food.title}
              </h2>

              

              <p className="mt-5">
                {food.description}
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}