import { useEffect, useState }from 'react';

function useFalco() {
  const [loading, setLoading] = useState(false);
  const [falco, setFalco] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFalco({
        getFields: () => [],
        validateContent: () => [],
      })
    }, 1000)
  }, []);

  return [falco, loading, error];

}
export default useFalco;