import styled from './legend.module.css';

const Legend = () => {
  return (
    <div className={styled.legendContainer}>
      <section className={styled.legendItem}>
        <h3>Máscara</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <img src="/required-mask.png" alt="" />
            <p>Obrigatório</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/recommended-mask.png" alt="" />
            <p>Recomendado</p>
          </div>

        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Toalha</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <img src="/required-towel.png" alt="" />
            <p>obrigatório</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/recommended-towel.png" alt="" />
            <p>Recomendado</p>
          </div>
  
        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Bebedouro</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <img src="/partial-fountain.png" alt="" />
            <p>Parcial</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/forbidden-fountain.png" alt="" />
            <p>Proibido</p>
          </div>

        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Vestiários</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <img src="/required-lockerroom.png" alt="" />
            <p>Liberado</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/partial-lockerroom.png" alt="" />
            <p>Parcial</p>
          </div>

          <div className={styled.legendImage}>
            <img src="/forbidden-lockerroom.png" alt="" />
            <p>Fechado</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legend;