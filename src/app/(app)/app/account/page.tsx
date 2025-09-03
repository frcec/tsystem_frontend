import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import SignOutBtn from "@/components/sign-out-btn";

export default async function Page() {
    return (
        <main>
            <H1 className="my-8">Your account</H1>
            <ContentBlock className="h-[500px] flex flex-col justify-center items-center gap-3">
                <p>Logged in as</p>
                <SignOutBtn />
            </ContentBlock>
        </main>
    );
}
