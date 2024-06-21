import { Stack } from '@mui/material';
import { Outlined } from '../InputField/inputfield.stories';
import { Primary } from '../erf_button/button.stories';

interface DialogProps {
  width?: string | number;
  height?: string | number;
  setTextValue: Function;
  userTextId: string;
  passTextId: string;
  loginButtonId: string;
  regButtonId: string;
  resetButtonId: string;
  onClick: Function;
}

export const LoginDialogue: React.FC<DialogProps> = ({
  width = '300px',
  height = '300px',
  setTextValue = Function,
  userTextId = '',
  passTextId = '',
  loginButtonId = '',
  regButtonId = '',
  resetButtonId = '',
  onClick = Function,
}) => {
  return (
    <Stack spacing={2} width={width} height={height}>
      <Outlined
        placeholder='UserName'
        variant='outlined'
        setValue={setTextValue}
        textId={userTextId}
      />
      <Outlined
        placeholder='Password'
        variant='password'
        setValue={setTextValue}
        textId={passTextId}
      />
      <Primary text={'Login'} variant='primary' onClick={onClick}  buttonId={loginButtonId}/>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Primary text={'Register'} variant='text' onClick={onClick} buttonId={regButtonId}/>
        <Primary
          text={'Reset Password'}
          variant='text'
          onClick={onClick}
          buttonId={resetButtonId}
        />
      </Stack>
    </Stack>
  );
};
