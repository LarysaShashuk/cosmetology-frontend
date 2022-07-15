import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import ConfirmationWindow from '../confirmationWindow/ConfirmationWindow';

interface LogoutButtonProps {
  handleLogout: any;
}

export default function LogoutButton(props: LogoutButtonProps) {
  const [confirmationWindowIsOpen, setConfirmationWindowOpen] = useState(false);
  const { handleLogout } = props;

  let history = useHistory();



  return (
    <>
      <Button
        color="inherit"
        onClick={() => {
          setConfirmationWindowOpen(true);
        }}
      >
        Вийти
      </Button>
      {confirmationWindowIsOpen && (
        <ConfirmationWindow
          title="Ви впевнені, що хочете вийти з цього аккаунту?"
          deleteAction={() => {
            setConfirmationWindowOpen(false);
            handleLogout();
            history.push('/');
          }}
          cancelAction={() => {
            setConfirmationWindowOpen(false);
          }}
          deleteButton="Вийти" 
          cancelButton="Скасувати"
        />
      )}
    </>
  );
}
