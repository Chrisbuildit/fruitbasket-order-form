import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import inputField from './components/inputField';

function App() {

    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [formState, setFormState] = useState({voornaam: '',})

    function onFormSubmit(e) {
        e.preventDefault();
        console.log("Test");
    }

    function reset() {
        {setAardbeien(0)};
        {setBananen(0)};
        {setAppels(0)};
        {setKiwis(0)};
    }

    function handleChange(e) {
        setFormState({voornaam: e.target.value,});
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <section className = 'fruit-counters'>
          <article>
            <h2>Aardbeien</h2>
                <Counter
                    counter = {aardbeien}
                    setCounter = {setAardbeien}
                />
          </article>
          <article>
          <h2>Bananen</h2>
              <Counter
                  className = 'fruit-counters'
                  counter = {bananen}
                  setCounter = {setBananen}
              />
          </article>
          <article>
              <h2>Appels</h2>
              <Counter
                  className = 'fruit-counters'
                  counter = {appels}
                  setCounter = {setAppels}
              />
          </article>
          <article>
              <h2>Kiwi's</h2>
              <Counter
                  className = 'fruit-counters'
                  counter = {kiwis}
                  setCounter = {setKiwis}
              />
          </article>
          <button
              type = 'button'
              onClick={() => reset()}
          >Reset
          </button>
      </section>
        <form onSubmit=''>
        <section>
            <inputField
            label = 'Voornaam:'
            inputType = 'text'
            name = "voornaam"
            value = {formState.voornaam}
            changeHandler = {handleChange}
            />
        </section>
        </form>
    </>
  );
}

export default App;
