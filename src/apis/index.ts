import { argon2_Hash, compare_argon2_Hash } from "./argon2";
import { bcrypt_Hash, compare_bcrypt_Hash } from "./bcrypt";
import { objectHash_Hash, compare_objectHash_Hash } from "./object-hash";
import { scrypt_Hash } from "./scrypt";
import { sha512_Hash } from "./sha512";

const RestApi = (router: any) => {
    // Hash APIs
    router.post("/argon2", argon2_Hash);
    router.post("/argon2-compare", compare_argon2_Hash);
    router.post("/bcrypt", bcrypt_Hash);
    router.post("/bcrypt-compare", compare_bcrypt_Hash);
    router.post("/object-hash", objectHash_Hash);
    router.post("/object-hash-compare", compare_objectHash_Hash);
    router.post("/scrypt", scrypt_Hash);
    router.post("/sha512", sha512_Hash);
};

export default RestApi;
