//메인 페이지
import React from 'react';
import ContactList from '../components/ContactList';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // 로고 이미지를 불러옵니다.

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            {/* 상단부: 로고, 제목, 설명 */}
            <div style={styles.topSection}>
                <img src={logo} alt="service-logo" style={styles.image} />
                <h1>문자 자동생성 서비스</h1>
                <p>문자, 이미지 자동생성 서비스를 활용하여 편리하게 메시지를 전송하세요.</p>
            </div>

            {/* 중간 섹션: 문자 자동생성, 이미지 자동생성 */}
            <div style={styles.row}>
                {/* 문자 자동생성 섹션 */}
                <div style={styles.section}>
                    <label style={styles.label}>메시지</label>
                    <textarea style={styles.textArea} placeholder="메시지를 입력하세요"></textarea>
                    <button style={styles.button} onClick={() => navigate('/message-generation')}>문자 자동생성</button>
                </div>

                {/* 이미지 자동생성 섹션 */}
                <div style={styles.section}>
                    <label style={styles.label}>이미지</label>
                    <div style={styles.imageBox}>이미지가 여기에 표시됩니다.</div>
                    <button style={styles.button} onClick={() => navigate('/image-generation')}>이미지 자동생성</button>
                </div>
            </div>

            {/* 주소록 */}
            <ContactList />

            {/* 하단부: 챗봇 사용하기, 전송하기 버튼 */}
            <div style={styles.container}>
                {/* "챗봇 사용하기" 버튼 */}
                <button style={styles.chatbotButton} onClick={() => navigate('/chatbot')}>챗봇 사용하기</button>

                {/* "전송하기" 버튼 */}
                <button style={styles.sendButton}>전송하기</button>
            </div>

            {/* <div style={styles.bottomSection}>
        <button  onClick={() => navigate('/chatbot')}>챗봇 사용하기</button>
        <button>전송하기</button>
      </div> */}
        </div>
    );
};

const styles = {
    container: {
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    topSection: {
        textAlign: 'center',
        marginBottom: '40px',
    },
    image: {
        width: '100px',
        height: '100px',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        marginBottom: '40px',
        gap: '20px',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        minWidth: '450px',
        boxSizing: 'border-box',
    },
    button: {
        backgroundColor: '#0086BF',
        color: 'white',
        border: 'none',
        padding: '15px 30px', // 버튼을 더 크게
        fontSize: '18px', // 버튼 글자 크기를 더 크게
        borderRadius: '8px', // 둥근 버튼
        cursor: 'pointer',
        marginTop: '20px', // 간격을 좀 더 줌
        width: '100%',
    },
    label: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        alignSelf: 'flex-start',
    },
    textArea: {
        width: '100%',
        height: '500px',
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        resize: 'vertical',
        marginBottom: '10px',
        boxSizing: 'border-box',
    },
    imageBox: {
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        textAlign: 'center',
        marginBottom: '10px',
        boxSizing: 'border-box',
    },
    // bottomSection: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     gap: '20px',
    //     marginTop: '200px', // 더 아래로 이동
    //     width: '100%',
    // },
    chatbotButton: {
        backgroundColor: '#76C7A3', // 녹색 배경
        color: 'white',
        border: 'none',
        padding: '20px 40px', // 더 큰 버튼
        fontSize: '20px', // 더 큰 글자 크기
        borderRadius: '10px', // 둥근 버튼
        cursor: 'pointer',
        marginTop: '20px',
      },
      sendButton: {
        backgroundColor: '#007BFF', // 파란색 배경
        color: 'white',
        border: 'none',
        padding: '15px 30px', // 중간 크기 버튼
        fontSize: '16px', // 글자 크기
        borderRadius: '8px', // 둥근 버튼
        cursor: 'pointer',
        marginTop: '20px',
      },
};

export default MainPage;
