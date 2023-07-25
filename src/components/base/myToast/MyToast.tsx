import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyButton from '../myButton/MyButton';
  
const MyToast: React.FC = () => {
    return (
      <div>
        <MyButton
            submit
            variant="contained"
            label="buttons.submit"
            size="large"
        />
        <ToastContainer toastStyle={{backgroundColor: "whitesmoke"}}/>
      </div>
    );
}

export default MyToast;