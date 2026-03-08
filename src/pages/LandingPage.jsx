import { RomanticGallery } from "@widgets/Gallery/RomanticGallery";
import { ProposalFlow } from "@features/ProposalFlow/ProposalFlow";
import { RomanticContent } from "@shared/ui/RomanticContent";

export const LandingPage = ({ setResponseMessage }) => {
  return (
    <div className="bg-romantic-bg animate-fade-in relative mx-auto mt-10 w-[92%] max-w-[600px] rounded-2xl p-8 shadow-xl">
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
