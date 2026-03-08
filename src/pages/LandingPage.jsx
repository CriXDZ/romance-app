import { RomanticGallery } from "@widgets/Gallery/RomanticGallery";
import { ProposalFlow } from "@features/ProposalFlow/ProposalFlow";
import { RomanticContent } from "@shared/ui/RomanticContent";

export const LandingPage = ({ setResponseMessage }) => {
  return (
    <div className="container">
      <RomanticGallery />
      <RomanticContent />
      <ProposalFlow setResponseMessage={setResponseMessage} />
    </div>
  );
};
