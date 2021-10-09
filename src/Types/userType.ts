
export type userType = {
    userId: string;
    displayName: string;
    profilePic: string;
}


export type userProfileType = {
        userId: string,
        profilePic: string,
        displayName: string,
        friends: userType[]
        FriendsRequest: userType[]
        FriendsRequestSent: userType[]
}