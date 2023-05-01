import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators'

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if(req.session?.loggedIn) {
    next();
    return ;
  }

  res.status(403);
  res.send('Access Denied!');
}

@controller('')
class RootController {

  @get('/')
  getRoot (req: Request, res: Response) {
    if(req.session?.loggedIn) {
      res.send(`
      <div>
        <div>You are Logged In</div>
        <a href="/auth/logout">Logout</a>
      </div>
      `)
    } else {
      res.send(`
      <div>
        <div>You are NOT Logged In</div>
        <a href="/auth/login">LogIN</a>
      </div>
      `)
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected (req: Request, res: Response)  {
    res.send('Welcome to Protected Route, Logged in User!');
  }

}