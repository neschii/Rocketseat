import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary";


export function Transactions() { 
    return (
    <div>
        <Header />
        <Summary />

        <table>
            <tbody>
                <tr>
                <td width="50%"> Desenvolvimento</td>
                <td>R$2.000</td>
                <td>Venda</td>
                <td>09/07/24</td>
                </tr>

                <tr>
                <td width="50%"> Desenvolvimento</td>
                <td>R$2.000</td>
                <td>Venda</td>
                <td>09/07/24</td>
                </tr>


                <tr>
                <td width="50%"> Desenvolvimento</td>
                <td>R$2.000</td>
                <td>Venda</td>
                <td>09/07/24</td>
                </tr>
            </tbody>
        </table>
    </div>
)

}