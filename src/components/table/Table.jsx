import React from 'react';
import s from './table.module.scss';

const TableRow = ({ icon, currency, description, period, profit, color }) => (
    <tr>
        <td>

                <img src={require(`../../assets/${icon}`)} alt={currency} width={73} height={73} draggable={false}/>

        </td>
        <td>
           <span> {currency}</span> <br />

            {description}
        </td>
        <td>{period}</td>
        <td>{profit}</td>
    </tr>
);

const Table = () => {
    return (
        <div className={s.table_container}>


        <table>
            <thead>
            <tr>
                <th></th>
                <th>Idea</th>
                <th>Period</th>
                <th>Profit</th>
            </tr>
            </thead>
            <tbody>
            <TableRow
                icon="dollar.png"
                currency="GOLD/USD"
                description="Discover Proven Strategies for Building Wealth"
                period="3 months"
                profit="up to 60%"

            />

            <TableRow
                icon="eu.png"
                currency="EUR/USD"
                description="Discover Proven Strategies for Building Wealth"
                period="3 months"
                profit="up to 60%"
            />

            <TableRow
                icon="gas.png"
                currency="Brent/USD"
                description="Discover Proven Strategies for Building Wealth"
                period="3 months"
                profit="up to 60%"

            />

            <TableRow
                icon="sp500.png"
                currency="Brent/USD"
                description="Discover Proven Strategies for Building Wealth"
                period="3 months"
                profit="up to 60%"

            />

            <TableRow
                icon="dax.png"
                currency="S&P 500"
                description="Discover Proven Strategies for Building Wealth"
                period="3 months"
                profit="up to 60%"

            />

            </tbody>
        </table>
        </div>
    );
};

export default Table;


// import React from 'react';
// import  s from './table.module.scss'
// const Table = () => {
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th></th>
//                 <th>Popular strategies</th>
//                 <th>Period</th>
//                 <th>Profit</th>
//             </tr>
//             </thead>
//             <tbody>
//             <tr>
//                 <td>
//                     <div className={s.green}>
//                         <img src={require('../../assets/dollar.png')}/>
//                     </div>
//                 </td>
//                 <td>GOLD/USD <br/> Discover Proven Strategies for Building Wealth</td>
//                 <td>3 months</td>
//                 <td>up to 60%</td>
//             </tr>
//
//
//             <tr>
//                 <td>
//                     <div>
//                         <img src={require('../../assets/eu.png')}/>
//                     </div>
//                 </td>
//                 <td>EUR/USD <br/> Discover Proven Strategies for Building Wealth</td>
//                 <td>3 months</td>
//                 <td>up to 60%</td>
//             </tr>
//
//             <tr>
//                 <td>
//                     <div className={s.orange}>
//                         <img src={require('../../assets/gas.png')}/>
//                     </div>
//                 </td>
//                 <td>Brent/USD <br/> Discover Proven Strategies for Building Wealth</td>
//                 <td>3 months</td>
//                 <td>up to 60%</td>
//             </tr>
//
//             <tr>
//                 <td>
//                     <div className={s.gray}>
//                         <img src={require('../../assets/gas.png')}/>
//                     </div>
//                 </td>
//                 <td>Brent/USD <br/> Discover Proven Strategies for Building Wealth</td>
//                 <td>3 months</td>
//                 <td>up to 60%</td>
//             </tr>
//
//             <tr>
//                 <td>
//                     <div className={s.gray}>
//                         <img src={require('../../assets/gas.png')}/>
//                     </div>
//                 </td>
//                 <td>S&P 500 <br/> Discover Proven Strategies for Building Wealth</td>
//                 <td>3 months</td>
//                 <td>up to 60%</td>
//             </tr>
//             {/* Add more rows as needed */}
//             </tbody>
//         </table>
//
//     );
// };
//
// export default Table;