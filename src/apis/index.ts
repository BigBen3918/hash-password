import { argon2_Hash, compare_argon2_Hash } from "./argon2/argon2";

const RestApi = (router: any) => {
    // APIs
    router.post("/argon2", argon2_Hash);
    router.post("/argon2-compare", compare_argon2_Hash);
};

export default RestApi;
