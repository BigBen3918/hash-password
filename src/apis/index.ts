import { argon2_Hash, compare_argon2_Hash } from "./argon2";
import { bcrypt_Hash, compare_bcrypt_Hash } from "./bcrypt";

const RestApi = (router: any) => {
    // Hash APIs
    router.post("/argon2", argon2_Hash);
    router.post("/argon2-compare", compare_argon2_Hash);
    router.post("/bcrypt", bcrypt_Hash);
    router.post("/bcrypt-compare", compare_bcrypt_Hash);
};

export default RestApi;
