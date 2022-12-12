import { Request, Response } from "express";
import { scryptSync, randomBytes } from "crypto";
import setlog from "../../utils/setlog";

const scrypt_Hash = async (req: Request, res: Response) => {
    try {
        const { password }: RequestObject = req.body;

        const salt = randomBytes(16).toString("hex");
        const hash = scryptSync(password, salt, 64, { N: 1024 });
        const hashedPassword = `${hash.toString("hex")}.${salt}`;

        console.log("result: ", hashedPassword);

        res.json({
            hashedPass: hashedPassword,
        });
    } catch (err: any) {
        setlog("scrypt issue:", err.message);
    }
};

export { scrypt_Hash };
