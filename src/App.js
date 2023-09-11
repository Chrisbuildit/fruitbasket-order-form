import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import InputField from './components/InputField/InputField';

function App() {

    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [formState, setFormState] = useState({
        voornaam: '',
        achternaam: '',
        age:0,
        postcode:'',
        deliverFrequency:'every week',
        checkbox: false,
        comments: '',
        checkbox2: 'off',
    })

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(`
        Voornaam: ${formState.voornaam},
        Achternaam: ${formState.achternaam}
        Leeftijd: ${formState.age}`);
    }

    function reset() {
        setAardbeien(0);
        setBananen(0);
        setAppels(0);
        setKiwis(0);
    }

    function handleChange(e) {
        const changeFieldName = e.target.name;
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormState({...formState, [changeFieldName]: newValue,});
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
                  counter = {bananen}
                  setCounter = {setBananen}
              />
          </article>
          <article>
              <h2>Appels</h2>
              <Counter
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
        <form onSubmit={onFormSubmit}>
        <section>
            <InputField
            label = 'Voornaam:'
            inputType = 'text'
            name = 'voornaam'
            value = {formState.voornaam}
            changeHandler = {handleChange}
            />
            <section>
                <InputField
                    label = 'Achternaam:'
                    inputType = 'text'
                    name = 'achternaam'
                    value = {formState.achternaam}
                    changeHandler = {handleChange}
                />
            </section>
            <section>
                <InputField
                    label = 'Leeftijd:'
                    inputType = 'number'
                    name = 'age'
                    value = {formState.age}
                    changeHandler = {handleChange}
                />
            </section>
            <section>
                <InputField
                    label = 'Postcode:'
                    inputType = 'text'
                    name = 'postcode'
                    value = {formState.postcode}
                    changeHandler = {handleChange}
                />
            </section>
            <section>
                <p>Bezorgfrequentie</p>
                <select
                    name = 'deliverFrequency'
                    value = {formState.deliverFrequency}
                    onChange = {handleChange}>
                    <option value = 'every second week'>Om de week</option>
                    <option value = 'every week'>Iedere week</option>
                    <option value = 'every month'>Iedere maand</option>
                </select>
            </section>
            <section>
                <label>
                    <input
                        name = 'checkbox'
                        type = 'radio'
                        value = {formState.checkbox}
                        checked={formState.checkbox}
                        onChange= {handleChange}
                    />
                    Overdag
                </label>
                <label>
                    <input
                        name = 'checkbox'
                        type = 'radio'
                        value = {formState.checkbox}
                        onChange= {handleChange}
                    />
                    s' Avonds
                </label>
            </section>
            <section>
                <p>Opmerkingen</p>
                <textarea
                    name='comments'
                    value={formState.comments}
                    onChange={handleChange}
                >
                </textarea>
            </section>
        </section>
            <label>
                <input
                    name = 'checkbox2'
                    type = 'checkbox'
                    value = {formState.checkbox2}
                    onChange= {handleChange}
                />
                Ik ga akkoord met de voorwaarden
            </label>
            <button type='submit'>Verzend</button>
        </form>
    </>
  );
}

export default App;