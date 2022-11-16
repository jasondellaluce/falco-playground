import { useEffect, useState } from 'react';
import * as Module from './wasm.js'
import * as AsBind from 'as-bind';

function useFalco() {
  const [loading, setLoading] = useState(false);
  const [falco, setFalco] = useState();
  const [error, setError] = useState();

  useEffect(() => { 
    setLoading(true);
    setError(null);
    const fetchWasm = async () => {
      try {
        let module = await Module({
          locateFile: function(s) {
            return s;
          }
        });
        
        let api = {
          getEngineVersion: module.cwrap('playground_get_version', 'number'),
          validateRules: module.cwrap('playground_load_rules', 'string', ['string', 'string'])
        };
        
        setFalco(api);
        setError(null);
      }
      catch(err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchWasm();
  }, []);

  return [falco, loading, error];

}
export default useFalco;