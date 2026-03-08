import picture1 from "@shared/assets/img/Picture01.webp";
import picture2 from "@shared/assets/img/Picture02.webp";
import picture3 from "@shared/assets/img/Picture03.webp";
import picture4 from "@shared/assets/img/Picture04.webp";

export const RomanticGallery = () => {
  return (
    <div id="photoGallery" className="photo-gallery">
      <h1>Para ti mi chica hermosa</h1>
      <div className="photos">
        <img src={picture1} alt="Romántica 1" />
        <img src={picture2} alt="Romántica 2" />
        <img src={picture3} alt="Romántica 3" />
        <img src={picture4} alt="Romántica 4" />
      </div>
    </div>
  );
};
