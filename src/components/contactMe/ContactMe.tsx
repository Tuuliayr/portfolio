import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactMe: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <Box
        component="form"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className="contact-me"
    >
        <div>
            Contact me
        </div>
        <div>
            <TextField required id="your-name" label="Your name" type="text" variant="filled" margin="normal" sx={{width: "50%"}} />
        </div>
        <div>
            <TextField required id="your-email" label="Your email" type="email" variant="filled" margin="normal" sx={{width: "50%"}}/>
        </div>
        <div>
            <TextField required id="your-subject" label="Subject" type="text" variant="filled" margin="normal" sx={{width: "50%"}}/>
        </div>
        <div>
            <TextField required fullWidth id="your-message" label="Message" variant="filled" multiline minRows={5} margin="normal" sx={{width: "50%"}}/>
        </div>
        <div>
            <Button variant="contained" onClick={handleSubmit}> Contact </Button>
        </div>
    </Box>
  );
};

export default ContactMe;