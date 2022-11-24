import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

const userServiceUrl = `${process.env.USER_SERVICE_HOST}/allUser`;

const handle = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try{
        switch(req.method){
            case 'GET':
                const { data } = await axios.get(userServiceUrl);
                res.json(data);
                res.end();
                break;
        }
    } catch(e) {
        res.status(500).end();
        throw e;
    }
    res.status(200).end();
}

export default handle;