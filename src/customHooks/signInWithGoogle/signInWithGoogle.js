const auth = getAuth(app);
const [user, setUser] = useState('');
const [email, setEmail] = useState('');

const handleGoogleSignIn = () =>{
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
  .then((result) =>{
    const user = result.user;
    setUser(user.displayName);
    setEmail(user.email);
    console.log(user.displayName, user.email);
  })
}