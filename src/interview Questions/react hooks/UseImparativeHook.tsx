import { useRef } from 'react';
import Modal from './Modal';

function UseImparativeHook() {
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal();
  }

  console.log('parent rendered')

  return (
    <main className="App">
      <p>Parent Component</p>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </main>
  );
}

export default UseImparativeHook;


