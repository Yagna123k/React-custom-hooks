import './App.css'
import useStorage from './useStorage'

function App() {

  const [inpText, setInpText] = useStorage('inpText', '');

  return (
    <>
      <div>
        <input
          type="text"
          value={inpText} 
          onChange={(e) => {
            setInpText(e.target.value);
          }}
          placeholder='Input here...'
        />
      </div>
    </>
  );
}

export default App;