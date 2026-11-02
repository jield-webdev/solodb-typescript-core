import axios from "axios";
import {User} from "../interfaces/user";

export default async function getMe() {
    const response = await axios.get<User>("me");
    const {data} = response;
    return data;
}
