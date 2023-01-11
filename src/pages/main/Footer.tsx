import s from "./Footer.css"
export const Footer = () => {
    return (
        <div>
            <div className={s.block}>
                <h1>Information</h1>
                <p>Contacts</p>
                <p>Email</p>
                <p>Address</p>
            </div>

            <div className={s.block}>
                <p align="text-top-right">

                    <h2>Branches</h2>
                    <p>
                        <a href="https://yandex.com/maps/org/liberti/135563346253/?ll=50.072633%2C53.096842&z=17">116km</a>
                    </p>
                    <p>Chernigovka</p>
                    <p>Borskoe</p>
                    <p>Krasnodonskaya</p>
                </p>
            </div>

        </div>
    )
}