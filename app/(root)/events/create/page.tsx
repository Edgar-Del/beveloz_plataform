import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server"

const CreateEvent = () => {
    const { userId } = auth();
    const user = userId as string;
   console.log(user)
    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center pt-5 md:py-10">
                <h3 className="wrapper h3-bold text-center sm:text-left">Criar Evento</h3>
            </section>
            <div className="wrapper my-8">
                <EventForm userId={user} type="Criar" />
            </div>
        </>
    )
}
export default CreateEvent