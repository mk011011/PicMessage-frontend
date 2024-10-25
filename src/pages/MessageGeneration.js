//문자 자동생성 페이지
import React from 'react';

const MessageGeneration = () => {
  return (
    <div>
      <h2>문자 자동생성 페이지</h2>
      <textarea placeholder="여기에 문자를 입력하세요" style={styles.textArea}></textarea>
    </div>
  );
};

const styles = {
  textArea: {
    width: '100%',
    height: '150px',
    marginTop: '20px',
  },
};

export default MessageGeneration;
