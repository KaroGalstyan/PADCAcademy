import api from "./apiPublic";

const refreshAccessToken = async (refreshToken: string) => {
	const res = await api.post("/auth/refresh-token", { refreshToken });
	return res.data;
};

export default refreshAccessToken;