import picture1 from "@shared/assets/img/Picture01.webp";
import picture2 from "@shared/assets/img/Picture02.webp";
import picture3 from "@shared/assets/img/Picture03.webp";
import picture4 from "@shared/assets/img/Picture04.webp";

export const RomanticGallery = () => {
  return (
    <div className="py-2">
      <h1 className="text-romantic-pink mb-6 text-center text-3xl font-bold drop-shadow-sm">
        Para ti mi chica hermosa
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <img
          src={picture1}
          alt="Romántica 1"
          className="aspect-square h-auto w-full rounded-xl object-cover shadow-md transition-transform hover:scale-[1.02]"
        />
        <img
          src={picture2}
          alt="Romántica 2"
          className="aspect-square h-auto w-full rounded-xl object-cover shadow-md transition-transform hover:scale-[1.02]"
        />
        <img
          src={picture3}
          alt="Romántica 3"
          className="aspect-square h-auto w-full rounded-xl object-cover shadow-md transition-transform hover:scale-[1.02]"
        />
        <img
          src={picture4}
          alt="Romántica 4"
          className="aspect-square h-auto w-full rounded-xl object-cover shadow-md transition-transform hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};
