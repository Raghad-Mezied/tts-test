import { languages } from "../constant/languages";
import Close from "../assets/icons/close-circle.svg";

interface LanguageSelectorProp {
  handleClose: () => void;
  handleLanguageSelect: (language: keyof typeof languages) => void;
  selectedLanguage: keyof typeof languages;
}

export const LanguageSelector = ({
  handleClose,
  handleLanguageSelect,
  selectedLanguage,
}: LanguageSelectorProp) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h6 className="text-[#050505] font-baloo2 font-[500] text-[16px] 2xl:text-[20px]">
          Select Language
        </h6>
        <img
          onClick={handleClose}
          src={Close}
          alt="Close"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-wrap gap-[8px] my-[4px] 2xl:my-[8px] 2xl:gap-[16px]">
        {Object.keys(languages).map((language) => (
          <button
            key={language}
            onClick={() =>
              handleLanguageSelect(language as keyof typeof languages)
            }
            className={`${
              selectedLanguage === language
                ? "bg-[rgba(5,5,5,1)] text-[#FFFFFF]"
                : "bg-[rgba(5,5,5,0.05)] text-[rgba(5,5,5,0.6)]"
            }          py-[6px] px-[12px] 2xl:py-[12px] 2xl:px-[24px] font-baloo2 2xl:gap-[10px] rounded-[100px] text-[12px] md:text-[16px] 2xl:text-[24px] font-[400] flex justify-center items-center gap-[5px]`}
          >
            <span>{languages[language as keyof typeof languages]}</span>
            <span>{language}</span>
          </button>
        ))}
      </div>
    </>
  );
};
