//이미지 자동생성 페이지
import React from 'react';

const ImageGeneration = () => {
  return (
    <div>
      <h2>이미지 자동생성 페이지</h2>
      <div style={styles.imageBox}>이미지가 여기에 표시됩니다.</div>
    </div>
  );
};

const styles = {
  imageBox: {
    width: '300px',
    height: '150px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    marginTop: '20px',
  },
};

export default ImageGeneration;
