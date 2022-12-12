import { Request, Response } from "express";
import bcrypt from "bcrypt";
import setlog from "../../utils/setlog";

const bcrypt_Hash = async (req: Request, res: Response) => {
    try {
        const { password }: RequestObject = req.body;
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log("result: ", hashedPassword);

        res.json({
            hashedPass: hashedPassword,
        });
    } catch (err: any) {
        setlog("bcrypt issue:", err.message);
    }
};

const compare_bcrypt_Hash = async (req: Request, res: Response) => {
    try {
        const { hash, password }: RequestObject = req.body;
        let isMatch = await bcrypt.compare(password, hash);
        if (isMatch) {
            res.json({
                result: "password matched",
            });
        } else {
            res.json({
                result: "password dismatched",
            });
        }
    } catch (err: any) {
        setlog("bcrypt compare issue: ", err.message);
    }
};

export { bcrypt_Hash, compare_bcrypt_Hash };
