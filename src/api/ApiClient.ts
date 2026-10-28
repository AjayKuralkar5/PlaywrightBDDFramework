import { from } from "node:stream/iter";
import type {
    APIRequestContext,
    APIResponse
} from "@playwright/test"

export class  ApiClient{
    private readonly request: APIRequestContext;

    constructor(request:APIRequestContext)
    {
       this.request=request;
    }

        private logRequest(
        method: string,
        endpoint: string,
        body?: object
    ): void {

        console.log("\n======================================");
        console.log(`REQUEST METHOD : ${method}`);
        console.log(`ENDPOINT       : ${endpoint}`);

        if (body) {

            console.log(
                "REQUEST BODY   :",
                JSON.stringify(
                    body,
                    null,
                    2
                )
            );
        }

        console.log("======================================");
    }


    private async logResponse(
        response: APIResponse
    ): Promise<void> {

        console.log("--------------------------------------");
        console.log(
            `RESPONSE STATUS : ${response.status()}`
        );

        console.log(
            `RESPONSE URL    : ${response.url()}`
        );

        try {

            const responseBody =
                await response.json();

            console.log(
                "RESPONSE BODY  :",
                JSON.stringify(
                    responseBody,
                    null,
                    2
                )
            );

        } catch {

            const responseText =
                await response.text();

            console.log(
                "RESPONSE BODY  :",
                responseText
            );
        }

        console.log("--------------------------------------\n");
    }
    
     async get(
        endpoint: string
    ): Promise<APIResponse> {

        this.logRequest(
            "GET",
            endpoint
        );

        const response =
            await this.request.get(
                endpoint
            );

        await this.logResponse(
            response
        );

        return response;
    }


    async post(
        endpoint: string,
        body: object
    ): Promise<APIResponse> {

        this.logRequest(
            "POST",
            endpoint,
            body
        );

        const response =
            await this.request.post(
                endpoint,
                {
                    data: body
                }
            );

        await this.logResponse(
            response
        );

        return response;
    }


    async put(
        endpoint: string,
        body: object
    ): Promise<APIResponse> {

        this.logRequest(
            "PUT",
            endpoint,
            body
        );

        const response =
            await this.request.put(
                endpoint,
                {
                    data: body
                }
            );

        await this.logResponse(
            response
        );

        return response;
    }


    async patch(
        endpoint: string,
        body: object
    ): Promise<APIResponse> {

        this.logRequest(
            "PATCH",
            endpoint,
            body
        );

        const response =
            await this.request.patch(
                endpoint,
                {
                    data: body
                }
            );

        await this.logResponse(
            response
        );

        return response;
    }


    async delete(
        endpoint: string
    ): Promise<APIResponse> {

        this.logRequest(
            "DELETE",
            endpoint
        );

        const response =
            await this.request.delete(
                endpoint
            );

        await this.logResponse(
            response
        );

        return response;
    }
}

//     async get(endpoint:string):Promise<APIResponse>{
//         return await this.request.get(endpoint);
//     }

//     async post(endpoint:string,body:object):Promise<APIResponse>{
//         return await this.request.post(endpoint,
//             {
//                 data:body

//             }

//         );
//     }

//     async put(endpoint:string,body:object):Promise<APIResponse>{
//         return await this.request.put(endpoint,
//            {
//             data:body
//            } 
//         );
//     }

//     async patch(endpoint:string,body:object):Promise<APIResponse>{
//         return await this.request.patch(endpoint,
//             {
//                 data:body
//             }
//         );
//     }

//     async delete(endpoint:string):Promise<APIResponse>{
//         return await this.request.delete(endpoint);
//     }

// }