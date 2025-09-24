import { useEffect, useState } from 'react';

const modules = import.meta.glob('/src/assets/partners/*.{png,jpg,jpeg}', {
  eager: true,
  as: 'url',
});
const logos = Object.values(modules);

function Partners() {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(5);
      else if (window.innerWidth >= 768) setColumns(4);
      else setColumns(2);
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div className="px-4 py-16 w-full">
      <div
        className={`grid gap-6 justify-items-center items-center`}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {logos.map((url, i) => (
          <a
            key={i}
            href="/LogoGrid"
            className="group relative block"
            aria-label={`Jump to full partners - Partner ${i + 1}`}
          >
            <img
              src={url}
              alt={`Partner ${i + 1}`}
              className="w-[150px] object-contain grayscale group-hover:grayscale-0 transition duration-300 hover:opacity-90"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Partners;
