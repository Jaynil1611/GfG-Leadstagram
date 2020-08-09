import Axios from "axios";

export const AuthenticateUser = cred => Axios.post("/api/users/login", cred);

export const LogoutUser = () => Axios.post("/api/users/logout");
