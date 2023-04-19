import Email from "./Email";
import {Container} from './newsletter_style'

function Newsletter(){
    return <>
        <Container>
            <h1>Newsletter</h1>
            <p>Inscreva-se na nossa newsletter para ficar por dentro de todas  as <br/> novidades, lançamentos, drops e dicas do Chronus Sports</p>
            <Email/>
        </Container>
    </>
}

export default Newsletter;