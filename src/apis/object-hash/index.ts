import { Request, Response } from "express";
import hash from "object-hash";
import setlog from "../../utils/setlog";

const objectHash_Hash = async (req: Request, res: Response) => {
    try {
        const { password }: RequestObject = req.body;
        const hashedPassword = hash(password, {
            algorithm: "md5",
            encoding: "base64",
        });

        console.log("result: ", hashedPassword);

        res.json({
            hashedPass: hashedPassword,
        });
    } catch (err: any) {
        setlog("objectHash issue:", err.message);
    }
};

const compare_objectHash_Hash = async (req: Request, res: Response) => {
    try {
        const { hashValue, password }: RequestObject = req.body;
        const hashedPassword = hash(password, {
            algorithm: "md5",
            encoding: "base64",
        });
        if (hashedPassword == hashValue) {
            res.json({
                result: "password matched",
            });
        } else {
            res.json({
                result: "password dismatched",
            });
        }
    } catch (err: any) {
        setlog("objectHash compare issue: ", err.message);
    }
};

export { objectHash_Hash, compare_objectHash_Hash };
