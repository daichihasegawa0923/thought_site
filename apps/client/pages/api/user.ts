import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

const userServiceUrl = `${process.env.USER_SERVICE_HOST}/user`;

const handle = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try{
        switch(req.method){
            case 'GET':
            break;
            case 'POST':
              const { status } = await axios.post(userServiceUrl, req.body);
              res.status(status).end();
              break;
        }
    } catch(e) {
        res.status(500).end();
        throw e;
    }
    res.status(200).end();
}

export default handle;