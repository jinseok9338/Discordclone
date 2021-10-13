export type userType = {
  userId: string;
  displayName: string;
  profilePic: string;
};

export type userProfileType = {
  email: string;
  userId: string;
  profilePic: string;
  displayName: string;
  friends: userType[];
  FriendsRequest: userType[];
  FriendsRequestSent: userType[];
  chatRooms: string[]; // Has chat room Id...
};
