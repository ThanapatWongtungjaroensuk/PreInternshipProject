import React, {useState, useEffect} from 'react'

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');

    const [passwordVisibilityConfirm, setPasswordVisibilityConfirm] = useState(true);
    const [rightIconConfirm, setRightIconConfirm] = useState('eye');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };

    const handlePasswordVisibilityConfirm = () => {
      if (rightIconConfirm === 'eye') {
        setRightIconConfirm('eye-off');
        setPasswordVisibilityConfirm(!passwordVisibilityConfirm);
      } else if (rightIconConfirm === 'eye-off') {
        setRightIconConfirm('eye');
        setPasswordVisibilityConfirm(!passwordVisibilityConfirm);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility,
      passwordVisibilityConfirm,
      rightIconConfirm,
      handlePasswordVisibilityConfirm
    };
  };