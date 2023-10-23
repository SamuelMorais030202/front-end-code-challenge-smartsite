import Image from '../Image';
import styled from './legend.module.css';

const Legend = () => {
  return (
    <div className={styled.legendContainer}>
      <section className={styled.legendItem}>
        <h3>Máscara</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <Image status='required' type='mask' />
            <p>Obrigatório</p>
          </div>

          <div className={styled.legendImage}>
            <Image status='recommended' type='mask' />
            <p>Recomendado</p>
          </div>

        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Toalha</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <Image status='required' type='towel' />
            <p>obrigatório</p>
          </div>

          <div className={styled.legendImage}>
            <Image status='recommended' type='towel' />
            <p>Recomendado</p>
          </div>
  
        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Bebedouro</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <Image status='partial' type='fountain' />
            <p>Parcial</p>
          </div>

          <div className={styled.legendImage}>
            <Image status='not_allowed' type='fountain' />
            <p>Proibido</p>
          </div>

        </div>
      </section>

      <section className={styled.legendItem}>
        <h3>Vestiários</h3>
        <div className={styled.legendImages}>
          <div className={styled.legendImage}>
            <Image status='allowed' type='locker_room' />
            <p>Liberado</p>
          </div>

          <div className={styled.legendImage}>
            <Image status='partial' type='locker_room' />
            <p>Parcial</p>
          </div>

          <div className={styled.legendImage}>
            <Image status='closed' type='locker_room' />
            <p>Fechado</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legend;