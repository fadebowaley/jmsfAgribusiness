import { useState } from "react";

const partners = [
  { name: "Logo 1", src: "/partner1.png" },
  { name: "Logo 2", src: "/partner2.png" },
  { name: "Logo 3", src: "/partner3.png" },
  { name: "Logo 4", src: "/partner4.jpg" },
  { name: "Logo 5", src: "/partner5.jpeg" },
  { name: "Logo 6", src: "/partner6.jpeg" },
  { name: "Logo 7", src: "/partner7.jpg" },
  { name: "Logo 8", src: "/partner8.jpg" },
  { name: "Logo 9", src: "/partner9.jpg" },
  { name: "Logo 10", src: "/partner10.jpeg" },
  { name: "Logo 11", src: "/partner11.jpeg" },
  { name: "Logo 12", src: "/partner12.jpg" },
  { name: "Logo 13", src: "/partner13.jpeg" },
  { name: "Logo 14", src: "/partner14.jpg" },
  { name: "Logo 15", src: "/partner15.jpeg" },
  { name: "Logo 16", src: "/partner16.jpeg" },
  { name: "Logo 17", src: "/partner17.jpeg" },
  { name: "Logo 18", src: "/partner18.jpeg" },
  { name: "Logo 19", src: "/partner19.jpeg" },
  { name: "Logo 20", src: "/partner20.jpeg" },
  { name: "Logo 21", src: "/partner21.jpeg" },
  { name: "Logo 22", src: "/partner22.jpeg" },
  { name: "Logo 23", src: "/partner23.jpeg" },
  { name: "Logo 24", src: "/partner24.jpeg" },
  { name: "Logo 25", src: "/partner25.jpeg" },
  { name: "Logo 26", src: "/partner26.jpeg" },
  { name: "Logo 27", src: "/partner27.jpeg" },
  { name: "Logo 28", src: "/partner28.jpeg" },
  { name: "Logo 29", src: "/partner29.jpeg" },
  { name: "Logo 30", src: "/partner30.jpeg" },
  { name: "Logo 31", src: "/partner31.jpg" },
  { name: "Logo 32", src: "/partner32.jpeg" },
  { name: "Logo 33", src: "/partner33.jpeg" },
  { name: "Logo 34", src: "/partner34.jpeg" },
  { name: "Logo 35", src: "/partner35.jpeg" },
  { name: "Logo 36", src: "/partner36.jpeg" },
  { name: "Logo 37", src: "/partner37.jpeg" },
  { name: "Logo 38", src: "/partner38.jpeg" },
  { name: "Logo 39", src: "/partner39.jpeg" },
  { name: "Logo 40", src: "/partner40.jpeg" },
  { name: "Logo 41", src: "/partner41.jpeg" },
  { name: "Logo 42", src: "/partner42.jpeg" },
  { name: "Logo 43", src: "/partner43.jpeg" },
  { name: "Logo 44", src: "/partner44.jpeg" },
  { name: "Logo 45", src: "/partner45.jpeg" },
  { name: "Logo 46", src: "/partner46.jpeg" },
  { name: "Logo 47", src: "/partner47.jpeg" },
];

function PartnerLogo({ name, src }) {
  return (
    <div
      className="w-32 h-20 flex items-center justify-center transition duration-300 hover:filter-none filter grayscale hover:scale-105"
      title={name}
    >
      <img
        src={src}
        alt={name}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function LogoGrid() {
  const logosPerPage = 12;
  const totalPages = Math.ceil(partners.length / logosPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const visible = partners.slice(
    (currentPage - 1) * logosPerPage,
    currentPage * logosPerPage
  );

  return (
    <section className="bg-white pb-20" id="LogoGrid">
      <h1 className="text-center font-bold text-4xl font-[Poppins] mb-10">
        Our Partners
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-4">
        {visible.map((partner, index) => (
          <PartnerLogo key={index} name={partner.name} src={partner.src} />
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-3">
        {[...Array(totalPages)].map((_, pageIndex) => {
          const page = pageIndex + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded border font-semibold ${
                currentPage === page
                  ? "bg-[#1fa12e] text-white"
                  : "bg-white text-[#1fa12e] border-[#1fa12e]"
              } hover:bg-[#14801c] hover:text-white transition`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </section>
  );
}
