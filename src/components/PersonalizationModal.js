import React, { useState } from "react";

const PersonalizationModal = ({ selectedContacts, closeModal, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [convertedText, setConvertedText] = useState("");

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
              <button type="button" style={styles.convertButton}>
                변환
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
