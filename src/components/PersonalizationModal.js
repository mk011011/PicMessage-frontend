//텍스트 개인 맞춤화 모달창
// import React from 'react';

// const PersonalizationModal = ({ closeModal }) => {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>텍스트 개인 맞춤화</h2>
//         <form>
//           <label>주소록:</label>
//           <input type="text" placeholder="주소록 입력" />
//           <label>태그:</label>
//           <input type="text" placeholder="태그 입력" />
//           <label>특이사항:</label>
//           <input type="text" placeholder="특이사항 입력" />
//           <button>개인 맞춤화 말투</button>
//         </form>
//         <button onClick={closeModal}>닫기</button>
//       </div>
//     </div>
//   );
// };

// export default PersonalizationModal;



// import React from 'react';

// const PersonalizationModal = ({ closeModal }) => {
//   return (
//     <div style={styles.modalOverlay}> {/* 모달 배경 어둡게 */}
//       <div style={styles.modalContent}>
//         <h2>텍스트 개인 맞춤화</h2>
//         <form>
//           <label>주소록:</label>
//           <input type="text" placeholder="주소록 입력" />
//           <label>태그:</label>
//           <input type="text" placeholder="태그 입력" />
//           <label>특이사항:</label>
//           <input type="text" placeholder="특이사항 입력" />
//           <button>개인 맞춤화 말투</button>
//         </form>
//         <button onClick={closeModal}>닫기</button> {/* 모달 닫기 */}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   modalOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 어둡게
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000, // 모달이 최상위에 위치하게
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '8px',
//     width: '400px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // 그림자 효과
//     zIndex: 1001, // 모달 콘텐츠는 배경보다 위에
//   },
// };

// export default PersonalizationModal;


import React from 'react';

const PersonalizationModal = ({ closeModal }) => {
  return (
    <div style={styles.modalOverlay}> {/* 모달 배경 어둡게 */}
      <div style={styles.modalContent}>
        <h2 style={styles.title}>텍스트 개인 맞춤화</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label>주소록:</label>
            <input type="text" placeholder="주소록 입력" style={styles.inputField} />
          </div>
          <div style={styles.inputGroup}>
            <label>태그:</label>
            <input type="text" placeholder="태그 입력" style={styles.inputField} />
          </div>
          <div style={styles.inputGroup}>
            <label>사항:</label>
            <input type="text" placeholder="특이사항 입력" style={styles.inputField} />
          </div>
          <button type="button" style={styles.submitButton}>개인 맞춤화 말투</button>
        </form>
        <button onClick={closeModal} style={styles.closeButton}>닫기</button>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1001,
  },
  title: {
    marginBottom: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',  // 각 입력 필드 사이 간격
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  inputField: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '94%',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
  },
  closeButton: {
    backgroundColor: '#ccc',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
  },
};

export default PersonalizationModal;
