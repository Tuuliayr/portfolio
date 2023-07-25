import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useTranslation } from 'react-i18next';
import MyButton from '../myButton/MyButton';
  
const MyToast: React.FC = () => {
    // const {t} = useTranslation();

    const notify = () => {
        toast.success("Message sent!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
      <div>
        <MyButton
            // submit
            onClick={notify}
            variant="contained"
            label="buttons.submit"
            size="large"
        />
        <ToastContainer toastStyle={{backgroundColor: "whitesmoke"}}/>
      </div>
    );
}

export default MyToast;