import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

export const Discord = () => {
    return (
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
    
    );
};

export const LinkedIn = () => {
    return (
    <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    );
};

export const FaceBook = () => {
    return (
    <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    );
};

export const Instagram = () => {
    return (
    <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    );
};