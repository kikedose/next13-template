import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Home({ data }) {
  useEffect(() => {
    if (data) console.log(data);
  }, []);

  return (
    <div>
      <Image
        src={data.sprites.front_default}
        width={96}
        height={96}
      />

      <p>
        Next.js, Tailwind & Prisma
      </p>

      <p>
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
