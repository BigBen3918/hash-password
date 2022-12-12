import { request } from "./hash";

const RestApi = (router: any) => {
    // APIs
    router.post("/request", request);
};

export default RestApi;
