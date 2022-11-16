import { useEffect, useState } from 'react';
import * as Module from './wasm.js'

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
        
        let playground = module.ccall('playground_create', 'number');
        let getEngineVersion = module.cwrap('playground_get_version', 'number', ['number']);
        let validateRules = module.cwrap('playground_load_rules', 'string', ['number', 'string', 'string']);
        let newFalco = {
          module: module,
          getEngineVersion: () => getEngineVersion(playground),
          validateRules: (name, content) => validateRules(playground, name, content),
        };
        
        setFalco(newFalco);
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