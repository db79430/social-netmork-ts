import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "49f475c9-2a21-49fa-a277-03897f2fb9de"
    }


})


export const requestUsers = (currentPage: number, pageSize: number) => {
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
    },
    login(email: string, password:string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe}).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`/auth/login`).then(response => {
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
    getProfile(userId: number){
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }

}


export const loginForm = {
    getLogin(userId: number) {
        return instance.post('/auth/login/' + userId).then(response => {
            return response.data
        })
    }
}




function me() {
    throw new Error("Function not implemented.");
}

