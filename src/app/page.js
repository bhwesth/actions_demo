import { cookies } from "next/headers";
import Form from "./components/Form";

export default function Home() {
    async function storeToken(token) {
        "use server";
        console.log(token);
        cookies().set({
            name: "token",
            value: token,
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
    }

    async function submit(formData) {
        "use server";
        console.log(formData);
        try {
            // Først fetch, og få token
            // const response = await http.post(`/auth/login`, formData);

            // Kalder her storeToken bare med input value
            await storeToken(formData.get("login"));
            // I stedet ville man selvfølgelig bruge den token man får fra fetch response
        } catch (error) {
            console.error("error logging in", error);
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Form submit={submit} />
        </main>
    );
}
