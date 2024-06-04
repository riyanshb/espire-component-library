import { Stack } from "@mui/material";
import { Outlined } from "../InputField/inputfield.stories";
import { Primary } from "../erf_button/button.stories";
import { useRef } from "react";

interface DialogProps {
    width?: string | number;
    height?: string | number;
    userRef: typeof useRef;
    passwordRef: typeof useRef;
    onLoginClick: Function;
    onRegisterClock: Function;
    onFPassClick:Function;
  }

 export const LoginDialogue: React.FC<DialogProps> = ({
    width = '300px',
    height = '300px',
    userRef = useRef(),
    passwordRef =  useRef(),
    onLoginClick= Function,
    onRegisterClock= Function,
    onFPassClick=Function,
  }) => {
    return (
        <Stack spacing={2} width={width} height={height}>
              <Outlined placeholder = 'UserName' variant = 'outlined' inputRef = {userRef}/>
              <Outlined  placeholder = 'Password'  variant = 'password' inputRef = {passwordRef}/>
               <Primary text={"Login"} variant="primary" onClick={onLoginClick}/>
               <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}> 
               <Primary text={"Register"} variant="text" onClick={onRegisterClock}/>
               <Primary text={"Reset Password"} variant="text" onClick={onFPassClick}/>
               </Stack>
          </Stack>
      );
    
  }

        