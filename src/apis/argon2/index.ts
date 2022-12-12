import { Request, Response } from "express";
import argon2 from "argon2";
import setlog from "../../utils/setlog";

const argon2_Hash = async (req: Request, res: Response) => {
    try {
        const { password }: RequestObject = req.body;
        let hashedPassword = await argon2.hash(password);

        console.log("result: ", hashedPassword);

        res.json({
            hashedPass: hashedPassword,
        });
    } catch (err: any) {
        setlog("argon2 issue:", err.message);
    }
};

const compare_argon2_Hash = async (req: Request, res: Response) => {
    try {
        const { hash, password }: RequestObject = req.body;
        let isMatch = await argon2.verify(hash, password);
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
        setlog("argon2 compare issue: ", err.message);
    }
};

export { argon2_Hash, compare_argon2_Hash };
