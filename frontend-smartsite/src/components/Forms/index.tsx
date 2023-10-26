import styled from './forms.module.css';
import useSearchContext from '../../hooks/useSearchContext';
import { useState } from 'react';

const Forms = () => {
  const {
    closed,
    trainingPeriod,
    setTrainingPeriod,
    setClosed,
    numberOfUnits,
  } = useSearchContext();

  const [changeSelectedPeriod, setChangeSelectedPeriod] = useState(trainingPeriod);
  const [changeSelectedClose, setChangeSelectedClose] = useState(closed); 

  const handleRadioChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setChangeSelectedPeriod(event.target.value);
  }

  const filteringGyms = () => {
    setTrainingPeriod(changeSelectedPeriod);
    setClosed(changeSelectedClose as boolean);
  }

  const handleClearFilters = () => {
    setTrainingPeriod("");
    setClosed(false);
    setChangeSelectedClose(false);
    setChangeSelectedPeriod("");
  }
 
  return (
    <div className={styled.formsContainer}>
      <section className={styled.formsHeading}>
        <p>
          <img src="/icon-hour.png" alt="ícon hour" />
          <span data-testid="forms-hours">Horário</span>
        </p>
        <h3>Qual período quer treinar?</h3>
        <hr />
      </section>

      <section className={styled.formsOptions}>
        <div className={styled.options}>
          <label htmlFor='morning'>
            <input
              type="radio"
              name="training-period"
              id="morning"
              value="06h 12h"
              checked={changeSelectedPeriod === "06h 12h"}
              onChange={handleRadioChange}
            />
            Manhã
          </label>
          <span>06:00 ás 12:00</span>
        </div>

        <hr />

        <div className={styled.options}>
          <label htmlFor='afternoon'>
            <input
              type="radio"
              name="training-period"
              id="afternoon"
              value="12h 18h"
              checked={changeSelectedPeriod === "12h 18h"}
              onChange={handleRadioChange}
            />
            Tarde
          </label>
          <span>12:01 ás 18:00</span>
        </div>

        <hr />

        <div className={styled.options}>
          <label htmlFor='evening'>
            <input
              type="radio"
              name="training-period"
              id="evening"
              value="18h 21h"
              checked={changeSelectedPeriod === "18h 21h"}
              onChange={handleRadioChange}
            />
            Noite
          </label>
          <span>18:01 ás 21:00</span>
        </div>

        <hr />
      </section>

      <section className={styled.formsSearch}>
        <div className={styled.formsSearchChackbox}>
          <label htmlFor='closed'>
            <input
              type="checkbox"
              name="closed"
              id="closed"
              checked={changeSelectedClose as boolean}
              onChange={ () => setChangeSelectedClose((prev) => !prev) }
            />
            Exibir unidades fechadas
          </label>
          <span>{`Resultados encontrados ${numberOfUnits}`}</span>
        </div>

        <div className={styled.formsSearchButtons}>
          <button
            onClick={filteringGyms}
          >
            ENCONTRAR UNIDADE
          </button>
          <button
            onClick={handleClearFilters}
          >LIMPAR</button>
        </div>
      </section>
    </div>
  );
};

export default Forms;