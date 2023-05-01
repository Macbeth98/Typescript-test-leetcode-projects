import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router();


function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if(req.session?.loggedIn) {
    next();
    return ;
  }

  res.status(403);
  res.send('Access Denied!');
}


router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" type="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if(!email) return res.send('the email is not given!');

  if(!password) return res.send('The password given is not valid!');

  if(email === 'abc@abc.com' && password === 'password'){
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    return res.send('Invalid email or password!');
  }

  return ;
});


router.get('/', (req, res) => {
  if(req.session?.loggedIn) {
    res.send(`
    <div>
      <div>You are Logged In</div>
      <a href="/logout">Logout</a>
    </div>
    `)
  } else {
    res.send(`
    <div>
      <div>You are NOT Logged In</div>
      <a href="/login">LogIN</a>
    </div>
    `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = { loggedIn: false, loggedOut: true };
  res.redirect('/');
})


router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to Protected Route, Logged in User!');
})


export { router };