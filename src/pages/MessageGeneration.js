import React, { useState } from 'react';

const MessageGenerationPage = () => {
  const [inputText, setInputText] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleGenerateMessage = () => {
    // 메시지 생성 로직
    setGeneratedMessage(`Generated message for: ${inputText}`);
  };

  const handleUseMessage = () => {
    alert('Using the generated message: ' + generatedMessage);
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        {/* 왼쪽 섹션: 발송 목적 및 내용 */}
        <div style={styles.column}>
          <h2>발송 목적 및 내용</h2>
          <textarea
            placeholder="text 입력"
            value={inputText}
            onChange={handleInputChange}
            style={styles.textArea}
          />
          <div style={styles.keywordsSection}>
            <h2>중요키워드 제시</h2>
            <div style={styles.keywords}>
              {['초대', '안내', '홍보', '안부', '명절인사', '감사', '사과', '환영'].map((keyword) => (
                <button key={keyword} style={styles.keywordButton}>
                  {keyword}
                </button>
              ))}
            </div>
          </div>
          <button onClick={handleGenerateMessage} style={styles.generateButton}>
            메시지 생성
          </button>
        </div>

        {/* 오른쪽 섹션: 생성 결과 */}
        <div style={styles.column}>
          <h2>생성결과</h2>
          <div style={styles.resultBox}>
            {generatedMessage ? generatedMessage : '결과가 여기에 표시됩니다.'}
          </div>
          <button onClick={handleUseMessage} style={styles.useButton}>
            메시지사용
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '900px',
    marginBottom: '20px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
  },
  textArea: {
    width: '100%',
    height: '150px',
    marginTop: '10px',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  resultBox: {
    width: '100%',
    height: '150px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
    fontSize: '16px',
    marginBottom: '20px',
  },
  keywordsSection: {
    marginTop: '20px',
  },
  keywords: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  keywordButton: {
    padding: '10px 20px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
  },
  generateButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#b3c7ff',
    border: 'none',
    borderRadius: '8px',
  },
  useButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#b3c7ff',
    border: 'none',
    borderRadius: '8px',
    alignSelf: 'center',
  },
};

export default MessageGenerationPage;
