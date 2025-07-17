import { useRouter } from "next/router";

export default function PostsJulia2() {
    const res = useRouter();

    return(
        <h1>esse é o Post: {res.query.julia}</h1>
    );
}