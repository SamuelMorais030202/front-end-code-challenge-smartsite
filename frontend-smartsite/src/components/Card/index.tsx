import DOMPurify from "dompurify";
import Image from "../Image";
import { DataResponseType } from "../../types";
import { ImageStatus } from "../../types";

const Card = (props : DataResponseType) => {
  const sanitizedContent = DOMPurify.sanitize(props.content || "");

  return (
    <div>
      <p>
        {
          props.opened
          ? <span>Aberto</span>
          : <span>Fechado</span>
        }
      </p>
      <h4>{props.title}</h4>

      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />

      {
        props.opened
        ? (
          <>
            <hr />
            <div>
              <Image type="mask" status={props.mask as ImageStatus} />
              <Image type="towel" status={props.towel as ImageStatus} />
              <Image type="fountain" status={props.fountain as ImageStatus} />
              <Image type="locker_room" status={props.locker_room as ImageStatus} />
            </div>

            <div>
              {
                props.schedules?.map((shedule, index) => (
                  <div key={index}>
                    <h5>{shedule.weekdays}</h5>
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