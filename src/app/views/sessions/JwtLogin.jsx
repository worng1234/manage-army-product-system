import { LoadingButton } from '@mui/lab';
import { Card, Grid, TextField, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import useAuth from 'app/hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

const JwtLogin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  //! ** Value Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [textEmail, setTextEmail] = useState('');
  const [textPassword, setTextPassword] = useState('');

  const { login } = useAuth();

  const onSubmitLogin = async () => {
    let check = 0;

    if (email === '') {
      setErrorEmail(true);
      setTextEmail('กรุณากรอกอีเมล์');
      check++;
    }

    if (password === '') {
      setErrorPassword(true);
      setTextPassword('กรุณากรอกรหัสผ่าน');
      check++;
    }

    if (check === 0) {
      const checkEmail = email.split('@');

      if (checkEmail[1] !== 'Rtaf.mi.th') {
        setErrorEmail(true);
        setTextEmail('กรุณากรอกอีเมล์ให้ถูกต้อง');
      } else {
        setLoading(true);
        try {
          await login();
          navigate('/');
        } catch (e) {
          setLoading(false);
        }
      }
    }
  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img src="/assets/images/illustrations/dreamer.svg" width="100%" alt="" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Typography variant="h6" sx={{ ml: 4 }}>
              เข้าสู่ระบบ
            </Typography>
            <ContentBox>
              <form>
                <TextField
                  fullWidth
                  size="small"
                  type="email"
                  name="email"
                  label="อีเมล์"
                  placeholder="example@Rtaf.mi.th"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={textEmail}
                  error={errorEmail}
                  sx={{ mb: 3 }}
                />

                <TextField
                  fullWidth
                  size="small"
                  name="password"
                  type="password"
                  label="รหัสผ่าน"
                  placeholder="123456"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  helperText={textPassword}
                  error={errorPassword}
                  sx={{ mb: 1.5 }}
                />

                <LoadingButton
                  type="submit"
                  color="primary"
                  loading={loading}
                  variant="contained"
                  sx={{ my: 2 }}
                  onClick={() => {
                    onSubmitLogin();
                  }}
                >
                  เข้าสู่ระบบ
                </LoadingButton>
              </form>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;
