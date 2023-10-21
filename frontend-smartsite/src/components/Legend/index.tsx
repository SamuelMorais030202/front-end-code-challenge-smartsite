import styled from './legend.module.css';

const Legend = () => {
  return (
    <div className={styled.legendContainer}>
      <section className={styled.legendItem}>
        <h3>Máscara</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <img src="/required-mask.png" alt="image required mask" />
            <p>Obrigatório</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/recommended-mask.png" alt="image recommended mask" />
            <p>Recomendado</p>
          </div>

        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Toalha</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <img src="/required-towel.png" alt="image required towel" />
            <p>obrigatório</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/recommended-towel.png" alt="image recommended towel" />
            <p>Recomendado</p>
          </div>
  
        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Bebedouro</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <img src="/partial-fountain.png" alt="image partial fountain" />
            <p>Parcial</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/forbidden-fountain.png" alt="image forbidden fountain" />
            <p>Proibido</p>
          </div>

        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Vestiários</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <img src="/required-lockerroom.png" alt="image required lockerroum" />
            <p>Liberado</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/partial-lockerroom.png" alt="image partial lockerrom" />
            <p>Parcial</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/forbidden-lockerroom.png" alt="image forbidden lockerrom" />
            <p>Fechado</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legend;