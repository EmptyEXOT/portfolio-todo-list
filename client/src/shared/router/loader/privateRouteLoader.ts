import {$api} from "@/shared/api/api";

export const privateRouteLoader = async () => {
    const res = await $api.post('/validate', {
        email: localStorage.getItem('email'),
        token: localStorage.getItem('token'),
    })
    return res.data
}