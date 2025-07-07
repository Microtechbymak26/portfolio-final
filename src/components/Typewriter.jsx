
import React from 'react';

const TypewriterEffect = ({ strings }) => {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const fullText = strings[index];
    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((index + 1) % strings.length);
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, strings]);

  return (
    <span className="relative">
      {text}
      <span className="absolute -right-2 w-[2px] h-8 md:h-10 bg-white inline-block animate-pulse" />

    </span>
  );
};

export default TypewriterEffect;
