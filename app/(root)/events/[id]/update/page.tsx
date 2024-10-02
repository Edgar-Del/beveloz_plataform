import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server"


const UpdateEvent = () => {
    const { userId } = auth();
    const user = userId as string;
    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center pt-5 md:py-10">
                <h3 className="wrapper h3-bold text-center sm:text-left">Actualizar Evento</h3>
            </section>
            <div className="wrapper my-8">
                <EventForm userId={user} type="Actualizar" />
            </div>
        </>
    )
}

export default UpdateEvent