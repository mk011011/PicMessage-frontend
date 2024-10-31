import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 메시지 생성 페이지 컴포넌트
const MessageGenerationPage = () => {
  const [inputText, setInputText] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]); // 선택된 키워드 상태 추가

  const navigate = useNavigate();

  const keywords = [
    "초대",
    "안내",
    "홍보",
    "안부",
    "명절인사",
    "감사",
    "사과",
    "환영",
  ];

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleGenerateMessage = () => {
    setGeneratedMessage(inputText);
  };

  const handleUseMessage = () => {
    const alertMessage = `선택된 키워드: ${
      selectedKeywords.length > 0 ? selectedKeywords.join(", ") : "없음"
    }\n\n입력된 메시지:\n${inputText}`;

    alert(alertMessage);

    navigate("/", { state: { message: generatedMessage } }); // generatedMessage를 state로 전달
  };

  const toggleKeywordSelection = (keyword) => {
    setSelectedKeywords(
      (prevSelected) =>
        prevSelected.includes(keyword)
          ? prevSelected.filter((k) => k !== keyword) // 이미 선택된 키워드이면 제거
          : [...prevSelected, keyword] // 선택되지 않은 키워드이면 추가
    );
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

          {/* 주요 키워드를 버튼으로 제공하는 영역 */}
          <div style={styles.keywordContainer}>
            <h3>주요 키워드 제시</h3>
            <div style={styles.keywordButtons}>
              {keywords.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => toggleKeywordSelection(keyword)}
                  style={{
                    ...styles.keywordButton,
                    backgroundColor: selectedKeywords.includes(keyword)
                      ? "#b3c7ff"
                      : "#e1e5f2", // 선택 시 색상 변화
                  }}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* 메시지 생성 버튼 */}
          <button onClick={handleGenerateMessage} style={styles.generateButton}>
            메시지 생성
          </button>
        </div>

        {/* 오른쪽 섹션: 생성 결과 */}
        <div style={styles.column}>
          <h2>생성결과</h2>
          <textarea
            style={styles.textArea}
            placeholder="결과"
            value={generatedMessage}
            readOnly
          />
          {/* 메시지 사용 버튼 */}
          <button onClick={handleUseMessage} style={styles.useButton}>
            메시지사용
          </button>
        </div>
      </div>
    </div>
  );
};

// 스타일 객체 정의
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "20px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
  },
  textArea: {
    width: "100%",
    height: "150px",
    marginTop: "10px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  keywordContainer: {
    marginTop: "20px",
  },
  keywordButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  },
  keywordButton: {
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    borderRadius: "8px",
  },
  generateButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#b3c7ff",
    border: "none",
    borderRadius: "8px",
  },
  useButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#b3c7ff",
    border: "none",
    borderRadius: "8px",
    alignSelf: "center",
    marginTop: "186px",
  },
};

export default MessageGenerationPage;
