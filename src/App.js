import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Header 컴포넌트 불러오기
import MainPage from './pages/MainPage';
import MessageGeneration from './pages/MessageGeneration';
import ImageGeneration from './pages/ImageGeneration';
import ContactForm from './pages/ContactForm';
import ChatbotPage from './pages/ChatbotPage';

function App() {
  return (
    <Router>
      <Header /> {/* Header를 모든 페이지에 고정 */}
      <div style={{ marginTop: '60px' }}> {/* 고정된 헤더 공간 확보를 위한 여백 추가 */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/message-generation" element={<MessageGeneration />} />
          <Route path="/image-generation" element={<ImageGeneration />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
