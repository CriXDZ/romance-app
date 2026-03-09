import { RomanticGallery } from "@widgets/Gallery/RomanticGallery";
import { ProposalFlow } from "@features/ProposalFlow/ProposalFlow";
import { RomanticContent } from "@shared/ui/RomanticContent";

export const LandingPage = ({ setResponseMessage }) => {
  return (
    <div className="animate-fade-in relative mx-auto my-4 flex w-[94%] max-w-[700px] flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/80 px-4 py-8 shadow-lg sm:p-6 md:my-10 md:w-[92%] md:rounded-3xl md:border-white/80 md:bg-white/70 md:p-10 md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:backdrop-blur-lg">
      <RomanticGallery />
      <div className="mt-8">
        <RomanticContent />
      </div>
      <div className="mt-8">
        <ProposalFlow setResponseMessage={setResponseMessage} />
      </div>
    </div>
  );
};
