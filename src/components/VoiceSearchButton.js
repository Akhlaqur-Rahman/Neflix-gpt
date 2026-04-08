import { Mic, MicOff } from "lucide-react";

const VoiceSearchButton = ({ isListening, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-2 rounded-md text-white flex items-center gap-2
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}
      `}
      title="Voice Search"
    >
      {isListening ? <MicOff size={18} /> : <Mic size={18} />}
      <span className="hidden sm:block text-sm">
        {isListening ? "Listening..." : "Voice"}
      </span>
    </button>
  );
};

export default VoiceSearchButton;
