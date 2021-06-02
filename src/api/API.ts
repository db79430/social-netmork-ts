import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "6be90b71-9321-4f37-854a-3d6c89bbaa0b"
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
    return instance.get(`profile/`+ usersId).then(response => {
        return response.data
    })
}

export const authApi = {
    me() {
        return instance.get(`/auth/me`).then(response => {
            return response.data
        })
    }


}

export const profileApi = {
    getProfile(usersId: number){
        return instance.get(`profile/`+ usersId)
    },
    getStatus(usersId: number) {
        return instance.get(`profile/status/`+ usersId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
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


function me() {
    throw new Error("Function not implemented.");
}

