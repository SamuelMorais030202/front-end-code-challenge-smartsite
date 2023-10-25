import DOMPurify from "dompurify";
import Image from "../Image";
import { DataResponseType } from "../../types";
import { ImageStatus } from "../../types";
import styled from "./card.module.css";

const Card = (props : DataResponseType) => {
  const sanitizedContent = DOMPurify.sanitize(props.content || "");

  return (
    <div className={styled.cardContainer}>
      <p>
        {
          props.opened
          ? <span className={styled.open}>Aberto</span>
          : <span className={styled.closed}>Fechado</span>
        }
      </p>

      <h3 className={styled.cardTitle}>{props.title}</h3>

      <div
        className={styled.cardAddress}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />

      {
        props.opened
        ? (
          <>
            <hr />
            <div className={styled.cardImages}>
              <Image type="mask" status={props.mask as ImageStatus} />
              <Image type="towel" status={props.towel as ImageStatus} />
              <Image type="fountain" status={props.fountain as ImageStatus} />
              <Image type="locker_room" status={props.locker_room as ImageStatus} />
            </div>

            <div className={styled.cardShedules}>
              {
                props.schedules?.map((shedule, index) => (
                  <div key={index}>
                    <h4>{shedule.weekdays}</h4>
                    <p>{shedule.hour}</p>
                  </div>
                ))
              }
            </div>
          </>
        )
        : null
      }
    </div>
  );
};

export default Card;