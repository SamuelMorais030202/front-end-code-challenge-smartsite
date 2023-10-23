import { ImageStatus, ImageType } from "../../types";

const Image = ({ type, status } : { type: ImageType, status: ImageStatus }) => {
  const getImageSrc = () => {
    const imageMap: Record<ImageType, Record<ImageStatus, string>> = {
      mask: {
        recommended: "/recommended-mask.png",
        required: "/required-mask.png",
        partial: "",
        not_allowed: "",
        allowed: "",
        closed: "",
      },
      towel: {
        recommended: "/recommended-towel.png",
        required: "/required-towel.png",
        partial: "",
        not_allowed: "",
        allowed: "",
        closed: "", 
      },
      fountain: {
        partial: "/partial-fountain.png",
        not_allowed: "/forbidden-fountain.png",
        recommended: "",
        required: "",
        allowed: "",
        closed: "",
      },
      locker_room: {
        allowed: "/required-lockerroom.png",
        closed: "/forbidden-lockerroom.png",
        partial: "/partial-lockerroom.png",
        recommended: "",
        required: "",
        not_allowed: "",
      },
    };

    return imageMap[type][status] || "";
  }

  return <img src={getImageSrc()} alt={`${type} image`} />
}

export default Image;