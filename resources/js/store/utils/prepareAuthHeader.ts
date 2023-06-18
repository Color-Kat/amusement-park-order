import {RootState} from "@/store";

export const prepareAuthHeader = (headers: any, { getState, endpoint }: any) => {
    const token = (getState() as RootState).auth.token;

    if (token && endpoint !== 'refresh')
        headers.set('Authorization', `Bearer ${token}`)

    return headers;
}