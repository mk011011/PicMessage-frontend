//연락처 추가 페이지
import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <h2>연락처 추가 페이지</h2>
      <form>
        <label>이름:</label>
        <input type="text" placeholder="이름 입력" />
        <label>번호:</label>
        <input type="text" placeholder="번호 입력" />
        <label>태그:</label>
        <input type="text" placeholder="태그 입력" />
        <label>특이사항:</label>
        <input type="text" placeholder="특이사항 입력" />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default ContactForm;
