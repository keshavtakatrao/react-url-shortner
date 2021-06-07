import React,{useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import {useHistory,Link} from 'react-router-dom';
import Navbar from './navbar';


function SignUp(){
  let history = useHistory();
  if(window.localStorage.getItem('curr_user')){
    history.push('/home');
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  let [firstName,setFirstName] = useState('');
  let [lastName,setLastName] =useState('');
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

  let handelSignUp=async()=>{
    let data = {
        firstName,
        lastName,
        email,
        password
    }

    await axios.post('https://urlshortzen.herokuapp.com/register', data)
        .then((response) => {
            if (response.data.message == 'user registered') {
                alert("User Registered")
                history.push('/');
            }
            else {
                alert('Error')
            }
        })
    
  }

  return(
    <>
    <Navbar></Navbar>
    <Container component="main" maxWidth="xs" className='signIn'>
      <center><i class="fas fa-user fa-3x"></i>
      </center>
      <h2><center>Sign UP</center></h2>
      <form className={classes.form} onSubmit={(e)=>{
        e.preventDefault();
        handelSignUp();
      }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fname"
            label="First Name"
            autoComplete="first name"
            autoFocus
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            autoComplete="email"
            autoFocus
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <p className="forgot-password text-right">
                Already registered <Link to={'/'}> log in?</Link>
            </p>
      </form>    
    </Container>
    </>
  )
}

export default SignUp