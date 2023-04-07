import s from './Components.css'

export const Footer = () => {
    return (
        <div className="footerBlock">
            <div className="footerBlock1">
                <h1>Information</h1>
                <p>Contacts</p>
                <p>Email</p>
                <p>Address</p>
            </div>

            <div className="footerBlock1">
                <h1>Branches</h1>
                    <p>
                        <a href="https://yandex.com/maps/org/liberti/135563346253/?ll=50.072633%2C53.096842&z=17">116km</a>
                    </p>
                    <p>
                        <a href="https://yandex.ru/maps/?from=mapframe&ll=50.852321%2C52.098057&mode=usermaps&source=mapframe&um=constructor%3A8e7c762a8e3707a88b4f02b3a1e01cc654a78f3cdfc92d0e31938daf29a8875d&utm_source=mapframe&z=16">
                            Chernigovka
                        </a></p>
                    <p><a href="https://yandex.com/maps/11131/samara-oblast/house/ulitsa_stepana_razina_159/YUgYcQVlS0wGQFtpfXxyd3VkYQ==/?ll=51.725290%2C53.036975&z=17">
                        Borskoe
                    </a></p>
            </div>
        <div className={s.FooterBlock2}></div>
        </div>
    )
}