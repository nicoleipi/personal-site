import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const messages = [
    'hi',
    'hello',
    'hola',
    'you-can-email-me-at-literally-anything! Really',
    'well, not anything. But most things',
    'like-this',
    'or-this',
    'but not this :(  ',
    'you.can.also.email.me.with.specific.topics.like',
    'just-saying-hi',
    'please-work-for-us',
    'help',
    'admin',
    'or-I-really-like-your-website',
    'thanks',
  ];
  
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      if (delay) {
        const id = setInterval(() => {
          savedCallback.current();
        }, delay);
        return () => clearInterval(id);
      }
      return () => {}; // pass linter
    }, [delay]);
  };
  
  const Hello = () => {
    const hold = 50; // ticks to wait after message is complete before rendering next message
    const delay = 50; // tick length in mS
  
    const [idx, updateIter] = useState(0); // points to current message
    const [message, updateMessage] = useState(messages[idx]);
    const [char, updateChar] = useState(messages[idx].length); // points to current char
    const [isActive, setIsActive] = useState(true); // disable when all messages are printed
  
    useInterval(() => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    }, isActive ? delay : null);
  };

export default Hello;