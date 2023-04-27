import { useEffect, useState } from 'react';
import axios from 'axios';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: {
        'X-Api-Key': 'HmXWPPlh8e3KzGUAtzN6Dg==BncHWBjQ4yEvHwrB',
      },
    })
      .then((response) => {
        setQuote(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <>
      {quote && (
        <div>
          <p>{quote.quote}</p>
          <p>
            —
            <em style={{ fontStyle: 'italic' }}>{quote.author}</em>
          </p>
        </div>
      )}
    </>
  );
}

export default Quote;
