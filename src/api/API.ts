import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "49f475c9-2a21-49fa-a277-03897f2fb9de"
    }


})


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
        return response.data
    })
}


export const getUsers2 = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    })
}


export const getProfileUsers = (usersId: number) => {
    return profileApi.getProfile(usersId)
}

export const authApi = {
    me() {
        return instance.get(`/auth/me`).then(response => {
            return response.data
        })
    }


}
export const getFollowUsers = (userId: number) => {
    return instance.post(`follow/{userId}`, {}).then(response => {
        return response.data
    })
}

export const getUnFollowUsers = (userId: number) => {
    return instance.delete(`follow/{userId}`).then(response => {
        return response.data
    })

}

export const profileApi = {
    getProfile(usersId: number){
        return instance.get(`profile/`+ usersId)
    },
    getStatus(usersId: number) {
        return instance.get(`profile/status/`+ usersId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }

}




function me() {
    throw new Error("Function not implemented.");
}

