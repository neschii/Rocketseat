import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() { 
    return (
    <div>
        <Header />
        <Summary />
        <TransactionsContainer> 
         <TransactionsTable> 
  
            <tbody>
                <tr>
                <td width="50%">Pagamento</td>
                <td>
                <PriceHighlight variant="income"> 
                 + R$ 2.000
                </PriceHighlight> </td>
                <td>Transação</td>
                <td>09/07/24</td>
                </tr>

                <tr>
                <td width="50%"> SHEIN</td>
                <td>
                 <PriceHighlight variant="outcome"> 
                    - R$ 298,52
                </PriceHighlight></td>
                <td>Compra</td>
                <td>09/07/24</td>
                </tr>
            </tbody>
            </TransactionsTable>
        </TransactionsContainer>
        
    </div>
)

}