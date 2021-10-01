import { Response, Request, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        msg: 'Hello, World'
    });
});

export default router;