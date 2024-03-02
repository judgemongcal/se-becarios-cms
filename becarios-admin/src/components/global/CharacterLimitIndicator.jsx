import { useCreateArticleContext } from '../../hooks/useCreateArticleContext';

function CharacterLimitIndicator() {
  const { numOfChars } = useCreateArticleContext();
  const charLimit = 2500;

  return (
    <p
      className={`rounded-8 shadow-shadow-db mb-5 self-end p-3 ${
        numOfChars >= 2500
          ? 'bg-brand-red'
          : numOfChars < 2500 && numOfChars >= 2000
            ? 'bg-[#ff4d00]'
            : numOfChars < 2000 && numOfChars >= 1500
              ? 'bg-brand-yellow'
              : 'bg-brand-light'
      }`}
    >
      {numOfChars} / 2500 characters
    </p>
  );
}

export default CharacterLimitIndicator;
