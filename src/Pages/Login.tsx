import React from 'react';
import {
  Box,
  Button,
  Checkbox,

  FormControlLabel,
  Link,
  TextField,
  Typography,
  Paper,
  Avatar,

} from '@mui/material';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import type { LoginFormValues } from '../constant/formvalue.types';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../reducer/auth.slice';

const LoginHeader = () => {
  return (
    <Box
      display="flex"

    >
      <Avatar
        src="/logo.png" 
        alt="Free Shops Logo"
        sx={{ width: 64, height: 64, mr: 1 }}
      />

      <Box  >
        <Typography variant="h6" fontWeight={700}>
          Login to Account
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please enter your email and password to continue
        </Typography>
      </Box>
    </Box>
  );
};



const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues: LoginFormValues = {
  email: '',
  password: ''
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
const dispatch = useDispatch<any>();
  const handleSubmit =async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
 dispatch(loginUser({ ...values, navigate }));



    setSubmitting(false);
  };

  const formik = useFormik<LoginFormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(to right, #fff, #f0f0f0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} sx={{ p:3, width: 400, borderRadius: 3 }}>
        <LoginHeader/>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">Password</Typography>
            <Link href="#" variant="body2">
              Forget Password?
            </Link>
          </Box>

          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
          />

          <FormControlLabel
            control={
              <Checkbox
                id="remember"
                name="remember"
          
              />
            }
            label="Remember Password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: '#15AABF', textTransform: 'none' }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
