import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Home({ data }) {
  useEffect(() => {
    if (data) console.log(data);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={data.sprites.front_default}
        width={96}
        height={96}
      />

      <p className="text-lg font-medium text-sky-900">
        Next.js, Tailwind & Prisma
      </p>

      <p className="text-sm text-stone-700">
        Boilerplate by Enrique Domínguez and
        {' '}
        {`${data.name[0].toUpperCase()}${data.name.substring(1)}`}
      </p>
    </div>
  );
}

Home.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export async function getServerSideProps() {
  const raw = await fetch(`${process.env.POKEAPI}/132`);
  const res = await raw.json();

  return { props: { data: res } };
}
