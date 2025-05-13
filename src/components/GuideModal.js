import React from 'react';
import './GuideModal.css';

function GuideModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>안내원이 호출되었습니다.</p>
        <button onClick={onClose}>확인</button>
      </div>
    </div>
  );
}

export default GuideModal;