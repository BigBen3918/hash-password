import { Request, Response } from "express";
import { createHmac, randomBytes } from "crypto";
import setlog from "../../utils/setlog";

const sha512_Hash = async (req: Request, res: Response) => {
    try {
        const { password }: RequestObject = req.body;

        const salt = randomBytes(16).toString("hex");
        const hashedPassword = createHmac("sha512", salt)
            .update(password)
            .digest("hex");

        console.log("result: ", hashedPassword);

        res.json({
            hashedPass: hashedPassword,
        });
    } catch (err: any) {
        setlog("sha512 issue:", err.message);
    }
};

export { sha512_Hash };
