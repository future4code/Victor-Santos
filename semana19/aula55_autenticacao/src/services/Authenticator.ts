import { JwtPayload, sign, verify } from "jsonwebtoken";
import { authenticationData } from "../type";

export class Authenticator {
    public generatorToken(payload: authenticationData): string {
        const token: string = sign(
            {id: payload},
            String(process.env.JWT_KEY),
            {expiresIn: "10h"}
        );

        return token;
    };

    public getTokenData(token: string): authenticationData | null {
        try {
            const tokenData = verify(
                token,
                String(process.env.JWT_KEY)
            ) as authenticationData
            return {id: tokenData.id}
        } catch (error: any) {
            console.log(error)
            return null
        };
    };
};