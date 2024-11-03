import React, { useState } from "react";
import axios from "axios";

const PersonalizationModal = ({ selectedContacts, closeModal, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [convertedText, setConvertedText] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태

  const currentContact = selectedContacts[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < selectedContacts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleConvert = async () => {
    if (!convertedText) {
      alert("변환할 텍스트를 입력하세요.");
      return;
    }

    setLoading(true);
    try {
      // 선택된 말투에 맞는 지시사항을 설정
      const toneInstruction =
        {
          친근한: "친근하고 다정한 말투로",
          격식있는: "격식 있는 말투로",
          유쾌한: "유쾌하고 밝은 말투로",
          정중한: "정중하고 공손한 말투로",
          친구: "친구한테 하는 말투로",
          힙합: "힙합하는 사람 말투로",
          여자친구: "여자친구한테 하는 말투로",
          오바마: "오바마같은 말투로",
          아재: "아재같은 말투로",
        }[currentContact.tone] || "기본 말투로";

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            {
              role: "user",
              content: `Please rewrite the following message in a tone that is ${toneInstruction}. 
              Keep the original message's intent intact. Original message: "${convertedText}".`,
            },
          ],
          max_tokens: 500,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      setConvertedText(response.data.choices[0].message.content.trim());
    } catch (error) {
      console.error(
        "API 호출 오류:",
        error.response ? error.response.data : error.message
      );
      alert("텍스트 변환에 실패했습니다. 다시 시도해주세요.");
    }
    setLoading(false);
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2 style={styles.title}>텍스트 개인 맞춤화</h2>

        {currentContact && (
          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <label>이름:</label>
              <input
                type="text"
                value={currentContact.name}
                readOnly
                style={styles.inputField}
              />
            </div>
            <div style={styles.inputGroup}>
              <label>태그:</label>
              <input
                type="text"
                value={currentContact.tag}
                readOnly
                style={styles.inputField}
              />
            </div>
            <div style={styles.inputGroup}>
              <label>어조:</label>
              <input
                type="text"
                value={currentContact.tone}
                readOnly
                style={styles.inputField}
              />
            </div>

            <div style={styles.convertSection}>
              <span style={styles.convertLabel}>텍스트 변환</span>
              <button
                type="button"
                style={styles.convertButton}
                onClick={handleConvert}
                disabled={loading} // 로딩 시 버튼 비활성화
              >
                {loading ? "변환 중..." : "변환"}
              </button>
            </div>

            <textarea
              style={styles.textArea}
              value={convertedText}
              onChange={(e) => setConvertedText(e.target.value)}
              placeholder="여기에 텍스트가 표시됩니다."
            />
          </form>
        )}

        <div style={styles.pagination}>
          <button onClick={() => setCurrentIndex(0)} style={styles.navButton}>
            처음
          </button>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={styles.navButton}
          >
            이전
          </button>
          <span style={styles.pageInfo}>
            {currentIndex + 1} / {selectedContacts.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentIndex === selectedContacts.length - 1}
            style={styles.navButton}
          >
            다음
          </button>
          <button
            onClick={() => setCurrentIndex(selectedContacts.length - 1)}
            style={styles.navButton}
          >
            끝
          </button>
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={closeModal} style={styles.closeButton}>
            닫기
          </button>
          <button onClick={onComplete} style={styles.completeButton}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "500px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1001,
  },
  title: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  convertSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  convertLabel: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  convertButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  textArea: {
    marginTop: "15px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    height: "150px",
    resize: "none",
    boxSizing: "border-box",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  navButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  pageInfo: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  closeButton: {
    backgroundColor: "#6c757d", // 중립적인 회색
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    width: "48%",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "#5a6268", // 호버 시 조금 어두운 회색
    },
  },
  completeButton: {
    backgroundColor: "#0056b3", // 진한 파란색
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    width: "48%",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "#004494", // 호버 시 더 진한 파란색
    },
  },
  navButton: {
    backgroundColor: "#66b2ff", // 연한 파란색
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "#3399ff", // 호버 시 조금 더 진한 파란색
    },
  },
};

export default PersonalizationModal;
