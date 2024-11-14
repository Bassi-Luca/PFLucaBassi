import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { getEbooks } from '../../data/data';

const EbookComponent = () => {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEbooks = async () => {
      setLoading(true);
      const data = await getEbooks(); // Chiama la funzione per recuperare gli eBook
      setEbooks(data);
      setLoading(false);
    };

    fetchEbooks();
  }, []);

  if (loading) {
    return (
      <HashLoader
        color="#e70000"
        cssOverride={{}}
        speedMultiplier={1}
      />
    );
  }

  return (
    <div>
      {ebooks.map((ebook) => (
        <div key={ebook.id}>
          <h2>{ebook.titulo}</h2>
          <p>{ebook.descripcion}</p>
          {/* Altri dettagli dell'eBook */}
        </div>
      ))}
    </div>
  );
};

export { EbookComponent };
