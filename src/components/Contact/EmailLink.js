import React, { useState, useEffect, useRef } from 'react';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'hi',
  'hello',
  'aloha',
  'bonjour',
  '你好 (nǐ hǎo)',
  'kon\'nichiwa',
  'përshëndetje',
  'مرحبا',
  'হ্যালো',
  'Здравейте',
  'ahoj',
  'hallo',
  'kamusta',
  'नमस्ते',
  'helló',
  'dia dhuit',
  'ciao',
  '안녕하세요',
  'salve',
  'namaskāra',
  'olá',
  'privet',
  'dia dhuit',
  'hola',
  'hej',
  'merhaba',
  'xin chào',
  'woah',
  'you watched the whole thing',
  'refresh to see it again :)',
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

const EmailLink = () => {
  const hold = 30; // ticks to wait after message is complete before rendering next message
  const delay = 30; // tick length in mS

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

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <a href={validateText(message) ? `mailto:${message}@mldangelo.com` : ''}>
        <span>{message}</span>
        <span>@mldangelo.com</span>
      </a>
    </div>
  );
};

export default EmailLink;
