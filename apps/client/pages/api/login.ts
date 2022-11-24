import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

const loginApiUrl = `${process.env.USER_SERVICE_HOST}/login`;

const handle = async (
    req: NextApiRequest,
    res: NextApiResponse
    ) => {
        try
        {
            const { data } = await axios.post(loginApiUrl, req.body);
            res.json(data);
            res.status(200).end();
        }
        catch
        {
            res.status(500);
            res.end();
        }
}

export default handle;