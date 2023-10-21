import styled from './forms.module.css';
import useSearchContext from '../../hooks/useSearchContext';

const Forms = () => {
  const {
    closed,
    setTrainingPeriod,
    setClosed
  } = useSearchContext();

  const handleRadioChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setTrainingPeriod(event.target.value);
  }

  return (
    <div className={styled.formsContainer}>
      <section className={styled.formsHeading}>
        <p>
          <img src="/icon-hour.png" alt="ícon hour" />
          Horário
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
              value="morning"
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
              value="afternoon"
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
              value="evening"
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
              checked={closed}
              onChange={ () => setClosed(!closed) }
            />
            Exibir unidades fechadas
          </label>
          <span>Resultados encontrados 0</span>
        </div>

        <div className={styled.formsSearchButtons}>
          <button>ENCONTRAR UNIDADE</button>
          <button>LIMPAR</button>
        </div>
      </section>
    </div>
  );
};

export default Forms;