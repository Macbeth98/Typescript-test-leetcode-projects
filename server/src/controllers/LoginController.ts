import { NextFunction, Request, Response } from "express"
import { get, controller, use, post, bodyValidator } from './decorators';

@controller('/auth')
class LoginController {

  @get('/login')
  getLogin(req: Request, res: Response): void {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
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
  };

  @get('/logout')
  getLogout (req: Request, res: Response) {
    req.session = { loggedIn: false, loggedOut: true };
    res.redirect('/');
  }

}